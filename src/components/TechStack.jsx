import React from 'react';
import AnimatedSection from './AnimatedSection';

const technologies = [
  {
    category: "Backend Development",
    items: [
      { name: "C#", description: "ASP.NET Core, Entity Framework, Web API" },
      { name: "Python", description: "Data Analytics, Pandas, NumPy, Scikit-learn" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", description: "Modern UI development with hooks and context" },
      { name: "Blazor", description: "Full-stack web development with C#" }
    ]
  },
  {
    category: "Static Site Generation",
    items: [
      { name: "Hugo", description: "High-performance static site generation" }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.category} delay={index * 200}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-500">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;