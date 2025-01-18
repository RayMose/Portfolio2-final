import React from 'react';
import { 
  Code2, Database, LineChart, Globe, 
  Server, Cloud, Shield, Zap,
  BarChart, PieChart, Workflow, GitBranch,
  Layout, Palette, Search, Settings
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const services = [
  {
    title: "Enterprise Web Development",
    description: "End-to-end development of scalable web applications using .NET Core and React, focusing on performance, security, and maintainability.",
    icon: Code2,
    features: [
      "Custom Web Application Development",
      "API Design & Development",
      "Cloud-Native Architecture",
      "Performance Optimization",
      "Security Implementation",
      "Third-party Integration"
    ],
    deliveryTime: "4-12 weeks"
  },
  {
    title: "Data Analytics Solutions",
    description: "Comprehensive data analysis services using Python and modern analytics tools to transform raw data into actionable business insights.",
    icon: LineChart,
    features: [
      "Data Processing & Cleaning",
      "Statistical Analysis",
      "Predictive Modeling",
      "Dashboard Development",
      "Automated Reporting",
      "Business Intelligence Integration"
    ],
    deliveryTime: "2-6 weeks"
  },
  {
    title: "Database Architecture",
    description: "Design and implementation of efficient, scalable database solutions with focus on performance, security, and data integrity.",
    icon: Database,
    features: [
      "Database Design & Modeling",
      "Performance Optimization",
      "Data Migration Services",
      "Backup & Recovery Solutions",
      "Security Hardening",
      "Maintenance & Support"
    ],
    deliveryTime: "2-8 weeks"
  },
  {
    title: "Static Site Development",
    description: "Development of blazing-fast, SEO-friendly static websites using Hugo, perfect for corporate sites, blogs, and documentation.",
    icon: Globe,
    features: [
      "Custom Theme Development",
      "SEO Optimization",
      "Performance Tuning",
      "Content Management Setup",
      "Analytics Integration",
      "Deployment & Hosting"
    ],
    deliveryTime: "1-4 weeks"
  }
];

const ServiceFeature = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
    <Icon size={16} className="text-blue-500" />
    <span>{text}</span>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Delivering high-quality solutions tailored to your business needs with a focus on scalability, performance, and user experience
            </p>
          </div>
        </AnimatedSection>
        <div className="space-y-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 200} repeat={true}>
              <div className="space-y-8 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <service.icon size={40} className="text-blue-500" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <ServiceFeature 
                      key={feature}
                      icon={[Server, Cloud, Shield, Zap, BarChart, PieChart, Workflow, GitBranch, Layout, Palette, Search, Settings][i % 12]}
                      text={feature}
                    />
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">
                    Estimated delivery: <span className="font-medium">{service.deliveryTime}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;