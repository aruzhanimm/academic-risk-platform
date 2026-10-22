# Architecture Decision Records

These records expand the [technology comparison](../05_technology_comparison.md) into implementation constraints, trade-offs, and checks. **Proposed** means that a decision is available for review; it does not mean that it has been approved or implemented. No implementation checks listed here have been run.

| Record | Proposed decision | Main question before acceptance |
| --- | --- | --- |
| [ADR-001](001-python-backend.md) | FastAPI with an internal Python estimation adapter | Can the team implement ownership, validation, and bounded estimation without unnecessary service boundaries? |
| [ADR-002](002-relational-storage.md) | PostgreSQL for shared, versioned observation history | Can the schema preserve ownership, temporal provenance, and consistent data-control operations? |
| [ADR-003](003-http-api-contract.md) | REST/JSON with an explicit OpenAPI contract | Do frontend and backend agree on success, unavailability, field errors, and request completion? |
| [ADR-004](004-student-interface.md) | React for the student-facing interface | Can the proposed screens be implemented and understood with a small maintainable component set? |

The records share three research boundaries: no suitable longitudinal dataset or evaluated forecasting model has been established; burnout, overload, mood, and dropout are distinct outcomes; a missing result must never appear as zero risk. See the [literature review](../03_literature_review.md) and [dataset audit](../../research/dataset_audit.md).

An accepted decision should identify the actual review and rationale. Later changes should preserve the earlier reasoning and explain what evidence caused reconsideration. Authentication/session design, hosting, retention, and dependency versions require additional decisions for the initial implementation. Future institutional integrations require separate decisions before those capabilities are introduced.
