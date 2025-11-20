// pages/PortfolioPage.jsx
import React from "react";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";

export default function PortfolioPage() {
  return (
    <>
      <section className="container-xl py-10">
        <h1 className="text-3xl font-bold">Our Portfolio</h1>
        <p className="mt-2 text-gray-600">See our successful projects and case studies.</p>
      </section>
      <Portfolio />
    </>
  );
}