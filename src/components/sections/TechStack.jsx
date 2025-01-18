import React from 'react';
import { Code2, Database, Globe2, Braces, Binary, Server, Cpu, LineChart } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const technologies = [
  {
    category: "Backend Development",
    icon: Server,
    items: [
      { 
        name: "C# / ASP.NET Core",
        icon: Code2,
        description: "Enterprise-grade web APIs, microservices architecture, and high-performance backend systems"
      },
      {
        name: "Entity Framework Core",
        icon: Database,
        description: "Advanced ORM for efficient data access, complex queries, and database management"
      }
    ]
  },
  {
    category: "Frontend Development",
    icon: Braces,
    items: [
      {
        name: "React & Modern JavaScript",
        icon: Binary,
        description: "Responsive SPAs, state management, and modern frontend architectures"
      },
      {
        name: "Blazor",
        icon: Cpu,
        description: "Full-stack C# web development with WebAssembly for high-performance applications"
      }
    ]
  },
  {
    category: "Data & Analytics",
    icon: LineChart,
    items: [
      {
        name: "Python Analytics Stack",
        icon: Globe2,
        description: "Data processing, statistical analysis, and machine learning with Python ecosystem"
      }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Leveraging cutting-edge technologies to build scalable, efficient, and maintainable solutions
            </p>
          </div>
        </AnimatedSection>
        <div className="space-y-12">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.category} delay={index * 200} repeat={true}>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <tech.icon size={32} className="text-blue-500" />
                  <h3 className="text-2xl font-bold text-blue-500">{tech.category}</h3>
                </div>
                <div className="space-y-8">
                  {tech.items.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <item.icon size={20} className="text-gray-600 dark:text-gray-300" />
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-8">
                        {item.description}
                      </p>
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