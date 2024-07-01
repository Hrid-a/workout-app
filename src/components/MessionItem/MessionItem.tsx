import * as React from "react";
import Icon, { ICONS } from "../Icon";

export type itemProps = {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
};

function MessionItem({ icon, title, description }: itemProps) {
  return (
    <div className="space-y-5 p-6">
      <span className="block p-5 rounded-lg bg-primary w-fit">
        <Icon name={icon} className="text-white bg-primary w-8 h-8" />
      </span>
      <h3 className="text-xl font-semibold capitalize">{title}</h3>
      <p className="max-w-[400px]">{description}</p>
    </div>
  );
}

export default MessionItem;
