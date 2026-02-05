import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
  instagram: string;
  workingHours: string;
}