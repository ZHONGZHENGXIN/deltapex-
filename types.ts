
export interface Firm {
  id: string;
  name: string;
  platforms: string;
  rating: string;
  code: string;
  iconClass: string;
  iconBgClass: string;
  iconColorClass: string;
  isCustomIcon?: boolean;
  customIconText?: string;
  logoUrl?: string;
  buyLink: string;
  rulesLink: string;
  isFeatured?: boolean;
  hasInternalRules?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ResourceLink {
  label: string;
  url: string;
}

export interface Deal {
  id: string;
  name: string;
  discount: string;
  link: string;
  iconClass: string;
  iconBgClass: string;
  iconColorClass: string;
}