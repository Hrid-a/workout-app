import * as React from "react";

export type PlanType = {
  id: number;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  description: string;
};

function Plan({
  plan,
  isPlaceHolder,
}: {
  plan: PlanType;
  isPlaceHolder?: boolean;
}) {
  return <div>plan</div>;
}

export default Plan;
