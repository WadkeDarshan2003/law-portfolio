
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}
