// src/components/AboutUs/AboutPage/AboutPage.jsx (or wherever you keep pages)
import React from "react";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutFeatures from "./AboutFeatures";
import AboutStory from "./AboutStory";
import Testimonials from "../Home/Testimonials";
export default function AboutPage(){
  return (
    <>
      <AboutHero />
        <AboutIntro />
        <AboutFeatures />
        <AboutStory />
        <Testimonials />
      {/* other sections below */}
    </>
  );
}
