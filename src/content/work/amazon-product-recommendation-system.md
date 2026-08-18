---
title: Amazon Product Recommendation System
summary: A recommendation system built on Amazon product review data, comparing collaborative filtering approaches to predict user preferences.
problem: What does a useful recommendation require when user signals are sparse?
methods:
  - Python
  - Surprise
  - SVD
  - Collaborative Filtering
status: completed
order: 4
thumbnail: /images/work/amazon-recommendation-system-thumbnail.png
links:
  - label: Notebook & repository on GitHub
    href: https://github.com/SARAH-GAKII/amazon-product-recommendation-system/blob/main/Amazon_Product_Recommendation_System.ipynb
---

## Overview

Recommendation systems help e-commerce platforms reduce information overload by surfacing the products a user is most likely to want. With most users rating only a small fraction of available products, the challenge is learning enough from those limited interactions to make useful recommendations. This project compares collaborative filtering approaches using Amazon electronics review data to predict user preferences and generate personalized recommendations.

## Dataset


The original dataset: Amazon electronics product reviews, with `user_id`, `prod_id`, and `rating` fields, contained 7,824,482 product ratings. To create a more usable interaction set for collaborative filtering, I retained users with at least 50 ratings and products with at least 5 ratings. The resulting dataset contained 65,290 ratings from 1,540 users across 5,689 products.

Ratings were on a 1–5 scale and were heavily concentrated toward the upper end, with an average rating of approximately 4.29.

## Approach

## Approach

The analysis began with a rank-based recommendation system as a non-personalized baseline, followed by three personalized collaborative filtering approaches:

- User–user collaborative filtering using KNN
- Item–item collaborative filtering using KNN
- Matrix factorization using SVD

The user–user and item–item models were tuned using grid-search cross-validation. SVD was also evaluated before and after hyperparameter tuning.

Performance was assessed using RMSE for rating prediction and Precision@10, Recall@10, and F1@10 for recommendation quality.

## Results

| Model | RMSE | Precision@10 | Recall@10 | F1@10 |
| --- | ---: | ---: | ---: | ---: |
| User–User KNN (Tuned) | 0.9791 | 0.842 | 0.808 | 0.825 |
| Item–Item KNN (Tuned) | 0.9804 | 0.833 | 0.800 | 0.816 |
| SVD | 0.9114 | 0.854 | 0.802 | 0.827 |
| SVD (Optimized) | 0.9043 | 0.853 | 0.802 | 0.827 |

The optimized SVD model achieved the lowest RMSE while maintaining strong Precision@10, Recall@10, and F1@10, making it the strongest overall model in this comparison.

## Key Findings

- Matrix factorization produced substantially lower rating-prediction error than either of the tuned KNN approaches.
- User–user and item–item collaborative filtering remained competitive on top-10 recommendation quality, despite their higher RMSE.
- Sparse overlap affected the neighborhood-based methods. In some user–item cases, the tuned user–user model could not form a sufficiently large neighborhood and fell back to a non-personalized estimate.
- SVD did not depend on direct neighbor overlap and could produce personalized predictions across the evaluated user–item cases.
- Hyperparameter tuning improved SVD's RMSE, but changed its top-10 recommendation metrics very little.

## Limitations & Next Steps

The system relies only on user–product ratings, so it cannot use information about the products themselves when interaction history is limited. A natural extension would be a hybrid recommendation system that combines collaborative filtering with product attributes, particularly for users or products with little or no rating history.


## Tools

Python, pandas, NumPy, scikit-learn, Surprise, Collaborative Filtering, Matrix Factorization (SVD), Matplotlib, Seaborn
