'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: "Data Analytics & Business Intelligence",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "Data Analysis", level: 85 }
      
    ]
  },
  {
    category: "Programming & Machine Learning",
    skills: [
      { name: "Python", level: 85 },
      { name: "Core Java", level: 80 },
      { name: "Supervised ML", level: 85 },
      { name: "Unsupervised ML", level: 80 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Agile Development", level: 85 },
      { name: "CADD", level: 80 },
      { name: "Software Testing", level: 75 },
      { name: "Project Management", level: 90 },
      { name: "Team Leadership", level: 95 },
      { name: "Problem Solving", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-2 bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 