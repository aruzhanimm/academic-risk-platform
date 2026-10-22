# Candidate Dataset Audit

**Working draft for team review.** Source checks: **21 October 2026, Asia/Almaty**. The audit examines public descriptions, published schemas, and data-availability statements. **Individual-level data files were not downloaded or inspected.** All candidates have a **metadata-only** assessment; no model training, distribution analysis, duplicate count, or record-level quality check was performed.

**Conclusion from the limited search:** a suitable, accessible dataset for predicting future student burnout has **not been confirmed**. This conclusion concerns the candidates examined, not the existence of such data anywhere.

## DA-01 — Open University Learning Analytics Dataset (OULAD)

**Primary sources:** Kuzilek, J., Hlosta, M., & Zdrahal, Z. (2017). *Open University Learning Analytics dataset*. Scientific Data, 4, 170171. [Article/DOI](https://doi.org/10.1038/sdata.2017.171), Background & Summary and Data Records. Authors' archive: [figshare, version 1](https://doi.org/10.6084/m9.figshare.5081998.v1). Official dataset pages: [Open University](https://research.stem.open.ac.uk/ouanalyse/dataset/) and [UCI](https://archive.ics.uci.edu/dataset/349/open+university+learning+analytics+dataset).

| Audit item | Finding from published metadata |
| --- | --- |
| Provenance | Open University, United Kingdom; educational records from 2013–2014. |
| Reported size | Seven modules and 22 presentations; 32,593 rows in `studentInfo` and 10,655,280 rows in `studentVle`. These values come from the article, not an independent recount. |
| Unit of observation | Student × module-presentation, with more granular VLE events. Registration rows cannot automatically be treated as unique people. |
| Schema | CSV tables: `studentInfo`, `courses`, `studentRegistration`, `assessments`, `studentAssessment`, `studentVle`, and `vle`. Keys include `id_student`, `code_module`, `code_presentation`, `id_assessment`, and `id_site`. |
| Outcomes | `final_result`, assessment `score`, and `date_unregistration`; the described schema contains no burnout questionnaire. |
| Timing and repeated observations | Days relative to a module-presentation's start, with repeated VLE events and assessments. No repeated burnout measurements are described. |
| Licence and access | CC BY 4.0 is stated by UCI and figshare; public download links were visible. The dataset archive was not downloaded. |

**Suitability — project interpretation:** potentially useful as a separate benchmark for temporal analysis of academic outcomes, subject to a record-level audit. It does not establish overload or burnout. Relabelling `Withdrawal` or `Fail` as burnout would misrepresent the outcome. OULAD has not been selected as the training dataset for the project's target task.

**Checks required before any separate use:** exclude `final_result`, late `date_unregistration`, and future events from predictors. `date_submitted` records submission timing but does not establish when an assessment score became available. Check unique students, repeat registrations, and temporal boundaries rather than randomly splitting event rows. Click counts are not equivalent to study hours or perceived workload.

**Access note from 21 October:** the older `analyse.kmi.open.ac.uk/open_dataset` address redirected to the OU Analyse homepage. The current Dataset page, figshare archive page, and direct UCI address were accessible. A permissive licence does not require copying the archive into GitHub.

## DA-02 — BAT-S Study Data from Chile

**Source:** Carmona-Halty et al. (2024), [DOI: 10.3389/fpsyg.2024.1434412](https://doi.org/10.3389/fpsyg.2024.1434412). Full bibliographic details and assessment: [measurement review, M-01](contributions/measurement_review.md). *Locators: Methods → Sample/Instruments; Discussion; Statements → Data availability statement.*

| Audit item | Finding and limitation |
| --- | --- |
| Population | 461 Chilean undergraduate students in the final analytical sample. |
| Content | A 12-item BAT-S measure, study overload, and teacher support; variables are described in the article. |
| File schema | Column names, codebook, export format, and missing-value codes are **unverified** because raw data were not obtained. |
| Target | Current academic burnout measured by BAT-S; overload is measured separately. |
| Timing and repeated observations | Cross-sectional design; no future outcome or linked longitudinal panel is presented. |
| Access | The authors state that underlying data can be provided. The checked availability statement does not identify a public file archive. No request was sent to the authors. |
| Licence | A separate raw-data licence has not been established. The article's CC BY licence does not establish permission to use the underlying records or translate the instrument. |

**Suitability — project interpretation:** useful for examining operationalisation and, if data and permissions are obtained, potentially analysing concurrent associations. It is insufficient for future forecasting because repeated observations and a future outcome are not established. BAT-S items must not be treated as independent predictors of a score calculated from those same items. Local use requires a separate justification of language and measurement suitability.

## DA-03 — University of Helsinki Study Materials on OSF

**Source:** Salmela-Aro et al. (2022), [DOI: 10.1007/s10902-022-00518-1](https://doi.org/10.1007/s10902-022-00518-1). See [measurement review, M-03](contributions/measurement_review.md). The article links [OSF project 6d35r](https://osf.io/6d35r/) in Section 8, Data availability, and Code availability.

| Audit item | Finding and limitation |
| --- | --- |
| Population and reported size | University of Helsinki students: samples of 1,501, 1,526, and 1,685 in May 2020, December 2020, and April 2021, respectively (Section 6.1.1). |
| Content | Burnout and engagement, demands and resources related to remote study, and psychological needs (Section 7). |
| Target | Self-reported Study Burnout Inventory scores, not dropout or stress. |
| Timing and repeated observations | Three cross-sectional convenience samples; individual linkage across waves is not established (Section 12). |
| Access | The article points to OSF materials for reproducibility. The page did not provide a readable file listing during the check, and the metadata API could not be read. |
| Schema and licence | File and column names, participant keys, format, raw-data licence, and actual archive completeness are **unverified**. |

**Suitability — project interpretation:** a candidate for analysing contextual differences or reproducing the published analysis after inspecting the archive. It is not currently approved for model training. Even if files become accessible, their availability alone does not turn three cross-sectional samples into an individual panel. The access limitation observed during review does not prove that OSF is closed or that data are absent.

## Alignment with the Research Question

| Candidate | Temporal structure | Measured overload outcome | Burnout measure | Future burnout for the same student | Current decision |
| --- | --- | --- | --- | --- | --- |
| OULAD | Educational events and module-presentations. | Not in the described schema. | None. | None. | Consider only for a separate benchmark, if needed, after inspecting the records. |
| BAT-S Chile | One cross-sectional survey. | A separate measure in the study. | Yes, concurrent. | None. | Literature evidence; raw data and permissions remain unconfirmed. |
| Helsinki/OSF | Three cross-sectional samples. | Remote-study demands are not automatically equivalent to the project's overload outcome. | Yes, concurrent within each sample. | Not established. | Inspect the archive; do not describe it as an individual panel. |

This comparison reflects published articles and documentation, not inspection of dataset files. None of the candidates establishes model transferability to AITU students. Educational events, concurrent self-report, and a future outcome provide different kinds of evidence.

## Conditions for Accepting a Dataset

A further audit must take place **before training**, after access and processing conditions have been confirmed:

1. Record the source, version, licence or permission, acquisition method, and SHA-256 of any files actually obtained. Store only permitted materials in an appropriately controlled location; do not publish restricted data in the repository.
2. Inspect the actual schema and unit of each row. Count unique students, dates, intervals, repeated records, missing values, and attrition from the data themselves.
3. Establish the instrument, version, language, scoring rules, and recall period. Confirm that the outcome is not circularly reconstructed from the proposed independent predictors.
4. For forecasting, establish `student_id`, `prediction_at`, `available_at`, the future outcome date, and the horizon. Check whether each input was genuinely available at prediction time.
5. Justify the student/time split, any gap between observation windows, and the baseline. Fit preprocessing and tune models without test-set leakage.
6. If a suitable panel is unavailable, document the limitation and agree whether to collect repeated observations or investigate current-state assessment. Do not substitute an unrelated stress or dropout dataset merely to obtain model metrics.

The [feature and leakage register](feature_operationalization.md) details candidate inputs. Use the [dataset audit template](templates/dataset_audit.md) for the next assessment. Any subsequent record-level audit or experiment needs its own evidence and results; this metadata review is not an experimental result.
