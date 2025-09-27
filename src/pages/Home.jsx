import React from "react";
import Hero from "../components/Hero.jsx";
import Showcase from "../components/Showcase.jsx";
import Services from "../components/Services.jsx";
import Solutions from "../components/Solutions.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Services />
      <Solutions />
      <About />
      <Contact />
    </>
  );
}
