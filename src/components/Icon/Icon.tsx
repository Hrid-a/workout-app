import {
  BadgeDollarSign,
  Flag,
  GraduationCap,
  Sparkles,
  Star,
  Sun,
  Swords,
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
