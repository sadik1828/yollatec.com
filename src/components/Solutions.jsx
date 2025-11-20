import {
  ShieldCheck,
  Network,
  Server,
  Code,
  Cpu,
  Camera,
  Cloud,
  Settings,
} from "lucide-react";

export default function Solutions() {
  const services = [
    {
      title: "Cyber Security",
      text: "Protect your business from digital threats and vulnerabilities.",
      icon: ShieldCheck,
      points: ["Threat monitoring", "Security audits", "Compliance support"],
    },
    {
      title: "Network Infrastructure",
      text: "Reliable network design, implementation and cabling.",
      icon: Network,
      points: ["Network design", "Cabling installation", "Performance tuning"],
    },
    {
      title: "Server & Data Center",
      text: "Server management and data center solutions.",
      icon: Server,
      points: ["Server maintenance", "Data center setup", "Disaster recovery"],
    },
    {
      title: "Web & Mobile Development",
      text: "Custom applications for your business needs.",
      icon: Code,
      points: ["Web applications", "Mobile apps", "System integration"],
    },
    {
      title: "IoT & Smart Systems",
      text: "Smart automation and IoT solutions.",
      icon: Cpu,
      points: ["IoT implementation", "Automation systems", "Smart solutions"],
    },
    {
      title: "Security Systems",
      text: "Access control and surveillance installations.",
      icon: Camera,
      points: ["Access control systems", "Security cameras", "Monitoring setup"],
    },
    {
      title: "Cloud Services",
      text: "Cloud migration and management solutions.",
      icon: Cloud,
      points: ["Cloud migration", "Infrastructure setup", "Ongoing management"],
    }
  ];

  return (
    <section
      className="
        relative isolate
        bg-white dark:bg-gray-900
        overflow-hidden
      "
      id="services"
    >
      {/* Background pattern for both themes */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 dark:opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 10%, rgba(0,0,0,.1) 0, transparent 45%),
            radial-gradient(ellipse at 80% 90%, rgba(0,0,0,.05) 0, transparent 40%)
          `,
        }}
      />

      {/* Subtle grid overlay - adjusted for light theme */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-xl py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-4xl text-center mx-auto">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-brand-200 bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full">
            <Settings size={16} /> Our Services
          </p>
          <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            IT Solutions & Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-brand-200 max-w-2xl mx-auto">
            Professional technology solutions to help your business grow and stay secure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map(({ title, text, icon: Icon, points }) => (
            <article
              key={title}
              className="
                group relative rounded-2xl p-6 h-full
                bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-xl 
                border border-gray-200 dark:border-gray-700/50
                shadow-sm dark:shadow-[0_10px_25px_-10px_rgba(0,0,0,.5)]
                transition-all duration-300 hover:translate-y-[-4px] 
                hover:bg-white dark:hover:bg-gray-700/60
                hover:shadow-lg dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,.6)]
                overflow-hidden
              "
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-blue-100 text-blue-600 dark:bg-white/15 dark:text-white group-hover:bg-blue-200 dark:group-hover:bg-white/20 transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-white/95">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-brand-200 leading-relaxed">{text}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-gray-700 dark:text-brand-100">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-white/60 flex-shrink-0" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-gray-200 dark:border-white/15 bg-gray-50/80 dark:bg-white/10 p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-brand-600/10 dark:to-purple-600/10 opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Need help with your project?</h3>
              <p className="mt-2 text-gray-600 dark:text-brand-200">
                Let's discuss your requirements and find the right solution for your business.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center rounded-xl px-6 py-3
                  bg-blue-600 text-white font-semibold shadow-sm
                  hover:bg-blue-700 transition-all duration-200 hover:shadow-lg
                  min-w-[160px]
                "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}