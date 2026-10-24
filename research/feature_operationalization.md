# Feature Operationalisation and Leakage Register

**Working draft for team review — 22 October 2026.** This proposed specification draws on [M-01–M-05](contributions/measurement_review.md), whose source checks were completed on **21 October 2026**. No new web verification was performed for this English edition. Data collection and experiments remain planned.

The register is a **proposed operationalisation**, not a reproduced or validated questionnaire. No candidate feature has demonstrated predictive utility for AITU students. Instrument choice, permissions, language, outcome definition, and data access remain unresolved; see the [dataset audit](dataset_audit.md).

## Constructs, tasks, and unit of observation

| Construct or task | Proposed role | Boundary |
| --- | --- | --- |
| Academic workload | Recorded hours, assignments, and calendar events | The volume of work alone does not establish overload. |
| Perceived overload | A separate self-report of demands relative to available time or resources | A custom question must not be presented as a validated scale. |
| Student burnout | An outcome defined by a specified instrument and dimensions | Stress, GPA, dropout, and fatigue alone are not interchangeable labels. |
| Current assessment | A descriptive questionnaire result at time t | Calculating a scale score is not ML forecasting. |
| Future outcome | The same agreed measure at t+h | Features or responses available only after t cannot be used to issue the prediction at t. |

The proposed unit is **`student_id × prediction_at`**. `student_id` is a pseudonymous linkage and grouping key, not a predictor. The horizon `h` will be selected after instrument choice and data audit. **28 days is a candidate for discussion**, not an interval established by the reviewed literature. If the outcome's recall period overlaps the feature window, the design requires explicit reconsideration. Wording and recall periods of a validated instrument must not be changed merely for modelling convenience without assessing the consequences.

The initial proposal is to compare continuous outcomes for agreed dimensions. Low/high categories require substantively justified thresholds fixed in advance. A missing observation at t+h is a missing outcome, not zero risk.

## Candidate feature register

The windows and bounds below are proposed pilot specifications. **D** denotes demands, **R** resources, **C** context, **H** history, and **Q** data quality. A cited study motivates the factor group; it does not validate the particular field, response format, or window proposed here. Response options and units require cognitive piloting and must be fixed before data collection.

| ID / field | Group, meaning, and type | Availability at t / proposed window | Missingness and validation | Leakage risk and handling | Rationale |
| --- | --- | --- | --- | --- | --- |
| F-01 `study_hours_7d` | D: hours of study, float; taught sessions plus independent study without double-counting | Self-report for the preceding 7 days, received by t | Allow null; range 0–168; clarify anomalies rather than silently clipping them | Do not replace the original report with final activity logs obtained after t | M-05; specific field proposed here |
| F-02 `known_deadlines_14d` | D: number of announced mandatory submissions, integer | Deadlines in the next 14 days that were **known by t** | Distinguish null from zero; non-negative integer | Future scheduled events may be known at t; later announcements or revisions must not alter the earlier snapshot | M-05; project proposal |
| F-03 `known_exam_count_14d` | D: number of announced examinations or tests | Schedule snapshot at t for the next 14 days | Distinguish this count from F-02; retain the inclusion rule | Exclude final grades and actual examination outcomes | M-05; project proposal |
| F-04 `time_pressure_7d` | D: perceived shortage of time; candidate ordinal response 0–4 | Preceding 7 days | Optional custom item; no claim that it is a validated scale | Check semantic overlap with the outcome; exclude from the independent feature block if it reproduces outcome content | M-04; response format proposed here |
| F-05 `perceived_overload_7d` | D: separate perceived-load rating; candidate ordinal response 0–4 | Report available by t, with a proposed 7-day window | Allow null; pilot the wording | Exclude if this item defines the overload target; assess its role in a burnout analysis separately | M-01; this field is not the paper's six-item scale |
| F-06 `paid_work_hours_7d` | C: voluntarily reported paid-work hours | Preceding 7 days | Do not collect employer or income; refusal is allowed | A later retrospective questionnaire does not make the value available at t | M-02, Limitations; exploratory candidate |
| F-07 `teacher_support_7d` | R: availability of lecturer support; candidate ordinal response 0–4 | Experience before t, proposed 7-day window | No lecturer names or free-text descriptions | Support arranged after a prediction is an intervention, not a baseline feature | M-01; response format proposed here |
| F-08 `peer_support_7d` | R: availability of peer support; candidate ordinal response 0–4 | Experience before t, proposed 7-day window | No names or correspondence | Exclude responses obtained after the outcome; shared self-report error remains possible | M-05; project proposal |
| F-09 `planning_control_7d` | R: control over the study schedule; candidate ordinal response 0–4 | Available by t, proposed 7-day window | Refusal is not absence of control | Review item content to avoid disguising an outcome item as a predictor | M-02; project proposal |
| F-10 `feedback_clarity_7d` | R: clarity of requirements or received feedback; candidate ordinal response 0–4 | Only feedback already received by t, proposed 7-day window | Pilot the distinction between “not received” and “unclear” | Responses to future grades are not available at t | M-02; project proposal |
| F-11 `semester_week` | C: semester week, integer | Official calendar published by t | Retain the calendar source and version | May capture temporal shifts; evaluate performance across periods | M-03; project context variable |
| F-12 `prior_outcome_score` | H: previous score from the same instrument and dimension | Latest eligible measurement **before t**; retain its age separately | Null at the first observation; no indefinite carry-forward | Use only in an explicitly identified history-based model; exclude concurrent or future outcome items | Proposed autoregressive baseline |
| F-13 `outcome_age_days` | H: age of F-12 in days | Difference between t and the previous outcome date | Null when F-12 is absent | Never compute from the nearest future questionnaire | Proposed availability control |
| F-14 `missing_feature_count` | Q: number of missing input fields | Computed from the snapshot at t | Keep any voluntarily stated refusal reason separate; do not infer one | May describe service use rather than student state; initially use for quality control, not risk prediction | Proposed quality control |

