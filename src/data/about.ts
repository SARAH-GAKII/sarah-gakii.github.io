export const bio = {
  name: 'Sarah G. Randol',
  headshot: '/images/about/headshot.png',
  paragraphs: [
    'I am a Data Scientist with a strong foundation in applied mathematics, focused on building data driven models that support real world decision making.',
    'My work combines statistical modeling, machine learning, AI, and applied analytics. I approach problems by first understanding how data is generated, what assumptions are involved, and what questions the analysis is meant to answer, before selecting or training models. This perspective is shaped by rigorous mathematical training and hands on experience working end to end with real datasets.',
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
    title: 'Applied AI & Data Science',
    meta: 'MIT Professional Education · April 2026',
    description:
      'Advanced professional program focused on applied AI, machine learning, deep learning, recommendation systems, generative AI, and production-oriented data science workflows.',
    courses:
      'Foundations of AI, Data Analysis and Visualization, Graph Theory, Machine Learning, Introduction to AI on Cloud, Practical Data Science Workflows, Deep Learning, Recommendation Systems, Generative AI & Applied AI Systems.',
  },
  {
    title: 'M.A. Applied Mathematics & Scientific Computation',
    meta: 'Bowling Green State University · Aug. 2025',
    description:
      'Graduate training in numerical analysis, PDEs, probability, statistics, and applied mathematical modeling, with strong preparation in scientific computation and teaching practice.',
    courses:
      'Numerical Analysis series, Real Analysis series, Probability & Statistics series, Linear Algebra with its Applications, Iterative Solutions (MATLAB), Topics in Applied Mathematics (PDEs) series, Boundary Value Differential Equations, Curriculum Analytics Classroom Behavior, Overview College Math Teaching.',
  },
  {
    title: 'M.S. Mathematical Sciences',
    meta: 'Stellenbosch University / AIMS South Africa · June 2023',
    description:
      'Intensive interdisciplinary master’s program combining mathematics, computing, physics, statistics, logic, and mathematical biology in a problem-solving-focused environment.',
    courses:
      'Intro. to Programming using Python, Machine Learning for Particle Physics, NetworkX, Experimental Mathematics with SageMath, Statistics, Computing & LaTeX, Mathematical Problem Solving, Concepts and Problem Solving in Physics, Open Quantum Systems, Lie Groups and Lie Algebra, Graph Theory, Numerical Mathematics, Measurement Interpretation & Mathematics, Analytical Techniques in Mathematical Biology, Algebraic Biology, Applying Logic, Algebraic Methods.',
  },
  {
    title: 'B.S. Mathematics (Pure & Applied)',
    meta: 'The Technical University of Kenya · July 2021',
    description:
      'Broad undergraduate foundation in pure mathematics, applied mathematics, statistics, programming, and computational methods.',
    courses:
      'Calculus, Differential Geometry, Numerical Analysis, Methods of Applied Mathematics, Mathematical Modeling, Fluid Mechanics, ODEs, PDEs, Probability & Statistics, Test of Hypothesis, Theory of Estimation, Data Structures & Algorithms, Database Systems, Scientific Programming, Object Oriented Programming, Linear Programming, Linear Algebra, Discrete Mathematics, Algebraic Structures, Topology, Real Analysis, Complex Analysis, Functional Analysis, Group Theory, Ring Theory.',
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
      'Awarded by the Department of Mathematics and Statistics at Bowling Green State University in recognition of academic excellence.',
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
          'Developed and validated mathematical and data analysis prompts to train advanced AI models.',
          'Solved and optimized complex problems in algebra, calculus, and statistics to improve model reasoning.',
          'Collaborated with a top-tier AI company to ensure high-quality datasets for cutting-edge AI applications.',
        ],
      },
      {
        role: 'Mathematical Reasoning Annotator',
        org: 'Telus International · 2025',
        bullets: [
          'Designed and reviewed high-level mathematical prompts for AI datasets.',
          'Annotated reasoning steps to improve accuracy of large language models.',
        ],
      },
      {
        role: 'Junior Data Analyst',
        org: 'Lumira Insights Group, Nairobi · 2020',
        bullets: [
          'Built a forecasting model to help a client anticipate inventory and staffing needs.',
          'Cleaned, analyzed, and visualized operational and survey data in Excel.',
          'Designed dynamic dashboards to track program engagement and resource allocation.',
        ],
      },
      {
        role: 'Data & Records Manager',
        org: 'National Social Security Fund (NSSF), Kenya · 2019',
        bullets: [
          'Processed and verified account registrations and identity records.',
          'Handled fingerprinting duties.',
          'Supported issuance of duplicate membership cards, amended member records, and assisted with searches for members who had lost their membership numbers.',
          'Maintained careful documentation and filing of fingerprint binder slips for record retrieval.',
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
          'Instructed Precalculus and College Algebra, combining lectures with interactive tutorials.',
          'Designed and graded assessments, ensuring fair and accurate evaluations.',
          'Supported faculty through research assistance and administrative tasks.',
        ],
      },
      {
        role: 'Graduate Assistant, Mathematics',
        org: 'Technical University of Kenya · 2023–2024',
        bullets: [
          'Led tutorials for Introduction to Statistics, developing and reviewing instructional materials.',
          'Assessed student progress and provided constructive feedback.',
        ],
      },
      {
        role: 'Graduate Teaching Assistant, Mathematics',
        org: 'Dedan Kimathi University of Technology · 2021–2022',
        bullets: [
          'Conducted tutorials and lectures in Calculus and Discrete Mathematics.',
          'Proctored and graded assignments and exams.',
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
          'Operated and monitored automated blow-molding machines for Tier-1 automotive clients.',
          'Partnered with quality teams to reduce scrap rates and ensure compliance with strict automotive standards.',
          'Coordinated with logistics staff to maintain smooth production flow.',
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
  title: 'Habitat for Humanity — Women Build',
  meta: 'Aug 2025 – Present',
  intro:
    'Contributed to residential construction projects as part of Habitat for Humanity’s Women Build initiative. This work supported affordable housing efforts while providing hands-on exposure to building systems and teamwork in the field.',
  bullets: [
    'Assisted with siding installation, framing, soffits, and hurricane ties, gaining practical knowledge of structural stability.',
    'Helped with electrical and plumbing preparations (socket holders, vent pipes, fan mounts).',
    'Collaborated with skilled supervisors and diverse teams to ensure safe, efficient progress.',
  ],
  closing:
    'This experience connected problem-solving and technical thinking to real-world community impact while working in hands-on environments.',
  lead: 'Construction lead: Daniel Cane',
};

export const campusInvolvementIntro =
  'Beyond structured volunteering, I have taken part in a range of campus and community activities that connected me with people, science, and culture in meaningful ways.';

export const campusInvolvementGroups: CommunityGroup[] = [
  {
    title: 'BGSU Events and Outreach',
    entries: [
      {
        title: 'BGSU Campus Restore',
        meta: 'Mar 2024, May 2025',
        description: 'Assisted in a campus-wide sustainability initiative, supporting recycling and reuse efforts.',
      },
      {
        title: 'Bowling Green Community Holiday Parade',
        meta: 'Nov 2024',
        description: 'Marched with the community to celebrate local traditions and connect with residents.',
      },
      {
        title: 'Total Solar Eclipse Watch Party',
        meta: 'Apr 2024 · BGSU',
        description: 'Helped organize and guide participants during this rare celestial event, sharing in science outreach and community excitement.',
      },
      {
        title: 'Northwest Ohio Science Olympiad',
        meta: 'Mar 2024 · BGSU',
        description: 'Volunteered in a STEM competition that brought together students to showcase problem-solving and innovation.',
      },
    ],
  },
  {
    title: 'Leadership and Outreach in South Africa',
    entries: [
      {
        title: 'Student Leader, AIMS',
        meta: '2023 · South Africa',
        description: 'Provided peer leadership and mentorship during academic and extracurricular activities at the African Institute for Mathematical Sciences.',
      },
      {
        title: 'House of Science, AIMS',
        meta: '2022–2023 · South Africa',
        description: 'Supported science communication and outreach to local communities, helping make mathematics and science more accessible.',
      },
    ],
  },
];

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export const beyondTheResume: MediaItem[] = [
  { type: 'image', src: '/images/about/workshop.jpg', alt: 'Presenting at an academic workshop' },
  { type: 'video', src: '/videos/teaching.mp4', alt: 'Teaching a mathematics class' },
  { type: 'image', src: '/images/about/collaboration.jpg', alt: 'Academic collaboration with peers' },
  { type: 'image', src: '/images/about/data-work.jpg', alt: 'Working through a data analysis problem' },
  { type: 'video', src: '/videos/aims-graduation.mp4', alt: 'Graduation ceremony at AIMS South Africa' },
  { type: 'image', src: '/images/about/research.jpg', alt: 'Remote research collaboration' },
];

export const contactLinks = {
  email: 'gakiisarah251@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sarah-gakii/',
  github: 'https://github.com/SARAH-GAKII',
};
