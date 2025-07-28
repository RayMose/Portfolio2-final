import React from 'react';
import { 
  Globe, ShoppingCart, Briefcase, Cog,
  Code2, Database, BarChart, HeadphonesIcon,
  CheckCircle, ArrowRight, Star, Zap
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const services = [
  {
    title: "Website Development",
    description: "Professional websites that establish your online presence and drive business growth. From simple landing pages to complex business websites.",
    icon: Globe,
    features: [
      "Landing Pages & Business Websites",
      "Responsive Mobile-First Design",
      "SEO Optimization & Analytics",
      "Content Management Systems",
      "Contact Forms & Lead Generation",
      "Social Media Integration"
    ],
    deliveryTime: "1-6 weeks",
    priceRange: "Kshs 15,000 - 60,000",
    popular: true
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores that sell your products 24/7. Secure payment processing, inventory management, and customer analytics.",
    icon: ShoppingCart,
    features: [
      "Online Store Development",
      "Payment Gateway Integration",
      "Inventory Management System",
      "Customer Account Management",
      "Order Tracking & Analytics",
      "Mobile Shopping Experience"
    ],
    deliveryTime: "4-8 weeks",
    priceRange: "Kshs 60,000 - 150,000",
    popular: false
  },
  {
    title: "Custom Web Applications",
    description: "Tailored web applications that solve your specific business challenges. Built with modern technologies for scalability and performance.",
    icon: Briefcase,
    features: [
      "Custom Business Logic",
      "Database Design & Integration",
      "User Authentication & Roles",
      "API Development & Integration",
      "Advanced Security Features",
      "Performance Optimization"
    ],
    deliveryTime: "6-12 weeks",
    priceRange: "Kshs 85,000+",
    popular: false
  },
  {
    title: "Maintenance & Support",
    description: "Keep your website running smoothly with our ongoing maintenance, updates, security monitoring, and technical support services.",
    icon: HeadphonesIcon,
    features: [
      "Regular Security Updates",
      "Performance Monitoring",
      "Content Updates & Changes",
      "Backup & Recovery Services",
      "Technical Support",
      "Analytics & Reporting"
    ],
    deliveryTime: "Ongoing",
    priceRange: "From Kshs 5,000/month",
    popular: false
  }
];

const ServiceFeature = ({ text }) => (
  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
    <span className="text-sm">{text}</span>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive web solutions from simple websites to enterprise applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1} repeat={true}>
              <div className={`relative bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                service.popular ? 'border-2 border-blue-500' : 'border border-gray-200 dark:border-gray-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <ServiceFeature key={feature} text={feature} />
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Timeline</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{service.deliveryTime}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="font-bold text-blue-600 dark:text-blue-400">{service.priceRange}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                    Get Quote
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection repeat={true}>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-4 text-sm">Choose a package or get a custom quote.</p>
              <div className="flex justify-center gap-3">
                <a href="#pricing" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  View Packages
                </a>
                <a href="#contact" className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-sm">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;