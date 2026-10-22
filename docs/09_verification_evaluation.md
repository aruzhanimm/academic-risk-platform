# 09. Verification and Evaluation Plan

**Content status:** Draft. **Team review:** Pending.

This plan defines how the proposed platform and research claims will be evaluated. It implements submission requirement 9 and follows the [requirements specification](06_requirements_specification.md), [architecture](07_architecture.md), [UX prototype](08_ux_prototype.md), and [ML validation review](../research/contributions/ml_validation_review.md).

Three questions require separate evidence: does the software satisfy its requirements, does a model predict the intended outcome under valid conditions, and do students understand the interface? A working screen cannot answer the second question; an accurate model cannot establish the first or third. The current artifact is a synthetic interaction prototype. Backend acceptance tests, forecasting experiments, and participant walkthroughs remain planned.

## 1. Evaluation scope and decision gates

Academic workload, perceived overload, emotional burnout, stress, and dropout are different constructs. Each evaluated outcome needs its own definition, instrument and interpretation. The [dataset audit](../research/dataset_audit.md) examines published descriptions, not obtained participant-level files; it has not established a suitable longitudinal burnout dataset for this project.

| Gate | Required evidence before proceeding | Decision if unmet |
| --- | --- | --- |
| Measurement and data | Define the construct, instrument/version/language, scoring, recall window, prediction time, horizon, unit of analysis and permission. Inspect actual records for linkage, dates, missingness and follow-up. | Continue literature, design and synthetic software checks. Do not train a purported future-burnout predictor on an unrelated outcome. |
| Frozen research protocol | Record the population and intended generalisation, eligibility, split rules, primary metric and weights, baselines, tuning budget, uncertainty procedure and practical acceptance criteria before final-test access. | Resolve the missing decisions using development data; keep the test partition sealed. |
| Valid experiment | Check temporal eligibility, independent labels, identical comparison samples, versions and reproducibility. Preserve the frozen configuration and all planned outcomes. | Investigate the defect. An invalid experiment is not performance evidence. |
| Research completion | Report actual estimates, baseline differences, uncertainty, coverage, errors and limitations. | State what remains unmeasured. A valid negative result is still a research result. |
| Model enablement | Separately review applicability to intended users, predefined practical criteria, software acceptance and interpretation limits. | Keep `model_unavailable`; research completion alone does not authorise a model for student use. |

The protocol must justify sample adequacy from the number of independent students, outcome distribution and achievable precision. No arbitrary accuracy promise or minimum sample size is treated as an established requirement. If only cross-sectional data are available, any current-state assessment requires a documented scope decision and must not be described as early forecasting.

## 2. Research questions and planned comparisons

| Question | Planned comparison | Evidence to retain |
| --- | --- | --- |
| Can eligible observations predict the defined future outcome? | A simple baseline, an interpretable model and one justified nonlinear candidate on the same splits. | Primary metric, paired difference, uncertainty, eligible student/record counts and coverage. |
| Do added feature groups help? | Predeclared ablations of workload/demands, resources and permissible historical outcome features, where available. | Changes under the same split, sample, preprocessing and tuning budget; missingness and computational cost. |
| Are model explanations faithful and understandable? | Technical explanation checks followed by a separate student walkthrough. | Output scale, reference data, reproducibility and observed interpretations; no causal claim. |
| Does the implementation meet the specification? | The `REQ-V01`–`REQ-V12` checks below. | Reproducible fixtures, expected/actual behaviour, logs or captures, revision and outcome. |

Feature groups are candidates from the [feature register](../research/feature_operationalization.md). The two demo fields are not an approved predictive feature set. Select one primary outcome and endpoint before the confirmatory experiment; label additional outcomes, subgroup analyses and post-test investigations as secondary or exploratory.

## 3. Temporal eligibility and leakage controls

For each forecasting example, retain a pseudonymous student key, input snapshot, prediction time `t`, horizon `h`, outcome measurement time, outcome window start/end, and the time each predictor and label became available. Time zones and boundary inclusion must be explicit. A score measured after `t` may still refer partly to experiences before `t`; its recall window must be reconciled with the forecasting claim.

Predictors must satisfy `feature.available_at <= t`. For each simulated deployment cutoff `c`, training labels must also satisfy `label.available_at <= c`. Later corrections, future deadlines learned afterwards, end-of-term summaries and future outcomes cannot enter the past input snapshot. Audit these conditions on actual rows, including duplicate records and reused outcome measurements.

Do not use an outcome's own questionnaire items to reconstruct that same score and call it prediction. A genuinely earlier outcome measurement may be a declared historical predictor if its age and availability are recorded. Compare this model with a persistence baseline on the same history-eligible subset. Missing future outcomes are unobserved labels, never zero risk; report follow-up loss and compare observed characteristics of retained and lost cases where permitted.

