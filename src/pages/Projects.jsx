import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Book Recommendation System',
      tech: 'Python, Flask, ML, NLP',
      desc: 'Suggests books based on user reading history using similarity analysis.',
    },
    {
      title: 'Personal Portfolio Website',
      tech: 'HTML, CSS, JavaScript',
      desc: 'Responsive website to showcase resume and projects.',
    },
    {
      title: 'Automated Sales Data Processing',
      tech: 'Azure ADF, Azure Functions, Logic Apps',
      desc: 'Validates and loads daily sales data, sends success/failure alerts.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border dark:border-gray-700 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-1">{proj.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{proj.tech}</p>
              <p className="text-sm text-gray-300">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}