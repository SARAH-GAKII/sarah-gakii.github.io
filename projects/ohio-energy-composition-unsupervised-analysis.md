---
layout: default
title: Ohio Energy Composition Analysis (Unsupervised Learning)
---

<div class="page-shell">

  <aside class="sidebar">
    <h2>Project Navigation</h2>
    <a href="/projects/">← Explore More Projects </a>
  </aside>

  <div class="content" markdown="1">
    
# Ohio Energy Composition Analysis (Unsupervised Learning) {#ohio_energy_composition_unsupervised_analysis}

This project applies unsupervised learning to explore county-level electricity generation patterns across Ohio using publicly available U.S. Energy Information Administration (EIA) data.  
Rather than predicting outcomes, the focus is on discovering structure, identifying energy-generation archetypes, and assessing whether meaningful groupings emerge across counties.

🔗 [Repository & full analysis on GitHub](https://github.com/SARAH-GAKII/ohio-energy-composition-unsupervised-learning/blob/main/ohio_energy_composition_unsupervised_analysis.ipynb) 


#### Project Focus  
Ohio’s energy landscape is highly heterogeneous, with generation dominated by different fuel sources. Statewide summaries can mask these differences. This analysis investigates whether counties naturally cluster based on energy composition.

#### Methodology  
- Merged EIA-923 generation data with EIA-860 plant metadata  
- Aggregated plant-level data to the county level  
- Engineered fuel-share features (normalized energy composition per county)  
- Applied feature scaling to support distance-based methods  
- Used PCA to assess intrinsic dimensionality and dominant variance directions  
- Used t-SNE for neighborhood-level visualization  
- Performed clustering using:
  - K-Means  
  - K-Medoids  
  - Hierarchical Clustering (Ward linkage)  
- Validated cluster structure using inertia, silhouette scores, dendrogram, and cophenetic correlation

  <img width="400" height="200" alt="ohio_energy_composition_unsupervised_analysis_Thumbnail" src="assets/ohio_energy_composition_unsupervised_analysis_Thumbnail.png" />

#### Key Insights  
- Ohio counties consistently separate into five energy archetypes:
  - Renewables-dominant  
  - Natural-gas-dominant  
  - Coal-dominant  
  - Nuclear-dominant  
  - Mixed-profile  
- Cluster structures are stable across all three clustering methods, indicating robust underlying patterns.  
- Energy generation is highly concentrated geographically, with many counties relying almost entirely on a single dominant fuel source.

#### Tools & Techniques  
Python, pandas, NumPy, scikit-learn, scikit-learn-extra, PCA, t-SNE, K-Means, K-Medoids, Hierarchical Clustering, GeoPandas, Matplotlib, Seaborn

  </div>
</div>
