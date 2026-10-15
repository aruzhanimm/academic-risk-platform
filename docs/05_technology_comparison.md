# 05. Technology Comparison

Official documentation checked: **23 October 2026, Asia/Almaty**. The choices below are proposed design decisions for the initial prototype.

## Scope and decision criteria

The proposed stack is **FastAPI, PostgreSQL, a REST-style HTTP API with JSON and OpenAPI, and React**. This comparison covers four engineering decisions, each with two or three alternatives. It selects a working direction for implementation; no application, deployed database, or performance benchmark is claimed.

The [project overview](../README.md), [literature review](03_literature_review.md), and [existing-system comparison](04_existing_system_comparison.md) support a narrow initial workflow: voluntary input, validation, the student's own history, and an understandable result when a suitable evaluated model is available. A missing model or insufficient input must remain visible without an invented score. Export and deletion requests need observable completion states.

The initial scope excludes institutional LMS integration, medical records, diagnostic claims, and a separate adviser account. The [dataset audit](../research/dataset_audit.md) has not established a suitable longitudinal burnout dataset. Technology selection therefore does not establish a target, forecast horizon, model, or permission to collect data.

All alternatives are considered against the same six criteria:

| Criterion | Application to this project |
| --- | --- |
| Workflow fit | Validated input, personal history, result availability, and data-control requests. |
| Research integration | Compatibility with a possible Python model adapter and explicit data/model versions. |
| Access and integrity | Server-side ownership checks, valid records, and consistent updates. |
| Contract and verification | Schemas and observable behaviour that can be checked without a trained model. |
| Delivery and operation | Number of deployable components, setup, migrations, and maintenance. |
| Adaptability | Cost of revising the interface, data fields, or model boundary after feedback. |

Official documentation establishes capabilities. Judgements about suitability and complexity are engineering inferences. Team proficiency, hosting cost, and performance have not been measured; no numerical ranking is used. Versions and dependency locks will be selected when implementation starts.

## TECH-D1: Backend framework

| Alternative | Workflow and research fit | Access, integrity, and contract | Delivery cost and limitation |
| --- | --- | --- | --- |
| **FastAPI / Python** | Typed request models and Pydantic validation suit structured observations. A Python model adapter can share the server runtime. [TECH-01] | Generates OpenAPI descriptions and provides dependency/security components. Record ownership must still be implemented for every operation. [TECH-01] | Persistence, migrations, and the account/session lifecycle require additional choices. Sharing a language does not make inference non-blocking or sufficiently fast. |
| **Django REST Framework / Python** | Serializers and Django integration suit account-centred CRUD; Python ML integration is also possible. [TECH-02] | Authentication and permission policies are available. Object permissions do not automatically filter list results or check object creation; these paths need explicit rules. [TECH-03] | The project adopts Django's structure and conventions. This is worthwhile if its account/admin ecosystem becomes a central requirement. |
| **NestJS / TypeScript** | Structured Node.js modules suit a TypeScript web team. Express and Fastify adapters are documented. [TECH-04] | Controllers and modules provide organisation; observation validation and owner checks still need design and tests. | A Python-only model would need a process/service boundary or another compatible execution strategy. This adds integration work unless a separate inference boundary is already required. |

**Proposed choice: FastAPI.** A small Python API and model adapter can initially live in one deployable backend, with separate internal modules for validation, ownership, storage, and estimation. This avoids assuming that a separate ML service is needed. Model training must remain outside interactive requests, and inference execution must be assessed for blocking and resource use.

**Trade-off and reconsideration:** DRF is a strong alternative if account administration dominates the product or the team demonstrates substantially greater proficiency with Django. NestJS becomes more attractive if an independently deployed model service is required and the team can maintain both environments. No framework automatically provides privacy or a complete authentication system for this application.

## TECH-D2: Data storage

The expected relationships are student account → observations → versioned estimates, plus data-control requests. The [feature register](../research/feature_operationalization.md) determines candidate fields; collecting every candidate field is not a requirement. Predictors and later outcomes must remain distinguishable.

