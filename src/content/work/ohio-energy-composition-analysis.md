---
title: Ohio Energy Composition Analysis
summary: Unsupervised learning applied to county-level electricity generation data to discover energy-generation archetypes across Ohio.
problem: Do Ohio counties naturally separate into distinct energy-generation profiles?
methods:
  - Python
  - PCA
  - t-SNE
  - Clustering
  - GeoPandas
status: completed
order: 8
thumbnail: /images/work/ohio-energy-composition-thumbnail.png
links:
  - label: Repository & full analysis on GitHub
    href: https://github.com/SARAH-GAKII/ohio-energy-composition-unsupervised-learning/blob/main/ohio_energy_composition_unsupervised_analysis.ipynb
---

## Overview

Ohio's electricity generation landscape is far from uniform. Different counties rely on very different combinations of natural gas, coal, nuclear power, renewables, and other fuels, making statewide averages a poor representation of local generation patterns.

This project uses unsupervised learning to investigate whether meaningful structure emerges from those differences. Rather than predicting a predefined outcome, the analysis represents each county by its electricity-generation mix and asks whether counties naturally organize into distinct energy archetypes.


## Data & Feature Engineering

Publicly available U.S. Energy Information Administration data was used to construct county-level generation profiles.

Plant-level generation records from EIA-923 were combined with EIA-860 plant metadata, aggregated geographically, and grouped into five broad fuel categories:

- Coal
- Natural Gas
- Nuclear
- Renewables
- Other fuels

Generation was then normalized within each county to create fuel-share features. This allows counties to be compared by the composition of their electricity generation rather than by absolute generation volume.

The resulting dataset contains 67 Ohio counties with recorded generation and reveals substantial heterogeneity: many counties generate almost entirely from one dominant fuel category, while others have more mixed profiles.

## Exploring the Structure

Before clustering, PCA and t-SNE were used to examine the geometry of the county-level energy profiles.

PCA provided a linear view of the dominant sources of variation in the data and showed strong contrasts between major fuel types. t-SNE provided a complementary nonlinear view, making local groupings and separation between county profiles easier to inspect.

Together, these methods suggested that the variation in Ohio's county-level energy mix was structured rather than continuous or random.


## Clustering

Three clustering approaches were applied independently:

- **K-Means** to identify centroid-based groupings
- **K-Medoids** to test whether similar structure remained when clusters were represented by actual observations
- **Hierarchical clustering** using Ward linkage to examine the nested relationships among county profiles

Cluster quality and structure were evaluated using inertia, silhouette analysis, dendrogram structure, and cophenetic correlation.

Comparing multiple algorithms was important: agreement between fundamentally different clustering methods provides stronger evidence that the resulting groups reflect structure in the data rather than the behavior of a single algorithm.

<div class="prose-image-row">
  <div class="prose-image-row__item">
    <img src="/images/work/ohio-energy-archetypes-kmeans.png" alt="K-Means clustering visualization grouping Ohio counties into energy-generation archetypes" loading="lazy" />
  </div>
  <div class="prose-image-row__item">
    <img src="/images/work/ohio-energy-archetypes-tsne-visualization.png" alt="t-SNE visualization showing nonlinear separation of Ohio county energy-generation profiles" loading="lazy" />
  </div>
  <div class="prose-image-row__item">
    <img src="/images/work/ohio-energy-archetypes-hierarchical-dendogram.png" alt="Hierarchical clustering dendrogram of Ohio county energy-generation profiles using Ward linkage" loading="lazy" />
  </div>
</div>

## Energy Archetypes

Across the clustering approaches, five interpretable county profiles consistently emerged:

- **Renewables-dominant**
- **Natural-gas-dominant**
- **Coal-dominant**
- **Nuclear-dominant**
- **Mixed-profile**

Natural gas and renewable generation were widespread across the counties in the dataset, while coal and nuclear generation were much more geographically concentrated.

Some counties approached complete dependence on a single generation category, illustrating how strongly localized Ohio's electricity-generation infrastructure can be.

## Key Findings

- Ohio's county-level electricity generation exhibits clear structure based on dominant fuel composition.
- Five interpretable energy archetypes emerge consistently across K-Means, K-Medoids, and hierarchical clustering.
- Natural gas and renewables account for much of the variation across counties, while coal and nuclear generation are concentrated in relatively few locations.
- Many county profiles are highly specialized, with electricity generation dominated almost entirely by one fuel group.
- Agreement across multiple clustering methods provides evidence that the identified archetypes reflect stable underlying patterns rather than artifacts of a particular algorithm.

## Why It Matters

Statewide energy statistics can obscure substantial regional differences.

Segmenting counties by their generation profiles provides a more interpretable view of Ohio's energy landscape and creates a foundation for further analysis of geographic patterns, infrastructure dependence, energy-transition pathways, and regional policy differences.

The project demonstrates how unsupervised learning can turn a complex collection of regional energy data into a smaller set of meaningful and interpretable structural patterns.

## Tools & Techniques

Python, pandas, NumPy, scikit-learn, scikit-learn-extra, PCA, t-SNE, K-Means, K-Medoids, Hierarchical Clustering, GeoPandas, Matplotlib, Seaborn
