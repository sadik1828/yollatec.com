import React from "react";

export default function Solutions() {
  const blocks = [
    { title: "Education", text: "Secure school management, student privacy and e-learning resilience." },
    { title: "Hospitality", text: "PMS integrations, payment security and guest data protection." },
    { title: "Finance", text: "Regulatory compliance, secure APIs & fraud prevention." },
    { title: "Telecom & Enterprise", text: "High-availability networks, secure VoIP & SIEM." }
  ];

  return (
    <section className="bg-brand-600 text-white">
      <div className="container-xl py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-3xl font-bold">Industry Solutions</h2>
          <p className="mt-3 text-brand-100">Tailored delivery aligned to local and international standards.</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-lg bg-white/10 p-4">
              <h4 className="font-semibold">{b.title}</h4>
              <p className="text-sm text-brand-100 mt-2">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
