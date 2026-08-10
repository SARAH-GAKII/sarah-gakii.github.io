---
title: Green Roofs to Mitigate the Urban Heat Island
summary: A study of a heat-transfer PDE model of green roofs and their effect on the urban heat island.
tags:
  - Heat Transfer PDE
  - Mathematical Modeling
  - Numerical Methods
order: 4
thumbnail: /images/research/urban-green-roof.png
links: []
---

Developed during the Mathematics in Industry Study Group (MISG 2023) at AIMS South Africa, this collaborative project investigated how green roofs influence heat absorption, storage, and release in urban buildings.

## The Problem

Concrete, asphalt, and other urban surfaces absorb solar energy during the day and release stored heat into their surroundings, contributing to the urban heat island effect. Green roofs introduce vegetation, shading, and evapotranspiration into this energy balance and offer a potential strategy for reducing urban heat.

The project examined an existing mathematical model of heat transfer through a green-roof substrate to understand the mechanisms through which vegetation can affect roof temperatures and heat storage.

## The Approach

We analyzed transient heat conduction through the roof substrate using a one-dimensional heat equation, coupled with a surface energy balance incorporating:

- solar irradiance and vegetative cover
- convection between the roof and ambient air
- thermal radiation
- evapotranspiration
- substrate thermal properties and boundary conditions

The nonlinear radiative heat-flux term was linearized under a small temperature-difference assumption. The resulting system was then non-dimensionalized and solved analytically using Laplace transforms, to obtain an analytical solution for temperature as a function of time and substrate depth.

We also developed a finite-difference formulation of the heat equation and its boundary conditions, producing a system of linear equations for the numerical solution.


## Results & Insights

Both analytical and numerical results showed that temperature effects were strongest near the roof surface and diminished with increasing substrate depth.

The analysis suggested that vegetation can reduce heat accumulation through the combined effects of shading, albedo, and evapotranspiration. In particular, evapotranspiration provides an additional cooling mechanism by directing part of the available energy into latent heat rather than heat stored within the roof substrate.

The study supported the potential of green roofs as an urban heat-mitigation strategy while also identifying areas for further investigation, including quantifying stored energy and nighttime heat release, incorporating time-varying evapotranspiration, and extending the analysis beyond one spatial dimension.

**Supervisor:** Prof. N. Fowkes