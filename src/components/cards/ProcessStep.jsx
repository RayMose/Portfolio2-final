import React from 'react';

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  duration, 
  icon: Icon, 
  isLast = false 
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Number and Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {Icon ? <Icon size={32} /> : number}
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
          Step {number}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      {/* Duration */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
        ⏱️ {duration}
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform translate-x-4">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ProcessStep;
