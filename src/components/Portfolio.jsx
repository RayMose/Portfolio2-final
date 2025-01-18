import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import Navbar from './Navigation/Navbar';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import AnimatedSection from './AnimatedSection';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    setDarkMode(true);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex items-center justify-center px-6" repeat={true}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Hello, I'm <span className="text-blue-500">Yassin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            A passionate Full-Stack Developer specializing in .NET Core, React, and Data Analytics. 
            Building scalable solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#projects"
              className="px-6 py-3 md:px-6 md:py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-base md:text-sm"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 md:px-6 md:py-2 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 text-base md:text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </AnimatedSection>

      <TechStack />
      <Projects />
      <Services />
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection repeat={true}>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl mb-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently available for freelance work. If you have a project 
                that you want to get started, think you need my help with something 
                or just fancy saying hey, then get in touch.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <a 
                  href="mailto:yassinmusa17@gmail.com"
                  className="px-6 py-3 md:px-6 md:py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-base md:text-sm flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a 
                  href="https://linkedin.com"
                  className="px-6 py-3 md:px-6 md:py-2 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 text-base md:text-sm flex items-center justify-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">soYa.dev</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Full-stack developer specializing in modern web technologies and data analytics.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#tech-stack" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:underline">Tech Stack</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:underline">Projects</a></li>
                <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:underline">Services</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} />
                  Remote / Worldwide
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
                  <Mail size={20} />
                  yassinmusa17@gmail.com
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
                  <Phone size={20} />
                  Available for calls by appointment
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={20} />
                  Available for new projects
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Typical response time: 24-48 hours
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:justify-between items-center gap-6">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 soYa.dev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://github.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:soYa@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;