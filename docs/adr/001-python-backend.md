# ADR-001: Python Backend and Estimation Boundary

**Status:** Proposed. **Related comparison:** TECH-D1 in the [technology comparison](../05_technology_comparison.md).

## Context

The initial workflow needs validated observations, owner-restricted history, and a result only when an appropriate model is available. Python is the working assumption for later model development. The [research review](../03_literature_review.md) does not establish a production model, target, or forecast horizon.

## Decision

Use FastAPI as the proposed backend framework. Keep request handling, validation, access checks, persistence, and estimation in separate internal modules within one deployable backend initially. The estimation adapter must expose availability independently of any particular algorithm, so the history workflow can operate before a model exists.

The server derives the observation owner from the authenticated identity. A client-supplied owner identifier must not grant access. Authorisation applies to single objects, lists, creation, export, and deletion. Authentication/session handling and the persistence/migration stack remain explicit prerequisites, not features assumed to be complete.

Training runs outside interactive requests. Before inference is enabled, choose an execution strategy that bounds duration and resource use. Calling a normal CPU-intensive utility from an `async def` handler does not automatically move it into a thread pool. Multiple worker processes may each load their own model copy; deployment sizing must account for this. [FastAPI concurrency](https://fastapi.tiangolo.com/async/), [deployment concepts](https://fastapi.tiangolo.com/deployment/concepts/).

## Alternatives and consequences

DRF also integrates with Python and offers Django's application ecosystem. It becomes preferable if account/admin requirements and demonstrated team proficiency justify that structure. Its object-permission API still requires explicit list filtering and creation checks. [DRF permissions](https://www.django-rest-framework.org/api-guide/permissions/).

NestJS is a viable TypeScript backend. A Python-only model would need a compatible process/service boundary, which adds a contract and deployment responsibility. Starting with one backend reduces the initial deployment surface but also couples web and inference resources; this is a trade-off to measure, not an assumption of unlimited capacity.

## Validation needed

- Reject invalid input before persistence and return identifiable field errors.
- Confirm that two test users cannot read, overwrite, export, or delete each other's records, including through list queries and supplied owner fields.
- Exercise available, insufficient-data, unavailable-model, and execution-failure paths with synthetic fixtures; none may invent a prediction or explanation.
- Measure inference and explanation duration, blocking, and memory use under the intended deployment before enabling a real model.

## Revisit triggers

Consider an independent inference process/service if incompatible dependencies, measured resource contention, scaling, or isolation requirements justify it. Reconsider the framework if a small implementation review establishes that Django substantially reduces the effort needed to implement and maintain account/admin functionality. Source documentation was checked on 23 October 2026; no benchmark or participant proficiency has been inferred from it.
