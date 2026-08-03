---
title: Amazon Product Recommendation System
summary: A recommendation system built on Amazon product review data, comparing collaborative filtering approaches to predict user preferences.
problem: How do you recommend the right product from sparse, incomplete user signal?
methods:
  - Python
  - Surprise
  - SVD
  - Collaborative Filtering
status: completed
order: 4
links:
  - label: Notebook & repository on GitHub
    href: https://github.com/SARAH-GAKII/amazon-product-recommendation-system/blob/main/Amazon_Product_Recommendation_System.ipynb
---

## Overview

Recommendation systems help e-commerce platforms reduce information overload by surfacing the products a user is most likely to want. This project explores collaborative filtering techniques to model user–item interactions from Amazon electronics review data and produce personalized recommendations.

## Dataset

Amazon electronics product reviews, with `user_id`, `prod_id`, and `rating` fields.

## Approach

Four recommendation strategies were implemented and compared:

- Popularity-based recommendation (baseline)
- User–user collaborative filtering (KNN)
- Item–item collaborative filtering (KNN)
- Matrix factorization (SVD)

Models were evaluated using RMSE, Precision@10, Recall@10, and F1-score@10.

## Key Findings

The SVD model achieved the lowest prediction error while maintaining strong recommendation quality, indicating that latent factor models capture user–item preferences more effectively than neighborhood-based methods on this dataset.

## Tools

Python, pandas, NumPy, scikit-learn, Surprise, Collaborative Filtering, Matrix Factorization (SVD), Matplotlib, Seaborn
