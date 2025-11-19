import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechStackCategory {
  id: string;
  title: string;
  items: string[];
}

export interface ComparisonPoint {
  category: string;
  traditional: string;
  genericAlternatives: string;
}

export interface TractionMetric {
  name: string;
  value: number;
  label: string;
}

export interface VerticalItem {
  title: string;
  items: string[];
}