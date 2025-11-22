export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tech: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}