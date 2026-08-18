---
title: Modeling the Impact of Human Behavior on COVID-19 Vaccine Uptake
summary: A mathematical study coupling epidemic dynamics with evolutionary game theory to examine how perceived risk and individual decision-making influence vaccination behavior.
tags:
  - Epidemic Modeling
  - Evolutionary Game Theory
  - Dynamical Systems
order: 3
thumbnail: /images/research/covid-vaccine-uptake.png
links:
  - label: Explore the full research project
    href: https://drive.google.com/file/d/19TXbXPjAJ3T5Eq59psV8N86TiFoCG8ht/view
---


**What makes someone choose to vaccinate, or change their mind, as an epidemic unfolds?**

During an epidemic, the decision to vaccinate does not happen in isolation. It can change as infection levels rise and fall, as people reassess the risk of infection, and as they observe the choices of others.

This research investigated that relationship by combining an epidemic model with evolutionary game theory. The model treats vaccination as a decision that can change over time, allowing disease prevalence and individual behavior to influence one another.

Completed as part of my structured master's degree at the African Institute for Mathematical Sciences (AIMS), South Africa.

## The Problem

Traditional epidemic models can represent how a disease moves through a population, but vaccination introduces a behavioral question: what determines whether an individual chooses the vaccination strategy in the first place?

That decision can depend on the perceived cost of vaccination, the perceived consequences of infection, disease prevalence, and the behavior of others.

The goal of this project was to incorporate that decision-making process directly into an epidemic model and investigate how changing vaccination behavior affects disease dynamics.

## The Model

This research project developed a Python-based mathematical model, implemented in SageMath, combining epidemic modeling with evolutionary game theory to examine how human behavior influences vaccine uptake.

The epidemic component divides the population into susceptible, quarantined, infected, and recovered groups. It accounts for transmission, quarantine, recovery, loss of immunity, mortality, and self-protection measures.

The behavioral component uses evolutionary game theory. Susceptible individuals choose between two strategies: considering vaccination or not considering vaccination. Each strategy is assigned a perceived payoff based on the potential productivity loss associated with vaccination or COVID-19 infection.

Individuals can change strategies by comparing those payoffs with the strategies of others in the population. This creates a feedback loop: infection prevalence affects the attractiveness of vaccination, while vaccination behavior affects subsequent disease transmission.

## Mathematical Analysis

The analysis:

- established positivity and boundedness of the solutions
- identified disease-free and endemic equilibrium states
- derived the basic reproductive number, \(R_0\)
- investigated local and global stability of disease-free equilibria
- determined conditions for the existence of an endemic equilibrium
- examined how vaccination behavior and self-protection enter the disease threshold

The resulting expression for \(R_0\) explicitly connects epidemic transmission with both the proportion considering vaccination and the effectiveness of self-protection.


## Numerical Experiments

The research implemented the numerical analysis and simulations in SageMath to investigate the model computationally using parameter values drawn from published studies, model assumptions, and initial population estimates.

Sensitivity analysis showed that increasing either the proportion of vaccinators or the effectiveness of self-protection reduces \(R_0\).

Simulations then explored how different combinations of vaccination behavior and self-protection changed the infected and quarantined populations. Higher levels of either intervention reduced epidemic peaks, while sufficiently strong protection drove infections toward zero.

## What the model revealed

One of the clearest patterns appeared when infection prevalence and vaccination behavior were examined together.

As infections rose, the proportion of susceptible individuals choosing the vaccination strategy also increased. As infections declined, vaccination interest fell. Successive infection waves were accompanied by smaller vaccination peaks, and when perceived infection risk became very low, the modeled population eventually moved away from the vaccination strategy.

The result captures an important behavioral feedback: the apparent success of disease control can itself reduce the perceived incentive to continue protective behavior.

## Why it matters

Public-health interventions operate within populations whose behavior changes in response to the epidemic itself.

This project shows why vaccination behavior cannot always be treated as a fixed external input to an epidemic model. When perceived risk influences individual decisions, disease prevalence and protective behavior can evolve together.

Modeling that interaction provides a way to study questions that sit between epidemiology and human decision-making, and to examine how behavioral responses can alter the trajectory of an outbreak.

*With thanks to Dr. Josephine Wairimu Kagunda for her supervision throughout this research.*