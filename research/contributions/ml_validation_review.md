# Machine Learning, Temporal Validation, Leakage, and Explainability

**Working draft for team review.** Original search and source checks: **21 October 2026, Asia/Almaty**. This review covers five peer-reviewed publications: one study of current academic burnout, one educational dataset description, and three methodological papers. It is a targeted contribution to the [literature review](../../docs/03_literature_review.md), not a systematic review or a report of project experiments.

The reading record below identifies the sections actually examined. It does not imply that supplementary materials or every cited paper were read. OULAD and the original SHAP paper are retained as primary sources for a dataset and a method; they do not replace recent literature on student burnout.

## Search and Selection

Web searches were followed by checks of publisher pages, official conference proceedings, and full texts. Total search-result counts were not recorded, and exhaustive coverage is not claimed. The consolidated record is in the [search log](../search_log.md).

| Query executed on 21 October 2026 | Selection decision |
| --- | --- |
| `student burnout prediction machine learning longitudinal open access university students` | Sought studies directly addressing the topic; claims of prediction were checked against study design and measurement timing. |
| `"student burnout" "machine learning" prediction longitudinal journal` | Excluded theses and items whose publication status and substantive full text could not be established. |
| `"academic burnout" "machine learning" "2024"`; `"academic burnout" "machine learning" "2025"` | Selected Li et al.; reporting limitations are retained in the critical assessment. |
| `Kuzilek Hlosta Zdrahal 2017 Open University Learning Analytics dataset Scientific Data` | Checked the OULAD description without assuming suitability for burnout prediction. |
| `Kapoor Narayanan 2023 leakage reproducibility machine learning science Patterns full text` | Used the 2023 journal article rather than an arXiv version with different quantitative totals. |
| `Lundberg Lee 2017 unified approach interpreting model predictions NIPS proceedings` | Used the published conference paper and checked its official review page. |
| `"Explaining individual predictions when features are dependent" 2021 Aas Jullum Løland` | Read the published journal PDF available from a co-author's website. |

A 2026 thesis by Hyejoon Song and arXiv preprints found during the search were not counted among the five peer-reviewed publications. Their abstracts were not used as evidence of experimental findings. Other candidates were not included without substantive examination.

## Bibliography and Publication Status

The identifiers `ML-01`–`ML-05` are reference labels. Each publication is counted once in the combined bibliography, regardless of the number of available versions or access routes.

