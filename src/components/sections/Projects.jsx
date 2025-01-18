import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import ProjectCard from '../cards/ProjectCard';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management app that uses AI to categorize and prioritize tasks",
    tech: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
    image: "/src/assets/images/projects/task.png",
    github: "#",
    live: "#"
  },
  {
    title: "Real-time Chat Application",
    description: "End-to-end encrypted chat app with real-time messaging and file sharing",
    tech: ["React", "Firebase", "WebRTC", "Styled Components"],
    image: "/src/assets/images/projects/chat.png",
    github: "#",
    live: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Administrative dashboard for managing products, orders, and analytics",
    tech: ["React", "Redux", "Material-UI", "Chart.js"],
    image: "/src/assets/images/projects/ecommerce.png",
    github: "#",
    live: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with 7-day forecast and location-based services",
    tech: ["React", "Weather API", "Geolocation", "TailwindCSS"],
    image: "/src/assets/images/projects/3.png",
    github: "#",
    live: "#"
  },
  {
    title: "Social Media Analytics Tool",
    description: "Dashboard for tracking and analyzing social media metrics",
    tech: ["React", "D3.js", "Social APIs", "Typescript"],
    image: "/src/assets/images/projects/social.png",
    github: "#",
    live: "#"
  },
  {
    title: "Fitness Tracking Platform",
    description: "Full-stack fitness app with workout planning and progress tracking",
    tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    image: "/src/assets/images/projects/fitness.jpg",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const [page, setPage] = useState(1);

  return (
    <section id="projects" className="py-20 px-6">
      <AnimatedSection repeat={true}>
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
      </AnimatedSection>
      <div className="container mx-auto max-w-3xl space-y-8">
        {projects.slice(0, page * 3).map((project, index) => (
          <ProjectCard 
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
      {projects.length > page * 3 && (
        <AnimatedSection className="flex justify-center mt-12" repeat={true}>
          <button
            onClick={() => setPage(p => p + 1)}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            Load More Projects
          </button>
        </AnimatedSection>
      )}
    </section>
  );
};

export default Projects;