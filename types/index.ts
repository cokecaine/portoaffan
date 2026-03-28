// Typescript interfaces for portfolio data

export interface Project {
  id: string;
  title: string;
  description: string;
  metric: string;
  impact: string;
  tools: string[];
  category: 'data' | 'analytics' | 'ml';
}

export interface Skill {
  name: string;
  category: 'language' | 'tool' | 'library';
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  label: string;
  url: string;
}
