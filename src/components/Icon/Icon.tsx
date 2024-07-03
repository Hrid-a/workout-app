import {
  BadgeDollarSign,
  Check,
  Facebook,
  Flag,
  GraduationCap,
  Instagram,
  LayoutDashboard,
  Sparkles,
  Star,
  Sun,
  Swords,
  Trophy,
  Twitter,
  Users,
} from "lucide-react";
import React from "react";

export const ICONS = {
  users: Users,
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  swords: Swords,
  flag: Flag,
  "badge-dollar-sign": BadgeDollarSign,
  trophy: Trophy,
  check: Check,
  'layout-dashboard': LayoutDashboard,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

function Icon({
  name,
  className,
}: {
  name: keyof typeof ICONS;
  className: string;
}) {
  const IconComponent = ICONS[name];
  return IconComponent ? (
    <>
      <IconComponent className={className} />
    </>
  ) : null;
}

export default Icon;
