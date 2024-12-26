export interface FormData {
  projects: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link?: string;
  }[];
  skills: {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'other';
  }[];
  experience: {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  contact: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}