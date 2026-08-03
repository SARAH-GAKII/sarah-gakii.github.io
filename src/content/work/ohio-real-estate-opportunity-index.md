---
title: Ohio Real Estate Opportunity Index
summary: A weighted, county-level index combining growth, affordability, and housing-market indicators to compare investment potential across the 88 Ohio counties.
problem: Which Ohio counties show the strongest combination of growth and affordability signals, and how do you compare that fairly across all 88 counties at once?
methods:
  - Python
  - Power BI
  - DAX
  - Index Construction
  - GeoPandas
status: completed
order: 4.5
thumbnail: /images/work/ohio-opportunity-index-heatmap.png
links:
  - label: View the project on GitHub
    href: https://github.com/SARAH-GAKII/ohio-real-estate-opportunity-index
---

## Overview

Ohio's 88 counties differ sharply in growth trajectory and housing-market pressure. Some combine rising population, income, and home values; others face flat demand or affordability strain. Comparing counties on any single metric, home-price appreciation alone, or income growth alone, can be misleading, since a county can look strong on one dimension and weak on another. This project builds a single, weighted Opportunity Index that combines six housing and demographic indicators into one comparable score per county, then presents the results through an interactive Power BI dashboard. 

## Why a Single Metric Isn't Enough

A county with fast-rising home prices might simply be recovering from a low, distressed base, or might be pricing out the population that would sustain further growth. A county with strong population growth might still carry high vacancy or weak rent growth. Scoring counties on a composite index rather than any one number is a way to surface counties that look strong across several dimensions at once, rather than favoring whichever single metric happens to be trending.

## Data & Time Horizon

The analysis combines county-level data from the American Community Survey (ACS) and Zillow's housing datasets. The published dashboard reflects a 2024 snapshot rather than a multi-year time series.

## Indicator Construction

Six indicators feed the index, each capturing a different dimension of a local housing market: home price appreciation, population growth, income growth, rent growth, vacancy rate, and an affordability ratio (housing cost relative to income). Each variable was standardized before weighting, so that indicators measured in different units, percentage growth rates against dollar values, contributed proportionally.

## Weighting Framework

| Indicator | Weight |
| --- | --- |
| Home Price Appreciation | 25% |
| Population Growth | 20% |
| Income Growth | 20% |
| Rent Growth | 15% |
| Vacancy Rate | 10% |
| Affordability Ratio | 10% |

Home price appreciation and the two growth indicators, population and income, carry the most weight, reflecting their role as the clearest signals of underlying market momentum. Vacancy and affordability act as smaller corrective signals rather than primary drivers. The weights were set analytically rather than derived empirically, a choice discussed further under Limitations.

## Dashboard & County Exploration

The standardized, weighted scores were combined into a single Opportunity Index and used to rank all 88 counties from highest to lowest, then split into four tiers (Very High, High, Moderate, Low) of 22 counties each. The Power BI dashboard presents this through two views: a statewide overview and a county-level explorer.

![Statewide dashboard overview, showing the Opportunity Index distribution by tier, the county map, and the top and bottom ten ranked counties](/images/work/ohio-opportunity-dashboard-overview.jpg)

The overview page summarizes statewide averages (an average home value of roughly $213K and an average vacancy rate near 9.6% across counties), the four-tier distribution of the index, a color-coded county map, and the ten highest- and lowest-ranked counties by Opportunity Index.

![County Explorer view for Franklin County, comparing each indicator against the statewide average](/images/work/ohio-opportunity-county-explorer.jpg)

The County Explorer lets a user select any of the 88 counties and see its rank, Opportunity Index, and each underlying indicator, vacancy rate, home value, affordability ratio, population growth, income growth, rent growth, and home appreciation, benchmarked directly against the statewide average.

## Opportunity Index Map

![County-level Opportunity Index map of Ohio, 2024](/images/work/ohio-opportunity-index-heatmap.png)

The map makes the geographic pattern visible at a glance: a cluster of higher-scoring counties around Columbus and its exurbs (Hardin, Union, Delaware, Fairfield, Licking, Perry) alongside standout counties elsewhere in the state (Geauga, Ashland, Highland, Warren), against a broader field of moderate-to-low scores.

## Findings

- Union County posted the highest Opportunity Index in the dataset, followed by Delaware, Geauga, Perry, and Ashland, a mix concentrated around the Columbus metro area but not limited to it.
- The lowest-ranked counties, Wayne, Meigs, Belmont, Ottawa, and Noble among them, cluster in Ohio's more rural and Appalachian regions.
- Because the index is standardized before weighting, the statewide average Opportunity Index is 0 by construction. Individual county scores represent how far above or below that average a county sits, not an absolute return figure.
- The four opportunity tiers are exact quartiles of all 88 counties (22 counties each), so "Very High" and "Low" describe a county's standing relative to other Ohio counties in this dataset rather than a fixed external benchmark.

## Interpretation & Limitations

The Opportunity Index is a structured way to compare counties across several housing-market signals at once; it is not a return forecast or a guarantee. A high-ranking county combines favorable growth and affordability signals as of this snapshot, but a strong index score doesn't establish that a county is a good investment on its own, it flags a county worth investigating further, alongside factors the index doesn't capture: local zoning and permitting conditions, school quality, employer concentration, and property-level due diligence.

The current version reflects a single year (2024) rather than a multi-year trend, so it can't yet distinguish a county with durable momentum from one having an unusually strong or weak single year. The six indicator weights were also set analytically rather than derived empirically from the data, and a sensitivity analysis testing how much the rankings shift under different weighting schemes has not yet been run, both noted directly as next steps for the project. The underlying Python analysis notebook is not yet published alongside the dashboard, so the index construction is documented here and in the repository rather than independently reproducible from a public notebook at this time.

## Tools

Python, pandas, NumPy, GeoPandas, Matplotlib, Power BI, DAX, Index Construction, Data Standardization
