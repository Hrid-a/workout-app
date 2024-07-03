"use client";
import * as React from "react";
import ChoosePlanBtn from "../ChoosePlanBtn";
import Plan, { PlanType } from "../Plan";
import { cn } from "@/lib/utils";

const FAKE_PLANS: PlanType[] = [
  {
    id: 1,
    title: "Basic Memership",
    monthlyPrice: 1000,
    yearlyPrice: 100,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    description:
      "This is a basic membership plan for people who want to change the best versions of themselves.",
    isPopular: true,
    icon: "trophy",
  },
];

function PlanWrapper({
  isPlaceHolder,
  plans,
}: {
  isPlaceHolder?: boolean;
  plans?: PlanType[];
}) {
  const id = React.useId();
  const [planType, setPlanType] = React.useState("monthly");
  // const planType = getPlanType()

  // const actualPlans = isPlaceHolder ? FAKE_PLANS : plans;
  let actualPlans = FAKE_PLANS;
  const styles = isPlaceHolder
    ? { fontFamily: "var(--font-family-loading)" }
    : {};
  return (
    <div
      className={cn("bg-secondary  mt-8 border-8 border-white rounded-lg")}
      style={styles}
    >
      <ChoosePlanBtn planType={planType} setPlanType={setPlanType} />
      {actualPlans.map((plan) => {
        return (
          <Plan key={`${id}-${plan.id}`} plan={plan} planType={planType} />
        );
      })}
    </div>
  );
}

export default PlanWrapper;
