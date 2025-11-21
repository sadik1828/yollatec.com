import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToSection = (sectionId) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white" id="contact">
      <div className="container-xl py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Yollatec Systems</h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We provide reliable technology solutions that help businesses operate 
              securely and efficiently. From cybersecurity to infrastructure, we build 
              systems that work.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+252 634745339</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@yollatec.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Hargeisa, Somaliland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Cyber Security</li>
              <li>Network Infrastructure</li>
              <li>Server Management</li>
              <li>Web & Mobile Development</li>
              <li>Cloud Solutions</li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Stay Updated</h5>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} Yollatec Systems. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Building technology you can rely on</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}