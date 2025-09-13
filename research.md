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

# Research and Thesis  

## A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions  

**From cracked bridges to solar panels to the blood–brain barrier — boundaries matter.**  
My master’s thesis addressed the challenge of modeling *nonlinear interface jump conditions* in *elliptic and parabolic PDEs*, where standard numerical schemes often break down.  

### The Problem  
At an *interface*, two domains with different material properties or physical behaviors meet. In many cases, the jump in solution or flux across that interface is *nonlinear*, meaning it cannot be captured with simple linear assumptions. Traditional finite difference and interface methods struggle here, either losing accuracy or requiring excessive computational cost.  

### My thesis  
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

*Special thanks to my advisor, Dr. So-Hsiang Chou, whose mentorship not only strengthened the quality of this research but also shaped me as a mathematician and researcher.*

**Keywords:** PDEs, Interface conditions, Finite difference, Newton iteration, Numerical analysis  
📄 [Read the full thesis on OhioLINK →](http://rave.ohiolink.edu/etdc/view?acc_num=bgsu1750284991046446)


---


## Modeling the Impact of Human Behavior on COVID-19 Vaccine Uptake  

During the COVID-19 pandemic, one of the biggest challenges was not just vaccine availability, but whether people were willing to take it. Uptake was highly shaped by trust, misinformation, social influence, and perceived risk, among other factors. My research project focused on developing a *Python-based predictive model* that combined *epidemic modeling* with *evolutionary game theory* to capture how human behavior influences vaccine uptake.  

### The Problem  
Classical epidemic models often assume vaccines are uniformly adopted once available. In reality, vaccination is a strategic choice: individuals weigh perceived benefits, risks, and costs of vaccination vs non-vaccination. This mismatch can lead to models that *underpredict infection peaks* or *overestimate the success* of vaccine campaigns.  

### The Approach  
I developed a Python-based predictive model that:  
- Integrated a compartmental epidemic model with behavioral dynamics using evolutionary game theory.  
- Represented individuals as “players” choosing between vaccination and non-vaccination, influenced by infection risk, perceived vaccine safety, and peer behavior.  
- Simulated multiple scenarios of vaccine acceptance, capturing how uptake evolves over time under different conditions.  
- Produced numerical simulations and visualizations to study the feedback between epidemic spread and human decision-making.  

### Key Insights  
- Vaccine uptake is not purely medical — it is also a social process.  
- Peer influence can amplify or suppress uptake depending on initial conditions.  
- If misinformation spreads faster than the virus, uptake collapses, leading to higher infection peaks.  
- Policies that build trust and counter misinformation measurably improve long-term vaccine coverage.  

### Broader Impact  
This research highlights how mathematical models of human behavior can strengthen public health planning. By linking epidemic dynamics with decision-making processes, it shows that effective interventions must combine biological tools (such as vaccines and treatments) with social strategies (such as education, trust-building, transparent communication).  

*Grateful to Dr. Josephine Kagunda, whose thoughtful supervision, sharp insights, and constant encouragement made this project both rigorous and deeply rewarding.* 

📄 [Explore the full research project on AIMS Thesis Repository →](https://drive.google.com/file/d/19TXbXPjAJ3T5Eq59psV8N86TiFoCG8ht/view)  

 


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
