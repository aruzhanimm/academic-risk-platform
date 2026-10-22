# ADR-002: Relational Storage and Temporal Provenance

**Status:** Proposed. **Related comparison:** TECH-D2 in the [technology comparison](../05_technology_comparison.md).

## Context

The anticipated shared application links an account to observations, estimates, versions, and data-control requests. Research reproducibility requires knowing both what happened and what information was available at prediction time. Candidate fields and timing constraints are described in the [feature register](../../research/feature_operationalization.md).

## Decision

Use PostgreSQL for the proposed shared deployment. Express ownership and relationships through explicit keys and constraints. The following is a conceptual record model, not a migrated schema or a requirement to collect every candidate field.

| Record | Required design property |
| --- | --- |
| Observation | Owner; observed/event time; time the value became available to the system; schema version; explicit missingness. Corrections must preserve the prior version used by an estimate. |
| Estimate | Reference to the evaluated input snapshot, prediction time, model/schema versions, and availability state. A computed forecast also needs its target definition and horizon. |
| Outcome measurement | Kept distinguishable from predictors, with measurement time and instrument/language/scoring versions. Permission and validity must be established before collection. |
| Data-control request | Owner, request type, submission time, and actual processing state; completion is recorded only after the defined operation finishes. |

Historical evaluation may use only values known at prediction time: `available_at <= prediction_at`. An announced future deadline can be a predictor only if the announcement was already known. Later edits and later outcome measurements must not silently enter an earlier input snapshot. Snapshot records remain subject to the agreed retention/deletion policy; reproducibility is not a reason to retain personal data indefinitely.

Use foreign keys for relationships, and define missing-value rules separately from valid numeric ranges. PostgreSQL `CHECK` constraints alone do not reject `NULL`; required fields need an appropriate not-null constraint. [PostgreSQL constraints](https://www.postgresql.org/docs/current/ddl-constraints.html).

Server-side ownership checks are mandatory. Optional RLS provides an additional layer only after explicit configuration and verification with the real application role. Superusers, `BYPASSRLS` roles, and normally table owners bypass policies. A policy based on `current_user` cannot distinguish students if all requests share one database role. If per-user database context is introduced, its assignment and reset across pooled connections must be tested. [PostgreSQL row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).

## Alternatives and consequences

SQLite is a reasonable alternative for a local demonstration with controlled write concurrency. MongoDB supports flexible documents and validation; it should be reconsidered if confirmed access patterns favour document structures. Neither alternative removes ownership or versioning requirements.

PostgreSQL adds database provisioning, migrations, role management, and backup/restore work. Retention, deletion of related records, and handling of backups must be decided before personal data is collected. Keeping history consistent and deleting data reliably require explicit transactions and failure handling.

## Validation needed

- Test owner isolation for individual records, lists, exports, and deletes; test any RLS policy through the actual connection pool.
- Verify invalid/missing values, foreign-key violations, duplicate requests, and transaction rollback.
- Confirm that historical estimates retain the exact input versions used and cannot gain information added later.
- Verify the agreed deletion scope across observations, estimates, and derived snapshots; distinguish completed deletion from an accepted request and document backup handling.

## Revisit triggers

Prefer SQLite if the agreed product becomes an isolated local demonstration. Reassess the schema or database if real forms and access patterns establish a need for substantially different document structures. The source documentation was checked on 23 October 2026; no database has been deployed or tested by this decision record.
