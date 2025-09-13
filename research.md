---
layout: default
title: Research
---

<div class="page-shell">
  <!-- Left sticky quick jumps -->
  <aside class="sidebar">
    <h2>Quick jumps</h2>
    <a href="#thesis-newton–finite-difference-method-2025">Thesis — Newton–Finite Difference</a>
    <a href="#modeling-vaccine-uptake-with-behavior--epidemics-2023">Vaccine Uptake Modeling</a>
    <a href="#crime-dynamics-cooperative-policing-2023">Crime Dynamics</a>
    <a href="#stochastic-competing-species-2022">Stochastic Species</a>
  </aside>

  <!-- Main content -->
  <div class="content" markdown="1">

# Research & Thesis  

## A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions  

*From cracked bridges to solar panels to the blood–brain barrier — boundaries matter.*  
My master’s thesis addressed the challenge of modeling *nonlinear interface jump conditions* in *elliptic and parabolic PDEs*, where standard numerical schemes often break down.  

### The Problem  
At an *interface*, two domains with different material properties or physical behaviors meet. In many cases, the jump in solution or flux across that interface is *nonlinear*, meaning it cannot be captured with simple linear assumptions. Traditional finite difference and interface methods struggle here, either losing accuracy or requiring excessive computational cost.  

### My Contribution  
I designed and implemented a *Newton–Finite Difference Method (NFDM)* that:  
- Formulates the nonlinear jump condition directly into the discretized scheme.  
- Uses *Newton’s iteration* to update interface values until convergence, ensuring stability and efficiency.  
- Handles both *elliptic* (steady-state) and *parabolic* (time-dependent) PDEs within the same framework.  
- Achieves *second-order accuracy* in space and time, even in the presence of discontinuities. 

The method was tested through a series of benchmark problems with known exact solutions, allowing for rigorous *error analysis*. Results showed consistent convergence rates and improved stability compared to conventional schemes.  

### Examples of what that looks like in real life:  
- **Materials science**: Think of a bridge built from layered materials. When a tiny crack forms, the way stress jumps across that boundary determines whether it stays harmless, or grows into a major safety issue.  
- **Semiconductors**: Imagine how solar panels on rooftops work on a sunny day. At the junction where two semiconductor layers meet, electrons don’t simply flow! The jump depends nonlinearly on sunlight intensity and material properties. Modeling that is key to making solar cells more efficient and affordable.
- **Fluid dynamics**: Picture oil and water underground. To extract petroleum, engineers need to understand how fluids cross rock layers that don’t behave linearly. Mistakes here could cost millions.
- **Biomedicine**: Some treatments for neurological diseases struggle to reach the brain because of the blood–brain barrier. The transport of drugs across that interface is highly nonlinear, and modeling it efficiently is key to designing medications for Alzheimer’s, Parkinson’s, or epilepsy, among others.  
- **Climate & geophysics**: Melting glaciers aren’t just about ice turning into water! The nonlinear heat exchange at the boundary shapes how fast sea levels rise.  

This research demonstrates how advanced numerical analysis can bridge the gap between *theory and application*, creating tools that are mathematically rigorous and computationally practical.  


**Keywords:** PDEs, Interface conditions, Finite difference, Newton iteration, Numerical analysis  
📄  [Read on OhioLINK →](http://rave.ohiolink.edu/etdc/view?acc_num=bgsu1750284991046446)

---

## Modeling Vaccine Uptake with Behavior & Epidemics (2023)
Coupled **evolutionary game dynamics** (human behavior) with an **epidemic model** to analyze how perceived costs/benefits drive vaccine acceptance.

**What I did**
- Built behavior–epidemics coupled system; explored equilibria.
- Ran parameter sweeps to study sensitivity and threshold effects.
- Interpreted policy implications for outreach and incentives.

**Repo:** [View code on GitHub →](https://github.com/SARAH-GAKII/Modelling-the-impact-of-human-behaviour-to-COVID-19-vaccine-uptake)

---

## Crime Dynamics: Cooperative Policing (2023)
Team research exploring **cooperation** between communities and law enforcement, and its effect on crime prevalence.

**Focus**
- Simple dynamical model with transitions among states.
- Examined deterrence, reporting, and cooperation rates.
- Presented at AMU School 2023.

---

## Stochastic Competing Species (2022)
Explored **coexistence vs. competitive exclusion** under stochasticity.

**Notes**
- Simulated noise-driven dynamics and stability regions.
- Identified regimes sensitive to initial conditions/carrying capacities.

  </div>
</div>
