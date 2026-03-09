---
layout: default
title: Home
---

<div class="page-shell">
  <!-- LEFT: sticky sidebar (headshot + what I do) -->
  <aside class="sidebar">

    <div class="portrait" style="margin-bottom:1rem;">
      <img src="/assets/Headshot2.PNG" alt="Sarah Randol headshot" />
    </div>

    <hr style="border:none; border-top:1px solid #e5e7eb; margin:.75rem 0 1rem;">

    <!-- What I do (HTML headings + paragraphs = no markdown parsing needed) -->
    <h3>Research &amp; Workshops</h3>
    <p>PDEs, mathematical modeling, and applied methods for real-world problems.<br>
      <a href="{{ '/research' | relative_url }}"><strong>Dive into research →</strong></a>
    </p>

    <hr style="border:none; border-top:1px solid #e5e7eb; margin:.75rem 0 1rem;">

    <h3>Projects</h3>
    <p>Dashboards and simulations that turn raw data into decisions.<br>
      <a href="{{ '/projects' | relative_url }}"><strong>See projects →</strong></a>
    </p>

    <hr style="border:none; border-top:1px solid #e5e7eb; margin:.75rem 0 1rem;">

    <h3>Experience</h3>
    <p>Data, AI training, teaching, and mentorship across academia and industry.<br>
      <a href="{{ '/experience' | relative_url }}"><strong>View experience →</strong></a>
    </p>

    <hr style="border:none; border-top:1px solid #e5e7eb; margin:1rem 0;">

    <!-- Social icons (small, horizontal) -->
    <div class="sidebar-icons">
      <a href="mailto:sgakii@bgsu.edu" aria-label="Email" title="Email">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M3 6h18a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z"
            fill="none" stroke="currentColor" stroke-width="1.6"/>
          <path d="M3 7l9 6 9-6"
            fill="none" stroke="currentColor" stroke-width="1.6"/>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/sarah-gakii/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M20.45 3H3.55A.55.55 0 003 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0020.45 3zM8.2 19H5.6V9.76h2.6V19zM6.9 8.52a1.51 1.51 0 110-3.02 1.51 1.51 0 010 3.02zM19 19h-2.6v-4.86c0-1.16-.42-1.95-1.47-1.95-.81 0-1.3.55-1.52 1.08-.08.2-.1.48-.1.76V19h-2.6s.03-8.38 0-9.24H13l.02 1.43c.35-.54.98-1.31 2.38-1.31 1.74 0 3.6 1.14 3.6 3.82V19z"/>
        </svg>
      </a>

      <a href="https://github.com/SARAH-GAKII" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.9.58.1.79-.26.79-.57v-2.01c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.76 1.28 3.43.98.11-.78.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.82 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.65.23 2.87.11 3.17.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.16v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
        </svg>
      </a>
    </div>
  </aside>

  <!-- RIGHT: main content -->
  <div class="content">
    {% capture main_md %}
# <span id="accent-name">Sarah G. Randol</span> {#about-summary}
<div class="tagline-animate"> • DATA SCIENCE APPLIED MACHINE LEARNING • STATISTICAL MODELING • APPLIED MATHEMATICS • AI </div>

I am a Data Scientist with a strong foundation in applied mathematics, focused on building data driven models that support real world decision making.

My work combines statistical modeling, machine learning, AI, and applied analytics. I approach problems by first understanding how data is generated, what assumptions are involved, and what questions the analysis is meant to answer, before selecting or training models. This perspective is shaped by rigorous mathematical training and hands on experience working end to end with real datasets.

---

## Professional Focus {#skills}
- Applied AI & Data Science – Developing data-driven models and analytical workflows that extract meaningful insight from complex datasets.
- Machine Learning & Statistical Analysis – Applying machine learning and statistical techniques to uncover patterns, support predictions, and inform decisions.
- Mathematical & Computational Modeling – Designing and analyzing numerical methods, simulations, and mathematical models to study complex systems.
- Data Analytics & Visualization – Transforming raw data into interpretable insights through exploratory analysis, dashboards, and visual storytelling.
- Scientific Computing & Numerical Methods – Implementing computational techniques to solve mathematical models and engineering problems.