The split must match the intended claim:

| Intended generalisation | Required separation |
| --- | --- |
| New students in the studied setting | Student IDs are disjoint across development and test partitions, including inner validation folds. |
| Future observations for already-known students | Chronological cutoffs, only previously available information, and explicit acknowledgement that students can recur. This does not establish performance for new students. |
| New students in a future period | Enforce both student separation and time ordering, including development folds. |

Choose a deterministic rule for examples whose input/outcome windows cross a partition boundary. Purge leakage-causing overlaps across temporal partition boundaries or dependent records, including reuse of the same outcome measurement; calendar overlap between independent students is not itself leakage. Set any embargo from actual windows and reporting delays; a universal fixed gap is not assumed. Save exclusion reasons and counts. Ordinary random row splitting and group-only splitting do not establish future-time validity. Official [cross-validation guidance, grouped-data and time-series sections](https://scikit-learn.org/stable/modules/cross_validation.html) supports matching separation to the dependency structure; the combined student/time protocol above is a project design choice.

Fit imputation, scaling, encoding, selection, resampling and other learned transformations within training folds only. Tune parameters, calibration and decision thresholds within development data. Test data must not influence these decisions; pipelines help keep transformations within the fitted partition. See [scikit-learn, Common pitfalls, Section 12.2](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) and the leakage discussion in the ML validation review.

## 4. Baselines, metrics and uncertainty

### Continuous outcome

For a justified continuous score, compare a training-only constant baseline with a regularised linear model and a bounded nonlinear candidate. Use the student-weighted training median as the primary constant baseline for MAE and the student-weighted training mean for squared-error comparisons. Compute baseline weights as `1 / n_s_train` within each training partition only. Add last-observed-score persistence only where that measurement was available at prediction time. Use identical eligible cases for each paired comparison and disclose reduced coverage.

The proposed primary metric is student-weighted MAE, in the outcome instrument's units. For `S` evaluable students, with `n_s` eligible records each:

```text
MAE_student = (1 / S) * sum_s [(1 / n_s) * sum_j abs(y_sj - prediction_sj)]
RMSE_student = sqrt((1 / S) * sum_s [(1 / n_s) * sum_j (y_sj - prediction_sj)^2])
```

This gives each student equal total weight. Report pooled record-level MAE as a secondary view, together with the instrument range, student/record counts, eligible fraction and excluded-label counts. Do not average students' RMSE values and label that quantity as the RMSE above.

### Binary outcome, only if justified

A binary endpoint requires a defensible outcome threshold, positive class and intended interpretation fixed before testing. Do not turn a continuous scale into arbitrary risk categories merely to obtain classification scores. Compare a student-weighted training-prevalence constant probability baseline, logistic regression and a justified nonlinear candidate. Estimate that prevalence using `1 / n_s_train` weights within the corresponding training partition only.

The proposed primary ranking metric is **Average Precision (AP)**: `sum_k [(Recall_k - Recall_(k-1)) * Precision_k]`. It is the non-interpolated definition used by [scikit-learn's average_precision_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html), not trapezoidal area under a precision–recall curve. Report the positive class and prevalence with AP. ROC-AUC is secondary.

Use observation weights proportional to `1 / n_s` for student-weighted AP, ROC-AUC, Brier score, prevalence and threshold metrics. Do not average individual students' AP scores. Report unweighted counts and distinguish weighted confusion-matrix quantities from raw counts. One-class samples and undefined quantities must be identified rather than silently converted to zero.

Select any operational threshold on development data using a documented trade-off between missed cases and false alerts. At that fixed threshold, report sensitivity, specificity, positive predictive value and the confusion matrix. Calibration uses held-out or out-of-fold development predictions with the same grouping/time constraints. Report Brier score alongside a reliability diagram, fixed binning rules and bin counts; Brier score is not an isolated measure of calibration error. See [scikit-learn, Probability calibration, introductory Brier-score note and Sections 1.16.1–1.16.3](https://scikit-learn.org/stable/modules/calibration.html).

### Paired uncertainty and interpretation

The proposed uncertainty analysis uses 95% percentile intervals from 2,000 student-cluster bootstrap resamples with a recorded seed. Resample students with replacement, retaining each selected student's entire set of eligible observations and paired candidate/baseline predictions. Treat repeat selections as separate cluster copies and recalculate the specified metric in each resample.

Compute candidate-minus-baseline differences within each resample; do not subtract endpoints of independent intervals. Lower MAE/Brier and higher AP indicate improvement. Retain the scheduled 2,000 draws and report invalid resample counts and reasons; do not silently replace undefined draws until 2,000 valid values are obtained. For a metric with undefined replicates, omit the standard percentile interval. Any additional interval calculated only from valid draws must be predeclared and explicitly labelled as conditional exploratory analysis. If instability, few students or one-class resamples make intervals unreliable, report that limitation and avoid a definitive superiority claim. This conditional test-set analysis does not capture model-training variability or establish transfer to another university or calendar regime.

Before opening the test set, justify what would constitute a practically useful difference and acceptable calibration/coverage for the intended use. Statistical improvement alone is insufficient for deployment. Freeze the selected models, transformations, thresholds and analysis script; run one final evaluation of the prespecified comparisons. Any correction or later exploratory use of the test set must be disclosed, with renewed independent validation before a revised confirmatory claim.

## 5. Explainability and error analysis

For any enabled explanation method, record the model version, explained output scale, reference/background data, feature mapping and method settings. Background data must come from permitted training data. Check reproducibility, feature-to-label mapping and any claimed additive reconstruction within a declared numerical tolerance. Do not imply that contributions in log-odds are percentage-point changes in probability.

Inspect dependent features and plausible input changes; avoid presenting impossible feature combinations as meaningful counterfactuals. Examine correct and incorrect predictions, extreme errors, missing-input patterns and cases with a prior measurement. Report how cases were selected, including failures, instead of showcasing only convincing explanations. These checks evaluate an explanation of a model, not causes of burnout or predictive accuracy. Methodological foundations and dependence limitations are documented in [ML-04 and ML-05](../research/contributions/ml_validation_review.md).

Predeclare ablations using the same eligible sample and data partitions. Do not interpret a performance change as a causal effect of a student behaviour. Small subgroup results remain descriptive unless their precision supports a stronger claim; suppress potentially identifying cells and do not collect sensitive attributes solely to populate comparison tables.

## 6. Software verification matrix

These planned checks retain the identifiers from the requirements specification. A static prototype can support selected presentation checks but cannot pass server, ownership, persistence or actual data-operation acceptance. Use synthetic fixtures in an isolated test environment.

| Check / trace | Procedure | Pass condition and evidence |
| --- | --- | --- |
| **REQ-V01** · FR-001, UC-01 | Reopen the notice, inspect its version, cancel and submit separately. | Cancellation creates no observation; a saved personal observation records the applicable notice acknowledgement. Capture UI and storage evidence. |
| **REQ-V02** · FR-002, UC-01 | Submit valid, malformed, out-of-range, missing and unsupported-schema inputs; retry after a lost response. | Server rejects invalid data with field errors and no partial write. A valid retry creates no unintended duplicate; ownership is server-assigned. Retain request/response and row-count evidence. |
| **REQ-V03** · FR-003, UC-02 | Inspect empty history, three dated records, then every page of a fixed dataset. | Ordering, units and missingness are explicit; pagination neither loses nor repeats records. Retain expected and returned record sets. |
| **REQ-V04** · NFR-001, UC-01–UC-04 | Use anonymous, user A and user B sessions for lists, direct IDs, forged owner fields, estimates, data requests and export downloads. Test RLS, if used, through the actual application role/pool. | Only the owner accesses private operations; denials reveal no private content. Record the complete access matrix and actual responses. |
| **REQ-V05** · FR-004, UC-03 | Use an explicitly synthetic estimator fixture to inspect task, outcome, units, snapshot, timestamps, horizon, model/schema and explanation. | Required provenance and limits appear correctly. Fixture output is labelled; passing verifies presentation only. |
| **REQ-V06** · FR-005, NFR-006, UC-03 | Exercise no enabled model, insufficient eligible input, inference failure and explanation-only failure. | Availability is checked first. Unavailable/insufficient states have no score or contributions; inference failure is a separate error; explanation failure preserves an otherwise valid result with an explicit limitation. |
| **REQ-V07** · FR-006, NFR-002, UC-04 | Exercise pending, completed, failed, duplicate and expired requests with two users; inspect exported contents and deletion scope. | Request state reflects the actual operation; only the owner downloads an unexpired export. Completion covers agreed source/derived records and backup handling. |
| **REQ-V08** · NFR-002, NFR-006 | Review field purposes, retention, research exports, logs, errors and staged repository contents. | No unnecessary identifying fields, answers or credentials appear in logs or public artifacts; research exports separate identity. Retain a redacted checklist, not sensitive logs. |
| **REQ-V09** · NFR-003, UC-03 | Correct an input and add a future outcome after a synthetic prediction; replay its saved manifest. | Past snapshot is unchanged, later information is excluded, and output is reproduced within the declared tolerance. Retain version/hash and temporal assertions. |
| **REQ-V10** · NFR-004, UC-01–UC-04 | Traverse the four flows by keyboard; inspect focus, labels, textual errors, non-colour cues and a 360 CSS-pixel viewport. | Core actions and content remain usable. Retain browser/viewport evidence; participant understanding and physical-device testing are separate activities. |
| **REQ-V11** · NFR-005, UC-01–UC-02 | Run the load protocol below. | Report save/history p95 and failures separately; assess the provisional target under the declared environment. |
| **REQ-V12** · NFR-006, UC-01–UC-04 | Inject storage/network failures, retry submissions, switch/sign out of accounts, and send unsupported artifact references. Inspect deployment/session configuration. | No partial records, duplicate retries, stale cross-account data or client-selected executable artifacts. HTTPS/session protections and safe errors match the agreed deployment design. |

For **REQ-V11**, use 10 concurrent authenticated synthetic sessions and an initial dataset of 1,000 observations. Measure **1,000 valid operations of each type after 100 warm-up operations of each type**. Measure server-side elapsed time with a monotonic clock from application request entry to response completion; record client time separately if collected. Report p95 at most 2 seconds as the **provisional Should target**, not a result. Record failures/timeouts separately and accept no unexpected server errors. Document CPU, RAM, service/database versions, payload sizes, request mix, session distribution, concurrency mechanism, starting/ending record counts and dataset growth during saving. Measure inference and export/deletion processing separately. A local static page's speed cannot satisfy this check.

## 7. Student walkthrough protocol

Use the six tasks and empty evidence record in the [UX specification](08_ux_prototype.md). Start with synthetic values, explain voluntary participation and permit stopping. Record the actual participant count, recruitment method, relevant context, prototype commit, browser, viewport and input method. Keep contact details and raw identifiable responses outside the repository.

For each task, record completion without assistance, completion with assistance, or non-completion; observed errors; assistance; and the participant's explanation in their own words. Collect elapsed time only if its start/end rules are defined in advance. Summarise counts with denominators; a small convenience walkthrough is exploratory rather than a population usability estimate.

Critical understanding checks are whether the participant distinguishes missing from zero, sample history from measured risk, `model_unavailable` from low risk, and a pending request from completed deletion. When a computed-result screen becomes available, separately check understanding of uncertainty, association and non-diagnostic interpretation. Record actual observations before proposing fixes. Link each issue to its affected requirement and verify the revised interaction. No participant outcome is asserted by this plan.

## 8. Reproducibility, reporting and responsibility

Every executed check or experiment needs a dated evidence record:

| Record field | Required content |
| --- | --- |
| Identity | Check/experiment ID, purpose, executor and actual date; real task and commit/PR links when available. |
| Inputs | Synthetic fixture or permitted dataset identifier/version/hash; inclusion/exclusion rules; student/record counts; instrument and schema versions. |
| Configuration | Code revision, environment/dependency versions, seed, split manifest, preprocessing/model/calibrator/threshold settings, tuning budget and numerical tolerance. |
| Observation | Expected and actual behaviour; raw metric outputs or redacted technical evidence; failures, deviations and uncertainty. |
| Decision | Pass/fail/blocked for software checks; findings and limitations for research; actual reviewer and follow-up issue where applicable. |

Preserve private split/prediction files under appropriate access controls. Public reports contain aggregates and reproducible procedures, not participant identifiers or restricted rows. Record all planned comparisons, including baselines that outperform the candidate. Publishing a plan or completing a synthetic smoke check must not be reported as model validation or a completed personal-data pilot.

**Planned responsibility:** Aruzhan maintains the dataset gate, experiment protocol, metrics and reproducibility; Vitaliy implements technical acceptance and performance checks; Saniya coordinates measurement/feature review, ablations, walkthroughs and error interpretation. Each result records its actual executor and reviewer. These responsibilities do not imply completed experiments or reviews.

The next research decision is whether a permitted dataset can supply independent, temporally suitable outcomes. Until it does, the useful deliverables are the documented protocol, verified synthetic interactions and implementation acceptance criteria. Student discussions and supervisor decisions must be added from actual evidence before the final report is considered complete.

### Source notes

The existing [bibliography](../research/bibliography.md), feature register and ML validation review supply the measurement and methodological foundations. The four official scikit-learn pages linked above were consulted on **23 October 2026**: Common pitfalls §12.2; Cross-validation §3.1.2.4–3.1.2.6; `average_precision_score`, definition and weighting parameter; Probability calibration, introductory Brier-score note and §§1.16.1–1.16.3. They clarify implementation concepts, not project results or a selected dependency version. Bootstrap settings, student weighting, decision gates and acceptance procedures in this document are proposed project choices requiring review.
