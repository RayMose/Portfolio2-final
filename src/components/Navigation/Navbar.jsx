import React, { useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-opacity-90 backdrop-blur-sm z-50 shadow-lg dark:shadow-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">soYa.dev</h1>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#tech-stack" className="hover:text-red-500 hover:underline transition-colors">Tech Stack</a>
              <a href="#services" className="hover:text-red-500 hover:underline transition-colors">Services</a>
              <a href="#projects" className="hover:text-red-500 hover:underline transition-colors">Projects</a>
              <a href="#contact" className="hover:text-red-500 hover:underline transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </>
  );
};

export default Navbar;