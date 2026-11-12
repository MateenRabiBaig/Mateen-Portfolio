import crickdleShot from "../assets/projects/crickdle.jpg";
import jiraShot from "../assets/projects/jira-clone.jpg";
import localdropShot from "../assets/projects/localdrop.jpg";
import aiStudioShot from "../assets/projects/ai-studio.jpg";

export const person = {
  name: "Mateen Rabi Baig",
  firstName: "Mateen",
  role: "Frontend Developer · Open to work",
  location: "India",
  intro:
    "I have a year of production experience building React and TypeScript screens for a multi-client IoT SaaS platform — and I build full-stack and mobile projects in my own time.",
  email: "mateenrabibaig@gmail.com",
  github: "https://github.com/MateenRabiBaig",
  linkedin: "https://www.linkedin.com/in/MateenRabiBaig",
  twitter: "https://x.com/mrb_43",
  cvPath: "/cv.pdf",
};

export const about = {
  paragraphs: [
    "I'm a frontend developer from India. For the past year I've worked at Firewires OneIoT as an Associate Software Engineer, building React and TypeScript screens for an IoT SaaS platform used by multiple clients under their own branding.",
    "Most of my day is turning designs into working pages, connecting them to APIs with the back-end team, and making existing features better. I also enjoy the less glamorous parts of the job: tidying types, handling slow tables, and making forms harder to break.",
    "Outside work I build things end to end. I've made a Kanban app, a cricket guessing game for web and mobile, a peer-to-peer file-transfer app, and an AI recipe assistant. I learn by building, and I put my work online so people can try it.",
  ],
  facts: [
    { label: "Experience", value: "1 year in production" },
    { label: "Current role", value: "Associate Software Engineer, Firewires OneIoT" },
    { label: "Open to", value: "Frontend & full-stack roles" },
  ] as { label: string; value: string; href?: string }[],
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Redux Toolkit",
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "Vite",
      "Chart.js",
      "Leaflet",
      "Turf.js",
      "Responsive design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT authentication",
      "J2EE — Servlets & JDBC",
    ],
  },
  {
    title: "Databases & cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase"],
  },
  {
    title: "AI & ML",
    skills: [
      "Google Gemini",
      "RAG",
      "Hugging Face",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "AI-assisted development",
    ],
  },
  {
    title: "Tools & deployment",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Netlify",
      "Render",
      "Android Studio",
      "VS Code",
      "WordPress theme development",
    ],
  },
];

export type Project = {
  name: string;
  year?: string;
  tagline: string;
  purpose: string;
  contribution: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    name: "Jira Clone",
    year: "2026",
    tagline:
      "A project management app with Kanban, list and summary views, task detail pages, teams, notifications, comments, search, filters, and file attachments.",
    purpose:
      "To understand the product details behind an issue tracker: permissions, deep links, task state, collaboration, and files that remain accessible after a refresh.",
    contribution:
      "Built the React and TypeScript client and Express API, including JWT authentication, Redux state, drag-and-drop board interactions, MongoDB GridFS attachments, team roles, invitations, and notification flows.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://jira-clone-five-indol.vercel.app",
    sourceUrl: "https://github.com/MateenRabiBaig/jira-clone",
    image: jiraShot,
    imageAlt: "Login screen of the Jira Clone project management app",
  },
  {
    name: "Crickdle",
    year: "2026",
    tagline:
      "A Wordle-style cricket game where players guess a mystery cricketer in six attempts using clues about age, country, role, batting, bowling, and IPL team.",
    purpose:
      "To practise state handling, game rules, and API design in a small product that works on both web and mobile.",
    contribution:
      "Built the React game, the REST API that serves player data and validates guesses, and a React Native version that reuses the game logic.",
    tech: ["React", "TypeScript", "React Native", "Supabase", "Firebase", "Vercel"],
    liveUrl: "https://crickdle.vercel.app",
    sourceUrl: "https://github.com/MateenRabiBaig/crickdle",
    image: crickdleShot,
    imageAlt:
      "Crickdle game board with guess table for age, country, role, batting and bowling style",
  },
  {
    name: "LocalDrop",
    year: "2026",
    tagline:
      "A React Native peer-to-peer file-transfer app for sending files between phones on the same Wi-Fi network without a server.",
    purpose:
      "To explore device discovery and direct mobile networking instead of routing every transfer through a hosted backend.",
    contribution:
      "Built the mobile transfer flow around mDNS discovery, TCP communication with TLS encryption, accept/decline confirmation, and transfer history.",
    tech: ["React Native", "TCP", "TLS", "mDNS", "Node.js"],
    sourceUrl: "https://github.com/MateenRabiBaig/Local-Drop",
    image: localdropShot,
    imageAlt: "Repository card for the Local-Drop React Native project on GitHub",
  },
  {
    name: "AI Studio",
    year: "2026",
    tagline:
      "A full-stack recipe assistant where users can register, keep private conversation histories, and get advice shaped by dietary preferences, cooking time, and servings.",
    purpose:
      "To integrate an LLM as part of a real product flow rather than a single prompt demo, with accounts, persistence, ownership checks, and failure handling.",
    contribution:
      "Built the React frontend and FastAPI backend, including JWT authentication, SQLModel and SQLite persistence, per-user conversation access, rate limiting, retry states, and responsive screens.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "pydantic-ai",
      "Google Gemini",
      "SQLModel",
      "SQLite",
    ],
    sourceUrl: "https://github.com/MateenRabiBaig/ai-studio-web",
    image: aiStudioShot,
    imageAlt: "Sign-in screen of the AI Studio recipe assistant",
  },
];

