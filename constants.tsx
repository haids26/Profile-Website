
import React from 'react';
import { ShoppingCart, Headphones, ClipboardCheck, GraduationCap, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';
import { Service, Experience, Skill, Testimonial, Project } from './types';

export const SERVICES: Service[] = [
  {
    title: "E-commerce Support",
    description: "Expert Shopify order management, tracking subscriptions, and handling complex refund requests with precision.",
    icon: "shopping-cart",
    image: "https://images.unsplash.com/photo-1556742049-13da736c04d9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Customer Experience",
    description: "Multi-channel support (Email/Chat) focused on de-escalation, professional communication, and resolving issues effectively.",
    icon: "headphones",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Inventory & Admin",
    description: "Meticulous data tracking, inventory monitoring, and operational support to ensure zero interruptions in business flow.",
    icon: "clipboard",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Professional Design Portfolio",
    description: "A comprehensive collection of design assets and professional documentation created in Canva, showcasing layout expertise and brand consistency.",
    link: "https://www.canva.com/design/DAHAo5oXOuE/i9KDGuoZaEAZWVHbU6-3_Q/view?utm_content=DAHAo5oXOuE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7ff867488c",
    tags: ["Canva", "Graphic Design", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Shopify Store Management",
    description: "Optimized product listings and back-end inventory management for high-volume e-commerce stores.",
    link: "#",
    tags: ["Shopify", "Operations", "Inventory"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    period: "Jan 2025 – Jan 2026",
    company: "E-commerce Business",
    role: "Customer Service Agent",
    highlights: [
      "Managed daily customer email inquiries related to order status, tracking numbers, cancellations, refunds, and subscriptions",
      "Responded to product-related questions with clear and accurate information",
      "De-escalated customer concerns professionally to reduce escalations and avoid unnecessary refunds",
      "Ensured strict compliance with company SOPs and policies while maintaining high attention to detail"
    ]
  },
  {
    period: "Feb 2024 – Oct 2024",
    company: "Flour & Feeds Company",
    role: "Micro Ingredients Inventory Assistant",
    highlights: [
      "Recorded daily usage of micro ingredients and monitored inventory movement in the production area",
      "Conducted hourly inventory checks to ensure uninterrupted production operations",
      "Coordinated closely with the production team to prevent shortages",
      "Demonstrated strong organizational skills and high attention to detail"
    ]
  },
  {
    period: "Nov 2022 – Dec 2023",
    company: "Full-Time Academic College Tutor",
    role: "Private Tutor",
    highlights: [
      "Provided tutoring in academic subjects including Math and Science",
      "Assisted in co-writing research papers in the Psychology field",
      "Adapted teaching methods based on student learning needs",
      "Strengthened adaptability, critical thinking, and organizational skills"
    ]
  },
  {
    period: "Aug 2021 – Sep 2022",
    company: "Marketing Enterprise",
    role: "Sales Representative",
    highlights: [
      "Communicated daily with customers regarding orders and inquiries via walk-ins and phone calls",
      "Processed orders and coordinated with the delivery team for accurate distribution",
      "Ensured accuracy of order details to prevent delivery issues",
      "Applied strong communication and detail-oriented skills in a fast-paced environment"
    ]
  },
  {
    period: "July 2020 – March 2021",
    company: "Promoted Role",
    role: "HR Assistant / Billing Assistant",
    highlights: [
      "Promoted from Spare Parts Inventory Assistant based on exceptional performance",
      "Coordinated employee attendance, behavior, deployment, and recruitment-to-deployment processes",
      "Prepared quotations and billing documents for projects and work orders",
      "Acted as a liaison between employees and the principal power plant company"
    ]
  },
  {
    period: "Jan 2019 – July 2020",
    company: "Engineering Operations",
    role: "Spare Parts Inventory Assistant",
    highlights: [
      "Managed documentation for spare parts movement and usage",
      "Maintained accurate monitoring sheets for daily engineering operations",
      "Ensured inventory records were precise and up to date",
      "Demonstrated strong organizational skills and keen attention to detail"
    ]
  },
  {
    period: "2013 – 2019",
    company: "Mindanao State University",
    role: "Electrical Engineering Student",
    highlights: [
      "Gained strong technical background in systems and analytical thinking",
      "Developed advanced problem-solving skills applied to complex workflows",
      "Engaged in engineering projects requiring precision and team collaboration"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Customer Service", level: 95, category: 'primary' },
  { name: "Shopify Management", level: 90, category: 'primary' },
  { name: "Inventory Systems", level: 92, category: 'primary' },
  { name: "SOP Compliance", level: 100, category: 'primary' },
  { name: "Google Workspace", level: 95, category: 'tool' },
  { name: "ChatGPT / AI Tools", level: 90, category: 'tool' },
  { name: "Canva", level: 85, category: 'tool' },
  { name: "Zendesk / Gorgias", level: 88, category: 'tool' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Haidee is incredibly meticulous. Her handling of our Shopify orders and subscription issues saved us countless hours of manual work and significantly reduced our refund rate.",
    author: "James Wilson",
    position: "Operations Manager",
    company: "Swift Commerce Ltd."
  },
  {
    quote: "Her attention to detail during her time as an Inventory Associate was exemplary. She ensured zero downtime in our production line through proactive monitoring.",
    author: "Engr. Roberto Santos",
    position: "Plant Supervisor",
    company: "Aboitiz Company"
  },
  {
    quote: "Haidee has a unique gift for breaking down complex concepts. Her tutoring was instrumental in helping our research team finalize our Psychology papers with precision.",
    author: "Dr. Sarah Mendez",
    position: "Senior Research Lead",
    company: "Academic Solutions"
  }
];

export const CONTACT_INFO = {
  email: "haidee.capili@gmail.com",
  phone: "+63 995 372 9069",
  onlineJobs: "https://www.onlinejobs.ph/jobseekers/info/1826017"
};
