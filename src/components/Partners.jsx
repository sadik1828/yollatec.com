import { motion } from "framer-motion";
import DHH from '../assets/images/partners/dhh.jpg'
import SOLTELCO from '../assets/images/partners/soltelco.jpg'
import QORSHAYNTA from '../assets/images/partners/qorshaynta.png'
import GOLIS from '../assets/images/partners/golis.jpg'
import TELESOM from '../assets/images/partners/telesom.jpg'

export default function Partners() {
  const partners = [
    {
      name: "Soltelco",
      logo: SOLTELCO,
      category: "Technology Partner"
    },
    {
      name: "Dawladda Hoose ee Hargeisa",
      logo: DHH,
      category: "Government Partner"
    },
    {
      name: "Wasaaradda Qorshaynta Qaranka",
      logo: QORSHAYNTA,
      category: "Government Partner"
    },
    {
      name: "Gollis University",
      logo: GOLIS,
      category: "Education Partner"
    },
    {
      name: "Telesom",
      logo: TELESOM,
      category: "Telecom Partner"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-20">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trusted by leading organizations and institutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative p-6 w-full max-w-[180px]
                bg-white dark:bg-gray-700 rounded-xl
                border border-gray-200 dark:border-gray-600
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:scale-105
              "
            >
              {/* Logo Container */}
              <div className="relative h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="
                    max-h-12 max-w-full
                    object-contain
                    opacity-80 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />
              </div>

              {/* Partner Info - appears on hover */}
              <div className="
                absolute inset-0 bg-white dark:bg-gray-700 rounded-xl
                opacity-0 group-hover:opacity-100
                transition-all duration-300
                flex flex-col items-center justify-center p-4
                border-2 border-blue-200 dark:border-blue-600
              ">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm text-center mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Proud to work with trusted partners across various sectors
          </p>
        </div>
      </div>
    </section>
  );
}