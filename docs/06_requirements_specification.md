# 06. Requirements Specification

**Content status:** Draft. **Team review:** Pending. Prepared on **23 October 2026**.

These requirements describe the proposed student-facing prototype. They are derived from the [project overview](../README.md), [literature review](03_literature_review.md), [system comparison](04_existing_system_comparison.md), and [technology decisions](05_technology_comparison.md). They are not findings from completed student interviews or supervisor approval. Priorities describe implementation scope, not work already delivered for the first pre-defense.

## Scope, actors, and priorities

The primary actor is a student using their own observations and history. An authenticated identity is a prerequisite for private operations; account provisioning and session design must be agreed before a shared implementation is used. An operator manages deployment and approved model versions, with no routine application permission to browse student records. Infrastructure privileges require separate restriction and auditing.

**Must** requirements are necessary before the relevant capability is accepted. **Should** requirements are desirable targets that may be deferred with a recorded reason. Conditional requirements apply when their enabling condition is met; this does not permit a simulated capability to be presented as working.

The initial scope excludes institutional LMS/calendar integration, medical records, diagnostic decisions, an adviser workspace, automatic sharing with university services, and model training from live student submissions. A static prototype with labelled synthetic content may be reviewed before a backend or model is implemented.

## Functional requirements

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| **FR-001** | Explain the purpose, voluntary participation, collected fields, and limitations before saving an observation. | Must | The notice is available before the first submission and can be reopened. Declining or cancelling saves no new observation. The user is told whether a screen contains synthetic demonstration content. The version of an acknowledged notice is recorded when personal observations are saved. |
| **FR-002** | Validate and save an observation according to the agreed field dictionary. | Must | The server checks types, units, valid ranges, observation period, permitted missingness, and supported schema version. Invalid input returns identifiable field errors and creates no partial observation. Valid input creates one owned record and returns its identifier; replaying the same submission does not create an unintended duplicate. Owner identity is assigned by the server. |
| **FR-003** | Show the student's own chronological observation history. | Must | Three synthetic observations with different times appear in a defined order with dates, units, and missing values identified. Pagination does not omit or duplicate records in an unchanged dataset. Empty history has a clear empty state. Another user's record is inaccessible through both lists and direct identifiers. |
| **FR-004** | Present a computed estimate and an understandable explanation with its interpretation limits. | Must when a suitable evaluated model is enabled | The result identifies task type, outcome definition, input snapshot, computation time, model/schema versions, and value meaning/units. A forecast additionally identifies prediction time and horizon; a current assessment is not labelled as a forecast. Explanation availability is explicit. Feature contributions are not described as causes, and no result is presented as a diagnosis. |
| **FR-005** | Distinguish unavailable estimates, insufficient input, and execution errors. | Must | Without a suitable enabled model, return `model_unavailable`. Only after model availability is established, evaluate model-specific input sufficiency; an ineligible input returns `insufficient_data`. Both states have no numeric score and no invented contributions. Execution failures produce a separate safe error. A failed explanation is identified separately from a successfully computed estimate. |
| **FR-006** | Allow a student to request and track export or deletion of their own records. | Must before a personal-data pilot | The user sees the request scope before submission and receives an identifier and actual state. Duplicate submissions follow an agreed retry rule. Only the owner can view the request or download an export. `Completed` means the defined operation finished, not merely that it was accepted. Deletion scope, related snapshots/results, export expiry, and backup handling are agreed before collection. |

The [feature register](../research/feature_operationalization.md) contains candidates, not an approved mandatory questionnaire. Field ranges, missing-value rules, instrument language/scoring, and collection permissions must be resolved before the corresponding fields are enabled.

## Non-functional requirements

| ID | Requirement | Priority | Acceptance criteria and conditions |
| --- | --- | --- | --- |
| **NFR-001** | Enforce identity and ownership on the server. | Must | Anonymous private requests are rejected. Using two synthetic users, user B cannot read, create for, overwrite, estimate from, export, or delete user A's records, including through direct IDs, list filters, and supplied owner fields. Denials disclose no private record content. Client-side hiding is not accepted as enforcement. Any RLS policy is tested using the actual application role and connection pool. |
| **NFR-002** | Minimise collected data and define its lifecycle. | Must before a personal-data pilot | Every collected field has a documented purpose and retention rule. Account identifiers remain separate from research exports. No unneeded contacts, diagnoses, or free-text medical history are collected. Logs omit submitted answers, credentials, and tokens. Export/deletion procedures identify their scope and handling of derived records and backups. |
| **NFR-003** | Preserve temporal and computational provenance. | Must when estimates or experiments are enabled | Each computed estimate refers to the exact permitted input revision/snapshot and model/preprocessing/schema versions. Predictor availability satisfies `available_at <= prediction_at`; later corrections or outcomes cannot change a past snapshot. Instrument/language/scoring versions are recorded where used. Model evaluation also records dataset identity/version/hash, student/time split, environment, seed, and a declared numerical tolerance for reproduction. |
| **NFR-004** | Make core workflows understandable and accessible. | Must | Input, history, results, and request-status screens can be used by keyboard with visible focus, associated field labels, and textual errors. Key content remains usable at a 360 CSS-pixel viewport. State meaning does not depend on colour alone. Actual user understanding is checked separately through recorded walkthrough observations; no user-test result is assumed. |
| **NFR-005** | Measure interactive response time under declared conditions. | Should; provisional target | Proposed server-side target: p95 at most 2 seconds for observation saving and history retrieval, with 10 concurrent authenticated synthetic sessions and an initial dataset of 1,000 synthetic observations. For each operation type, measure 1,000 valid operations after 100 warm-up operations; record CPU/RAM, software versions, payload sizes, and timing boundary. Report p95 and failures separately for saving and history retrieval, with no unexpected server errors accepted. Record dataset growth during save measurements. Inference and export/deletion processing are measured separately. |
| **NFR-006** | Protect configuration and handle failures safely. | Must | Secrets and personal records are absent from source control and API errors. Network deployment uses HTTPS; session/token protections follow the chosen authentication design. The server accepts only configured model artifacts, never a client-provided executable path. Failed storage writes do not leave partial records. Retry and stale-result handling are defined, and user-specific client caches are cleared when the account changes or signs out. |

