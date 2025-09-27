import React from "react";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

export default function AboutPage() {
  return (
    <>
      <section className="container-xl py-10">
        <h1 className="text-3xl font-bold">About Yollatec.com</h1>
        <p className="mt-2 text-gray-600">Our story, values and expertise.</p>
      </section>
      <About />
      <Contact />
    </>
  );
}
