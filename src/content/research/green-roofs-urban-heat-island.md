---
title: Green Roofs to Mitigate the Urban Heat Island
summary: A heat-transfer model examining how vegetation changes energy exchange and temperature within green-roof substrates.
tags:
  - Heat Transfer PDE
  - Mathematical Modeling
  - Numerical Methods
order: 4
thumbnail: /images/research/urban-green-roof.png
links: []
---

**Can the cooling effect of a green roof be explained and quantified through heat transfer?**

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

We also developed a backward-time, centered-space finite-difference formulation of the heat equation and its boundary conditions, producing a system of linear equations for the numerical solution.


## Results & Insights

The analytical and numerical solutions showed that temperature varies with both time and substrate depth, with the strongest temperature effects occurring near the surface and diminishing deeper into the substrate.

The analysis suggested that vegetation introduces additional mechanisms into this energy balance. Shading reduces the solar energy reaching the substrate, while evapotranspiration removes energy through latent heat transfer. Together, these mechanisms reduce heat absorption and therefore the energy available to be released later into the surrounding environment.

The study supported the potential of green roofs as an urban heat-mitigation strategy while also identifying areas for further investigation, including quantifying stored energy and nighttime heat release, incorporating time-varying evapotranspiration, and extending the analysis beyond one spatial dimension.

**Supervisor:** Prof. N. Fowkes