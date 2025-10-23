import type { LucideIcon } from "lucide-react";

export interface NavType {
  label: string;
  href: string;
}

export interface FeaturesSectionType {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}
export interface HowItWorksType {
  number: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export interface TechnologySectionType {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface ContactInfoType {
  icon: LucideIcon;
  title: string;
  info: string;
  background: string;
  iconColor: string;
}

export interface FooterLinksType {
  title: string;
  links: {
    label?: string;
    icon?: LucideIcon;
    href: string;
  }[];
}
