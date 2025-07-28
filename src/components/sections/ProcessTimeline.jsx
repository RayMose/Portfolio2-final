import React from 'react';
import { MessageCircle, PenTool, Code, Rocket, HeadphonesIcon } from 'lucide-react';
import ProcessStep from '../cards/ProcessStep';
import AnimatedSection from '../AnimatedSection';

const processSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "We discuss your requirements, goals, and vision to understand your project needs perfectly.",
    duration: "1-2 days",
    icon: MessageCircle
  },
  {
    number: 2,
    title: "Planning & Design",
    description: "Creating wireframes, design mockups, and technical architecture for your project.",
    duration: "3-5 days",
    icon: PenTool
  },
  {
    number: 3,
    title: "Development",
    description: "Building your website with clean, efficient code and regular progress updates.",
    duration: "1-6 weeks",
    icon: Code
  },
  {
    number: 4,
    title: "Testing & Launch",
    description: "Thorough testing, deployment, and training to ensure everything works perfectly.",
    duration: "2-3 days",
    icon: Rocket
  },
  {
    number: 5,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your website running smoothly.",
    duration: "Ongoing",
    icon: HeadphonesIcon
  }
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A proven 5-step process that ensures your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} repeat={true} delay={index * 0.2}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                duration={step.duration}
                icon={step.icon}
                isLast={index === processSteps.length - 1}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} repeat={true} delay={index * 0.1}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <step.icon size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                      Step {step.number}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 inline-block">
                    ⏱️ {step.duration}
                  </div>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-blue-300 dark:bg-blue-600"></div>
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection repeat={true}>
          <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss your requirements and get started on bringing your vision to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProcessTimeline;
