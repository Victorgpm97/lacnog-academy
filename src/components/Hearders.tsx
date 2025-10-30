import { useState } from "react";
import { navLinks } from "../components/NavLink";

export default function Navbar() {

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#FEA723] rounded-xl shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-[#323232]">Academy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <ul className="flex space-x-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group px-4 py-2"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}