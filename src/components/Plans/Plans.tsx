import * as React from "react";
import PlanWrapper from "../PlanWrapper";

function Plans({ isPlaceHolder }: { isPlaceHolder?: boolean }) {
  // let plans =  await getPlans();
  // pass plans after
  return <PlanWrapper isPlaceHolder={isPlaceHolder} />;
}

export default Plans;
