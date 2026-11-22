export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  language?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  summary: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  headline: string;
  shortBio: string;
  about: string;
  location: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  contact: {
    email: string;
    links: ContactLink[];
  };
}
