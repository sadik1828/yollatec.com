import Network from "../assets/images/network.png";
import DC from "../assets/images/data-center-management.jpeg";
import app from "../assets/images/app.avif";
import soc from "../assets/images/soc-operator-image-1.jpg";

const pics = [
  {
    src: soc,
    caption: "Security Operations Center (SOC)",
  },
  {
    src: DC,
    caption: "Data Centers Management",
  },
  {
    src: app,
    caption: "Application Development",
  },
  {
    src: Network,
    caption: "Network Management",
  },
];

export default function Showcase() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container-xl py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pics.map((p) => (
          <figure
            key={p.caption}
            className="overflow-hidden rounded-xl  shadow-sm bg-white dark:bg-gray-900  hover:shadow-lg transition"
          >
            <img
              src={p.src}
              alt={p.caption}
              className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="px-4 py-3 text-sm font-medium  text-gray-900 dark:text-white">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
