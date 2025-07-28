import React from 'react';
import { 
  Code2, Database, Globe2, Braces, Binary, Server, Cpu, LineChart,
  Layers, Zap, Shield, Smartphone, Cloud, BarChart3
} from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const technologies = [
  {
    category: "Frontend Development",
    icon: Braces,
    color: "blue",
    items: [
      {
        name: "React & Modern JavaScript",
        icon: Binary,
        description: "Interactive user interfaces with React, Next.js, and modern JavaScript frameworks",
        level: "Expert",
        projects: "25+ projects"
      },
      {
        name: "Responsive Design",
        icon: Smartphone,
        description: "Mobile-first, cross-browser compatible designs using Tailwind CSS and modern CSS",
        level: "Expert",
        projects: "40+ projects"
      }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "green",
    items: [
      { 
        name: "C# / ASP.NET Core",
        icon: Code2,
        description: "Scalable web APIs, microservices, and enterprise-grade backend systems",
        level: "Expert",
        projects: "20+ projects"
      },
      {
        name: "Database Design",
        icon: Database,
        description: "SQL Server, PostgreSQL, and Entity Framework for robust data management",
        level: "Advanced",
        projects: "30+ databases"
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "purple",
    items: [
      {
        name: "Cloud Deployment",
        icon: Zap,
        description: "Azure, AWS, and modern hosting solutions for scalable applications",
        level: "Advanced",
        projects: "15+ deployments"
      },
      {
        name: "Performance & Security",
        icon: Shield,
        description: "Optimization, monitoring, and security best practices implementation",
        level: "Advanced",
        projects: "All projects"
      }
    ]
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    color: "orange",
    items: [
      {
        name: "Business Intelligence",
        icon: LineChart,
        description: "Data visualization, reporting dashboards, and business analytics solutions",
        level: "Advanced",
        projects: "10+ dashboards"
      },
      {
        name: "Python Analytics",
        icon: Globe2,
        description: "Data processing, statistical analysis, and machine learning implementations",
        level: "Intermediate",
        projects: "8+ projects"
      }
    ]
  }
];

const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-700',
      accent: 'bg-blue-500'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-700',
      accent: 'bg-green-500'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-700',
      accent: 'bg-purple-500'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-700',
      accent: 'bg-orange-500'
    }
  };
  return colors[color] || colors.blue;
};

const getLevelColor = (level) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Advanced':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern technologies for scalable, secure web solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const colorClasses = getColorClasses(tech.color);
            return (
              <AnimatedSection key={tech.category} delay={index * 0.1} repeat={true}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center`}>
                      <tech.icon size={32} className={colorClasses.text} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {tech.category}
                      </h3>
                      <div className={`w-12 h-1 ${colorClasses.accent} rounded-full mt-2`}></div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {tech.items.map((item) => (
                      <div key={item.name} className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 hover:border-blue-500 transition-colors duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <item.icon size={20} className={colorClasses.text} />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </h4>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(item.level)}`}>
                            {item.level}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Layers size={14} className="text-gray-400" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {item.projects}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection repeat={true}>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">See Our Expertise in Action</h3>
              <p className="text-blue-100 mb-4 text-sm">Explore our portfolio and discuss your project.</p>
              <div className="flex justify-center gap-3">
                <a href="#projects" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  View Work
                </a>
                <a href="#contact" className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-sm">
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;