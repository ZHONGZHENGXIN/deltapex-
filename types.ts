export interface Firm {
  id: string;
  name: string;
  platforms: string;
  rating: string;
  code: string;
  iconClass: string;
  iconBgClass: string;
  iconColorClass: string;
  isCustomIcon?: boolean; // For the text-based icons like "FN" or "T"
  customIconText?: string;
  logoUrl?: string; // New: Support for image URLs
  buyLink: string;
  rulesLink: string;
  isFeatured?: boolean; // New: To highlight specific firms
}

export interface Deal {
  id: string;
  name: string;
  discount: string;
  iconClass: string;
  iconBgClass: string;
  iconColorClass: string;
  link: string;
}

export interface QuickLink {
  label: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer?: string; // Optional for now as the original didn't have answers visible
}

export interface ResourceLink {
  label: string;
  url: string;
}