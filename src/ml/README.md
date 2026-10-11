# Machine Learning

This directory is reserved for reproducible preprocessing, baseline models, candidate models, evaluation, explanations, and inference interfaces.

Before implementation, define the outcome, prediction time, horizon, available features, and dataset permissions. Separate students and time as required by the evaluation protocol, and check for information that would not be available at prediction time.

Keep training, evaluation, and inference responsibilities explicit. Record dependencies, random seeds where relevant, dataset versions, commands, and actual results when experiments are introduced.

Trained models, checkpoints, and private datasets are excluded from Git by default. Model selection and claimed performance must be supported by the documented evaluation, not by demonstration screens.
