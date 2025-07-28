import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  deliveryTime, 
  isPopular = false,
  buttonText = "Get Started",
  onSelect 
}) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
      isPopular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200 dark:border-gray-700'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star size={16} fill="currentColor" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          Kshs {price.toLocaleString()}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          ⏱️ Delivery: {deliveryTime}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onSelect && onSelect(title, price)}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
