import { Project, Skill, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Customer Revenue Optimization",
    description:
      "Analysis of customer lifetime value patterns and revenue prediction modeling",
    metric: "Increased predictability by 34%",
    impact: "Enabled data-driven customer segment targeting",
    tools: ["Python", "Scikit-learn", "SQL"],
    category: "analytics",
  },
  {
    id: "2",
    title: "Sales Performance Dashboard",
    description:
      "Real-time dashboard for tracking sales metrics and KPI trends",
    metric: "Reduced reporting time by 80%",
    impact: "Automated weekly reporting process",
    tools: ["Tableau", "SQL", "Python"],
    category: "data",
  },
  {
    id: "3",
    title: "Churn Prediction Model",
    description:
      "Machine learning model to predict customer churn with feature engineering",
    metric: "Achieved 87% accuracy",
    impact: "Identified 2,000+ at-risk customers for retention campaigns",
    tools: ["Python", "Scikit-learn", "R"],
    category: "ml",
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "R", category: "language" },
  { name: "Tableau", category: "tool" },
  { name: "Power BI", category: "tool" },
  { name: "Scikit-learn", category: "library" },
  { name: "Pandas", category: "library" },
  { name: "NumPy", category: "library" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/affan-ilham",
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/affanilham",
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:affan@example.com",
  },
];
