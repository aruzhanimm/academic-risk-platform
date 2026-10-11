# Data Documentation

Use this directory for permitted dataset descriptions, field schemas, data dictionaries, and clearly labelled synthetic examples. No participant data is required to establish the repository structure.

For each field, document its meaning, type, units, allowed values, missing-value handling, source, and when it becomes available. For a research dataset, also record provenance, permission or licence, version, population, outcome definition, and intended use.

Keep these local directories out of Git:

| Directory | Purpose |
| --- | --- |
| `raw/` | Original dataset files, when access is permitted. |
| `private/` | Restricted participant material. |
| `interim/` | Intermediate processing output. |
| `processed/` | Derived datasets for authorised experiments. |

Create them only when needed. Pseudonymous records may still be identifiable; removing a name does not automatically make a dataset suitable for publication.

Do not commit raw survey responses, consent records, personal contacts, or private calendar links. Store only agreed de-identified summaries in the documentation, and review free-text excerpts before publication.

Agree on access, retention, and deletion before collecting participant information. Check permissions before distributing any external dataset. Ignore rules are an additional precaution: always inspect the staged files and their contents.
