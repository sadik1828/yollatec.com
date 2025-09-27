import React from "react";
import Contact from "../components/Contact.jsx";

export default function ContactPage() {
  return (
    <>
      <section className="container-xl py-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">We’ll get back to you within one business day.</p>
      </section>
      <Contact />
    </>
  );
}
