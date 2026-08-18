export const bio = {
  name: 'Sarah G. Randol',
  headshot: '/images/about/headshot.png',
  paragraphs: [
    'Data scientist with a background in applied mathematics and scientific computation, working across statistical modeling, machine learning, AI, data analysis, and mathematical modeling.',
    'My work starts with understanding the problem: how the data was generated, what assumptions the analysis depends on, and what question or decision it needs to support. Models come after that. This approach is shaped by mathematical training and experience across research, analytics, and applied data projects.',
  ],
};

export interface EducationEntry {
  title: string;
  meta: string;
  description: string;
  courses: string;
}

export const education: EducationEntry[] = [
  {
    title: 'Professional Program Applied AI & Data Science',
    meta: 'MIT Professional Education · April 2026',
    description:
      'Professional training in applied AI and data science, spanning machine learning, deep learning, recommendation systems, generative AI, and production-oriented data science workflows.',
    courses:
      'Data Analysis and Visualization, Graph Theory, Machine Learning, Introduction to AI on Cloud, Practical Data Science Workflows, Deep Learning, Recommendation Systems, Generative AI & Applied AI Systems.',
  },
  {
    title: 'M.A. Applied Mathematics & Scientific Computation',
    meta: 'Bowling Green State University · Aug. 2025',
    description:
      'Graduate training in applied mathematics, numerical analysis, differential equations, probability, statistics, and scientific computation, culminating in research on numerical methods for PDEs with nonlinear interface conditions.',
    courses:
      'Numerical Analysis, Real Analysis, Probability & Statistics, Linear Algebra with Applications, Iterative Methods, Applied Mathematics (PDEs), Boundary Value Differential Equations.',
  },
  {
    title: 'M.S. Mathematical Sciences',
    meta: 'Stellenbosch University / AIMS South Africa · June 2023',
    description:
      'Intensive interdisciplinary graduate training across mathematics, computation, statistics, physics, and mathematical biology, with an emphasis on mathematical problem solving and applied modeling.',
    courses:
      'Python Programming, Machine Learning for Particle Physics, Statistics, Numerical Mathematics, Graph Theory, Mathematical Biology, Experimental Mathematics with SageMath, Open Quantum Systems, Mathematical Problem Solving.',
  },
  {
    title: 'B.S. Mathematics (Pure & Applied)',
    meta: 'The Technical University of Kenya · July 2021',
    description:
      'Broad training across pure and applied mathematics, statistics, numerical methods, mathematical modeling, scientific programming, and computer science.',
    courses:
      'Calculus, Numerical Analysis, Mathematical Modeling, ODEs & PDEs, Probability & Statistics, Linear Algebra, Real & Complex Analysis, Scientific Programming, Data Structures & Algorithms, Database Systems.',
  },
];

export interface AwardEntry {
  title: string;
  meta: string;
  description: string;
  link?: { label: string; href: string };
}

export const awards: AwardEntry[] = [
  {
    title: 'James Robert & Gretchen Overman Graduate Scholarship',
    meta: 'Bowling Green State University · 2024',
    description:
      'Awarded by the Department of Mathematics and Statistics in recognition of academic excellence.',
    link: {
      label: 'View department recognition',
      href: 'https://www.bgsu.edu/arts-and-sciences/mathematics-and-statistics/department-and-alumni-news/2023-2024.html',
    },
  },
  {
    title: 'Paul G. Allen Family Foundation Scholarship',
    meta: 'AIMS South Africa · 2023',
    description:
      'Granted for academic excellence and for the research project "Modeling the Impact of Human Behaviour on COVID-19 Vaccine Uptake" during the structured Master’s program in Mathematical Sciences.',
    link: {
      label: 'View recognition',
      href: 'https://aims.ac.za/2023/07/03/aims-south-africa-hosts-its-20th-graduation-and-recognition-of-achievement-ceremony/',
    },
  },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  bullets: string[];
}

export interface ExperienceGroup {
  category: string;
  meta: string;
  entries: ExperienceEntry[];
}

