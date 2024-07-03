import * as React from "react";
import Card from "../Card";
import Features from "../Features";
import { cn, formatPrice } from "@/lib/utils";
import { ICONS } from "../Icon";

export type PlanType = {
  id: number;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isPopular: boolean;
  icon: keyof typeof ICONS;
  features: string[];
  description: string;
};

function Plan({ plan, planType }: { plan: PlanType; planType: string }) {
  const price = planType === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const Price = () => {
    return (
      <span className="block text-xl md:text-2xl lg:text-4xl">
        {formatPrice(price)}
        <sub className="text-sm md:text-xl ml-1">
          {planType === "monthly" ? "/per month" : "per year"}{" "}
        </sub>
      </span>
    );
  };

  return (
    <div
      className={cn(
        "bg-secondary p-7 my-4 w-fit mx-auto rounded-lg border-4 border-white",
        plan.isPopular && "text-secondary"
      )}
      style={{ fontFamily: "inherit" }}
    >
      <Card title={plan.title} price={<Price />} icon={plan.icon}>
        <p className="mt-10 text-sm md:text-xl max-w-[300px]">
          {plan.description}
        </p>
      </Card>
      <button
        className="w-full block my-7 text-white bg-primary py-5 px-6 capitalize text-xl md:text-2xl rounded-lg font-semibold tracking-[2px]"
        style={{ fontFamily: "inherit" }}
      >
        Get started
      </button>
      <Features feats={plan.features} />
    </div>
  );
}

export default Plan;
