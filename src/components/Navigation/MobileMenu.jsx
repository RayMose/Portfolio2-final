import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, darkMode, onToggleDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className={`fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X size={24} />
          </button>
        </div>
        <nav className="space-y-6">
          <a 
            href="#tech-stack" 
            onClick={onClose}
            className="block text-lg hover:text-blue-500 transition-colors"
          >
            Tech Stack
          </a>
          <a 
            href="#services" 
            onClick={onClose}
            className="block text-lg hover:text-blue-500 transition-colors"
          >
            Services
          </a>
          <a 
            href="#projects" 
            onClick={onClose}
            className="block text-lg hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={onClose}
            className="block text-lg hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;