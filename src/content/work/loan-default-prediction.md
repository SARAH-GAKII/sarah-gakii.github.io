---
title: Loan Default Prediction
summary: A comparison of classification models for predicting home-equity loan default, built for interpretability alongside predictive performance.
problem: Which home-equity loan applicants are likely to default, and which borrower signals actually predict it?
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

Lending institutions have to decide whether to approve a loan without being able to observe the future. This project builds and compares several classification models to predict whether a home-equity loan applicant is likely to default, using the HMEQ dataset of historical loan applications. Predictive performance alone wasn't the goal: a lending decision needs a defensible reason, so interpretability was treated as a requirement alongside precision and ROC AUC.

## Dataset & Target

The HMEQ dataset records 12 borrower and loan characteristics for 5,960 home-equity applicants, including loan amount, property value, existing mortgage balance, debt-to-income ratio (DEBTINC), years at current job (YOJ), and credit history variables (DEROG, DELINQ, NINQ, CLAGE, CLNO). The target, BAD, marks whether a loan was ultimately defaulted or seriously delinquent. The dataset is imbalanced, about 20% of applicants (1,189 of 5,960) defaulted, which shaped both the modeling approach and the choice of evaluation metrics.

## Exploratory Findings

- `DELINQ` and `DEROG`, the delinquent-credit-line and derogatory-report counts, showed the strongest linear correlation with default (roughly 0.35 and 0.28), followed by `DEBTINC` (roughly 0.20) and `NINQ` (roughly 0.17).
- Both `DEROG` and `DELINQ` are zero-inflated: most applicants have zero, and default rates jump sharply as soon as either value moves above zero, functioning more like threshold indicators than continuous scores.
- `DEBTINC`'s distribution separated the two classes clearly, with defaulters skewing toward higher debt-to-income ratios.
- Missing `DEBTINC` values were not random: applicants missing a debt-to-income figure defaulted at a materially higher rate than those who reported one, so the missing-value pattern itself carries signal.
- `CLAGE` (age of the oldest credit line) correlated negatively with default (roughly -0.17), longer credit histories corresponded to lower risk, while `LOAN`, `MORTDUE`, and `VALUE` showed little standalone separation between classes and `MORTDUE`/`VALUE` were highly collinear with each other (roughly 0.88).

## Modeling Approach

Missing values were handled variable by variable rather than with one blanket rule, based on whether missingness itself carried predictive signal: `DEBTINC`'s missingness was preserved as an indicator rather than imputed away, while a sparser, non-informative variable like `NINQ` was imputed with 0. Outliers were winsorized at the 1st and 99th percentiles rather than removed, limiting the influence of extreme values without discarding observations.

Five model variants were compared: logistic regression, a baseline decision tree, a tuned decision tree, a random forest, and a tuned random forest. Because a missed defaulter (false negative) is costlier to a lender than an unnecessarily flagged good applicant (false positive), evaluation prioritized recall on the default class alongside precision, F1, and ROC-AUC, and each model's decision threshold was tuned rather than left at the default 0.50.

## Model Comparison

| Model | Threshold | Accuracy | Precision | Recall | F1-score | ROC-AUC |
| --- | --- | --- | --- | --- | --- | --- |
| Logistic Regression | 0.35 | 82.5% | 54.6% | 70.3% | 61.5% | 83.7% |
| Decision Tree | 0.50 | 89.1% | 71.2% | 72.1% | 71.7% | 82.9% |
| Tuned Decision Tree | 0.50 | 90.1% | 74.0% | 74.0% | 74.0% | 85.0% |
| **Random Forest** | **0.37** | **90.3%** | **75.5%** | **75.9%** | **75.7%** | **95.0%** |
| Tuned Random Forest | 0.37 | 88.6% | 67.5% | 80.4% | 73.4% | 94.3% |

The baseline Random Forest at a 0.37 threshold gave the strongest overall discrimination (ROC-AUC) and the best balance of precision and recall. The tuned Random Forest traded some precision for higher recall, catching more true defaulters at the cost of flagging more creditworthy applicants for review.

![Confusion matrix for the selected Random Forest model at a 0.37 threshold](/images/work/loan-default-confusion-matrix.png)

## Key Predictors

![Grouped feature importance from the Random Forest model, led by debt-to-income ratio](/images/work/loan-default-key-drivers.png)

Once the Random Forest captures nonlinear structure and feature interactions, debt-to-income ratio dominates the ranking by a wide margin, by nearly three times the importance of the next-ranked feature. Property value, credit history length, existing mortgage balance, delinquent credit lines, and loan amount follow as secondary but meaningful contributors. Demographic and categorical features, job type and loan purpose, ranked lowest, indicating the model distinguishes higher- and lower-risk borrowers primarily through a borrower's current financial position and credit behavior than by who they are or why they're borrowing.

## Practical Interpretation & Limitations

Debt-to-income ratio was by far the most influential feature, followed by property value, credit history length, mortgage balance, delinquent credit lines, and loan amount. Before grouping the engineered features, the missing-value indicator for DEBTINC ranked as the single most important individual feature, suggesting that whether debt-to-income information was available carried predictive value in addition to the reported ratio itself.

The choice of threshold is a lending-policy decision. Moving the Random Forest's threshold from 0.50 to 0.37 traded precision for meaningfully higher recall, catching more true defaulters at the cost of flagging more good applicants for additional review. There's no threshold-free "correct" answer, only a trade-off a lender should set deliberately based on the relative cost of a missed default versus a rejected creditworthy applicant.

This is a predictive-risk model. The associations identified here, for example between `DEBTINC` and default, are statistical patterns in a specific historical dataset, not proof that changing a borrower's debt-to-income ratio would change their risk. The model is intended to support human underwriting decisions and risk-based review, rather than to automatically approve or deny applicants; any real lending use would need a defined process for human review of borderline cases and ongoing monitoring for drift.

## Tools

Python, pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Logistic Regression, Decision Trees, Random Forest, Threshold Tuning
