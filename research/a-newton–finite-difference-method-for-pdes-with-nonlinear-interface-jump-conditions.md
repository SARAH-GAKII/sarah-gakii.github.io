---
layout: default
title: A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump
---

<div class="page-shell">

  <aside class="sidebar">
    <h2>Research Navigation</h2>
    <a href="/research/">← Explore More Research Work </a>
  </aside>

  <div class="content" markdown="1">

# A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions {#a-newton–finite-difference-method-for-pdes-with-nonlinear-interface-jump-conditions} 
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
📄 [Read the full thesis on OhioLINK](http://rave.ohiolink.edu/etdc/view?acc_num=bgsu1750284991046446)

  </div>
</div>
