import * as React from "react";
import Icon, { ICONS } from "../Icon";

function HeaderSection({
  title,
  icon,
  children,
}: React.PropsWithChildren<{ title: string; icon: keyof typeof ICONS }>) {
  return (
    <div className="py-14 max-w-[700px] mx-auto">
      <article className="flex gap-2 items-center">
        <span className="block p-5 rounded-lg bg-white/50 w-fit">
          <Icon name={icon} className="text-secondary bg-wite/50 w-8 h-8" />
        </span>
        <h3 className="text-xl font-semibold capitalize text-secondary">
          {title}
        </h3>
      </article>
      {children}
    </div>
  );
}

export default HeaderSection;
