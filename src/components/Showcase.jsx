import React from "react";

const pics = [
  {
    src: "https://www.clearnetwork.com/wp-content/uploads/2020/10/soc-operator-image-1.jpg",
    caption: "Security Operations Center",
  },
  {
    src: "https://tezhost.com/wp-content/uploads/2023/06/10-Best-Server-Management-Tools-and-their-Features.jpg",
    caption: "Server Management Tools",
  },
  {
    src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/337976457/original/d01dde56cd1e4143a2e7199f691f2dea5351685c/make-your-web-however-you-want.jpg",
    caption: "Application Development",
  },
  {
    src: "https://kellyofficesolutions.com/wp-content/uploads/2020/10/NMS.png",
    caption: "Network Management Systems",
  },
];

export default function Showcase() {
  return (
    <section className="bg-white">
      <div className="container-xl py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pics.map((p) => (
          <figure
            key={p.caption}
            className="overflow-hidden rounded-xl border shadow-sm bg-white hover:shadow-lg transition"
          >
            <img
              src={p.src}
              alt={p.caption}
              className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="px-4 py-3 text-sm font-medium text-gray-700">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}