export const experience: ExperienceGroup[] = [
  {
    category: 'Data Science, AI & Technical',
    meta: 'AI training · data analysis · dashboards · operational analytics',
    entries: [
      {
        role: 'Subject Matter Expert (Mathematics & Data Analysis)',
        org: 'Mercor · 2025–Present',
        bullets: [
          'Improved AI reasoning reliability and accuracy by designing and validating structured mathematical datasets for production model training.',
          'Reduced model failure patterns by conducting systematic error analysis and response validation across complex reasoning tasks.',
          'Strengthened model deployment readiness by delivering high-precision, audit-ready training data in collaboration with cross-functional AI teams.',
        ],
      },
      {
        role: 'Mathematical Reasoning Annotator',
        org: 'Telus International · 2025',
        bullets: [
          'Evaluated and improved AI response performance by designing and reviewing complex mathematical reasoning prompts.',
          'Identified model weaknesses through structured error analysis and output validation across multi-step reasoning tasks.',
        ],
      },
      {
        role: 'Junior Data Analyst',
        org: 'Lumira Insights Group, Nairobi · 2020',
        bullets: [
          'Improved operational forecasting accuracy by developing Excel-based predictive analysis models for inventory and workforce planning.',
          'Reduced data inconsistencies by cleaning and structuring multi-source operational datasets.',
          'Accelerated decision-making by designing interactive KPI dashboards to monitor engagement and resource utilization.',
        ],
      },
      {
        role: 'Data & Records Manager',
        org: 'National Social Security Fund (NSSF), Kenya · 2019',
        bullets: [
          'Reduced registration errors by verifying and processing structured identity and account records.',
          'Maintained regulatory compliance through systematic documentation and validation of member data.',
        ],
      },
    ],
  },
  {
    category: 'Teaching & Mentorship',
    meta: 'instruction · class management · statistics · active learning · student mentorship',
    entries: [
      {
        role: 'Graduate Teaching Assistant, Mathematics',
        org: 'Bowling Green State University · 2023–2025',
        bullets: [
          'Enhanced student performance trends by analyzing assessment data and identifying learning gaps across Precalculus and College Algebra courses.',
          'Strengthened quantitative reasoning outcomes by integrating applied analytics and structured problem-solving into instruction.',
          'Supported computational modeling research using MATLAB and numerical methods in scientific computing projects.',
        ],
      },
      {
        role: 'Graduate Assistant, Mathematics',
        org: 'Technical University of Kenya · 2023–2024',
        bullets: [
          'Strengthened statistical reasoning skills by leading applied Statistics tutorials focused on data interpretation and probability modeling.',
          'Improved assessment quality by developing and evaluating quantitative problem sets aligned with curriculum standards.',
        ],
      },
      {
        role: 'Graduate Teaching Assistant, Mathematics',
        org: 'Dedan Kimathi University of Technology · 2021–2022',
        bullets: [
          'Increased student performance consistency by analyzing assessment data and adjusting instructional focus based on identified gaps.',
          'Strengthened analytical reasoning skills by delivering structured instruction in Calculus and Discrete Mathematics.',
        ],
      },
    ],
  },
  {
    category: 'Industrial Operations & Manufacturing',
    meta: 'automotive production · quality assurance · process monitoring · manufacturing operations',
    entries: [
      {
        role: 'Production Operator (Automotive Manufacturing)',
        org: 'Grammer Americas, Ohio · 2024',
        bullets: [
          'Operated and monitored automated blow-molding equipment used in automotive component production.',
          'Inspected finished components for defects and worked with quality teams to maintain required production and quality standards.',
          'Coordinated with production and logistics teams to maintain material flow and support continuous manufacturing operations.',
        ],
      },
    ],
  },
];

export const teachingPhilosophy =
  'I value teaching not just as the transfer of knowledge, but as an opportunity to create inclusive, engaging learning spaces. My approach combines clear explanations, active learning, and mentorship to help students build both confidence and problem-solving skills. To strengthen this approach, I completed the Active Learning Certificate Program (BGSU, 2025), where I designed and presented an inclusive lesson plan that applied active learning strategies in practice.';

export const mentoringSupport = {
  title: 'Mentoring & Student Support',
  bullets: [
    'Personalized study plans for students with test anxiety/time-management issues.',
    'Emphasis on growth mindset and question-driven learning.',
  ],
};

export interface CommunityEntry {
  title: string;
  meta: string;
  description: string;
}

export interface CommunityGroup {
  title: string;
  entries: CommunityEntry[];
}

export const habitatForHumanity = {
  title: 'Habitat for Humanity | Women Build',
  meta: 'Aug 2025 – Present',
  intro:
    'Contribute to residential construction projects supporting affordable housing in the local community, working alongside construction supervisors, skilled tradespeople, and other volunteers at different stages of homebuilding.',
  bullets: [
    'Assisted with siding installation, framing, soffits, and hurricane ties, gaining practical knowledge of structural stability.',
    'Supported electrical and plumbing preparations including socket holders, fan mounts, vent pipes, and wire stripping.',
    'Participated in flooring installation and site preparation.',
  ],
  closing:
    'This experience connected problem-solving and technical thinking to real-world community impact while working in hands-on environments.',
};

export const campusInvolvementIntro =
  'Beyond structured volunteering, participation in campus and community initiatives has created opportunities to engage with people, science, sustainability, and culture, in meaningful ways.';

export const campusInvolvementGroups: CommunityGroup[] = [
  {
    title: 'BGSU Events and Outreach',
    entries: [
      {
        title: 'BGSU Campus Restore',
        meta: 'Mar 2024, May 2025',
        description: 'Supported a campus sustainability initiative centered on collection, recycle and reuse efforts.',
      },
      {
        title: 'Bowling Green Community Holiday Parade',
        meta: 'Nov 2024',
        description: 'Participated in the local Bowling Green holiday parade with BGSU Global Falcons, representing the university’s international student community.',
      },
      {
        title: 'Total Solar Eclipse Watch Party',
        meta: 'Apr 2024 · BGSU',
        description: 'Helped organize the BGSU eclipse watch event and guided participants during the April 2024 total solar eclipse.',
      },
      {
        title: 'Northwest Ohio Science Olympiad',
        meta: 'Mar 2024 · BGSU',
        description: 'Supported activities at a regional STEM competition that brought together students to showcase problem-solving and innovation.',
      },
    ],
  },
  {
    title: 'Leadership and Outreach in South Africa',
    entries: [
      {
        title: 'Student Leader, AIMS',
        meta: '2023 · South Africa',
        description: 'Served in a peer leadership role supporting students and contributing to academic and community activities at AIMS South Africa.',
      },
      {
        title: 'House of Science, AIMS',
        meta: '2022–2023 · South Africa',
        description: 'Supported science communication and outreach activities to local communities through AIMS South Africa, helping make mathematics and science more accessible.',
      },
    ],
  },
];

export const contactLinks = {
  linkedin: 'https://www.linkedin.com/in/sarah-gakii/',
  github: 'https://github.com/SARAH-GAKII',
};
