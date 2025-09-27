import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive ? "text-brand-700" : "text-gray-700 hover:text-brand-700"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <div className="container-xl h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
            <ShieldCheck size={18} />
          </span>
          <span className="font-semibold">Yollatec.com</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/solutions">Solutions</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <button
          className="md:hidden p-2 rounded-md border"
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-xl py-2 flex flex-col">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/solutions">Solutions</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        </div>
      )}
    </header>
  );
}
