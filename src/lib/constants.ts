import {
  Calendar,
  Activity,
  BookOpen,
  MessageSquare,
  Users,
  WifiOff,
  Smartphone,
  Database,
  Boxes,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import type {
  ContactInfoType,
  FeaturesSectionType,
  FooterLinksType,
  HowItWorksType,
  NavType,
} from "./type";

import { collaboration, personalized, simple1 } from "../assets";

export const navItems: NavType[] = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Download App",
    href: "#download",
  },
];

export const features_section: FeaturesSectionType[] = [
  {
    icon: Calendar,
    title: "Antenatal Tracking",
    description:
      "Automated visit reminders, EDD calculator, and personalized care plans based on pregnancy stage and risk factors.",
    color: "bg-accent",
  },
  {
    icon: Activity,
    title: "Vitals Monitoring",
    description:
      "Track blood pressure, weight, fundal height, and fetal heart rate with visual trends and danger sign alerts.",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "Bilingual Education",
    description:
      "Gestational week-by-week information in English or Yoruba with audio narration support for low-literacy users.",
    color: "bg-status-green",
  },
  {
    icon: MessageSquare,
    title: "Smart Chatbot",
    description:
      "AI-powered bilingual assistant for symptom checking, FAQ, and emergency triage with PHC alert capabilities.",
    color: "bg-muted",
  },
  {
    icon: Users,
    title: "Provider Dashboard",
    description:
      "PHC staff can track patients, view high-risk alerts, manage referrals, and export NHMIS/DHIS2 compatible reports.",
    color: "bg-status-yellow",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description:
      "Fully functional without internet, with automatic background sync when connection is restored using Firebase.",
    color: "bg-destructive",
  },
];

export const how_it_works: HowItWorksType[] = [
  {
    number: "1",
    title: "Simple Registration",
    description:
      "Pregnant women register with phone number via OTP. Healthcare providers use email or password with optional 2FA. Role-based access ensures data security.",
    image: simple1,
    color: "bg-accent",
  },
  {
    number: "2",
    title: "Personalized Tracking",
    description:
      "Enter LMP to calculate EDD. Track vitals, symptoms, and appointments. Receive automated reminders via in-app notifications, SMS, or WhatsApp.",
    image: personalized,
    color: "bg-primary",
  },
  {
    number: "3",
    title: "Provider Collaboration",
    description:
      "PHC staff view patient data, flag high-risk cases, create referrals, and send messages. All data syncs automatically when internet is available.",
    image: collaboration,
    color: "bg-status-green",
  },
];

export const technology_section = [
  {
    icon: Smartphone,
    title: "Flutter",
    description: "Cross-platform mobile framework",
    color: "#FCE7F3",
  },
  {
    icon: Database,
    title: "Firebase",
    description: "Scalable backend for modern apps",
    color: "#DBEAFE",
  },
  {
    icon: Boxes,
    title: "Firestore",
    description: "Fast, scalable NoSQL database",
    color: "#DCFCE7",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    description: "TLS & AES-256 encryption",
    color: "#FEF3C7",
  },
];

export const contact_info: ContactInfoType[] = [
  {
    icon: Mail,
    title: "Email",
    info: "contact@maternalcare.app",
    background: "bg-destructive/20",
    iconColor: "text-destructive",
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+234 800 123 4567",
    background: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: MapPin,
    title: "Office",
    info: "Lagos, Nigeria",
    background: "bg-status-green/20",
    iconColor: "text-status-green",
  },
];

export const footer_links: FooterLinksType[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
];
