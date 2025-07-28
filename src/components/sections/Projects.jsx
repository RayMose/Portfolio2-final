import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Award, Filter } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Complete online store with payment processing, inventory management, and admin dashboard. Built for a local retail business.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    image: "/src/assets/images/projects/ecommerce.png",
    github: "#",
    live: "#",
    category: "E-commerce",
    duration: "8 weeks",
    client: "Retail Business",
    featured: true,
    results: "40% increase in online sales"
  },
  {
    title: "Business Management System",
    description: "Custom CRM and project management solution for a consulting firm with client tracking, invoicing, and reporting.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Azure"],
    image: "/src/assets/images/projects/task.png",
    github: "#",
    live: "#",
    category: "Business App",
    duration: "12 weeks",
    client: "Consulting Firm",
    featured: true,
    results: "60% improvement in workflow efficiency"
  },
  {
    title: "Restaurant Website & Ordering",
    description: "Modern restaurant website with online ordering system, menu management, and customer reviews integration.",
    tech: ["React", "Firebase", "Tailwind CSS", "Payment Gateway"],
    image: "/src/assets/images/projects/chat.png",
    github: "#",
    live: "#",
    category: "Website",
    duration: "4 weeks",
    client: "Local Restaurant",
    featured: false,
    results: "300% increase in online orders"
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search, virtual tours, and agent management system.",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
    image: "/src/assets/images/projects/3.png",
    github: "#",
    live: "#",
    category: "Portal",
    duration: "10 weeks",
    client: "Real Estate Agency",
    featured: true,
    results: "50% faster property searches"
  },
  {
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with real-time data visualization, reporting, and performance metrics.",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "/src/assets/images/projects/social.png",
    github: "#",
    live: "#",
    category: "Analytics",
    duration: "6 weeks",
    client: "Marketing Agency",
    featured: false,
    results: "Real-time insights for better decisions"
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with appointment scheduling, medical records, and billing integration.",
    tech: ["ASP.NET Core", "React", "SQL Server", "HIPAA Compliance"],
    image: "/src/assets/images/projects/fitness.jpg",
    github: "#",
    live: "#",
    category: "Healthcare",
    duration: "14 weeks",
    client: "Medical Clinic",
    featured: false,
    results: "80% reduction in administrative time"
  }
];

const categories = ["All", "E-commerce", "Business App", "Website", "Portal", "Analytics", "Healthcare"];

const ProjectCard = ({ project, index }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-blue-200 dark:text-gray-500">
            {project.category === 'E-commerce' && '🛒'}
            {project.category === 'Business App' && '💼'}
            {project.category === 'Website' && '🌐'}
            {project.category === 'Portal' && '🏢'}
            {project.category === 'Analytics' && '📊'}
            {project.category === 'Healthcare' && '🏥'}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Award size={14} />
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            <Calendar size={14} />
            {project.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={14} className="text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {project.client}
            </span>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-2">
            <p className="text-green-700 dark:text-green-300 text-xs font-medium">
              ✨ {project.results}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <a 
            href={project.live}
            className="flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-200 text-sm flex-1 justify-center"
          >
            <ExternalLink size={14} />
            Live
          </a>
          <a 
            href={project.github}
            className="flex items-center gap-1 px-3 py-2 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors duration-200 text-sm flex-1 justify-center"
          >
            <Github size={14} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection repeat={true}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real projects, real results for businesses across Kenya.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection repeat={true}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter size={20} className="text-gray-400 mt-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1} repeat={true}>
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>

        {/* Load More / Show Less */}
        {filteredProjects.length > 3 && (
          <AnimatedSection className="flex justify-center mt-8" repeat={true}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-200 text-sm"
            >
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
            </button>
          </AnimatedSection>
        )}

        {/* Call to Action */}
        <AnimatedSection repeat={true}>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-4 text-sm">Get a custom solution that drives real results.</p>
              <div className="flex justify-center gap-3">
                <a href="#contact" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Start Project
                </a>
                <a href="#pricing" className="px-6 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-sm">
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;