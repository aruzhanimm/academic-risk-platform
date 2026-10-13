# Research Search and Analysis Protocol

**Working draft for team review.** Original protocol: **21 October 2026**. English package prepared: **22 October 2026**.

## Research questions and evidence groups

1. **Measurement of student burnout and academic overload:** what is measured, in which population, and with what temporal data?
2. **Prediction of student risks:** what are the target, prediction time, and horizon, and how far can the findings transfer to this project?
3. **Validation and explainability:** how are leakage, student/time splits, calibration, and explanation limitations addressed?
4. **Engineering and access control:** which capabilities of relevant systems and technologies are documented?

Treat dropout, stress, academic performance, and burnout as distinct outcomes. Include foundational work when its role is explained. Prefer evidence from 2021–2026 for rapidly changing technical topics. The evidence target is **at least 12 substantively used sources, including at least eight scientific publications**. Count preprints separately from the eight peer-reviewed publications.

## Search and selection

Record the actual date, platform, complete query, results examined, inclusion or exclusion rationale, and access limitations in the [search log](search_log.md). Proposed queries must not be presented as completed searches. Prefer publisher and conference pages, DOI records, and official full-text repositories. Verify authors, year, title, venue, and publication type; check linked corrections or retractions where indicated.

The following are **candidate queries**. They remain unexecuted unless their actual use is recorded in the search log:

- `student academic burnout measurement validation`
- `academic burnout longitudinal university students`
- `student burnout machine learning prediction validation`
- `machine learning data leakage evaluation`
- `SHAP dependent features explanation`
- `student academic risk dataset longitudinal`

Include work that addresses a specific project question. Exclude or use only with explicit limitations sources with unverified metadata, a mismatched target, an unclear split, or inaccessible substantive content. Report negative findings and population differences rather than concealing them.

## Reading and evidence extraction

Use the [paper-card template](templates/paper_card.md) to record the task, population, data, label, method, split, metrics, limitations, and applicability. Identify the sections actually read and the page or table supporting each material conclusion. An abstract can provide limited evidence, but cannot substantiate a claim that the experiment was read. Full HTML is a valid full-text format; explicitly note when no local PDF was retained.

For a lawfully accessible PDF retained locally, record its URL, access date, path under `papers_local/`, and SHA-256 hash. Local retention does not authorise publication on GitHub. Keep the bibliography, analysis, and retrieval instructions in the repository. Do not bypass a paywall or treat a download button as permission to redistribute a file.

## Synthesis and checking

Compare target definitions, populations, temporal structure, metrics, and splits rather than ranking incompatible accuracy values. For each proposed project decision, identify supporting sources and the limits of what they establish. Verify the minimum 12/8 source counts using unique, substantively used sources; do not count a preprint and its published article twice.

The [critical literature review](../docs/03_literature_review.md) brings together the comparative evidence and proposed decisions. The [bibliography](bibliography.md) records source metadata and reading locations.

## Separate dataset audit

Use the [dataset-audit template](templates/dataset_audit.md). Check the official owner and URL, contents, label construction, unit of analysis, timestamps and repeated observations, licence, access conditions, size, missingness, and relevance. If only metadata are available, do not claim empirical inspection of individual records. Avoid bulk downloading datasets before suitability and access conditions are established. Record each decision as **suitable / conditional / unsuitable / unknown**, with a rationale.