| Alternative | Workflow and research fit | Access and integrity | Delivery cost and limitation |
| --- | --- | --- | --- |
| **PostgreSQL** | Relational records support ownership, observation history, and references to model/schema versions. | Primary/foreign keys, unique and check constraints, and configurable row security are documented. [TECH-05], [TECH-06] | Requires a database service, migrations, backup/restore procedures, and role configuration. Row-level security is optional and needs careful configuration. |
| **SQLite** | Embedded storage is suitable for a local demonstration and can support many small web workloads. [TECH-07] | Application access checks and schema constraints still apply. | Very low service-management overhead, but only one writer can operate at a time per database file. Suitability depends on write concurrency and deployment, not simply the number of users. [TECH-07] |
| **MongoDB** | Documents accommodate varied forms and nested records; embedding or references can model relationships. [TECH-08] | Flexible schemas can be combined with schema validation. Ownership and historical compatibility remain application responsibilities. [TECH-08] | The current linked entities do not establish a need for document-first storage. Evolving forms still require versioning, migration rules, and validation. |

**Proposed choice: PostgreSQL for a shared server deployment.** Explicit relationships and constraints match the anticipated history and versioning needs. A local, single-user demonstration may instead use SQLite if that becomes the agreed delivery target.

**Trade-off and reconsideration:** PostgreSQL adds operational work before that deployment is justified. MongoDB should be reconsidered if real requirements establish sufficiently different document shapes and access patterns. These are workload-based decisions, not claims that one database is universally superior.

The API must enforce ownership on single-record reads, lists, creates, exports, and deletions. PostgreSQL RLS can provide a second layer, but superusers, roles with `BYPASSRLS`, and normally table owners bypass policies. A shared database role does not identify individual students; per-user policies need a separately designed and tested identity context. [TECH-06]

## TECH-D3: Client-server API

| Alternative | Workflow and contract fit | Verification and access | Delivery cost and limitation |
| --- | --- | --- | --- |
| **REST-style HTTP + JSON + OpenAPI** | A small set of observations, history, results, and data-control requests fits explicit operations. HTTP defines method/status semantics; OpenAPI describes paths, inputs, responses, and schemas. [TECH-09], [TECH-10] | A documented contract can cover field errors, pagination, ownership failures, and unavailable results. Authentication and authorisation remain separate responsibilities. | Screen-specific data may require several requests. Error shapes, pagination, and schema evolution must be specified explicitly. |
| **GraphQL** | Clients select fields and nested data through typed queries. [TECH-11] | Authorisation remains necessary, alongside controls for expensive queries, depth, pagination, and complexity. [TECH-12] | Useful when multiple clients need substantially different data combinations. That need has not been established for the initial screens; schema/resolver and demand-control work would be additional. |

**Proposed choice: REST/JSON with OpenAPI.** The current operations and response shapes are small enough to define directly. OpenAPI supports a shared contract between backend and frontend; it does not establish that an API has been implemented or secured. Version 3.1.1 is the reference specification reviewed here, not a requirement to use that exact version or a claim that it is the latest release.

**Trade-off and reconsideration:** reconsider GraphQL if multiple real clients require substantially different combinations of related data and fixed endpoints become a demonstrated obstacle. Regardless of transport, unavailable estimates must have no numerical score, explanations must refer to a computed result, and accepting an export/deletion request must not imply its completion.

## TECH-D4: Frontend framework

| Alternative | Workflow and state fit | Verification and access | Delivery cost and limitation |
| --- | --- | --- | --- |
| **React** | Component composition, events, conditional rendering, and state support reusable forms, history, and result states. Controlled inputs and labels are documented. [TECH-13], [TECH-14] | Explicit loading, validation, empty, unavailable, and failure states can be exercised. Accessibility and owner-safe data handling require implementation and testing. | Build tooling, routing, and API access still need a minimal setup. Component reuse does not prove that the interface is understandable. |
| **Vue 3** | Reactive components and single-file components support the same input/history workflow, with progressive or SPA use. [TECH-15] | The same observable states and accessibility requirements apply. No client-side framework replaces server authorisation. | A full SPA likewise needs tooling, routing, and API integration. It is a viable alternative if the team maintains Vue more confidently. |

**Proposed choice: React as a working default.** Its state and component model fits the proposed screens. Vue also meets the present scope; the evidence does not establish React's superiority. The frontend choice should be confirmed with an actual form/history implementation review before a substantial component library is built.

**Trade-off and reconsideration:** prefer Vue if demonstrated team proficiency and a small implementation exercise make it easier to maintain. Global state libraries, server-side rendering, and generative AI are not required by the initial workflow. A static UX prototype can be reviewed before either framework is installed.

