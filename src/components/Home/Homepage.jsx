// src/components/Home/Homepage.jsx
import React from "react";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeCategory from "./HomeCategory";
import HeroWave from "./HeroWave";
import HeroStory from "./HeroStory";
import Testimonials from "./Testimonials";
import HeroBenefits from "./HeroBenefits";
// import other sections as needed
// import FeaturedProducts from "../FeaturedProducts";
// import AboutSection from "../AboutSection";

export default function Homepage() {
  return (
    <>
      <HomeHero />
        <HomeIntro />
        <HomeCategory />
        <HeroWave />
        <HeroStory />
        <Testimonials />
        <HeroBenefits />
      {/* <FeaturedProducts /> */}
      {/* <AboutSection /> */}
      {/* other sections... */}
    </>
  );
}
