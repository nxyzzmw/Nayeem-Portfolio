import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-6 py-16">
      <div className="max-w-xl mx-auto">
        <img
          src="/your-photo.jpg"
          alt="Nayeem"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold text-black dark:text-white mb-2">Mohamed Nayeemullah S</h1>
        <p className="text-gray-700 dark:text-gray-300">
          A passionate software engineer with interests in cloud computing, full-stack development, and problem solving. I believe in clean code, continuous learning, and building things that matter.
        </p>
      </div>
    </div>
  );
}