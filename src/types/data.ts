export interface Profile {
  name: string;
  englishName: string;
  hobbies: string[];
  intro: string;
}

export interface CareerItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface ResearchItem {
  title: string;
  description: string;
  keywords: string[];
}

export interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  type: 'journal' | 'conference' | 'misc';
}

export interface Award {
  date: string;
  title: string;
  organization: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
}
