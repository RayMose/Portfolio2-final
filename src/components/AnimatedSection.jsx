import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '', delay = 0, repeat = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: !repeat,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${className} ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;