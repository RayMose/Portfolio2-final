import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import Navbar from './Navigation/Navbar';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import PricingPackages from './sections/PricingPackages';
import ProcessTimeline from './sections/ProcessTimeline';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import QuoteRequest from './forms/QuoteRequest';
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
      <AnimatedSection className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900" repeat={true}>
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Professional Web Development Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with 
            <span className="text-blue-500">Custom Web Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            From simple landing pages to complex web applications, we deliver professional, 
            scalable solutions that drive growth and exceed expectations. 
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Starting from just Kshs 15,000.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="#pricing"
              className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-lg font-semibold shadow-lg"
            >
              View Packages
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg font-semibold"
            >
              Get Free Quote
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
              <div className="text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Services />
      <PricingPackages />
      <ProcessTimeline />
      <TechStack />
      <WhyChooseUs />
      <Projects />
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection repeat={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get a detailed quote for your web development project. We're here to help 
                transform your ideas into a professional, high-performing website.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection repeat={true}>
              <QuoteRequest />
            </AnimatedSection>
            
            <AnimatedSection repeat={true}>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">yassinmusa17@gmail.com</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">Available by appointment</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Schedule a call to discuss your project</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">Remote / Worldwide</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Serving clients globally</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-4">
                      <a 
                        href="https://linkedin.com"
                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://github.com"
                        className="w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="mailto:yassinmusa17@gmail.com"
                        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500 text-white rounded-xl p-6">
                  <h4 className="font-bold mb-2">💡 Free Consultation</h4>
                  <p className="text-blue-100 text-sm">
                    Not sure which package is right for you? Schedule a free 30-minute 
                    consultation to discuss your project requirements and get personalized recommendations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Professional Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Transforming businesses with custom web solutions. From landing pages to complex applications, 
                we deliver quality results that drive growth.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Services</a></li>
                <li><a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Pricing</a></li>
                <li><a href="#process" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Process</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Contact</a></li>
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
              &copy; 2024 Professional Web Development Services. All rights reserved.
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