| ID | Verified publication | Publication status and version |
| --- | --- | --- |
| ML-01 | Ting Li, Xiaoqing Shi, Jialin Wang, Meng Yu, Fuyu Li, Heyao Xu, Qi An, and Jiyi Ma. **Status and influencing factors of academic burnout among undergraduate nursing students based on random forest modeling: a cross-sectional study.** *BMC Nursing*, 24, 1407 (2025). [DOI: 10.1186/s12912-025-04036-2](https://doi.org/10.1186/s12912-025-04036-2). | Peer-reviewed research article, published 17 November 2025. The publisher links peer-review reports; those reports were not retrieved. The published article was read. |
| ML-02 | Jakub Kuzilek, Martin Hlosta, and Zdenek Zdrahal. **Open University Learning Analytics dataset.** *Scientific Data*, 4, 170171 (2017). [DOI: 10.1038/sdata.2017.171](https://doi.org/10.1038/sdata.2017.171). | Peer-reviewed Data Descriptor; received 20 July 2017, accepted 13 October 2017, published 28 November 2017. |
| ML-03 | Sayash Kapoor and Arvind Narayanan. **Leakage and the reproducibility crisis in machine-learning-based science.** *Patterns*, 4(9), 100804 (2023). [DOI: 10.1016/j.patter.2023.100804](https://doi.org/10.1016/j.patter.2023.100804); [full text in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10499856/). | Peer-reviewed journal article; received 3 March 2023, revised 18 May 2023, accepted 5 July 2023. The published version was used, not the preprint. |
| ML-04 | Scott M. Lundberg and Su-In Lee. **A Unified Approach to Interpreting Model Predictions.** *Advances in Neural Information Processing Systems*, 30 (2017). [Official proceedings](https://proceedings.nips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html). | Peer-reviewed conference paper; the [official reviews](https://proceedings.nips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Reviews.html) were read. No DOI is supplied because none was identified on the checked proceedings page. |
| ML-05 | Kjersti Aas, Martin Jullum, and Anders Løland. **Explaining individual predictions when features are dependent: More accurate approximations to Shapley values.** *Artificial Intelligence*, 298, 103502 (2021). [DOI: 10.1016/j.artint.2021.103502](https://doi.org/10.1016/j.artint.2021.103502); [published PDF on a co-author's website](https://martinjullum.com/publication/aas-2021-explaining/aas-2021-explaining.pdf). | Peer-reviewed journal article; received 3 October 2019, revised 5 January 2021, accepted 29 March 2021. The 2021 journal version was used, not the 2019 arXiv version. |

## Critical Assessments

### ML-01 — Factors Associated with Current Academic Burnout

**Reading record:** Background; Methods, including instruments and Data analysis; Results; Discussion; Limitations; Data availability. PDF pages 4–5 were also inspected visually during the original source review.

**Data and target:** 442 undergraduate nursing students from three medical schools in China, recruited through convenience sampling for a single survey in 2024. The outcome is concurrent Academic Burnout Scale (ABS) status. Instruments include ABS, the Time Management Disposition Scale (TMD), and the Self-Regulatory Fatigue Scale (SRF-S). The authors classify ABS scores above 60 as burnout and 40–60 as an uncertain intermediate state; these thresholds are specific to the study's instrument and are not adopted as project thresholds. *Locators: PDF pp. 3–4, Instruments.*

**Method and evaluation:** Random forest, LASSO, and linear regression; a random 70/30 training/test split, out-of-bag tuning for random forest, and 10-fold cross-validation for LASSO. The reported AUC is **0.852**, with **95% CI 0.715–0.982**. This is a result reported by the authors, not a performance estimate for this project. *Locators: pp. 4–5, Data analysis and Variable importance ordering.*

**Limitations and relevance:** Methods describes 18 variables, whereas the random-forest Results section describes 20. The timing of variable selection relative to the split is insufficiently clear. This is a reproducibility concern, not proof of leakage. There is no temporal or external test; self-reporting and sample selection limit generalisation. Data are available on request and are not public because of privacy or ethical restrictions. The paper informs candidate factors and critical appraisal, but does not demonstrate prediction of future burnout. *Locators: p. 10, Limitations and Data availability; [publisher full text](https://link.springer.com/article/10.1186/s12912-025-04036-2).*

### ML-02 — Temporal Records without a Burnout Outcome

**Reading record:** Background & Summary; Methods; Data Records; Technical Validation; Usage Notes; licence information.

**Data and target:** OULAD covers **22 module-presentations in 2013–2014**. The article reports **32,593 rows in `studentInfo`** and **10,655,280 daily records in `studentVle`**. The `id_student` key links tables, while `final_result` records an academic outcome. These row counts have not been independently recounted or equated with a verified number of unique individuals; the CSV archive was not analysed. *Locator: Data Records, pp. 4–6.*

**Method and evaluation:** This is a dataset description, not a burnout-prediction experiment. It does not specify a single ML training/test split or predictive accuracy. Technical Validation compares selected attribute distributions for module CCC with 2015 data; that comparison does not establish transfer to AITU students in 2026. *Locator: pp. 6–7.*

**Limitations and relevance:** Burnout and overload are not measured. Fields such as `date_unregistration` and later assessment scores require an audit of availability at prediction time before use; this is a project interpretation of the schema. OULAD can illustrate temporal feature construction or support a separate academic-outcome benchmark, but cannot substitute for a burnout dataset. The article and dataset are stated to be available under CC BY 4.0. [Publisher full text](https://www.nature.com/articles/sdata2017171).

### ML-03 — Valid Evaluation before Model Comparisons

**Reading record:** Introduction; all of Results, including the taxonomy, model info sheets, and case study; Discussion; Experimental procedures; Data and code availability. Supplements S1–S6 were not read and are not summarised as independently checked evidence.

**Data and purpose:** The paper surveys ML errors and reanalyses published civil-war prediction studies. It is not a student study. The case study tests claims that complex models outperform simpler alternatives.

**Method and findings:** The authors examine code, data splits, and results before and after corrections, comparing AUC and uncertainty. Of **12 papers with complete code and data**, **four** contained errors involving leakage; these were the four claiming superior performance of complex ML models over baseline logistic regression. Correcting the errors substantially reduced the claimed advantage. *Locator: A case study of civil war prediction → Finding 1: Data leakage causes irreproducible results.*

**Relevance:** Taxonomy entries L1.2–L1.4 support fitting preprocessing and feature selection within training data; L2 supports checking whether features are legitimate for the prediction task; L3.1–L3.2 address temporal leakage and dependent observations. Model info sheets require an explicit argument that the test distribution matches the claimed application.

**Limitations:** The survey does not estimate the proportion of erroneous papers across all science. A reporting checklist cannot replace accessible code and data. *Locators: Data leakage causes irreproducible results; Limitations of model info sheets; [published full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC10499856/).*

### ML-04 — SHAP Explains a Model Output

**Reading record:** Main text, Sections 1–6, including definitions, approximations, and experiments. Supplementary material was not read.

**Task and data:** The paper addresses local feature attribution for a prediction. Experiments include trees, simple human judgement tasks, and MNIST; they do not concern burnout. *Locator: pp. 8–9.*

**Method and evaluation:** An additive explanation model with the properties of local accuracy, missingness, and consistency (Section 3, p. 4), followed by computational approximations (Section 4). Evaluations consider attribution estimates, computational efficiency, agreement with human responses, and changes in log-odds after masking. A student/time split is not applicable, and future student outcomes are not measured (Section 5).

**Relevance:** Feature contributions can be presented relative to an explicitly defined reference value, and their sum can be checked against the model output. **Local accuracy describes agreement with the model output, not predictive accuracy against observed outcomes.**

**Limitations:** Some approximations rely on assumptions, including feature independence (Section 4, Equations 9–12). Satisfying attribution properties does not establish causality or show that a student interface is useful. Those questions require separate evaluation. [Official PDF](https://proceedings.nips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf).

### ML-05 — Feature Dependence Affects Explanations

**Reading record:** Sections 1–3; Section 4, including evaluation measures, simulation results, and the real-data example; Section 5. Appendices containing proofs were not read.

**Data and task:** Simulations with **3 or 10 features**, followed by a real mortgage-default example with **28 features**. The main question is how to approximate conditional Shapley values, not how to predict student outcomes. *Locator: Section 4.*

**Method and evaluation:** Gaussian, copula, empirical, and combined conditional-distribution approaches; attribution MAE and a skill score relative to known values in simulations (Section 4.1, p. 9). In the real example, the training/test sizes are **12,696/1,921**, and XGBoost achieves **AUC 0.88**. That AUC evaluates the mortgage classifier, not explanation accuracy or burnout prediction. *Locator: Section 4.4, pp. 15–16.*

**Findings and limitations:** Ignoring dependence can produce implausible feature combinations; conditional approximations improve the examined simulations. True Shapley values are not available for the real-data example. Computational costs and difficulties with categorical features remain. *Locator: Section 5, pp. 18–20.*

**Relevance:** Dependencies between workload measures and self-reports, the choice of background data, and explanation stability need explicit consideration. Universal SHAP accuracy cannot be assumed. [Published PDF](https://martinjullum.com/publication/aas-2021-explaining/aas-2021-explaining.pdf).

## Synthesis for the Project

The sources address different parts of the problem. ML-01 relates factors to concurrently measured burnout. ML-02 provides time-indexed educational records with a different outcome. Together they do not establish a ready-to-use dataset for early burnout prediction. A future outcome and the provenance of linked repeated observations must be confirmed separately. [ML-01](https://link.springer.com/article/10.1186/s12912-025-04036-2), [ML-02](https://www.nature.com/articles/sdata2017171).

A random split of rows does not simultaneously answer questions about new students and future periods. Generalisation to new students requires separation of individuals; forecasting future periods requires respecting time. The evaluation design must match the claim being tested. The protocol below is a project proposal informed by the leakage literature, not an experiment already performed. [ML-03, L3.1–L3.2](https://pmc.ncbi.nlm.nih.gov/articles/PMC10499856/).

Explanations need their own evaluation. Clear-looking feature contributions cannot repair an invalid outcome or turn an association into a causal intervention. SHAP's theoretical properties are useful, but feature dependence and the meaning of the reference distribution must be addressed. [ML-04, Sections 3–4](https://proceedings.nips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html), [ML-05, Sections 3–5](https://doi.org/10.1016/j.artint.2021.103502).

## Proposed Evaluation Protocol

These checks have **not yet been performed on project data**. The prediction horizon and performance criteria must be agreed after assessing the outcome measure and available observation frequency.

| Check | Proposed rule | Evidence to retain |
| --- | --- | --- |
| Task definition | Define overload and burnout separately; specify the instrument, prediction time `t`, horizon `h`, and unit of observation. | Outcome specification; a result without a future label must be described as a current-state assessment. |
| Feature eligibility | Record each field's source, availability time, and relationship to the outcome score; exclude direct components of the future label. | Feature register with inclusion and exclusion reasons. |
| New students | Keep all records for one student in the same outer partition; fit preprocessing and tune models within training data. | No overlap of student identifiers between training and test partitions. |
| Future periods | Use a separate temporal test. Training labels must be available by the simulated deployment date; check overlapping windows. | Period boundaries, label-availability dates, and a split manifest. |
| Repeat records for known students | Treat forecasting for an already observed student as a separate scenario using only prior records. | A separate report, distinguishable from evaluation on new students. |
| Baselines | For classification, compare constant predictions and regularised logistic regression. For a future numerical score, consider the mean/median and, where history exists, the last observed value. | The same test observations, metrics, and eligible information for comparisons. |
| Metrics | For a justified binary outcome, consider PR-AUC, ROC-AUC, sensitivity and precision at a preselected threshold, Brier score, and calibration. For a numerical outcome, consider MAE, RMSE, and errors across score ranges. | Uncertainty, class prevalence, and the implications of errors; accuracy must not be the sole result. |
| Explainability | Compare an interpretable baseline with post-hoc explanations; choose background data from training data; check additivity, stability, and dependent feature groups. | An explanation protocol and examples, without presenting attribution as a proven cause. |
| User understanding | Check whether participants distinguish an estimate, a forecast, and a diagnosis; use clearly labelled demonstration data. | Actual de-identified observations from evaluation, recorded separately from the plan. |

The [feature register](../feature_operationalization.md) and [dataset audit](../dataset_audit.md) make the prerequisites explicit. The [research protocol](../RESEARCH_PROTOCOL.md) defines the evidence and reporting process.

## Full-Text Access and Verification Record

The original source review on **21 October 2026** examined the sections listed above. It checked published text and selected PDF pages, not the authors' computations. This handoff contains links and analysis only; it includes no article PDFs and makes no claim that local PDF files or hashes are part of the published repository.

| ID | Full-text access route | Access and reuse qualification |
| --- | --- | --- |
| ML-01 | [Publisher PDF](https://bmcnurs.biomedcentral.com/counter/pdf/10.1186/s12912-025-04036-2.pdf) | Published PDF states CC BY-NC-ND 4.0. Read during the original review; pages 4–5 also inspected visually. |
| ML-02 | [Publisher PDF](https://www.nature.com/articles/sdata2017171.pdf) | CC BY 4.0. Reading the article does not constitute inspection of the underlying CSV archive. |
| ML-03 | [PMC HTML](https://pmc.ncbi.nlm.nih.gov/articles/PMC10499856/) | The main HTML was read on 21 October; CC BY 4.0. The original NSF PDF download attempt timed out. |
| ML-04 | [Official proceedings PDF](https://proceedings.nips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf) | Available for reading; permission to redistribute the PDF was not separately established. |
| ML-05 | [Co-author's copy of the published PDF](https://martinjullum.com/publication/aas-2021-explaining/aas-2021-explaining.pdf) | Published PDF states CC BY-NC-ND 4.0. |

**Targeted rechecks on 22 October 2026:** the ML-01 publisher HTML was reopened to check the sample size, ABS thresholds, 70/30 split, 10-fold LASSO procedure, AUC interval, 18-versus-20-variable discrepancy, and data-availability statement. These claims were retained. For ML-03, the publisher's indexed text confirmed four papers with leakage among 12 with complete code and data. Direct PMC access returned a browser check and direct publisher access returned an access error; no new full-text reading is claimed for that recheck. The substantive reading record remains dated 21 October. [ML-01 publisher](https://link.springer.com/article/10.1186/s12912-025-04036-2), [ML-03 publisher](https://www.sciencedirect.com/science/article/pii/S2666389923001599).

## Remaining Limitations

- A suitable accessible dataset with an independent future student-burnout outcome for the intended population has not been confirmed.
- OULAD was reviewed through its Data Descriptor, not through CSV inspection. Missingness, duplicate records, and the actual number of unique students have not been independently audited.
- Published models and metrics have not been reproduced, and no project ML experiments have been conducted.
- No interview, usability-test, or supervisor-feedback results are reported here.
- These five papers form one part of the combined review; they should be interpreted alongside the [measurement review](measurement_review.md), [bibliography](../bibliography.md), and overall synthesis.
- The instrument, burnout threshold, and forecast horizon remain open decisions. The protocol must be reconciled with the available data and reviewed before implementation.
