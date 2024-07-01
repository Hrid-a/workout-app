import * as React from "react";
import Plan, { PlanType } from "../Plan";

const getPlans = async () => {
  return new Promise((resolve) => {
    return resolve(1);
  });
};

const FAKE_PLANS: PlanType[] = [
  {
    id: 1,
    title: "Basic",
    monthlyPrice: 10,
    yearlyPrice: 100,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    description: "This is a basic plan",
  },
];

async function Plans({ isPlaceHolder }: { isPlaceHolder?: boolean }) {
  // let plans = isPlaceHolder ? FAKE_PLAN : await getPlans();
  let plans = FAKE_PLANS;
  const id = React.useId();

  return (
    <div>
      {plans.map((plan) => {
        return <Plan key={`${id}-${plan.id}`} plan={plan} isPlaceHolder={isPlaceHolder} />;
      })}
    </div>
  );
}

export default Plans;
