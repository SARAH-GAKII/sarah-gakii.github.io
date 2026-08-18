---
title: A Mathematical Model for Crime with Cooperative Policing
summary: A nonlinear dynamical-systems model examining crime dynamics when cooperation is incorporated into policing.
tags:
  - Dynamical Systems
  - Differential Equations
  - Sensitivity Analysis
  - Public Policy Modeling
order: 2
thumbnail: /images/research/city-chess.png
links: []
---

**What changes in the mathematics of crime when policing is not modeled as a single force, but as a cooperative system?**

Developed as a group research project at the African Mathematical Schools (AMS) 2023, this work examined crime dynamics through a nonlinear mathematical model that explicitly incorporates cooperative policing.


## The Problem

Mathematical models of crime can represent how individuals move between noncriminal, criminal, and reformed populations, as well as how policing affects those transitions. The question explored here was what happens when the model also accounts for cooperation within policing.

A cooperation function was introduced to represent how police effort interacts with the criminal population, allowing the effect of cooperative policing to become part of the dynamics rather than an external assumption.

## The Model

The population was divided into four interacting state variables:

- noncriminal individuals
- criminals
- reformed individuals
- police

Their interactions were represented by a system of nonlinear differential equations. The model included recruitment into the noncriminal population, movement into and out of criminal activity, reform, and police dynamics.

A nonlinear function, `G(C,P)`, represented the interaction between criminals and police, with a cooperation parameter incorporated directly into the criminal-removal mechanism.

## Analysis

The model was examined analytically before numerical simulation.

- Positivity analysis established that the state variables remain nonnegative over time.
- Boundedness analysis showed that the solutions remain within a feasible region.
- Two steady states were identified: a crime-free steady state and a unique crime-presence steady state.
- The crime-free steady state was shown to be locally asymptotically stable.
- Sensitivity analysis was used to identify the parameters with the strongest influence on the model's criminal generation measure.

The sensitivity results identified the recruitment parameter `Λ` and crime-acquisition parameter `β` as having the strongest positive influence, while `μ` and `σ` had the strongest negative influence.

## Numerical Behavior

Numerical simulations tracked the noncriminal, criminal, reformed, and police populations over time.

Under the parameter setting examined, the system experienced substantial early changes before settling toward a stable long-run configuration after roughly 15 years. The criminal population declined from its intermediate peak but did not disappear, producing a persistent-crime outcome for that simulation.

The numerical solutions also remained positive throughout the simulation, consistent with the analytical properties established for the model.

## What the Model Shows

The project demonstrates how cooperative policing can be represented mathematically as part of a broader population-dynamics system rather than treated as a fixed external intervention. It also shows how equilibrium analysis, sensitivity analysis, and numerical simulation can be combined to study which mechanisms most strongly shape long-run crime dynamics.

**Advisor:** Prof. Farai Nyabadza