# Bibliography and evidence locations

This register supports the [critical literature review](../docs/03_literature_review.md). It contains **13 distinct sources: ten peer-reviewed publications and three official technical documents**. Preprints and published versions are not counted separately. The original source checks were recorded on 21 October 2026; this English package was prepared on 22 October 2026. Team review remains pending.

The two 2017 publications provide foundational methods and a dataset description. Gusy et al. and Aas et al. were published before the strict five-year window beginning on 21 October 2021; they are retained for specific methodological reasons. This is a targeted review, not a systematic review or a claim to cover all recent research.

## Measurement and temporal design

**M-01.** Carmona-Halty, M., Alarcón-Castillo, K., Semir-González, C., Sepúlveda-Páez, G., & Schaufeli, W. B. (2024). Burnout Assessment Tool for Students (BAT-S): evidence of validity in a Chilean sample of undergraduate university students. *Frontiers in Psychology, 15*, 1434412. [DOI](https://doi.org/10.3389/fpsyg.2024.1434412) · [Publisher full text](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1434412/full).

- Type: peer-reviewed Brief Research Report.
- Evidence locations: Methods → Sample/Instruments; Results → Internal structure, Table 2 (model M4), Reliability of the scores; Discussion limitations. Methods, Results, Discussion and Tables 1–3 were checked in the original review.
- Role: measurement validity in a Chilean population; it does not establish future predictive performance or validation at AITU. See the [measurement evidence cards](contributions/measurement_review.md).

**M-02.** Jagodics, B., & Szabó, É. (2023). Student Burnout in Higher Education: A Demand-Resource Model Approach. *Trends in Psychology, 31*, 757–776. [DOI](https://doi.org/10.1007/s43076-021-00137-4) · [Publisher full text](https://link.springer.com/article/10.1007/s43076-021-00137-4).

- Type: peer-reviewed Original Article. First published online on 6 January 2022; 2023 is the volume year.
- Evidence locations: Methods → Instruments; Results → Main analysis: Model estimation, Figure 1; Discussion → Limitations and further research.
- Role: demands/resources and concurrent MBI-SS associations; explained variance in the sample is not a prospective test result. See the [measurement cards](contributions/measurement_review.md).

**M-03.** Salmela-Aro, K., Upadyaya, K., Ronkainen, I., & Hietajärvi, L. (2022). Study Burnout and Engagement During COVID-19 Among University Students: The Role of Demands, Resources, and Psychological Needs. *Journal of Happiness Studies, 23*, 2685–2702. [DOI](https://doi.org/10.1007/s10902-022-00518-1) · [Publisher full text](https://link.springer.com/article/10.1007/s10902-022-00518-1).

- Type: peer-reviewed Research Paper. Sections 6–12 were checked.
- Evidence locations: §6.1.1 (samples), §7 (measures), §8 (analysis), §9/Table 2 (results), first paragraph of §12 (cross-sectional design).
- Role: changes across three cross-sectional samples. Individual linkage across dates was not established; the linked OSF materials have not been inspected as raw data.

**M-04.** Gusy, B., Lesener, T., & Wolter, C. (2021). Time Pressure and Health-Related Loss of Productivity in University Students: The Mediating Role of Exhaustion. *Frontiers in Public Health, 9*, 653440. [DOI](https://doi.org/10.3389/fpubh.2021.653440) · [Publisher full text](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2021.653440/full).

- Type: peer-reviewed Original Research. Materials and Methods, Results, Discussion, and Strengths and Limitations were checked.
- Evidence locations: Study Procedure and Sample; Measures → Exhaustion; Results → Structural Equation Model; Strengths and Limitations.
- Role: repeated observations with six-month intervals and an exhaustion subscale. It does not establish a short-term forecasting horizon or measure every component of burnout.

**M-05.** Bakker, A. B., & Mostert, K. (2024). Study Demands–Resources Theory: Understanding Student Well-Being in Higher Education. *Educational Psychology Review, 36*, 92. [DOI](https://doi.org/10.1007/s10648-024-09940-8) · [Publisher full text](https://link.springer.com/article/10.1007/s10648-024-09940-8).

- Type: peer-reviewed Review Article.
- Evidence locations checked: Student Well-Being → Student Burnout; Study Demands and Resources → Proposition 1; Traits Versus States in SD–R Theory, and selected research-agenda discussion. Reading every section or supplement is not claimed.
- Role: theoretical structure for demands, resources, and within-person variation; not a predictive benchmark.

## Machine learning, data, leakage, and explanation

**ML-01.** Li, T., Shi, X., Wang, J., Yu, M., Li, F., Xu, H., An, Q., & Ma, J. (2025). Status and influencing factors of academic burnout among undergraduate nursing students based on random forest modeling: a cross-sectional study. *BMC Nursing, 24*, 1407. [DOI](https://doi.org/10.1186/s12912-025-04036-2) · [Publisher full text](https://link.springer.com/article/10.1186/s12912-025-04036-2).

- Type: peer-reviewed Research article; published 17 November 2025.
- Evidence locations: Background; Methods, including instruments and Data analysis; Results; Discussion; Limitations; Data availability. PDF pp. 3–4 describe instruments, p. 4 analysis, p. 5 variable importance, and p. 10 limitations/data availability. Pages 4–5 were also visually checked during the original review.
- Role: concurrent burnout modelling with a random 70/30 split. The ordering of preliminary feature screening relative to the split is unclear. The public link to review reports was found, but the reports themselves were not read. See the [ML evidence cards](contributions/ml_validation_review.md).

**ML-02.** Kuzilek, J., Hlosta, M., & Zdrahal, Z. (2017). Open University Learning Analytics dataset. *Scientific Data, 4*, 170171. [DOI](https://doi.org/10.1038/sdata.2017.171) · [Publisher full text](https://www.nature.com/articles/sdata2017171).

- Type: peer-reviewed Data Descriptor; published 28 November 2017.
- Evidence locations: Background & Summary, Methods, Data Records, Technical Validation, Usage Notes. PDF pp. 4–6 describe the records; pp. 6–7 describe technical validation.
- Role: a temporal educational-data schema. OULAD has no burnout label. Raw CSV files have not been inspected in this review.

**ML-03.** Kapoor, S., & Narayanan, A. (2023). Leakage and the reproducibility crisis in machine-learning-based science. *Patterns, 4*(9), 100804. [DOI](https://doi.org/10.1016/j.patter.2023.100804) · [Published full text in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10499856/).

- Type: peer-reviewed journal article; published online on 4 August 2023, in the 8 September issue.
- Evidence locations: Introduction; Results → leakage taxonomy (L1.2–L1.4, L2, L3.1–L3.3), model info sheets, civil-war case study; Discussion; Experimental procedures; Data availability. Supplements S1–S6 were not read.
- Role: methodological controls for leakage and evaluation. The published version reports 294 affected studies; it does not estimate the prevalence of leakage across all science.

**ML-04.** Lundberg, S. M., & Lee, S.-I. (2017). A Unified Approach to Interpreting Model Predictions. *Advances in Neural Information Processing Systems, 30*. [Official proceedings](https://proceedings.nips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html) · [Paper PDF](https://proceedings.nips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf).

- Type: peer-reviewed conference paper. A DOI was not listed on the checked proceedings page and has not been inferred.
- Evidence locations: main-paper §§1–6; §3/p. 4 (properties), §4/pp. 4–7 and equations 9–12 (approximations), §5/pp. 8–9 (experiments). [Official reviews](https://proceedings.nips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Reviews.html) were also checked; supplementary material was not read.
- Role: the foundation of SHAP. Local accuracy is an attribution property, not predictive accuracy or a causal claim.

**ML-05.** Aas, K., Jullum, M., & Løland, A. (2021). Explaining individual predictions when features are dependent: More accurate approximations to Shapley values. *Artificial Intelligence, 298*, 103502. [DOI](https://doi.org/10.1016/j.artint.2021.103502) · [Published PDF on the author's website](https://martinjullum.com/publication/aas-2021-explaining/aas-2021-explaining.pdf).

- Type: peer-reviewed journal article; online publication 31 March 2021, September volume.
- Evidence locations: §§1–3; §4 experiments, evaluation, results and real-data example; §5. In particular, §3/pp. 6–8 covers conditional approximations, §4.1/p. 9 metrics, §4.4/pp. 15–16 mortgage data, and §5/pp. 18–20 limitations. Appendices were not read.
- Role: dependence-aware attribution. Predictive AUC on the mortgage example does not measure attribution quality.

## Official technical sources

These documents support the review's engineering implications and **are not counted as scientific publications**. Access in the original review: 21 October 2026. The source IDs are retained for traceability; they do not imply that other technical references are included in this package.

| ID | Reference and checked section | Use in this project |
| --- | --- | --- |
| TECH-03 | Django REST Framework maintainers. [Permissions](https://www.django-rest-framework.org/api-guide/permissions/), Object level permissions and Limitations of object level permissions | Explicit owner filtering for list views and operation-specific permission checks |
| TECH-06 | PostgreSQL Global Development Group. [Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html), introduction and the role/owner bypass discussion | RLS as a configured additional control, tested under the actual application role |
| TECH-10 | OpenAPI Initiative. [OpenAPI Specification 3.1.1](https://spec.openapis.org/oas/v3.1.1.html), §2 and §§3.1–3.2 | Explicit API contracts for available results and unavailable or insufficient-data states |

## Access and reuse

Use the publisher or author links above to obtain original materials. Article PDFs, datasets, and questionnaire items are not included in this package. Reading an open-access paper does not establish permission to reproduce, translate, or modify a third-party questionnaire. Instrument version, language, scoring, and permitted use must be checked before data collection.

For the distinction between inspected metadata and uninspected raw data, see the [dataset audit](dataset_audit.md). New source checks, corrections, and review decisions should be recorded with their actual dates.