These are not 14 mandatory interface fields. The proposed minimal pilot comprises F-01–F-04, F-07, and F-11. Other fields require evidence of clarity, necessity, and acceptable participant burden. If required model inputs are insufficient, the system should not produce a numerical forecast. The sufficiency rule must be defined with the model, not as an arbitrary percentage of completed fields.

## Outcome separation and data provenance

For each questionnaire or observation, the proposed metadata are `observed_from`, `observed_to`, `recorded_at`, `available_at`, `source_type`, `instrument_id`, `instrument_version`, `language`, `scoring_version`, and `consent_version`. Calendar events additionally require `announced_at`, `event_due_at`, and an immutable version snapshot. Outcome fields and predictor fields must remain separate in schemas and exports.

Minimum checks before a row enters an experiment:

1. Every predictor satisfies `available_at <= prediction_at`. A correction made after t must not overwrite the historical input snapshot.
2. A future outcome is measured within the pre-agreed window around t+h. The instrument record is available, scoring is reproducible, and missing responses are handled under the instrument's rules.
3. The student linkage key is stable and obtained under the agreed permissions. If waves cannot be linked, an individual panel is not established.
4. Transformations, imputation, feature selection, and model tuning are fitted within training folds. Neither test labels nor test-set statistics participate.
5. Overlapping windows from the same student are not randomly scattered across train and test. Temporal evaluation uses boundaries and an appropriate gap accounting for both the outcome horizon and aggregation windows.
6. Every exclusion has a recorded reason and row count. Values are not “corrected” using knowledge of future responses.

## Exclusions and prohibited substitutions

| Candidate or practice | Decision | Reason |
| --- | --- | --- |
| Questionnaire items used to calculate the same outcome | Exclude from independent predictors | Reconstructing scoring is not evidence of independent predictive factors. |
| Current burnout score used to “predict” that same current score | Exclude | Direct outcome leakage. |
| Previous burnout score | Permit only in a separate history-based model | A different information setting; compare against persistence. |
| Final GPA, dropout, or help-seeking recorded after t | Exclude | Later outcomes are unavailable at prediction time and represent different constructs. |
| Name, email, or identifier as a model feature | Exclude | Enables memorisation; identity is unnecessary for the predictor. |
| Gender, ethnicity, or medical diagnoses | Exclude from the MVP | Necessity has not been established; any subgroup audit needs separate agreement and sufficient data. |
| Correspondence, psychiatric information, or unnecessary family details | Do not collect | Outside the minimal project scope. |
| Simulated questionnaire responses presented as observations | Exclude from performance evidence | Synthetic records may support interface or schema checks only. |
| Sleep, wearables, or LMS inputs | Defer | Access, protocol, and necessity have not been confirmed for this MVP. |

## Proposed study of feature groups and errors

**Research question:** Do demands and resources provide additional information about the agreed future outcome beyond calendar context and previous state? This is a testable proposal, not a promised improvement.

The proposed work consists of:

- **Semantic audit:** For each item, document its construct, source and permissions, language clarity, overlap with the outcome, and temporal availability. Record an include/exclude/revise decision and rationale for every register entry.
- **Fixed comparison protocol:** Freeze the students and periods used for evaluation, preprocessing rules, model specification, and tuning budget before comparing feature groups.
- **Ablation with a confirmed panel:** Compare **A**, calendar context; **B**, A plus demands; **C**, B plus resources; and **D**, C plus the previous outcome. Include persistence as a separate baseline: the future value equals the last known value. Re-evaluate the relevant alternatives on the same subset with available history so that the value of historical information is not confounded with sample composition.
- **Predefined evaluation:** For a continuous outcome, use MAE as the proposed primary metric and RMSE as secondary, with uncertainty estimates grouped by student. Classification requires a separately justified outcome and threshold; neither may be selected on test data.
- **Paired reporting:** Compare errors on identical test observations and report coverage, student counts, and missingness. A lack of improvement is a valid result and must not lead to retrospective replacement of the primary metric.
- **Error visualisation:** Show distributions, missingness, and errors by period and available history. Do not publish individual personal records.

Completion requires an agreed register, no outcome items in the independent feature block, documented controls on what was available at prediction time, a reproducible comparison configuration, actual metric tables with limitations, and substantive review. At present, the register and protocol have been prepared; data collection, ablation experiments, and resulting findings have not been completed.

The [integrated literature review](../docs/03_literature_review.md) explains the research rationale, while the [research protocol](RESEARCH_PROTOCOL.md) and [dataset audit](dataset_audit.md) define the evidence needed before implementation or modelling proceeds.