export const otherProjects: Project[] = [
  {
    name: "Melodyx",
    tagline: "A full-stack music streaming application built with Flask and SQLAlchemy.",
    purpose: "A backend-focused project exploring media catalogue and playback workflows.",
    contribution: "Built the application flow and server-side data layer.",
    tech: ["Python", "Flask", "SQLAlchemy"],
    sourceUrl: "https://github.com/MateenRabiBaig/Melodyx",
  },
  {
    name: "ChronoEvents",
    tagline:
      "A Java event management system with event creation, registration, an admin dashboard, feedback, and invoice downloads.",
    purpose: "A J2EE project focused on multi-role workflows and event booking logic.",
    contribution:
      "Implemented event management, user registration, admin views, feedback handling, and MySQL-backed JSP/Servlet flows.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    sourceUrl: "https://github.com/MateenRabiBaig/Chrono-Events---Event-Management",
  },
];

export const githubProfileUrl = person.github;

export const experience = [
  {
    period: "2025 — present",
    title: "Associate Software Engineer (Frontend)",
    org: "Firewires OneIoT",
    summary:
      "Build and maintain React and TypeScript screens for an IoT SaaS platform used by multiple clients under their own branding.",
    details: [
      "Led the move of the React codebase to TypeScript across API models, Redux slices, component props, and shared utilities.",
      "Built white-labelling so each client can use its own branding without maintaining separate copies of the application.",
      "Added infinite scroll for dropdowns and long lists, pagination for large device datasets, and Zod validation for forms.",
      "Reworked time-series data tables to handle large datasets more effectively.",
      "Built role-based dashboards for waste management so each role sees the appropriate workflows and data.",
      "Built React Native screens for water management, including tab navigation, API integration, monitoring charts, and reusable components.",
      "Worked with UI/UX designers and back-end developers to turn mockups into production screens and connect REST APIs.",
    ],
    tech: "React, TypeScript, Redux Toolkit, TanStack Query, Zod, Tailwind CSS, React Native, REST APIs",
  },
];

export const education = [
  {
    qualification: "B.E. in Computer Science and Engineering",
    institution: "Channabasaveshwara Institute of Technology",
    period: "Dec 2020 — May 2024",
    detail: "CGPA 8.1 / 10",
  },
  {
    qualification: "Pre-University (PCMB)",
    institution: "Sri Sapthagiri PU College",
    period: "2018 — 2020",
    detail: "90.16%",
  },
  {
    qualification: "SSLC",
    institution: "Nalanda High School",
    period: "2017 — 2018",
    detail: "78.08%",
  },
];

export const certificates = [
  { name: "Data Structures and Algorithms using Java", issuer: "NPTEL", year: "2022", url: "" },
  { name: "Web Development", issuer: "Udemy", year: "2023", url: "" },
  { name: "State Level Hackathon", issuer: "Channabasaveshwara Institute of Technology", year: "2023", url: "" },
  { name: "Java Full Stack Course", issuer: "Pentagon Space", year: "2024", url: "" },
];
