import React from 'react';
import PricingCard from '../cards/PricingCard';
import AnimatedSection from '../AnimatedSection';

const pricingPackages = [
  {
    title: "Landing Page",
    price: 15000,
    description: "Perfect for small businesses and startups",
    features: [
      "Single page responsive website",
      "Professional design & layout",
      "Contact form integration",
      "Basic SEO optimization",
      "Mobile-friendly design",
      "Social media links",
      "1 revision included"
    ],
    deliveryTime: "1 week",
    isPopular: false
  },
  {
    title: "Starter Basic",
    price: 30000,
    description: "Ideal for growing businesses",
    features: [
      "Up to 5 pages website",
      "Content management system",
      "Mobile responsive design",
      "Contact forms & maps",
      "Social media integration",
      "Basic analytics setup",
      "2 revisions included",
      "1 month support"
    ],
    deliveryTime: "2-3 weeks",
    isPopular: true
  },
  {
    title: "Starter Professional",
    price: 60000,
    description: "Complete business solution",
    features: [
      "Up to 10 pages website",
      "E-commerce capability",
      "Advanced SEO optimization",
      "Google Analytics integration",
      "Database integration",
      "Payment gateway setup",
      "Admin dashboard",
      "3 revisions included",
      "3 months support"
    ],
    deliveryTime: "4-6 weeks",
    isPopular: false
  },
  {
    title: "Starter Premier",
    price: 85000,
    description: "Enterprise-grade solution",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced security features",
      "Performance optimization",
      "Third-party integrations",
      "Custom admin panel",
      "Advanced analytics",
      "Unlimited revisions",
      "6 months ongoing support",
      "Priority support"
    ],
    deliveryTime: "6-8 weeks",
    isPopular: false
  }
];

const PricingPackages = () => {
  const handlePackageSelect = (packageName, price) => {
    // Scroll to contact section or open quote form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional web development services tailored to your business needs. 
              From simple landing pages to complex web applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPackages.map((pkg, index) => (
            <AnimatedSection key={index} repeat={true} delay={index * 0.1}>
              <PricingCard
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                deliveryTime={pkg.deliveryTime}
                isPopular={pkg.isPopular}
                onSelect={handlePackageSelect}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection repeat={true}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need something custom? Let's discuss your specific requirements.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Request Custom Quote
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingPackages;
