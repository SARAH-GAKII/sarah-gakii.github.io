---
title: A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions
summary: A master's thesis, later developed into a peer-reviewed journal publication, addressing nonlinear interface jump conditions in elliptic and parabolic PDEs.
tags:
  - PDEs
  - Numerical Analysis
  - Finite Difference
  - Newton Iteration
order: 1
thumbnail: /images/research/newton-fd-publication.png
links:
  - label: Read the published paper
    href: https://projecteuclid.org/journalArticle/Download?urlId=10.11650%2Ftjm%2F251105
  - label: Read the full master's thesis on OhioLINK
    href: http://rave.ohiolink.edu/etdc/view?acc_num=bgsu1750284991046446
---

**From cracked bridges to solar panels to the blood–brain barrier — boundaries matter.** This master's thesis addressed the challenge of modeling nonlinear interface jump conditions in elliptic and parabolic PDEs, where standard numerical schemes often break down.

## Publication

This research was later developed into a peer-reviewed journal publication in collaboration with the thesis advisor.

**So-Hsiang Chou and Sarah Gakii** — *A Newton-FD Method for an Interface Problem with a Nonlinear Jump Condition* — Taiwanese Journal of Mathematics.

The journal paper builds on the numerical framework introduced in the thesis and presents the method, analysis, and numerical experiments in a formal research publication. It shows how Newton iteration can be incorporated directly into finite difference schemes to accurately resolve nonlinear interface jump conditions in both elliptic and parabolic PDEs.

## The Problem

At an interface, two domains with different material properties or physical behaviors meet. In many cases, the jump in solution or flux across that interface is nonlinear — it cannot be captured with simple linear assumptions. Traditional finite difference and interface methods struggle here, either losing accuracy or requiring large computational cost.

## The Method

The thesis designed and implemented a Newton–Finite Difference Method (NFDM) that:

- Formulates the nonlinear jump condition directly into the discretized scheme
- Uses Newton's iteration to update interface values until convergence, ensuring stability and efficiency
- Handles both elliptic (steady-state) and parabolic (time-dependent) PDEs within the same framework
- Achieves second-order accuracy in space and time, even in the presence of discontinuities

The method was tested against a series of benchmark problems with known exact solutions, allowing rigorous error analysis. Results showed consistent convergence rates and improved stability compared to conventional schemes.

![Master's thesis cover](/images/research/newton-fd-thesis.jpg)

## Why it matters

- **Materials science:** in a bridge built from layered materials, how stress jumps across a crack boundary determines whether it stays harmless or becomes a safety issue.
- **Semiconductors:** at the junction where two semiconductor layers meet in a solar panel, the jump in electron flow depends nonlinearly on sunlight intensity and material properties — modeling it is key to more efficient, affordable solar cells.
- **Fluid dynamics:** extracting petroleum requires understanding how fluids cross rock layers that behave nonlinearly; mistakes here can be costly.
- **Biomedicine:** drug transport across the blood–brain barrier is highly nonlinear, and modeling it efficiently is key to designing treatments for neurological disease.
- **Climate & geophysics:** the nonlinear heat exchange at a melting glacier's boundary shapes how fast sea levels rise.

*With thanks to advisor Dr. So-Hsiang Chou, whose mentorship shaped both this research and its author as a mathematician.*
