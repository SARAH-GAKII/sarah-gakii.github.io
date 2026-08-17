---
title: Loan Default Prediction
summary: A comparison of classification models for predicting home-equity loan default, with attention to model performance, interpretability, and the trade-offs involved in identifying high-risk borrowers.
problem: What can a borrower’s financial history tell us about a default that hasn’t happened yet?
methods:
  - Python
  - Scikit-learn
  - Logistic Regression
  - Random Forest
  - Threshold Tuning
status: completed
order: 5
thumbnail: /images/work/loan-default-confusion-matrix.png
links:
  - label: View project notebook on GitHub
    href: https://github.com/SARAH-GAKII/loan-default-prediction/blob/main/Loan_Default_Prediction_Notebook.ipynb
---

## Overview

Loan default prediction is not only a classification problem. The consequences of different errors matter. Missing a borrower who later defaults carries a different cost from flagging a borrower who would have repaid.

This project uses historical home-equity loan data to examine borrower risk signals, compare several classification models, and explore how changing the classification threshold affects the trade-off between identifying more defaulters and incorrectly flagging more non-defaulters.


## Dataset & Target

The HMEQ dataset contains 5,960 home-equity loan records with 12 borrower and loan characteristics. These include loan amount, property value, existing mortgage balance, debt-to-income ratio (`DEBTINC`), years at the current job (`YOJ`), and credit-history variables such as `DEROG`, `DELINQ`, `NINQ`, `CLAGE`, and `CLNO`.

The target variable, `BAD`, indicates whether an applicant ultimately defaulted or became seriously delinquent. This occurred in 1,189 cases, approximately 20% of the dataset, creating a substantial class imbalance.


## Exploratory Findings

Several patterns emerged before modeling:

- `DELINQ` and `DEROG`, which capture delinquent credit lines and major derogatory reports, showed some of the clearest relationships with default.
- Higher debt-to-income ratios were associated with higher default risk, making `DEBTINC` an important signal throughout the analysis.
- Longer credit histories, represented by `CLAGE`, were generally associated with lower default rates.
- Loan amount alone showed relatively little separation between defaulters and non-defaulters compared with measures of debt burden and credit behavior.
- Missingness was not always neutral. For several financial variables, including `DEBTINC` and property value, whether a value was missing carried information about default risk.

These patterns informed both feature preparation and the later interpretation of the models.


## Modeling Approach

Missing values were handled according to the behavior of individual variables rather than with a single imputation rule. Where missingness appeared informative, a separate missing-value indicator was retained before imputation.

Selected continuous variables with extreme values were capped at the upper 99th percentile rather than removing observations, limiting the influence of unusually large values while preserving the records.

Logistic regression, decision tree, and random forest models were then developed and compared, including tuned variants. Because the dataset is imbalanced and the cost of missing a defaulter may be substantial, model evaluation considered precision, recall, F1-score, and ROC-AUC rather than accuracy alone.

Decision thresholds were also examined explicitly. This made it possible to evaluate how each model's behavior changed when greater emphasis was placed on detecting defaulters.


## Model Comparison

| Model | Threshold | Accuracy | Precision | Recall | F1-score | ROC-AUC |
| --- | --- | --- | --- | --- | --- | --- |
| Logistic Regression | 0.35 | 82.5% | 54.6% | 70.3% | 61.5% | 83.7% |
| Decision Tree | 0.50 | 89.1% | 71.2% | 72.1% | 71.7% | 82.9% |
| Tuned Decision Tree | 0.50 | 90.1% | 74.0% | 74.0% | 74.0% | 85.0% |
| **Random Forest** | **0.37** | **90.3%** | **75.5%** | **75.9%** | **75.7%** | **95.0%** |
| Tuned Random Forest | 0.37 | 88.6% | 67.5% | 80.4% | 73.4% | 94.3% |

TThe Random Forest at a 0.37 threshold provided the strongest overall balance in this comparison. It achieved the highest ROC-AUC and F1-score while identifying approximately 76% of defaulters.

The tuned Random Forest at the same threshold increased recall to approximately 80%, but precision fell to approximately 66%. This illustrates the practical consequence of threshold choice: identifying more true defaulters also means flagging more applicants who would not have defaulted.


![Confusion matrix for the selected Random Forest model at a 0.37 threshold](/images/work/loan-default-confusion-matrix.png)

## Key Predictors

![Grouped feature importance from the Random Forest model, led by debt-to-income ratio](/images/work/loan-default-key-drivers.png)

Debt-to-income ratio emerged as the strongest predictor in the Random Forest, followed by variables including property value, credit-history length, mortgage balance, delinquent credit lines, and loan amount.

The analysis also showed why missing values should not automatically be treated as a data-cleaning nuisance. Before related engineered features were grouped for interpretation, the missing-value indicator for `DEBTINC` ranked highly in the model, suggesting that the availability of debt-to-income information itself contained predictive signal in this dataset.


## Practical Interpretation

The analysis points to two different questions: how well a model separates higher-risk from lower-risk applicants, and where the decision threshold should be placed.

The Random Forest produced the strongest overall discrimination, with a ROC-AUC of approximately 0.95. Lowering its classification threshold from 0.50 to 0.37 increased recall from approximately 66% to 76%, while precision fell from approximately 81% to 75%.

Neither threshold is universally correct. The choice depends on the relative cost assigned to missed defaults and false alarms. A lender placing greater emphasis on detecting potential defaults could choose a lower threshold, while accepting that more non-defaulters would also be flagged for review.


## Considerations & Next Steps

The results are based on the historical HMEQ dataset, so model performance and predictor relationships reflect the borrower population represented in that data. Before applying the model to a different lending population, its performance would need to be validated on more recent and representative data.

The threshold analysis also shows that model deployment would require an explicit decision policy. A lower threshold identifies more potential defaulters but sends more non-defaulters for additional review, so the operating threshold should reflect the relative cost of those outcomes.

Further development could extend the analysis to model calibration, fairness across relevant borrower groups, stability over time, and monitoring for changes in data and model performance.

## Tools

Python, pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Logistic Regression, Decision Trees, Random Forest, Threshold Tuning
