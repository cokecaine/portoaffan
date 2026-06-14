import { Project, Experience, Skill, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "INDOBUZZTRA",
    subtitle: "Opinion Manipulation Detection on Instagram Comments",
    role: "Backend Developer & UI/UX Designer",
    event: "SPARK 2026 - Team Project",
    date: "June 2026",
    award: "🥈 Silver Award — Technology & Innovation",
    description:
      "An AI-powered system that detects coordinated opinion manipulation in Instagram comment sections, combining adaptive clustering with an intuitive interface for non-technical users.",
    highlights: [
      "Won Silver Award in Technology & Innovation at an international competition",
      "Enhanced the backend pipeline's clustering approach (K-Means & HDBSCAN) to improve detection of coordinated manipulation patterns",
      "Collaborated with the team to design a UI/UX that makes complex analysis results understandable for non-technical users",
    ],
    tools: ["Python", "FastAPI", "HuggingFace", "scikit-learn", "HDBSCAN", "Playwright", "Figma"],
    category: "AI / NLP",
    teamSize: 5,
  },
  {
    id: "2",
    title: "FER Emotion Detector",
    subtitle: "AI-Powered Facial Emotion Recognition",
    role: "Full Stack Developer & AI Engineer",
    event: "Independent Project",
    date: "February 2026",
    description:
      "An end-to-end real-time emotion detection system that classifies 7 distinct emotions through a live webcam feed, from model integration to frontend deployment.",
    highlights: [
      "Built an end-to-end real-time emotion detection system classifying 7 emotions through a live webcam feed",
      "Developed a Flask REST API to serve model predictions and a responsive web interface to display results",
      "Sole contributor across the entire stack — from AI model integration to frontend deployment",
    ],
    tools: ["Python", "TensorFlow", "OpenCV", "Flask"],
    category: "AI / Computer Vision",
  },
  {
    id: "3",
    title: "Todo App",
    subtitle: "Mobile Task Management Application",
    role: "Mobile Developer",
    event: "Team Project",
    date: "May 2026",
    description:
      "A full-featured mobile task management app with due date handling and calendar views, built from the ground up for the team using React Native & Expo.",
    highlights: [
      "Initialized the full React Native & Expo project architecture from scratch for the team",
      "Built core task management logic (CRUD) with due date handling and calendar view structure",
      "Wrote team documentation to streamline onboarding and collaboration",
    ],
    tools: ["React Native", "Expo", "TypeScript"],
    category: "Mobile",
    teamSize: 2,
  },
  {
    id: "4",
    title: "Sapta Pertala Limited",
    subtitle: "Villa Booking Website",
    role: "Project Consultant",
    date: "February – March 2026",
    description:
      "Consulting engagement for a villa booking platform — translated business requirements into a clear system blueprint and user-friendly feature roadmap for the development team.",
    highlights: [
      "Gathered and clarified client requirements, translating business needs into a clear system blueprint",
      "Defined user flows and feature priorities to ensure a smooth, guest-friendly booking experience",
    ],
    tools: [],
    category: "Consulting",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Dinkominfo Pekalongan",
    role: "Full Stack Developer",
    type: "Internship",
    period: "July – August 2025",
    highlights: [
      "Built REST API and user authentication system using Laravel",
      "Implemented dark mode and set up the foundational frontend & backend structure",
      "Collaborated using Git with proper branching and pull request workflows",
    ],
    tags: ["Laravel", "PHP", "REST API", "MySQL", "Git"],
  },
  {
    id: "2",
    company: "COIL Project — Airtel Africa Growth Strategy",
    role: "International Collaborator",
    type: "Coventry University (UK) · Pan Atlantic University (Nigeria) · UMS (Indonesia)",
    period: "November 2024",
    highlights: [
      "Analyzed multinational expansion strategies using Porter's Five Forces, Porter's Diamond, and CAGE Framework",
      "Collaborated with a cross-continental team across three countries",
      "Presented business recommendations in English to an international audience",
    ],
    tags: ["Business Strategy", "Porter's Five Forces", "CAGE Framework", "International Collaboration"],
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "PHP", category: "language" },
  { name: "SQL", category: "language" },

  // Tools & Platforms
  { name: "Git", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Power BI", category: "tool" },

  // Libraries & Frameworks
  { name: "React Native", category: "library" },
  { name: "Next.js", category: "library" },
  { name: "Flask", category: "library" },
  { name: "Laravel", category: "library" },
  { name: "TensorFlow", category: "library" },
  { name: "OpenCV", category: "library" },
  { name: "Scikit-learn", category: "library" },
  { name: "Expo", category: "library" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/affanilhamarsyila",
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/cokecaine",
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:affanilham97@gmail.com",
  },
];

export const education = {
  school: "Universitas Muhammadiyah Surakarta",
  location: "Surakarta, Indonesia",
  focus: "Data Science & Information Technology",
};
