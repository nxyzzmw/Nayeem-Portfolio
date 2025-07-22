import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex items-center justify-center"
    >
      <div className="max-w-4xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-blue-500">Mohamed Nayeemullah</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Software Engineer | Cloud Enthusiast
        </p>
        <a
          href="/resume"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white text-sm font-medium"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
}