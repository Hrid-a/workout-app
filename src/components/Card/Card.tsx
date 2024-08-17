import * as React from "react";
import Icon, { ICONS } from "../Icon";

type cardProps = React.PropsWithChildren<{
  title: string;
  price: React.JSX.Element;
  icon: keyof typeof ICONS;
}>;

function Card({ children, title, price, icon }: cardProps) {
  return (
    <div className="bg-white p-7 w-fit rounded-lg">
      <h2 className="flex gap-4 items-center text-primary text-xl font-semibold md:text-2xl lg:text-3xl mb-10 capitalize">
        <span className="block p-5 rounded-lg bg-primary w-fit">
          <Icon name={icon} className="text-white bg-primary w-8 h-8" />
        </span>
        {title}
      </h2>
      {price}
      {children}
    </div>
  );
}

export default Card;
