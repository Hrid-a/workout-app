import * as React from "react";
import HeaderSection from "../HeaderSection";
import Plans from "../Plans";

function OurPricing() {
  return (
    <div className="mt-24 mb-12">
      <HeaderSection icon="badge-dollar-sign" title="our pricing">
        <h4 className="text-2xl md:text-3xl font-medium md:font-semibold my-6">
          Elevate Your Fitness with Fit Gym Memberships
        </h4>
        <p className="text-sm md:text-xl text-center">
          At Fit Gym, we offer a lifetime access membership plan to suit your
          fitness goals and lifestyle.
        </p>
      </HeaderSection>
      <React.Suspense fallback={<Plans isPlaceHolder={true} />} >
        <Plans />
      </React.Suspense>
    </div>
  );
}

export default OurPricing;
