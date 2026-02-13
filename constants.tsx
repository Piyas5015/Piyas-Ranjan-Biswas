
import { EducationItem, SkillCategory, ProjectItem, CertificationItem, ActivityItem, NavItem } from './types';

export const PERSONAL_INFO = {
  name: "Piyas Ranjan Biswas",
  title: "Finance & Banking Student | Data Analyst | Aspirant CMA",
  email: "ranjanbiswas5015@gmail.com",
  phone: "+8801603528307",
  linkedin: "https://linkedin.com/in/piyas-ranjan-biswas",
  location: "Bangladesh",
  about: "A highly motivated Finance & Banking student with a strong foundation in financial analysis, data management, and technical tools like SQL and Python. I am passionate about bridging the gap between traditional finance and modern data analytics to drive informed business decisions.",
  profileImage: "/Images/Piyas.jpeg"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Comilla University",
    degree: "BBA in Finance & Banking",
    period: "2023 – Present",
    location: "Cumilla, Bangladesh",
    details: "Current CGPA: 3.72/4.00"
  },
  {
    institution: "ICMAB",
    degree: "Foundation Level (Aspirant Cost & Management Accountant)",
    period: "2023 – Present",
    location: "Bangladesh",
    details: "Institute of Cost & Management Accountants of Bangladesh"
  },
  {
    institution: "Notre Dame College",
    degree: "Higher Secondary Certificate (GPA: 5.00/5.00)",
    period: "2019 – 2021",
    location: "Dhaka, Bangladesh",
    details: "Group: Business Studies"
  },
  {
    institution: "B.M Union High School",
    degree: "Secondary School Certificate (GPA: 4.83/5.00)",
    period: "2014 – 2019",
    location: "Dhaka, Bangladesh",
    details: "Group: Business Studies"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      "Microsoft Excel: Payroll Management, Grade Sheets, Data Cleaning, Financial Calculations",
      "SQL: SELECT queries, filtering, joins, data manipulation",
      "Python: Basic scripting and problem-solving"
    ]
  },
  {
    title: "Core Competencies",
    skills: [
      "Strong verbal and written communication",
      "Analytical and problem-solving ability",
      "Event planning and organizational skills",
      "Teamwork and leadership"
    ]
  }
];

export interface ExtendedCertification extends CertificationItem {
  date: string;
  image: string;
}

export const CERTIFICATIONS: ExtendedCertification[] = [
  { 
    title: "Introduction to SQL", 
    issuer: "Sololearn", 
    date: "11 February 2026",
    image: "/Images/SQL.png" 
  },
  { 
    title: "Introduction to Python", 
    issuer: "Sololearn", 
    date: "07 February 2026",
    image: "/Images/python.png"
  },
  { 
    title: "FinTech - Applications and Future Prospects", 
    issuer: "Alison", 
    date: "15 January 2026",
    image: "/Images/Alison.jpeg"
  },
  { 
    title: "IELTS Academic - Band Score 6.0", 
    issuer: "British Council / IDP", 
    date: "01 February 2025",
    image: "/Images/Ielts.png"
  }
];

export const ACTIVITIES: ActivityItem[] = [
  {
    title: "Castaway On The Moon",
    role: "Best Official Delegate – Chamber of Venus (Team Alpha)",
    period: "2020 – 2021",
    description: [
      "Won Best Official Delegate award for outstanding performance and brand promotion.",
      "Integrated Pran Up branding into performances including acting, dance, and storytelling.",
      "Actively recruited and coordinated participants to increase program engagement.",
      "Demonstrated leadership, communication, and promotional strategy skills."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Financial Dashboard Analysis",
    description: "An Excel-based dashboard for tracking corporate payroll and performance metrics with automated visualizations.",
    tech: ["Excel", "VBA", "PowerQuery"],
    image: "/Images/project1.jpg",
    link: "#"
  },
  {
    title: "Sales Data SQL Investigation",
    description: "Deep dive into retail sales data using SQL to identify customer trends and inventory bottlenecks.",
    tech: ["SQL", "PostgreSQL"],
    image: "/Images/project2.jpg",
    link: "#"
  },
  {
    title: "Python Portfolio Tracker",
    description: "A simple Python script to track stock portfolio performance using real-time API data.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: "/Images/project3.jpg",
    link: "#"
  }
];
