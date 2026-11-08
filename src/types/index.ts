export type NumberSystem = 'decimal' | 'binary' | 'octal' | 'hexadecimal';

export interface StudentProfile {
  name: string;
  initials: string;
  uid: string;
  branch: string;
  university: string;
  subject: string;
  subjectCode?: string;
  semester?: string;
  tagline: string;
  motto: string;
  email: string;
  github: string;
  linkedin: string;
  resumePath: string;
  bio: string;
  extendedBio: string;
  personalInterests: {
    title: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    badge: string;
  }[];
  academicInterests: {
    title: string;
    description: string;
    category: 'AI & ML' | 'Architecture & Systems' | 'Core CS & Software';
  }[];
  futureGoals: {
    id: number;
    title: string;
    category: string;
  }[];
  futureProjects: {
    title: string;
    category: string;
    description: string;
    techTags: string[];
  }[];
  skillCategories?: {
    name: string;
    skills: {
      name: string;
      level: number;
      tag?: string;
    }[];
  }[];
}

export interface COATopic {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: 'Fundamentals' | 'Architecture' | 'Processing' | 'Memory & I/O';
  detailedContent: {
    overview: string;
    keyPoints: string[];
    formulaOrStructure?: string;
    example?: string;
    importance: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Certificates' | 'Achievements' | 'Academic' | 'Projects' | 'Events' | 'Personal Highlights';
  description: string;
  date: string;
  iconType: string;
  placeholderText?: string;
  credentialUrl?: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Certification' | 'Technical' | 'Participation';
  organization: string;
  date: string;
  description: string;
  status: string;
}
