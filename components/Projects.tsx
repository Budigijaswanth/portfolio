'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Zillow Home Price Prediction",
    description: "Developed predictive models using Zillow's dataset to estimate house prices accurately by identifying key influential features through regression and decision tree methods.",
    technologies: ["Python", "Machine Learning", "Regression Analysis", "Decision Trees", "Data Analysis"],
    github: "https://github.com/yourusername/zillow-price-prediction",
    live: "https://your-zillow-project-url.com"
  },
  {
    title: "Predictive Analysis for Accident Risk Assessment",
    description: "Developed a predictive model to classify individuals into high-risk and low-risk insurance categories using demographic and driving-related variables. The model estimates accident occurrence levels and supports insurance risk assessment.",
    technologies: ["Python", "Machine Learning", "Classification", "Data Analysis", "Risk Assessment"],
    github: "https://github.com/yourusername/accident-risk-assessment",
    live: "https://your-risk-assessment-url.com"
  },
  {
    title: "Glass Fiber Composites Investigation",
    description: "Conducted experimental investigation on the shear strength of secondary bonded glass fiber composites. Fabricated composite materials using Glass fibers and Silicon Carbide, achieving optimal mechanical properties with 1% Silicon carbide addition.",
    technologies: ["Material Science", "Composite Materials", "Experimental Analysis", "Data Collection"],
    github: "https://github.com/yourusername/glass-fiber-composites",
    live: "https://your-composites-project-url.com"
  },
  {
    title: "Frictional Energy Generation using Flywheel",
    description: "Designed and fabricated a system to generate electrical energy from a vehicle's flywheel using Faraday's Law. The system stores generated energy in a battery for later use in the vehicle.",
    technologies: ["Mechanical Design", "Energy Generation", "Automotive Systems", "Electrical Engineering"],
    github: "https://github.com/yourusername/flywheel-energy",
    live: "https://your-flywheel-project-url.com"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique tags for filters
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.technologies)))];
  
  // Filter projects based on active tag
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === tag
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 