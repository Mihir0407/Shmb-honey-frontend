// src/components/AboutUs/AboutPage/AboutPage.jsx (or wherever you keep pages)
import React from "react";
import WhyHero from "./WhyHero";
import WhyUsIntro from "./WhyUsIntro";
import WhyUsFeatures from "./WhyUsFeatures";
import WhyUsBenefits from "./WhyUsBenefits";


export default function AboutPage(){
  return (
    <>
      <WhyHero />
        <WhyUsIntro />
        <WhyUsFeatures />
        <WhyUsBenefits />
    </>
  );
}
