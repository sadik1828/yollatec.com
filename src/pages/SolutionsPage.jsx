import React from "react";
import Solutions from "../components/Solutions.jsx";
import Contact from "../components/Contact.jsx";

export default function SolutionsPage() {
  return (
    <>
      <section className="container-xl py-10">
        <h1 className="text-3xl font-bold">Industry Solutions</h1>
        <p className="mt-2 text-gray-600">Purpose-built outcomes for your sector.</p>
      </section>
      <Solutions />
      <Contact />
    </>
  );
}
