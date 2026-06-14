// Typescript interfaces for portfolio data

export interface ProjectHighlight {
  text: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  event?: string;
  date: string;
  description: string;
  highlights: string[];
  tools: string[];
  category: string;
  teamSize?: number;
  award?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  category: "language" | "tool" | "library" | "soft";
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  label: string;
  url: string;
}
