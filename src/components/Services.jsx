import React from 'react';
import { Code2, Database, LineChart, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like ASP.NET Core, React, and Blazor",
    icon: Code2,
    features: [
      "RESTful API Development",
      "Database Design & Implementation",
      "Frontend Development",
      "Authentication & Authorization"
    ]
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights using Python and modern analytics tools",
    icon: LineChart,
    features: [
      "Data Processing & Cleaning",
      "Statistical Analysis",
      "Data Visualization",
      "Predictive Modeling"
    ]
  },
  {
    title: "Database Solutions",
    description: "Design and implement efficient database solutions for your business needs",
    icon: Database,
    features: [
      "Database Architecture",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery Solutions"
    ]
  },
  {
    title: "Static Website Development",
    description: "Fast, secure, and SEO-friendly static websites using Hugo",
    icon: Globe,
    features: [
      "Custom Theme Development",
      "Content Management",
      "SEO Optimization",
      "Performance Tuning"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 200}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <service.icon size={32} className="text-blue-500" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;