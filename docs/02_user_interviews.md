# 02. User Interviews and Evidence of Relevance

## Purpose and method

We examined how students organise deadlines, estimate the work ahead and decide what information to share. The evidence consists of nine questionnaire submissions and five anonymised interview records, S01 to S05. Students were recruited through the team's existing contacts, so this is a small convenience sample.

The [Russian questionnaire](https://forms.gle/LZZL73VuXMRriJzs7) was published on 23 October 2026. Its summary showed nine submissions when checked on 24 October. All nine included the participation acknowledgement. Eight substantive questions were optional; the form did not request names, email addresses, groups, grades or medical information. Because identities were not collected, we cannot verify that every submission represents a different person or identify overlap with the interviews. The two sources are therefore analysed separately.

Vitaliy Golubenko conducted the five discussions. The records indicate permission to retain anonymised notes and cover face-to-face, voice and text conversations. We use paraphrases throughout, including S03, who did not permit direct quotation. Exact session dates and the prototype revision shown have not been confirmed, so no chronology or revision-specific completion rate is inferred from the notes. The [evidence register](evidence/README.md) links the instrument summary, aggregate counts and interview synthesis.

## Questionnaire findings

The following counts use nine submissions as the denominator. Multiple selections were permitted for tools and acceptable inputs, so those counts do not add up to nine.

| Topic | Recorded result | Implication for the design |
| --- | --- | --- |
| Current tools | 6 selected Moodle or another learning system; 4 rely on memory; 3 use a task list. | Students already have ways to obtain deadlines. The platform should help interpret workload and avoid requiring unnecessary re-entry. |
| Difficulty seeing upcoming tasks and deadlines | 4 selected often, 2 sometimes, 1 rarely and 2 never. | The need varies. A useful design should support students who struggle without assuming that every student needs another planner. |
| Acceptable input | 7 selected tasks and deadlines; 4 study time; 4 a personal workload rating. | Keep entry brief and explain why each field is useful. These selections do not validate a burnout questionnaire. |
| Preferred entry frequency | 3 selected daily, 3 several times weekly and 3 weekly. | A compulsory daily routine would not fit all stated preferences. |

Seven submissions contained text for current planning, missing information and university support; eight contained text for visibility. Some entries were only punctuation or otherwise non-substantive. These counts indicate completion of a field, not the number of meaningful themes. We do not quote or infer preferences from text that was not substantively coded. The full closed-question counts are in the [survey results](evidence/survey_results.md).

## Interview findings

Four records describe a recent planning difficulty. S04 reports a method that works, which is an important counterexample to a universal need for the proposed application.

| Record | Experience and requested information | Input and visibility preferences |
| --- | --- | --- |
| S01 | Tasks are spread across messages and a learning portal. Several deadlines coincided; task effort was harder to judge than the due date. | Very short entries; personal access only. |
| S02 | Calendar entries did not show the amount of study work needed when commitments overlapped. Earlier notice of busy periods would help. | Brief updates several times a week; no identifiable institutional access. |
| S03 | An incorrectly remembered Moodle deadline led to a missed task. A clear overview was preferred to detailed manual planning. | Minimal entry; a limited status could be shared with an adviser only for useful support. |
| S04 | Breaking work into stages already supported planning. Estimated task difficulty was still useful; frequent reminders were unwelcome. | A short weekly update; personal access only. |
| S05 | A shared deadline record was not updated after dates changed. The participant wanted current information from the learning system. | One or two actions per update; detailed activity remains private. |

All five records favour low input effort, but the preferred frequency differs. Two favour strictly personal records, two would consider aggregate institutional information, and one would consider a limited adviser view. These views support personal access as the default. They do not establish consent to collect real records for a pilot or to share them with the university.

## Prototype observations

The notes describe finding recent observations, interpreting an unavailable forecast and viewing a deletion request. They suggest that navigation was generally understandable, but the result screen needs closer testing. S01 and S03 initially interpreted the absence of an estimate as an absence of risk. Several explanations then referred to insufficient data or ongoing statistics collection. The notes do not establish whether the default `model_unavailable` screen or the separate `insufficient_data` example was displayed.

Those states mean different things. The current prototype has no enabled model and produces no numerical risk score. One record mentions a coloured overload indicator, which the published prototype does not provide. We retain this as an unresolved interpretation rather than evidence of a working forecast. The records suggest that participants did not regard deletion as completed, but they do not establish that everyone understood that the prototype sends no request at all. These observations are not a standardised usability score or five successful task completions.

## Effect on requirements and next checks

| Evidence | Requirement or scope decision | Next check |
| --- | --- | --- |
| Brief input is preferred; frequency varies across the questionnaire and interviews. | FR-002 and NFR-004: retain a short form and avoid an unexplained daily obligation. | Observe an entry task without assistance and ask which fields felt unnecessary. |
| Deadlines alone may conceal task effort, while S04 already has a useful planning method. | FR-003: show dates and units clearly; do not label a workload chart as burnout or risk. | Ask participants to explain a history entry and what the chart measures. |
| Missing estimates were confused with low risk or insufficient data. | FR-005 and NFR-004: preserve distinct model and input states, without a score. | Show each state separately, record the displayed state, and ask for an unprompted explanation. |
| Visibility preferences differ and personal access is repeatedly preferred. | NFR-001 and NFR-002: keep owner access and data minimisation as the baseline. | Review sharing scenarios separately before considering adviser access. |
| Participants distinguished pending deletion from completion, but simulation awareness was unclear. | FR-006: distinguish a preview, a submitted request and a completed operation. | Ask whether anything was sent, whether records remain and what confirmation would mean. |
| S02 and S05 raised synchronisation and duplicate entry. | Keep Moodle/calendar imports as a later extension. | Check actual access arrangements and changing-deadline cases before adding an integration requirement. |

This evidence gives a practical basis for refining the workflow, especially entry effort, private access and result wording. It does not estimate the prevalence of burnout, validate a psychological instrument or demonstrate predictive performance. Confirming the session metadata and repeating the ambiguous walkthrough tasks will make the usability evidence more precise.

The result wording has since been revised to distinguish these states explicitly. The [prototype verification record](evidence/prototype_checks.md) documents the browser checks; the revision has not yet been retested with participants.
