
import { 
  Globe, 
  Cpu, 
  Box, 
  TrendingUp, 
  Search, 
  MessageSquare, 
  Database, 
  Bot, 
  Server,
  ShieldCheck,
  Truck,
  Lock
} from 'lucide-react';
import { ServiceItem, TechStackCategory, ComparisonPoint, TractionMetric, VerticalItem } from './types';

export const APP_COLORS = {
  background: '#282a1e',
  accent: '#d3f54c',
  white: '#ffffff'
};

export const SERVICES: ServiceItem[] = [
  {
    title: "China Sourcing",
    description: "Direct access to factories in Guangzhou, Haizhu, Liwan, and surrounding manufacturing zones.",
    icon: Globe
  },
  {
    title: "Product Development",
    description: "End-to-end prototyping, factory liaison, and technical specification handling.",
    icon: Cpu
  },
  {
    title: "QA & Logistics",
    description: "Quality checks, packaging consolidation, and global distribution pathways.",
    icon: ShieldCheck
  },
  {
    title: "Cost Optimization",
    description: "Negotiation, delivered-cost modelling, and supply-chain optimisation to remove hidden margins.",
    icon: TrendingUp
  }
];

export const TECH_STACK: TechStackCategory[] = [
  {
    id: 'workflows',
    title: "TypeScript Workflows",
    items: [
      "Google Maps scraping & Enrichment",
      "WhatsApp number validation (WAHA)",
      "CRM pipeline sync (Twenty CRM)",
      "Dynamic JSON schemas for products",
      "Custom GPT-powered classifiers"
    ]
  },
  {
    id: 'crm',
    title: "Twenty CRM Core",
    items: [
      "Custom metadata fields",
      "Automated enrichment & Validation",
      "Country routing logic",
      "Supplier discovery engine",
      "Pipeline scoring algorithms"
    ]
  },
  {
    id: 'scraping',
    title: "Scraping & OSINT",
    items: [
      "Facebook/Instagram community discovery",
      "Google Maps 'QSR' lead scraping",
      "GitHub open-source tool scouting",
    ]
  },
  {
    id: 'ai',
    title: "AI-Driven Assistants",
    items: [
      "Internal product classifiers",
      "Automated cost modelling",
      "Supplier matching logic",
      "Self-updating configurations"
    ]
  },
  {
    id: 'infra',
    title: "Infrastructure",
    items: [
      "Railway-hosted services",
      "Dockerised micro-services",
      "Custom REST APIs",
      "CI/CD for sourcing endpoints"
    ]
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    category: "Margins",
    traditional: "Hidden margins (10-30%) added on top of factory price.",
    genericAlternatives: "Transparent pricing. No hidden fees."
  },
  {
    category: "Communication",
    traditional: "Slow, manual WhatsApp/WeChat cycles.",
    genericAlternatives: "Automated pipelines, instant updates, CRM sync."
  },
  {
    category: "Documentation",
    traditional: "No fixed documentation or cost breakdowns.",
    genericAlternatives: "Full digital paper trail, automated quotes & QC lists."
  },
  {
    category: "Scalability",
    traditional: "Relies on manual labor. Hard to scale.",
    genericAlternatives: "Zero-staff expansion capability via API workflows."
  }
];

export const TRACTION_DATA: TractionMetric[] = [
  { name: 'Client A', value: 2400, label: 'USD Confirmed' },
  { name: 'Client B', value: 1900, label: 'USD Sourcing' },
  { name: 'Pipeline', value: 8500, label: 'USD Est. Verbal' },
];

export const VERTICALS: VerticalItem[] = [
  { title: "Industrial", items: ["Submersible Pumps", "VFDs", "Industrial Machinery"] },
  { title: "Apparel", items: ["Hoodies", "Faux Fur Hoods", "Footwear", "Embroidery"] },
  { title: "Hospitality", items: ["Restaurant Consumables", "Bowls & Spoons", "Plastics"] },
  { title: "Electronics", items: ["Niche Manufacturing", "Consumer Electronics"] }
];

export const TRACTION_REGIONS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Latin America",
  "North Africa"
];
