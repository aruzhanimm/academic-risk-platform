# ADR-003: Explicit HTTP API and Result States

**Status:** Proposed. **Related comparison:** TECH-D3 in the [technology comparison](../05_technology_comparison.md).

## Context

The initial screens need a small number of operations with predictable data shapes. A missing model, insufficient information, and a failed operation are different situations. Treating any of them as a zero score would misrepresent the research and confuse the student.

## Decision

Use a REST-style HTTP API with JSON payloads and an OpenAPI description. The contract must specify field validation, ownership, pagination, errors, and result availability. The routes and exact schema remain to be designed; the rules below are proposed observable behaviour, not implemented endpoints.

| Operation | Required behaviour |
| --- | --- |
| Save an observation | Validate allowed fields and derive ownership on the server. Reject invalid input without an undocumented partial write. |
| Read history | Restrict records to the current user; define chronological ordering and pagination. Empty history is a successful empty result. |
| Request/view an estimate | Apply the eligibility rules below. Identify the input snapshot and model/target versions for any computed result. |
| Request export/deletion | Return a request identifier and its actual state. Acceptance does not claim completion. Define retry behaviour so a repeated request is not an accidental duplicate action. |

### Result availability rules

| Proposed state | Meaning | Numeric result and explanation |
| --- | --- | --- |
| `model_unavailable` | No suitable enabled model/configuration exists for the task. | No numeric score and no fabricated feature contributions; explain the unavailable state. |
| `insufficient_data` | A suitable enabled model exists, but the permitted input does not meet its eligibility rules. | No numeric score; identify missing or unusable inputs in understandable terms. |
| `available` | Eligibility checks passed and the configured model successfully computed a result. | Include the defined estimate, input/model references, and applicable limitations. Do not call it a probability unless that interpretation is supported by evaluation. |

Determine model availability before checking model-specific input sufficiency. Unexpected inference or explanation failures are handled as execution errors; they must not silently become `available`, zero risk, or `insufficient_data`. If prediction succeeds but explanation generation fails, the contract must expose explanation unavailability without fabricating contributions. Synthetic demonstrations must be explicitly labelled as synthetic.

Choose field-level and operation-level error formats, HTTP statuses, and retry rules during contract design. Raw stack traces, credentials, or another user's records must not be returned. Export completion and deletion completion each need a defined verification condition. HTTP method/status semantics follow [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html); [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) is the reviewed reference for describing the contract, not an assertion that an API file already exists.

## Alternatives and consequences

GraphQL supports client-selected fields and nested data. It remains a reasonable future alternative if several clients need different data combinations. It introduces schema/resolver work and controls for query depth, breadth, and complexity. [GraphQL security](https://graphql.org/learn/security/).

Fixed operations are easier to agree for the present small workflow, but can require multiple requests as screens evolve. An OpenAPI document alone cannot establish implementation conformance, authorisation, or safe behaviour; contract checks are still required.

## Validation needed

Use synthetic fixtures for empty history, invalid input, each availability state, forbidden access, estimation failure, explanation failure, and pending/completed data-control requests. Verify schema agreement in both directions and reject unsupported fields. Confirm that cached or stale results cannot be displayed for a changed input snapshot or a different user.

## Revisit triggers

Reconsider GraphQL after repeated real client needs demonstrate that fixed response shapes are a material obstacle. Revisit the result schema when the target, horizon, instrument, and evaluation protocol are agreed. No prediction endpoint should be treated as validated merely because its transport contract passes. Source documentation was checked on 23 October 2026.