NFR-005 is a proposed acceptance target, not measured performance. It needs review against the intended deployment. There is no promised model accuracy: target, horizon, suitable data, and evaluation design remain open in the [dataset audit](../research/dataset_audit.md) and [ML validation review](../research/contributions/ml_validation_review.md).

## Core use cases

| Use case | Main flow | Alternate flow and postcondition |
| --- | --- | --- |
| **UC-01: Submit an observation** | Read the notice, enter agreed fields, submit, receive validation and the saved identifier. | Cancellation leaves storage unchanged. Invalid input stays editable with field errors. A failed response must not cause an unnoticed duplicate on retry. |
| **UC-02: View personal history** | Open history, view dated records, navigate pages, and open one record. | Empty history is explained. Another user's identifier yields a safe denial without exposing record content. |
| **UC-03: View an estimate and explanation** | Select an owned observation; establish model availability and input eligibility; display the computed result with provenance and limitations. | Show `model_unavailable`, `insufficient_data`, an execution error, or explanation unavailability as appropriate. None is represented as zero risk. |
| **UC-04: Manage personal records** | Choose export/deletion scope, confirm the request, and inspect its status. Download only an available owned export. | Pending/failed requests are distinct from completion. An expired export is unavailable. Deletion completes only after its agreed scope is processed. |

## Verification and traceability

The following are planned acceptance checks for a future implementation, using synthetic records unless an approved collection process permits otherwise. These identifiers are local specification references, not YouTrack tasks or completed test results.

| Check | Requirements / use case | Verification method and expected evidence |
| --- | --- | --- |
| **REQ-V01** | FR-001; UC-01 | Cancel before submission and inspect storage; reopen the notice and inspect its version. No new observation is stored on cancellation. |
| **REQ-V02** | FR-002; UC-01 | Exercise valid, malformed, out-of-range, missing, and unsupported-version inputs plus a replayed submission. Inspect errors and persisted rows. |
| **REQ-V03** | FR-003; UC-02 | Use empty history and at least three dated records, then paginate a fixed dataset. Verify ordering, labels, and completeness. |
| **REQ-V04** | NFR-001; UC-01–UC-04 | Run a two-user/anonymous access matrix over lists, direct IDs, estimate requests, data requests, and downloads; inspect safe denials. |
| **REQ-V05** | FR-004; UC-03 | Use a labelled synthetic estimator fixture to inspect result provenance, task type, value meaning, horizon, and explanation limits. This verifies presentation, not real-model validity. |
| **REQ-V06** | FR-005, NFR-006; UC-03 | Exercise model absence, insufficient inputs, inference failure, and explanation failure. Confirm states, absent scores where required, and no fabricated contributions. |
| **REQ-V07** | FR-006, NFR-002; UC-04 | Exercise pending, completed, failed, duplicate, and expired requests with both users; verify actual exported/deleted scope and related-data handling. |
| **REQ-V08** | NFR-002, NFR-006 | Inspect field/lifecycle definitions, research exports, logs, errors, and repository contents for unnecessary personal data or secrets. |
| **REQ-V09** | NFR-003; UC-03 | Correct an observation after a synthetic prediction and add a later outcome. Confirm the original input snapshot is unchanged and later information is excluded. Reproduce the estimate under its declared manifest. |
| **REQ-V10** | NFR-004; UC-01–UC-04 | Perform keyboard, focus, labels, textual-error, and narrow-viewport checks. Record actual walkthrough findings separately. |
| **REQ-V11** | NFR-005; UC-01–UC-02 | Run the declared synthetic workload and report p95 and failure counts separately for saving and history retrieval, plus workload and environment. No measurement has yet been performed. |
| **REQ-V12** | NFR-006; UC-01–UC-04 | Inject storage/network failures, repeat requests, switch accounts, and reject an unsupported artifact reference. Check partial-write prevention and stale/private cache handling. |

## Open decisions and change control

Before a personal-data pilot, resolve identity/session management, collection permission and notice, field dictionary, retention/deletion/backup behaviour, and hosting. Before enabling a model, resolve the independent outcome, instrument, horizon, training data, temporal/student separation, validation protocol, and permitted artifact manifest. History and explicitly synthetic demonstrations can be developed while those research decisions remain open.

New interview findings or supervisor feedback should identify the actual evidence, affected requirement IDs, rationale, and linked change. A requirement becomes accepted only after real review; a passing mock or prototype does not establish server security, predictive validity, or completed user evaluation.
