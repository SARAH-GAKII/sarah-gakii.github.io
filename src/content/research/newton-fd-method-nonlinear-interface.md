---
title: A Newton–Finite Difference Method for PDEs with Nonlinear Interface Jump Conditions
summary: A Newton finite difference method for solving elliptic and parabolic PDEs with nonlinear jump conditions across material interfaces.
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

**What happens when the behavior of a system changes abruptly at a boundary?**

A material changes. A membrane separates two environments. Heat, particles, or other quantities move across an interface where the rules on one side are different from those on the other.

Mathematically, these systems can lead to partial differential equations with discontinuous coefficients and nonlinear conditions at the interface. This research developed a Newton–Finite Difference Method for solving one-dimensional elliptic and parabolic problems of this kind.

## Publication

This work began as my master's thesis at Bowling Green State University and was later developed into a peer-reviewed journal paper with my thesis advisor, **Dr. So-Hsiang Chou**.

**So-Hsiang Chou and Sarah Gakii**  
*A Newton-FD Method for an Interface Problem with a Nonlinear Jump Condition*  
*Taiwanese Journal of Mathematics*

The published work develops the numerical framework for nonlinear interface problems, combining finite difference discretization with Newton iteration to solve the nonlinear system introduced by the interface condition.

## The Problem

Interface problems arise when different materials, regions, or physical regimes meet. Across that interface, properties such as conductivity may change abruptly, and the solution or its derivatives may be discontinuous.

These discontinuities complicate numerical approximation. Methods designed for smooth solutions can lose accuracy or fail to represent the behavior near the interface correctly. The challenge becomes greater when the jump condition itself is nonlinear.

The problem considered here asks how to solve elliptic and parabolic PDEs while accurately enforcing that nonlinear behavior at the interface.


## The method

The thesis developed a Newton–Finite Difference Method that combines three ideas:

- A fitted mesh places the interface directly on a grid point, making the jump conditions easier to enforce accurately.
- Finite difference schemes discretize the elliptic and parabolic PDEs on either side of the interface.
- Newton's method solves the nonlinear algebraic system created by the nonlinear jump condition.

For the parabolic problems, time discretization is handled through the θ-method.

The method was evaluated using problems with known exact solutions. This made it possible to compare the numerical and exact solutions directly and study how the error changed as the mesh was refined.

## What the numerical experiments showed

Across the elliptic and parabolic test problems, the numerical solutions closely matched the known exact solutions while preserving the jump at the interface.

Mesh-refinement studies showed second-order spatial convergence. The method also remained accurate when the diffusion coefficients on opposite sides of the interface differed substantially.

A time-dependent ion-selective electrode problem provided a more physically motivated test. The method captured the nonlinear concentration jump at the interface and converged to the expected steady-state solution.

## Why interface problems matter

Interfaces appear throughout applied mathematics whenever two materials, regions, or physical processes meet. Examples arise in heat transfer, fluid dynamics, electromagnetics, materials science, transport through membranes, and other systems with abrupt changes in physical properties.

The numerical challenge is not simply solving the PDE away from the interface. The method must also represent what happens at the boundary itself, including discontinuities and nonlinear interactions, without sacrificing accuracy.

This work contributes a practical numerical approach for that setting and provides a foundation for extensions to higher-dimensional problems, irregular or moving interfaces, and coupled physical systems.

*With thanks to my advisor, Dr. So-Hsiang Chou, whose mentorship shaped both this research and my development as a mathematician.*