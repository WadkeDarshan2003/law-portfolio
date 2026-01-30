
import React from 'react';
import { NavItem, PracticeArea, TimelineItem, NewsItem, StatItem } from './types';
import { 
  FaGavel, 
  FaBalanceScale, 
  FaFileContract, 
  FaPenNib, 
  FaSearch,
  FaBuilding,
  FaUsers
} from 'react-icons/fa';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Practices', href: '#practices' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Experience', href: '#experience' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Criminal Law',
    description: 'Bail, remand proceedings, trials, financial frauds, and bodily offence cases.',
    icon: <FaGavel />,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Arbitration & Dispute Resolution',
    description: 'Contractual and finance-related arbitration matters.',
    icon: <FaBalanceScale />,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Consumer Protection Law',
    description: 'Representation before District, State, and National Consumer Forums.',
    icon: <FaUsers />,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Civil & Commercial Litigation',
    description: 'Appeals, transfer applications, and civil disputes.',
    icon: <FaBuilding />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Legal Drafting & Conveyancing',
    description: 'Agreements, contracts, pleadings, and notices.',
    icon: <FaFileContract />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2012 - Present',
    title: 'Associate Advocate',
    organization: 'M/s Kale & Shinde Associates, Pune',
    description: 'Expertise in finance litigations, civil and criminal appeals in District Court, PIL matters in High Court, and serving as Advocate Commissioner in Arbitration cases.'
  },
  {
    year: '2012',
    title: 'Bachelor of Law (LL.B)',
    organization: 'Modern College, Pune University',
    description: 'Completed professional law degree with a focus on comprehensive legal theory and practical advocacy.'
  },
  {
    year: '2010 - 2011',
    title: 'Legal Intern',
    organization: 'M/s Kale & Shinde Associates, Pune',
    description: 'Gained hands-on experience in Civil, Revenue, Conveyancing, and Consumer sectors under the guidance of senior advocates.'
  },
  {
    year: '2009',
    title: 'Bachelor of Commerce (B.Com)',
    organization: 'Modern College, Pune University',
    description: 'Foundational degree in commerce, providing essential insights into commercial and business law.'
  },
  {
    year: '2007',
    title: 'C-Programming Certification',
    organization: 'Maharashtra Business Training Board',
    description: 'Professional certification demonstrating analytical thinking and technical proficiency.'
  },
  {
    year: '2006',
    title: 'High School Diploma',
    organization: 'Shankarrao Mohite Mahavidyalaya, Akluj',
    description: 'Completed higher secondary education with distinction.'
  }
];

export const STATS: StatItem[] = [
  { value: '1500+', label: 'Cases Completed' },
  { value: '1200+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Dedication' }
];

export const NEWS: NewsItem[] = [
  {
    date: '26 July, 2024',
    category: 'Corporate',
    title: 'New Regulations in Tech Compliance',
    excerpt: 'Understanding the shift in data privacy laws and how businesses can stay ahead of the curve.',
    image: 'https://picsum.photos/seed/news1/600/400'
  },
  {
    date: '15 June, 2024',
    category: 'Legal Insights',
    title: 'Victory in Historic Case',
    excerpt: 'Detailed analysis of the landmark judgment secured for our client in the Supreme Court.',
    image: 'https://picsum.photos/seed/news2/600/400'
  },
  {
    date: '02 May, 2024',
    category: 'Internal',
    title: 'Niraj Jagtap Named Top Lawyer',
    excerpt: 'Recognition for excellence in legal services and community commitment in the legal field.',
    image: 'https://picsum.photos/seed/news3/600/400'
  }
];

export const COLORS = {
  primary: '#8C7152', // The Brown/Gold from the reference
  secondary: '#0F172A', // Dark professional blue
  accent: '#F8FAFC', // Slate 50 equivalent
};
