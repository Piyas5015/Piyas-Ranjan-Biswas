
export interface NavItem {
  label: string;
  href: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
}

export interface ActivityItem {
  title: string;
  role: string;
  period: string;
  description: string[];
}
