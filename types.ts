
export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'primary' | 'tool';
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}
