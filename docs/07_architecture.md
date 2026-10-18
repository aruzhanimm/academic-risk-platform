# 07. Proposed System Architecture

**Content: Draft. Team review: Pending. Prepared: 23 October 2026, Asia/Almaty.**

This conceptual design translates the [six functional and six non-functional requirements](06_requirements_specification.md) into boundaries, records, and observable behaviour. It follows the published [technology comparison](05_technology_comparison.md) and [proposed ADRs](adr/README.md); it does not describe an implemented application.

## Scope and diagrams

The proposed stack is **React → REST/JSON API described with OpenAPI → FastAPI → PostgreSQL**, with an internal estimation adapter. The initial service supports voluntary input, personal history, conditional estimation/explanation, and export/deletion requests. Institutional LMS integration, adviser accounts, medical records, and automatic sharing with university services are outside this scope.

- [System context](../diagrams/exports/system_context.svg): the student and the application boundary; future external services are not active integrations.
- [Use cases](../diagrams/exports/use_cases.svg): UC-01 input, UC-02 own history, UC-03 estimate/explanation, and UC-04 export/deletion request.
- [Components](../diagrams/exports/components.svg): frontend, backend modules, persistence, and the separate research/training boundary.
- [Diagram sources and reading guide](../diagrams/README.md): editable sources and export conventions.

These diagrams express the same proposed design as this document, not deployed infrastructure. The [dataset audit](../research/dataset_audit.md) has not confirmed a suitable longitudinal burnout dataset. Target, instrument, language, scoring, and horizon remain unresolved; 28 days is only a research candidate. Until a suitable evaluated configuration is enabled, the service returns `model_unavailable`.

## Components and responsibilities

| Component | Responsibility and boundary |
| --- | --- |
| React interface | Information and voluntary input; labelled validation; history; result and request states. Keep edited form values separate from saved revisions and estimates. Clear user-specific cached content on account change/sign-out. |
| API and access layer | Resolve authenticated identity; validate transport fields; enforce ownership for every operation, including list queries and downloads. Do not trust a supplied owner ID. |
| Observation/history module | Apply the agreed field dictionary, save transactions, preserve revisions, and paginate owner-filtered history. |
| Estimation module and internal adapter | Check model availability, create eligible input snapshots, check model-specific sufficiency, and execute bounded inference. Return explicit result states. |
| Explanation module | Explain only the actual computed result using its snapshot and model reference. Expose explanation failure separately; contributions do not establish causality. |
| Data-control module | Register requests, process their agreed scope, record completion/failure, and authorise export retrieval. Processing need not occur inside the submission request. |
| PostgreSQL and artifact storage | Preserve ownership, relationships, provenance, and request state. Export/model artifact location, protection, and expiry remain implementation choices. |
| Offline research/training | Audit permitted data, define outcomes/splits, train and evaluate candidates, and prepare manifests. No training is triggered by a student HTTP request. |

Initially, backend modules share one deployable application. A separate inference service requires evidence of incompatible dependencies, resource contention, or isolation needs. CPU-intensive inference is not made non-blocking merely by an asynchronous route. Execution limits, worker memory, and deployment sizing require implementation measurements under [ADR-001](adr/001-python-backend.md).

## Main flows

**UC-01 — input.** Show purpose, limitations, fields, and voluntary participation before submission. A refusal creates no observation. Authenticate the request, validate agreed types/ranges/periods and missingness, derive ownership, and save once in a transaction. Reject invalid submissions with field errors and no partial record. Retry/deduplication rules must prevent accidental duplicate writes.

**UC-02 — own history.** Authenticate, filter by owner on the server, and return dated records in a defined order with pagination. Empty history is a successful empty list. Direct record IDs undergo the same ownership check. Editing a local form must not relabel an earlier estimate as a result for the new values.

**UC-03 — estimate/explanation.** Authenticate and authorise the selected observation revision, then check model availability **before model-specific input sufficiency**. General API validation still precedes these checks. If no suitable enabled configuration exists, record `model_unavailable`. Otherwise fix `prediction_at`, assemble the permitted snapshot, and apply that configuration's eligibility rules. Insufficient input produces `insufficient_data`; successful inference produces `available`. Generate the explanation against the same snapshot. Inference failure returns an execution error; explanation failure preserves a valid prediction with a separate unavailable explanation and error indication. Never substitute fabricated contributions.

**UC-04 — export/deletion request.** Confirm the requested scope, authenticate, derive ownership, and register a request. Show its actual processing state. Completion requires the defined export artifact to be ready or the agreed deletion operation to have finished. Download requires both ownership and a completed, unexpired export. Deletion covers agreed related observations, revisions, snapshots, estimates, and artifacts; backup handling and residual request metadata need an explicit policy. Acceptance alone proves none of these operations completed.

## Conceptual data model

These are design entities, not database migrations or a commitment to collect every candidate feature.

| Entity | Key relationships and information |
| --- | --- |
| Account | Access principal and stable owner key; account/session lifecycle remains to be chosen. Identity is not a predictor. |
| Observation revision | Stable observation ID, revision ID, owner, schema version, values/missingness, observed interval, `recorded_at`, and availability provenance. Record the acknowledged notice version for personal observations, and consent version where applicable. Corrections create a revision rather than overwrite inputs already used. |
| Input snapshot | Owner, selected revision and source references, `prediction_at`, exact permitted inputs, availability times, and feature/transformation versions. Calendar inputs also retain announcement time, due time, and source version. |
| Estimate | Owner, observation revision, result state, and request/computation timestamps. Snapshot and manifest references are required for computed results and may be absent for uncomputed states. Computed results identify task, target, units, model/scoring versions, and horizon when forecasting. Explanation status is separate. Uncomputed results have no score. |
| Model manifest | Trusted artifact reference/checksum, compatibility and eligibility rules, preprocessing/schema versions, evaluated target and interpretation, applicable instrument/language/scoring, horizon for forecasting, and evaluation reference. Unknown values are not invented. |
| Data request | Owner, export/deletion type, agreed scope, submission time, actual processing state, and completion/error details. A completed export additionally references a protected artifact and its expiry. |