## Implementation validation plan

The tests below are planned for the corresponding implementation. They are not completed checks or measured results.

| Decision | Evidence needed before the implemented component is accepted |
| --- | --- |
| TECH-D1 | Choose authentication/session handling, persistence, and migrations; demonstrate validation, failed ownership checks, and unavailable-model handling. Inspect inference blocking before selecting its execution boundary. |
| TECH-D2 | Define observation and version relationships; test separate users, chronological history, temporal provenance, and transaction failures. Test any RLS policy with the actual application role and pooled connections. |
| TECH-D3 | Agree request/response schemas, pagination, field errors, and distinct unavailable-result states; verify backend/frontend agreement using synthetic fixtures. |
| TECH-D4 | Walk through input, validation, history, and missing-result screens; check labels, keyboard use, small screens, and explanations with prospective users. |

Authentication, hosting, retention/deletion behaviour, exact schema fields, and dependency versions remain open implementation decisions. No team or supervisor approval is implied by the proposed stack.

## Primary-source register

All sources below are official technical documentation, checked on **23 October 2026**. They support capability statements; they are not additional empirical burnout studies. TECH-03, TECH-06, and TECH-10 retain the identifiers used in the [research bibliography](../research/bibliography.md).

| ID | Source | Sections used |
| --- | --- | --- |
| TECH-01 | [FastAPI — Features](https://fastapi.tiangolo.com/features/) | OpenAPI, validation, dependency injection, and security/authentication features. |
| TECH-02 | [Django REST Framework](https://www.django-rest-framework.org/) | Introduction and feature list: serialization, authentication, and browsable API. |
| TECH-03 | [DRF — Permissions](https://www.django-rest-framework.org/api-guide/permissions/) | Object-level permissions and limitations; list/create checks. |
| TECH-04 | [NestJS — Introduction](https://docs.nestjs.com/) | Introduction and Philosophy: Node.js, TypeScript, Express/Fastify, and structure. |
| TECH-05 | [PostgreSQL — Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html) | Check, not-null, unique, primary-key, and foreign-key constraints. |
| TECH-06 | [PostgreSQL — Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) | Policy behaviour, default deny, table-owner and privileged-role exceptions. |
| TECH-07 | [SQLite — Appropriate Uses](https://www.sqlite.org/whentouse.html) | Websites, high concurrency, and the client/server database checklist. |
| TECH-08 | [MongoDB — Data Modeling](https://www.mongodb.com/docs/manual/data-modeling/) | Flexible data models, validation, and document relationships. |
| TECH-09 | [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) | Sections 9 and 15: methods and status-code semantics. |
| TECH-10 | [OpenAPI Specification 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) | Introduction and OpenAPI Description/Document definitions. |
| TECH-11 | [GraphQL — Queries](https://graphql.org/learn/queries/) | Fields, arguments, and nested selections. |
| TECH-12 | [GraphQL — Security](https://graphql.org/learn/security/) | Authentication/authorisation and demand controls, including depth and complexity. |
| TECH-13 | [React — Quick Start](https://react.dev/learn) | Components, conditional rendering, events, state, and shared data. |
| TECH-14 | [React — input](https://react.dev/reference/react-dom/components/input) | Labels and controlling an input with state. |
| TECH-15 | [Vue — Introduction](https://vuejs.org/guide/introduction.html) | What is Vue?, the progressive framework, and single-file components. |

[TECH-01]: https://fastapi.tiangolo.com/features/
[TECH-02]: https://www.django-rest-framework.org/
[TECH-03]: https://www.django-rest-framework.org/api-guide/permissions/
[TECH-04]: https://docs.nestjs.com/
[TECH-05]: https://www.postgresql.org/docs/current/ddl-constraints.html
[TECH-06]: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
[TECH-07]: https://www.sqlite.org/whentouse.html
[TECH-08]: https://www.mongodb.com/docs/manual/data-modeling/
[TECH-09]: https://www.rfc-editor.org/rfc/rfc9110.html
[TECH-10]: https://spec.openapis.org/oas/v3.1.1.html
[TECH-11]: https://graphql.org/learn/queries/
[TECH-12]: https://graphql.org/learn/security/
[TECH-13]: https://react.dev/learn
[TECH-14]: https://react.dev/reference/react-dom/components/input
[TECH-15]: https://vuejs.org/guide/introduction.html
