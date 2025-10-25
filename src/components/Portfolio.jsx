// components/Portfolio.jsx
import React, { useState } from "react";
import { X, Calendar, MapPin, Clock, Users } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Enterprise Network Infrastructure",
    category: "Network Design & Implementation",
    description: "Complete LAN/WAN infrastructure for a financial institution with 5 branches across Somaliland. Implemented secure VLAN segmentation, fiber optic backbone, and centralized monitoring.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Cisco Switches", "Fortinet Firewalls", "Fiber Optics", "Network Monitoring"],
    features: ["99.9% Uptime", "Secure Segmentation", "Central Management", "Disaster Recovery"],
    client: "Major Financial Institution",
    duration: "8 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2025"
  },
  {
    id: 2,
    title: "Smart Office Automation",
    category: "IoT & Smart Systems",
    description: "Comprehensive smart office solution integrating lighting, HVAC, access control, and energy monitoring. Reduced energy consumption by 35% through intelligent automation.",
    image: "https://media.istockphoto.com/id/1297147973/photo/modern-office-and-communication-network-concept-smart-office-iot-telecommunication.jpg?s=1024x1024&w=is&k=20&c=kuGOw0vblUyhyyy4-3kfJ8y1ARsYA4Opzmvt1Go60GA=",
    technologies: ["Zigbee", "MQTT", "Mobile App", "Cloud Dashboard"],
    features: ["Energy Saving", "Remote Access", "Real-time Monitoring", "Automated Controls"],
    client: "Technology Company",
    duration: "6 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2025"
  },
  {
    id: 3,
    title: "Solar-Powered Data Center",
    category: "Solar Power Systems",
    description: "Hybrid solar power system for a remote data center, providing 24/7 reliable power with battery backup and smart monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Solar Panels", "Lithium Batteries", "Smart Inverters", "IoT Monitoring"],
    features: ["100% Renewable", "24/7 Power", "Remote Monitoring", "Cost Saving"],
    client: "Telecommunications Provider",
    duration: "12 Weeks",
    location: "Remote Site",
    year: "2023"
  },
  {
    id: 4,
    title: "Commercial Electrical Installation",
    category: "Electrical Installation",
    description: "Complete electrical wiring and power distribution system for a new commercial complex, including UPS backup and surge protection.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop",
    technologies: ["IEC Standards", "UPS Systems", "Surge Protection", "Safety Systems"],
    features: ["Compliant", "Reliable", "Safe", "Scalable"],
    client: "Commercial Complex",
    duration: "10 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2023"
  },
  {
    id: 5,
    title: "Data Center Rack Installation",
    category: "Rack Installation & Cabling",
    description: "Professional data center rack deployment with fiber optic cabling, neat cable management, and optimized airflow design.",
    image: "https://mds.com.om/wp-content/uploads/2024/10/shutterstock_92066195.jpg",
    technologies: ["Fiber Optics", "Cable Management", "PDU", "Cooling"],
    features: ["Clean Setup", "Easy Maintenance", "Optimal Cooling", "Documented"],
    client: "Enterprise Client",
    duration: "4 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2023"
  },
  {
    id: 6,
    title: "Cybersecurity Infrastructure",
    category: "Cybersecurity",
    description: "Advanced security implementation including next-gen firewall configuration, AI-powered threat detection, endpoint protection, and comprehensive security awareness training.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqBufa43xS84Yq3lhT9nMr7sHdotalQy4zHoHjs-zGlUbwrOTMnRWjqWihEqMDV1JNH8&usqp=CAU",
    technologies: ["Next-Gen Firewalls", "AI Threat Detection", "Endpoint Security", "SIEM", "Zero Trust Architecture"],
    features: ["AI Threat Prevention", "Compliance Ready", "Real-time Monitoring", "Incident Response"],
    client: "Government Agency",
    duration: "10 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2025"
  },
  {
    id: 7,
    title: "Bank Security System",
    category: "Cybersecurity",
    description: "Advanced security system implementation for banking operations including surveillance, access control, and network security.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Surveillance Systems", "Access Control", "Network Security", "Compliance"],
    features: ["24/7 Monitoring", "Access Control", "Audit Trail", "Compliant"],
    client: "Banking Institution",
    duration: "10 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2024"
  },
  {
    id: 8,
    title: "Hospital Network Infrastructure",
    category: "Network Design & Implementation",
    description: "Reliable network infrastructure for healthcare facility ensuring 24/7 connectivity for critical medical systems.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop",
    technologies: ["High Availability", "Medical Systems", "Backup Power", "Monitoring"],
    features: ["High Availability", "Medical Grade", "Backup Systems", "Secure"],
    client: "Healthcare Facility",
    duration: "12 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2023"
  },
  {
    id: 9,
    title: "University Campus WiFi",
    category: "Network Design & Implementation",
    description: "Campus-wide WiFi coverage with seamless roaming and high-density capacity for educational institution.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    technologies: ["WiFi 6", "High Density", "Seamless Roaming", "Management"],
    features: ["Campus Coverage", "High Density", "Seamless Roaming", "Managed"],
    client: "University",
    duration: "14 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2023"
  },
  {
    id: 10,
    title: "Smart City Surveillance",
    category: "IoT & Smart Systems",
    description: "City-wide surveillance and monitoring system with AI-powered analytics and real-time threat detection capabilities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    technologies: ["AI Analytics", "IP Cameras", "Cloud Storage", "Mobile Alerts"],
    features: ["AI Detection", "Real-time Alerts", "Cloud Storage", "Mobile Access"],
    client: "Municipal Government",
    duration: "16 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2024"
  },
  {
    id: 11,
    title: "Enterprise Software Development",
    category: "Software Development",
    description: "Custom ERP system development for manufacturing company with inventory management, production planning, and financial modules.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: ["Inventory Management", "Production Planning", "Financial Modules", "Mobile App"],
    client: "Manufacturing Company",
    duration: "20 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2025"
  },
  {
    id: 12,
    title: "Renewable Energy Monitoring",
    category: "Solar Power Systems",
    description: "Smart monitoring system for solar farm with real-time performance tracking, predictive maintenance, and remote control capabilities.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
    technologies: ["IoT Sensors", "Cloud Platform", "Mobile Dashboard", "Predictive Analytics"],
    features: ["Real-time Monitoring", "Predictive Maintenance", "Remote Control", "Performance Reports"],
    client: "Energy Company",
    duration: "10 Weeks",
    location: "Remote Site",
    year: "2023"
  },
  // New Portfolio Items
  {
    id: 13,
    title: "Commercial Electrical Cabling System",
    category: "Electrical Cabling and Installation",
    description: "Complete electrical cabling infrastructure for a 10-story commercial building with structured wiring, power distribution, and advanced safety compliance systems.",
    image: "https://estimatorflorida.com/wp-content/uploads/2021/12/commercial-electrical-wiring.jpg",
    technologies: ["Structured Cabling", "Power Distribution", "Safety Standards", "Cable Management", "Energy Monitoring"],
    features: ["Code Compliant", "Future-Proof", "Safety Certified", "Energy Efficient"],
    client: "Commercial Tower",
    duration: "8 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2025"
  },
  {
    id: 14,
    title: "Hybrid PBX Communication System",
    category: "PBX with Cloud and Local",
    description: "Advanced PBX system integrating cloud services with local infrastructure for seamless business communication across multiple locations.",
    image: "https://pbxinsights.net/wp-content/uploads/2024/12/hybrid-pbx-768x445.webp",
    technologies: ["VoIP", "Cloud PBX", "SIP Trunking", "Mobile Integration"],
    features: ["Cost Effective", "Scalable", "Remote Access", "High Quality"],
    client: "Multi-Branch Corporation",
    duration: "6 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2024"
  },
  {
    id: 15,
    title: "Smart Door Access Control",
    category: "Internet of Things Smart Doors Systems",
    description: "IoT-based smart door system with biometric access, remote control, and real-time monitoring for enhanced security and convenience.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/046/295/159/small/fingerprint-scan-access-control-system-machine-on-office-wall-near-the-entrance-door-with-a-hand-photo.jpg",
    technologies: ["Biometric Sensors", "IoT Platform", "Mobile App", "Cloud Storage"],
    features: ["Biometric Access", "Remote Control", "Activity Logs", "Instant Alerts"],
    client: "Corporate Office",
    duration: "4 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2024"
  },
  {
    id: 16,
    title: "Enterprise Server Rack Management",
    category: "Rack Management and Cabling",
    description: "Professional server rack installation with optimized cable management, advanced cooling solutions, and organized infrastructure for maximum efficiency and scalability.",
    image: "https://www.racksolutions.com/news//app/uploads/AdobeStock_87909563.jpg",
    technologies: ["Server Racks", "Cable Organizers", "PDU Units", "Advanced Cooling", "Monitoring Systems"],
    features: ["Neat Organization", "Easy Maintenance", "Optimal Airflow", "Scalable Design"],
    client: "Data Center",
    duration: "6 Weeks",
    location: "Addis Ababa, Ethiopia",
    year: "2025"
  },
  {
    id: 17,
    title: "Advanced Security & Access Control",
    category: "Finger Print and Security Cameras",
    description: "Comprehensive security system integrating fingerprint access control with high-definition surveillance cameras for complete facility protection.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Fingerprint Scanners", "HD Cameras", "NVR Systems", "Mobile Monitoring"],
    features: ["Biometric Security", "24/7 Recording", "Remote Access", "Motion Detection"],
    client: "Government Facility",
    duration: "7 Weeks",
    location: "Hargeisa, Somaliland",
    year: "2024"
  },
  {
    id: 18,
    title: "Commercial Solar Power Plant",
    category: "Solar Systems Planning and Installations",
    description: "Large-scale solar power installation with battery storage for commercial use, reducing energy costs and carbon footprint significantly.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Solar Panels", "Battery Storage", "Grid Integration", "Monitoring System"],
    features: ["Energy Independence", "Cost Savings", "Eco Friendly", "Reliable Power"],
    client: "Manufacturing Plant",
    duration: "15 Weeks",
    location: "Remote Site",
    year: "2024"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
            Our Work Portfolio
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Showcasing Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover our successful projects and see how we've helped businesses 
            transform their technology infrastructure across East Africa.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                border-2 backdrop-blur-sm
                ${selectedCategory === category
                  ? "bg-brand-600 border-brand-600 text-white shadow-2xl shadow-brand-500/30 transform scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 hover:shadow-lg"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map(project => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl mb-2 drop-shadow-2xl">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* View Project Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0">
                    View Project Details
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gradient-to-r from-brand-50 to-brand-100 dark:from-brand-900/30 dark:to-brand-800/30 text-brand-700 dark:text-brand-400 px-3 py-1.5 rounded-lg text-xs font-semibold border border-brand-200 dark:border-brand-700">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span className="font-semibold">{project.client}</span>
                  </div>
                  <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-300 dark:text-gray-600 text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-4">
              No projects found
            </h3>
            <p className="text-gray-400 dark:text-gray-500 max-w-md mx-auto">
              Try selecting a different category to discover more of our amazing projects.
            </p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 bg-white/95 dark:bg-gray-800/95 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-2xl backdrop-blur-sm"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-2xl flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        Project Details
                      </h4>
                      <div className="space-y-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Users size={18} />
                            <span className="font-semibold">Client:</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white text-right">{selectedProject.client}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Clock size={18} />
                            <span className="font-semibold">Duration:</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <MapPin size={18} />
                            <span className="font-semibold">Location:</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white text-right">{selectedProject.location}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Calendar size={18} />
                            <span className="font-semibold">Year:</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-2xl flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.features.map(feature => (
                          <div
                            key={feature}
                            className="bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/40 text-brand-700 dark:text-brand-400 px-5 py-4 rounded-2xl font-bold text-center border-2 border-brand-100 dark:border-brand-800 shadow-lg"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-2xl flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map(tech => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-gray-200 dark:border-gray-600 shadow-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-8 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}