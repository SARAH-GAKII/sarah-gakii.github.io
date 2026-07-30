---
title: Ohio Energy Composition Analysis
summary: Unsupervised learning applied to county-level electricity generation data to discover energy-generation archetypes across Ohio.
problem: What structure exists in Ohio's regional energy mix, and how does it cluster?
methods:
  - Python
  - PCA
  - t-SNE
  - Clustering
  - GeoPandas
status: completed
order: 4
thumbnail: /images/work/ohio-energy-composition-thumbnail.png
links:
  - label: Repository & full analysis on GitHub
    href: https://github.com/SARAH-GAKII/ohio-energy-composition-unsupervised-learning/blob/main/ohio_energy_composition_unsupervised_analysis.ipynb
---

## Overview

This project applies unsupervised learning to county-level electricity generation patterns across Ohio, using publicly available U.S. Energy Information Administration (EIA) data. Rather than predicting outcomes, the focus is on discovering structure — identifying energy-generation archetypes and testing whether meaningful groupings emerge across counties.

## Project Focus

Ohio's energy landscape is highly heterogeneous, with generation dominated by different fuel sources county to county. Statewide summaries mask these differences; this analysis investigates whether counties naturally cluster based on energy composition.

## Methodology

- Merged EIA-923 generation data with EIA-860 plant metadata
- Aggregated plant-level data to the county level
- Engineered fuel-share features (normalized energy composition per county)
- Applied feature scaling to support distance-based methods
- Used PCA to assess intrinsic dimensionality and dominant variance directions
- Used t-SNE for neighborhood-level visualization
- Clustered using K-Means, K-Medoids, and hierarchical clustering (Ward linkage)
- Validated cluster structure using inertia, silhouette scores, dendrogram, and cophenetic correlation

![Ohio energy composition cluster visualization](/images/work/ohio-energy-composition-thumbnail.png)

## Key Insights

- Ohio counties consistently separate into five energy archetypes: renewables-dominant, natural-gas-dominant, coal-dominant, nuclear-dominant, and mixed-profile.
- Cluster structures are stable across all three clustering methods, indicating robust underlying patterns.
- Energy generation is highly concentrated geographically, with many counties relying almost entirely on a single dominant fuel source.

## Tools & Techniques

Python, pandas, NumPy, scikit-learn, scikit-learn-extra, PCA, t-SNE, K-Means, K-Medoids, Hierarchical Clustering, GeoPandas, Matplotlib, Seaborn
