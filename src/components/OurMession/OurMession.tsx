import { ourMession } from "@/lib/constant";
import * as React from "react";
import MessionItem from "../MessionItem";
import HeaderSection from "../HeaderSection";

function OurMession() {
  return (
    <div className="mt-24 mb-12">
      <HeaderSection icon="flag" title="our mession">
        <h4 className="text-2xl md:text-3xl font-medium md:font-semibold my-6">
          Empower Your Journey to a Healthier You
        </h4>
        <p className="text-sm md:text-xl text-center">
          At Fit Gym, our mission is to empower individuals of all ages and
          fitness levels to embark on a transformative journey towards a
          healthier and happier life. We believe that fitness goes beyond
          physical appearance
        </p>
      </HeaderSection>
      <section className="grid gap-7  md:grid-cols-2 lg:grid-cols-3 mt-8">
        {ourMession.map(({ icon, title, description }) => (
          <MessionItem
            key={icon}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </section>
    </div>
  );
}

export default OurMession;