---

## Education {#education}
 **Applied AI & Data Science**, MIT Professional Education (In progress)  
- Courses taken: Foundations of AI, Data Analysis and Visualization, Graph Theory, Machine Learning,  Introduction to AI on Cloud, Practical Data Science Workflows, Deep Learning, Recommendation Systems, Generative AI & Applied AI Systems
🎓 **M.A., Applied Mathematics & Scientific Computation**, Bowling Green State University (Aug. 2025)  
- Courses taken: Numerical Analysis series, Real Analysis series, Probability & Statistics series, Linear Algebra with its Applications, Iterative Solutions (MATLAB), Topics in Applied Mathematics (Partial Differential Equations) series, Boundary Value Differential Equations, Curriculum Analytics Classroom Behavior, Overview College Math Teaching

🎓 **M.S., Mathematical Sciences**, Stellenbosch University - African Institute for Mathematical Sciences (AIMS) Program, South Africa (June 2023)  
- Courses taken: Intro. to Programming using Python, Machine Learning for Particle Physics, NetworkX, Experimental mathematics with SageMath, Statistics (Intro to Statistical analysis using R), Computing & Latex, Mathematical Problem Solving, Concepts and Problem Solving in Physics, Open Quantum Systems, Lie Groups and Lie Algebra, Graph Theory, Numerical Mathematics, Measurement Interpretation & Mathematics, Analytical Techniques in Mathematical Biology, Algebraic Biology, Analytical Techniques in Mathematical Biology, Applying Logic, Algebraic Methods

🎓 **B.S., Mathematics (Pure & Applied)**, The Technical University of Kenya (July 2021)
- Courses taken: Analytical Geometry series, Differential Geometry, Calculus series, Numerical Analysis series, Methods of Applied Mathematics series, Mathematical Modeling, Simulation and Modeling, Fluid Mechanics series, ODEs series, PDES series, Prob. & Stats series, Test of Hypothesis, Theory of Estimation, Intro. to Computers series, Data Structures & Algorithms, Database Systems, Scientific Programming, Object Oriented Programming, Information Systems Applications, Linear Programming series, Linear Algebra series, Discrete Mathematics, Algebraic Structures, Vector Analysis, Topological Concepts series, Elements of Set Theory, Number Theory series, Functional Analysis, Complex Analysis series, Measure and Integration, Ring Theory, Topology, Real Analysis series, Group Theory series, History of Mathematics series, Critical & Creative Thinking, Society and Culture, Communication Skills, Entrepreneurship & Business Studies, Health Education

---

## Awards & Recognitions {#awards-and-recognitions}

### James Robert & Gretchen Overman Graduate Scholarship – BGSU (2024)
Awarded by the Department of Mathematics and Statistics at Bowling Green State University in recognition of academic excellence.  
Featured in the department’s [2023–2024 News & Highlights](https://www.bgsu.edu/arts-and-sciences/mathematics-and-statistics/department-and-alumni-news/2023-2024.html), which spotlighted student achievements, faculty recognition, and research contributions.


### Paul G. Allen Family Foundation Scholarship – AIMS South Africa (2023)
Granted by the African Institute for Mathematical Sciences (AIMS) South Africa for academic excellence and for my research project *“Modeling the Impact of Human Behaviour on COVID-19 Vaccine Uptake”* during the structured Master’s program in Mathematical Sciences.  
Recognized during the [20th AIMS South Africa Graduation and Achievement Ceremony](https://aims.ac.za/2023/07/03/aims-south-africa-hosts-its-20th-graduation-and-recognition-of-achievement-ceremony/).  

---

