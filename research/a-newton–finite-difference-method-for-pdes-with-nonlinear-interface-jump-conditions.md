---
layout: default
title: A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump
---

<div class="page-shell">

<aside class="sidebar section-nav">
  <div class="section-nav-inner">
    <p class="section-nav-label">Explore</p>
    <h2>Research</h2>
    <a class="section-nav-link" href="/research/">← Explore more research work</a>
  </div>
</aside>

  <div class="content" markdown="1">

# A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions 

**From cracked bridges to solar panels to the blood–brain barrier — boundaries matter.**  
My master’s thesis addressed the challenge of modeling *nonlinear interface jump conditions* in *elliptic and parabolic PDEs*, where standard numerical schemes often break down.  

## Publication
This research was later developed into a peer-reviewed journal publication in collaboration with my advisor.

<div style="display:flex; align-items:flex-start; gap:32px; margin:28px 0;">

  <!-- Abstract screenshot -->
  <img
    src="{{ '/assets/Newton-FD Method for an Interface Problem with a Nonlinear Jump Condition thumbnail.png' | relative_url }}"
    alt="Newton-FD Method for an Interface Problem with a Nonlinear Jump Condition thumbnail"
    style="width:420px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08);"
  />

  <!-- Publication block -->
  <div style="max-width:380px; line-height:1.6;">

    <p style="margin:0; font-weight:600;">
      📄 Published article
    </p>

    <p style="margin:6px 0 0 0;">
      <strong>So-Hsiang Chou and Sarah Gakii</strong>
    </p>

    <p style="margin:6px 0; font-style:italic;">
      A Newton-FD Method for an Interface Problem with a Nonlinear Jump Condition
    </p>

    <p style="margin:6px 0 12px 0;">
      Taiwanese Journal of Mathematics
    </p>

    <p style="margin:0;">
      🔗 <a href="https://projecteuclid.org/journalArticle/Download?urlId=10.11650%2Ftjm%2F251105">
      Read the published paper
      </a>
    </p>

  </div>

</div>


The journal paper builds upon the numerical framework introduced in my master’s thesis and presents the method, analysis, and numerical experiments in a formal research publication. The work demonstrates how Newton iteration can be incorporated directly into finite difference schemes to accurately resolve nonlinear interface jump conditions in both elliptic and parabolic partial differential equations.


### The Problem  
At an interface, two domains with different material properties or physical behaviors meet. In many cases, the jump in solution or flux across that interface is nonlinear, meaning it cannot be captured with simple linear assumptions. Traditional finite difference and interface methods struggle here, either losing accuracy or requiring huge computational costs.  

### My thesis  
Designed and implemented a *Newton–Finite Difference Method (NFDM)* that:  
- Formulates the nonlinear jump condition directly into the discretized scheme.  
- Uses Newton’s iteration to update interface values until convergence, ensuring stability and efficiency.  
- Handles both elliptic (steady-state) and parabolic (time-dependent) PDEs within the same framework.  
- Achieves second-order accuracy in space and time, even in the presence of discontinuities. 

The method was tested through a series of benchmark problems with known exact solutions, allowing for rigorous *error analysis*. Results showed consistent convergence rates and improved stability compared to conventional schemes.  

### Examples of what that looks like in real life:  
- **Materials science**: Think of a bridge built from layered materials. When a tiny crack forms, the way stress jumps across that boundary determines whether it stays harmless, or grows into a major safety issue.  
- **Semiconductors**: Imagine how solar panels on rooftops work on a sunny day. At the junction where two semiconductor layers meet, electrons don’t simply flow! The jump depends nonlinearly on sunlight intensity and material properties. Modeling that is key to making solar cells more efficient and affordable.
- **Fluid dynamics**: Picture oil and water underground. To extract petroleum, engineers need to understand how fluids cross rock layers that don’t behave linearly. Mistakes here could cost millions.
- **Biomedicine**: Some treatments for neurological diseases struggle to reach the brain because of the blood–brain barrier. The transport of drugs across that interface is highly nonlinear, and modeling it efficiently is key to designing medications for Alzheimer’s, Parkinson’s, or epilepsy, among others.  
- **Climate & geophysics**: Melting glaciers aren’t just about ice turning into water! The nonlinear heat exchange at the boundary shapes how fast sea levels rise.  

This research demonstrates how advanced numerical analysis can bridge the gap between theory and application, creating tools that are mathematically rigorous and computationally practical.  

*Special thanks to my advisor, Dr. So-Hsiang Chou, whose mentorship not only strengthened the quality of this research but also shaped me as a mathematician and researcher.*

<div style="display:flex; align-items:flex-start; gap:32px; margin:28px 0;">

  <!-- Abstract screenshot -->
  <img
    src="{{ '/assets/Newton Finite Difference Method research thumbnail.jpg' | relative_url }}"
    alt="Newton Finite Difference Method research thumbnail"
    style="width:420px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08);"
  />

  <!-- Masters thesis -->
  <div style="max-width:380px; line-height:1.6;">

    <p style="margin:0; font-weight:600;">
      📄 Master’s thesis
    </p>

    <p style="margin:6px 0 0 0;">
      <strong>So-Hsiang Chou and Sarah Gakii</strong>
    </p>

    <p style="margin:6px 0; font-style:italic;">
      A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions
    </p>

    <p style="margin:6px 0 12px 0;">
      Bowling Green State University
    </p>

    <p style="margin:0;">
      🔗 <a href="http://rave.ohiolink.edu/etdc/view?acc_num=bgsu1750284991046446">
      Read the full masters thesis on OhioLINK
      </a>
    </p>

  </div>

</div> 


  </div>
</div>
