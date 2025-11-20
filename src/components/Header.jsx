import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import Logo from '../assets/images/yolla_logo.png'

export default function Header() {
  const [open, setOpen] = useState(false);

  // Function to handle smooth scroll to sections
  const scrollToSection = (sectionId) => {
    setOpen(false);
    
    // Remove the # from the sectionId if present
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const NavItem = ({ to, children }) => {
    // Check if it's a section link (starts with #)
    if (to.startsWith('#')) {
      return (
        <button
          onClick={() => scrollToSection(to)}
          className="relative px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left"
        >
          {children}
          <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </button>
      );
    }

    // Regular page navigation
    return (
      <NavLink
        to={to}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `relative px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 group ${
            isActive 
              ? "text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 shadow-lg" 
              : "text-gray-700 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`
        }
      >
        {children}
        <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all duration-300 ${
          open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        } ${({ isActive }) => isActive ? 'scale-x-100' : ''}`} />
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container-xl h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br bg-white text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <img src={Logo} alt="Yollatec Logo" />
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-xl dark:text-white">Yollatec</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Secure Digital Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <nav className="flex items-center gap-1 mr-8">
            <NavItem to="#home">Home</NavItem>
            <NavItem to="#services">Solutions</NavItem>
            <NavItem to="#about">About</NavItem>
            <NavItem to="#contact">Contact</NavItem>
          </nav>

          <ThemeToggle />

          <button 
            onClick={() => scrollToSection('#contact')}
            className="ml-4 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          
          <button
            className="p-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? (
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={20} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
          <div className="container-xl py-6 flex flex-col space-y-2">
            <NavItem to="#home">Home</NavItem>
            <NavItem to="#services">Solutions</NavItem>
            <NavItem to="#about">About</NavItem>
            <NavItem to="#contact">Contact</NavItem>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg text-center block hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}