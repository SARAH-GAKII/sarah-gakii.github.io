---
title: FoodHub Customer & Business Analytics
summary: Analysis of customer behavior, pricing dynamics, and operational efficiency for an online food delivery platform.
problem: Where should a food delivery platform focus to improve revenue and service performance?
methods:
  - Python
  - pandas
  - EDA
  - Business Analytics
status: completed
order: 7
thumbnail: /images/work/foodhub-thumbnail.png
links:
  - label: View the notebook on GitHub
    href: https://github.com/SARAH-GAKII/foodhub-customer-business-analytics/blob/main/FoodHub_Data_Analysis_Notebook.ipynb
---

## Overview

Food delivery platforms sit between customers, restaurants, and delivery operations, so improving performance requires understanding more than order volume alone.

This project analyzes 1,898 FoodHub orders to examine customer demand, cuisine and restaurant popularity, order economics, preparation and delivery performance, customer feedback, and platform revenue. The objective was to translate transactional data into practical decisions around promotions, operations, customer engagement, and revenue.

## Questions Explored

- Which restaurants and cuisines account for the greatest share of demand?
- How concentrated is ordering behavior among repeat customers?
- How do preparation and delivery times vary across orders and between weekdays and weekends?
- How complete and representative is customer rating data?
- Which orders contribute most strongly to platform revenue?
- Where could FoodHub intervene to improve customer experience or commercial performance?

## Data & Approach

The dataset contained 1,898 orders from 178 customers across 20 cuisine types, with information on restaurants, order values, ratings, preparation times, delivery times, and whether orders were placed on weekdays or weekends.

The analysis was conducted in Python using pandas, NumPy, Matplotlib, and Seaborn. It combined univariate and multivariate exploratory analysis with customer, cuisine, and restaurant segmentation, operational timing analysis, correlation analysis, and a rule-based revenue calculation based on FoodHub's commission structure.

## Demand & Customer Behavior

Demand was unevenly distributed across the platform.

Shake Shack recorded the largest number of orders, followed by The Meatball Shop, Blue Ribbon Sushi, and Blue Ribbon Fried Chicken. American, Japanese, Italian, and Chinese were among the most frequently ordered cuisine categories.

Ordering was also concentrated among repeat customers. The most active customer placed 13 orders, while several others recorded 10 or more, creating opportunities for targeted loyalty and retention strategies.

Weekend demand was substantially higher than weekday demand, indicating that staffing, restaurant coordination, and promotional activity may need to account for different demand patterns across the week.

## Order Economics & Revenue

Most orders were relatively modest in value, with the cost distribution concentrated roughly between $8 and $18 and a smaller group of premium orders above $30.

Using FoodHub's stated commission structure, the analysis estimated approximately $6,166 in platform revenue across the dataset.

Orders valued above $20 represented about 29% of all orders but generated nearly 60% of estimated revenue. This makes higher-value orders disproportionately important to platform economics and suggests potential value in strategies that increase basket size or encourage premium ordering.

## Service Performance

Food preparation and delivery behaved as largely separate operational processes: correlation analysis showed little linear relationship between preparation time, delivery time, and order value.

Delivery performance also differed by day type. Average delivery time was approximately 22.5 minutes on weekdays compared with 17.0 minutes on weekends, suggesting that weekday conditions may introduce additional delivery friction despite lower order volume.

When preparation and delivery were considered together, approximately 10.5% of orders took more than one hour from order placement to customer delivery.

These patterns indicate that service performance cannot be understood from preparation time alone and that delivery operations deserve separate attention.

## Customer Feedback

Customer ratings were generally positive among rated orders, but a substantial portion of transactions had no rating at all.

The missing feedback was also uneven across cuisine types. More than half of Thai orders and half of Spanish orders were unrated, while several high-volume cuisines also had substantial proportions of missing feedback.

This creates an important limitation: observed ratings may not fully represent the customer experience. Encouraging feedback after unrated orders could provide FoodHub with a more reliable basis for evaluating restaurants and service quality.


![FoodHub analytics overview](/images/work/foodhub-thumbnail.png)


## Business Implications

The analysis points to several practical opportunities for FoodHub.

High-value orders warrant particular attention because of their disproportionate contribution to revenue. Promotions, bundles, or incentives designed to increase order value could therefore have a meaningful commercial effect.

Operationally, the weekday/weekend difference suggests that delivery performance should be investigated separately from demand volume. Staffing levels, traffic conditions, driver availability, or geographic order patterns could help explain why lower-volume weekdays nevertheless experience longer average delivery times.

Finally, improving rating participation would give FoodHub a more representative view of customer experience and strengthen restaurant-level performance assessment.

## Tools

Python, pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis, Customer Segmentation, Operational Analysis, Revenue Analysis