Every predictor must satisfy **`available_at <= prediction_at`**, using field/source-level provenance where availability differs. For manual input, server receipt establishes availability; reporting an earlier observed period does not backdate it. Future scheduled events are admissible only when already known. Later corrections cannot alter a historical snapshot. Instrument identifiers and versions apply where measurement instruments are used; custom workload inputs must not impersonate a validated scale.

Outcome measurements belong to a separate future research boundary, distinguishable from predictors. Their collection, participant linkage, instrument permissions, language suitability, and outcome window must be agreed first. The [feature register](../research/feature_operationalization.md) defines the research constraints. Historical snapshots remain subject to deletion/retention rules, not indefinite preservation.

## Proposed API and state semantics

These routes are conceptual; an executable OpenAPI document, concrete payloads, HTTP statuses, pagination, and retry rules remain to be specified under [ADR-003](adr/003-http-api-contract.md).

**Draft retry contract:** observation saves and data-request submissions carry an idempotency key scoped to the authenticated owner and operation, bound to the submitted content. Commit resource creation and the key mapping atomically. Repeating the same key/content returns the same identifier and current state without another write; changed content with that key is a conflict. A lost response must not cause a duplicate on retry. Define the key retention/replay window and estimation-request retry policy before implementation.

| Method and route | Proposed behaviour |
| --- | --- |
| `POST /observations` | Validate and save an owner-bound observation revision. |
| `GET /observations` | Paginated own history only. |
| `GET /observations/{id}` | Read an authorised observation with explicit revision context. |
| `POST /observations/{id}/estimates` | Resolve an authorised revision and request estimation; persist the resulting domain state when processing succeeds. |
| `GET /estimates/{id}` | Read an owned estimate, its input/version context, and explanation status. |
| `POST /data-requests` | Register an owned export/deletion request; do not claim completion. |
| `GET /data-requests/{id}` | Read the owner's actual request status. |
| `GET /data-requests/{id}/download` | Serve only an authorised, completed, unexpired export; a request ID alone grants no access. |

| Result state | Meaning | Permitted output |
| --- | --- | --- |
| `model_unavailable` | No suitable enabled configuration. | Reason; no score or feature contributions. |
| `insufficient_data` | A suitable configuration exists, but permitted inputs fail its eligibility rules. | Understandable missing/unusable-input information; no score. |
| `available` | Eligible inputs and successful inference. | Defined estimate, provenance, and interpretation limits; explanation only when successfully produced. |

Authentication, authorisation, validation, storage, inference timeout, and unexpected failures are operation errors, not additional scores or disguised `insufficient_data`. An explanation error does not erase a valid prediction or imply that an explanation exists. Return safe errors without stack traces, tokens, or raw answers; logs likewise omit answers and credentials. Do not call an output a probability without supporting evaluation. Synthetic fixtures are labelled and never presented as student findings.

## Access roles

| Actor | Proposed access |
| --- | --- |
| Unauthenticated visitor | Public purpose/limitations; no personal records or estimates. |
| Authenticated student | Create and access own records, estimates, data requests, and eligible exports; no other student's objects. |
| Restricted operator | Technical operation and approved configuration tasks; no routine student-answer browsing. Privileged access and audit rules require a separate design. |
| Researcher, adviser, or external institution | No automatic runtime access. Any future data transfer requires a separately agreed purpose, permission, and scope. |

Ownership checks cover related records and derived artifacts, not just the observation table. Optional RLS supplements application checks only after configuration and connection-pool verification; see [ADR-002](adr/002-relational-storage.md).

## Requirements traceability

| Requirements | Design responsibility | Planned acceptance evidence |
| --- | --- | --- |
| FR-001, FR-002; NFR-002, NFR-004 | UC-01, interface and validation | REQ-V01, REQ-V02, REQ-V10: refusal creates nothing; valid save once; readable errors and keyboard access. |
| FR-003; NFR-001, NFR-004 | UC-02, owner-filtered storage/API | REQ-V03, REQ-V04: chronological history; direct-ID and list attempts cannot cross owners. |
| FR-004, FR-005; NFR-003, NFR-006 | UC-03, snapshot/manifest and adapter | REQ-V05, REQ-V06, REQ-V09: three states; temporal provenance; separate inference/explanation failures. |
| FR-006; NFR-001, NFR-002 | UC-04, data-control module | REQ-V07, REQ-V08: owner-only requests/downloads; verified completion and retention scope before a personal-data pilot. |
| NFR-005, NFR-006 | Runtime and deployment | REQ-V11, REQ-V12: measure the specified workload; bounded execution, protected configuration, and safe errors. |

## Open decisions and risks

Before personal-data collection or deployment, resolve authentication/session protection, hosting/TLS, persistence/migrations, retention/backups, export storage/expiry, and request idempotency. Define correction endpoints if saved-record editing is added; none is specified above.

Before enabling inference, resolve the target, instrument/permissions, horizon, suitable data, evaluation, trusted artifact loading, resource limits, and explanation method. Snapshot references must prevent stale or cross-account results. The [research protocol](../research/RESEARCH_PROTOCOL.md) and [literature review](03_literature_review.md) constrain those decisions. Requirements and ADR acceptance, security checks, performance measurements, and user walkthroughs remain pending.
