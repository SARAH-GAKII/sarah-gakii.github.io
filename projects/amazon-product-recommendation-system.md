---
layout: default
title: Amazon Product Recommendation System
---

<div class="page-shell">

  <aside class="sidebar section-nav">
    <div class="section-nav-inner">
      <p class="section-nav-label">Explore</p>
      <h2>Project Gallery</h2>
      <a class="section-nav-link" href="/projects/">←  More Projects</a>
    </div>
  </aside>

  <div class="content" markdown="1">
    
# Amazon Product Recommendation System {#amazon-product-recommendation-system}

Built a recommendation system using Amazon product review data to predict user preferences and generate personalized product recommendations.

#### Overview
Recommendation systems help e-commerce platforms reduce information overload by suggesting products that users are most likely to purchase.  
This project explores collaborative filtering techniques to model user–item interactions and produce personalized recommendations. 

#### Dataset
The dataset contains Amazon electronics product reviews with the following attributes:

- `user_id` – unique user identifier  
- `prod_id` – unique product identifier  
- `rating` – user rating of the product  


#### Approach
Multiple recommendation strategies were implemented and evaluated:
- Popularity-based recommendation (baseline)
- User–User Collaborative Filtering (KNN)
- Item–Item Collaborative Filtering (KNN)
- Matrix Factorization (SVD)

Models were evaluated using:
- RMSE  
- Precision@10  
- Recall@10  
- F1-score@10

🔗 [Notebook & repository on GitHub](https://github.com/SARAH-GAKII/amazon-product-recommendation-system/blob/main/Amazon_Product_Recommendation_System.ipynb) 

#### Key Findings
The SVD model achieved the lowest prediction error while maintaining strong recommendation quality, indicating that latent factor models capture user–item preferences more effectively than neighborhood-based methods.

#### Tools and technologies
Python, pandas, NumPy, scikit-learn, Surprise, Collaborative Filtering, Matrix Factorization (SVD), Matplotlib, Seaborn 

  </div>
</div>
