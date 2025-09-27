import React from "react";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";

export default function ServicesPage() {
  return (
    <>
      <section className="container-xl py-10">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-gray-600">From cybersecurity to cloud and custom software.</p>
      </section>
      <Services />
      <Contact />
    </>
  );
}
