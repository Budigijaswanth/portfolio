'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBook, FiBriefcase } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A passionate Business Analytics professional with a strong foundation in data analysis 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FiBook className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Master of Business Analytics</h4>
                <p className="text-gray-600 dark:text-gray-400">Kent State University, Ohio</p>
                <p className="text-sm text-gray-500">Expected May 2025 • GPA: 3.8/4.0</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Relevant Coursework: Data Visualization, Data Analytics, SQL, Database Management
                </p>
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Technology in Mechanical Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">Vel Tech University, Tamil Nadu, India</p>
                <p className="text-sm text-gray-500">June 2022 • GPA: 9/10</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Relevant Coursework: IC Engines, Strength of Materials, Engineering Mechanics, Design Thinking
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FiBriefcase className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Professional Experience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Student Manager</h4>
                <p className="text-gray-600 dark:text-gray-400">Kent State University Culinary Services</p>
                <p className="text-sm text-gray-500">October 2023 - May 2025</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>Managed a team of 30-35 student workers per shift</li>
                  <li>Trained new employees and delegated tasks</li>
                  <li>Maintained inventory and resolved customer concerns</li>
                  <li>Enforced health and safety regulations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <FiAward className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Certifications & Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Certifications</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>CADD Centre Training Services</li>
                  <li>Software Testing at QSpider's</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technical Skills</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Data Analytics: Power BI, Tableau, SQL</li>
                  <li>Programming: Python, Core Java</li>
                  <li>Machine Learning: Supervised and Unsupervised models</li>
                  <li>Tools: Agile Development, Data Analysis</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 