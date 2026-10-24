# Interview Synthesis

## Record provenance and consent

This synthesis is based on five anonymised discussion records, S01 to S05. Vitaliy Golubenko was identified by the team as the interviewer. The notes describe two face-to-face conversations, two voice conversations and one text conversation with follow-up questions. All five records indicate permission to retain anonymised notes for the academic report.

The supplied dates and interviewer labels need reconciliation; exact session dates have not been confirmed. The prototype is described as a mobile version, but no commit, browser or viewport is established. We therefore report the content of the records without reconstructing dates or assigning the observations to a particular revision. Participant identities and detailed personal context are omitted. The entire synthesis uses paraphrases; S03 did not permit direct quotation.

## Individual records

| Code | Existing approach and example | Requested information and acceptable effort | Visibility preference |
| --- | --- | --- | --- |
| S01 | Tracks messages and occasionally checks the learning portal. Several assignments coincided and one was submitted late. | Needs a better sense of task effort. Would make a very brief update, but not repeatedly enter subject names or complete long forms. | Personal access only; concerned about academic consequences of staff access. |
| S02 | Uses a calendar and notes. Study and other commitments overlapped, and the planned preparation time was insufficient. | Wants earlier notice of busy periods and the work behind calendar entries. Would update a few times weekly; duplicate entry would discourage use. | No identifiable institutional access; aggregate information might be acceptable. |
| S03 | Often relies on messages and remembered dates. Misremembered the closing day of a Moodle task. | Wants a clear overview with minimal manual entry. | A limited status could be shared with an adviser when it leads to practical support, without detailed records. |
| S04 | Uses a task manager and a paper planner. Dividing assignments into stages already works. | Would value task-difficulty information and a short weekly update. Frequent reminders would be unwelcome. | Personal access only. |
| S05 | Checks Moodle and a shared deadline document. A changed due date was not reflected in the shared copy. | Wants current deadlines and brief progress updates. Re-entering information already held by the learning system would be discouraging. | Detailed activity remains personal; aggregate institutional information might be acceptable. |

Four of the five records include a concrete difficulty, while S04 supplies a useful negative case: an existing method can be sufficient. All five favour low effort, but this does not mean they prefer the same frequency or fields. Two favour strictly personal access, two consider aggregate visibility, and one conditionally considers a limited adviser view. These distinctions should be retained rather than reduced to a single preference for sharing.

## Prototype observations and interpretation

The records describe three activities: locating recent information, explaining an unavailable estimate and finding a deletion request. The original notes are descriptive, not a standardised usability test with identical task conditions.

| Observation in the notes | Interpretation and limit |
| --- | --- |
| S01 and S03 initially associated an absent estimate with no risk. S01 reread the text; S03 received a prompt. | Missing output can be mistaken for a favourable result. Independent completion is not established for these explanations. |
| S01, S02, S04 and S05 subsequently described missing data or statistics collection. | The displayed state was not recorded. This could fit an insufficient-data example but does not explain an unavailable model. |
| S02 mentioned a coloured overload indicator. | The published prototype does not calculate an overload or risk indicator. The reference cannot establish an implemented feature or a correct interpretation. |
| The records describe locating observations and data controls without major navigation difficulty. | This is encouraging descriptive feedback, but consistent timing, assistance and task-completion criteria were not recorded. |
| All five accounts distinguish pending deletion from completed deletion. | The narrower distinction appears in the notes. Understanding that no request was sent and no database operation occurs in the prototype was not established. |

The published interface defaults to `model_unavailable`: no suitable evaluated model is enabled. Its separate `insufficient_data` example illustrates a different future condition. Neither produces a score, and neither means low risk. The history chart plots sample study hours, not burnout. A request preview does not send a request to a service.

The recorded interpretations should therefore guide a focused follow-up, not be converted into a five-out-of-five success claim. A repeat walkthrough should identify the prototype commit and displayed state, ask for an explanation before any assistance, and separately check whether a data request was actually sent. It should also verify what the participant thinks the history chart measures.

## Requirements affected

| Requirement | Evidence and consequence |
| --- | --- |
| FR-002, NFR-004 | Keep entry short and examine unnecessary fields; willingness to enter information does not prove sustained use. |
| FR-003, NFR-004 | Make dates, periods and units visible, so workload history is not mistaken for a risk trend. |
| FR-005, NFR-004 | Test the meaning of unavailable model and insufficient input separately. An absent score must not imply zero risk. |
| FR-006, NFR-002 | Distinguish preview, submitted request, pending processing and completed operation. |
| NFR-001, NFR-002 | Retain personal access and data minimisation. Any later sharing needs a separate purpose and access decision. |
| Future integration scope | Moodle and calendar synchronisation are candidates to investigate, with access and changing-deadline behaviour still unresolved. |

These observations support refinement of the first interface. They do not validate a burnout instrument, demonstrate predictive accuracy or represent all university students.
