---
title: Modeling Competing Species
summary: A mathematical modeling project investigating how initial populations and competition parameters influence long-term outcomes between competing species.
problem: When two species compete for the same resources, what determines which one survives?
methods:
  - MATLAB
  - ODEs
  - Dynamical Systems
  - Numerical Simulation
status: completed
order: 12
thumbnail: /images/work/modeling-competing-species-thumbnail.png
links: []
---

## Context

This project was completed during the 2022 Mfano Africa–Oxford Mathematics Virtual Mentorship Programme under the mentorship of Dr. Robert A. McDonald.

The work examined competition between native red squirrels and invasive grey squirrels in the UK. Grey squirrels compete with red squirrels for resources and can carry squirrelpox, a virus that is generally harmless to grey squirrels but can be fatal to red squirrels.

The project used a competitive-exclusion model to investigate how the initial populations of the two species and the parameters governing their interaction affect their long-term outcomes.

## The Model

The analysis began with a system of first-order ordinary differential equations representing competition between two species occupying similar ecological niches.

The competitive exclusion principle suggests that two species competing for the same limited resources may not coexist indefinitely. Depending on the interaction parameters, the model can produce several possible long-term outcomes:

- exclusion of one species
- exclusion of the other species
- coexistence
- competition with two possible stable outcomes, where the eventual survivor depends on the initial populations

The analysis focused particularly on the final case, where both outcomes are possible and the initial conditions determine which species eventually dominates.

## Numerical Analysis

MATLAB simulations were used to investigate how changes in the initial populations and model parameters alter the long-term behavior of the system.

The simulations reveal regions of initial conditions that favor either red or grey squirrels. Changing the competition parameters shifts these regions, meaning that the eventual outcome is determined not only by which species begins with a numerical advantage, but also by the strength of the competitive interactions represented in the model.

This makes it possible to visualize the boundary between initial population combinations that lead to different long-term outcomes.

## Key Findings

- The model can produce exclusion, coexistence, or initial-condition-dependent outcomes depending on the competition parameters.
- In the two-stable-state case, different starting populations can lead to completely different long-term outcomes even when the underlying model parameters remain unchanged.
- Changing the competition parameters changes the range of initial conditions that favor one species over the other.
- The deterministic model produces structured outcomes, motivating the consideration of stochastic effects as a possible extension.

## Stochastic Extension

The project concluded by considering how a stochastic formulation could extend the deterministic model.

Real ecological populations are affected by random events and fluctuations that are not represented by a deterministic ODE system. Introducing stochasticity would provide a way to investigate how those fluctuations might alter the structured competitive outcomes observed in the deterministic simulations.

This was identified as a direction for extending the model.

## Reflection

The project provided experience translating an ecological competition problem into a dynamical system, analyzing its steady states and parameter-dependent behavior, and using MATLAB simulations to investigate how initial conditions influence long-term outcomes.

It also introduced the question of how deterministic population models can be extended when real-world randomness becomes important.

**Mentor:** Dr. Robert A. McDonald