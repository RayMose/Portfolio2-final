import React, { useState } from 'react';
import { Send, Calculator, Clock, DollarSign } from 'lucide-react';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    features: []
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const packages = [
    { value: 'landing', label: 'Landing Page (Kshs 15,000)', price: 15000 },
    { value: 'basic', label: 'Starter Basic (Kshs 30,000)', price: 30000 },
    { value: 'professional', label: 'Starter Professional (Kshs 60,000)', price: 60000 },
    { value: 'premier', label: 'Starter Premier (Kshs 85,000)', price: 85000 },
    { value: 'custom', label: 'Custom Solution', price: 0 }
  ];

  const projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Portfolio Website',
    'Blog/News Site',
    'Web Application',
    'Landing Page',
    'Other'
  ];

  const timelines = [
    '1-2 weeks',
    '3-4 weeks',
    '1-2 months',
    '2-3 months',
    '3+ months'
  ];

  const budgetRanges = [
    'Under Kshs 20,000',
    'Kshs 20,000 - 50,000',
    'Kshs 50,000 - 100,000',
    'Kshs 100,000 - 200,000',
    'Over Kshs 200,000'
  ];

  const additionalFeatures = [
    'E-commerce Integration',
    'Payment Gateway',
    'User Authentication',
    'Admin Dashboard',
    'Third-party API Integration',
    'Advanced SEO',
    'Analytics & Reporting',
    'Multi-language Support'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculate estimated price based on package selection
    if (name === 'package') {
      const selectedPackage = packages.find(pkg => pkg.value === value);
      if (selectedPackage) {
        setEstimatedPrice(selectedPackage.price);
      }
    }
  };

  const handleFeatureChange = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Get Your Free Quote
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Tell us about your project and we'll provide a detailed quote within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="+254 xxx xxx xxx"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Package Selection *
            </label>
            <select
              name="package"
              value={formData.package}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select a package</option>
              {packages.map(pkg => (
                <option key={pkg.value} value={pkg.value}>
                  {pkg.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select timeline</option>
              {timelines.map(timeline => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Features */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Additional Features (Optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {additionalFeatures.map(feature => (
              <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Project Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Tell us more about your project requirements, goals, and any specific features you need..."
          />
        </div>

        {/* Estimated Price Display */}
        {estimatedPrice > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Calculator size={20} />
              <span className="font-semibold">Estimated Price: Kshs {estimatedPrice.toLocaleString()}</span>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              Final price may vary based on specific requirements and additional features.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Request Free Quote
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
        <p>We typically respond within 24 hours with a detailed quote and project timeline.</p>
      </div>
    </div>
  );
};

export default QuoteRequest;
