---
layout: default
title: Home
---

<div class="about-shell">

  <!-- LEFT: sticky sidebar (headshot + What I do) -->
  <aside class="sidebar">
    <div class="portrait" style="margin-bottom:1rem;">
      <img src="/assets/headshot.jpg" alt="Sarah Gakii headshot" />
    </div>

    {% capture sidebar_md %}
## What I do

### 📖 Research & Thesis
PDEs, interface problems, and applied modeling with clear methods and results.  
[**Dive into research →**](/research.html)

### 📊 Projects
From raw data to decisions: dashboards, simulations, and reproducible workflows.  
[**See projects →**](/projects.html)

### 👩‍🏫 Experience & Teaching
Teaching & mentorship plus industry roles in data, AI training, and operations.  
[**View experience →**](/experience.html)
    {% endcapture %}
    {{ sidebar_md | markdownify }}
  </aside>

  <!-- RIGHT: main content (hero + skills + education) -->
  <div class="content">
    <div class="card intro" style="padding:2rem; margin-bottom:1.5rem;">
      <p class="eyebrow">Applied Mathematics • Data Analytics • Mathematical Modeling • Quantitative Research</p>

      {% capture main_md %}
# Hi, I’m <span class="accent">Sarah Gakii</span>

I’m an **applied mathematician and data analyst** with experience spanning **mathematical modeling, AI training, and analytics**.  
I recently earned my **M.A. in Applied Mathematics & Scientific Computation** from Bowling Green State University, where my thesis introduced a **Newton–Finite Difference Method** for elliptic and parabolic PDEs with nonlinear interface jump conditions.

My work sits at the intersection of **research, analytics, and applied problem-solving**. I’ve taught Precalculus, College Algebra, Calculus, and Statistics using **active-learning methods**, and contributed as a **Math & Data Analysis Expert in AI training**, shaping high-quality reasoning datasets for advanced models.
      {% endcapture %}
      {{ main_md | markdownify }}

      <div class="cta">
        <a class="btn primary" href="/assets/resume.pdf" target="_blank" rel="noopener">📄 Download Resume</a>
        <a class="btn ghost" href="https://www.linkedin.com/in/sarah-gakii/" target="_blank" rel="noopener">🔗 LinkedIn</a>
        <a class="btn ghost" href="https://github.com/SARAH-GAKII" target="_blank" rel="noopener">📊 GitHub</a>
      </div>
    </div>

    {% capture details_md %}
## Skills
- **Analytics & Visualization:** Excel, SQL, Power BI, Python  
- **Modeling & Computing:** MATLAB, PDEs, Statistical & Computational Modeling  
- **AI Training & Data:** Prompt engineering, dataset validation, model evaluation  
- **Education & Mentorship:** Teaching, active learning, student support  

## Education
- **M.A., Applied Mathematics & Scientific Computation**, Bowling Green State University, USA (2025)  
- **M.S., Mathematical Sciences**, AIMS / Stellenbosch University, South Africa (2023)  
- **B.S., Mathematics (Pure & Applied)**, Technical University of Kenya (2021)
    {% endcapture %}
    <div class="card" style="padding:2rem;">
      {{ details_md | markdownify }}
    </div>

  </div>
</div>

