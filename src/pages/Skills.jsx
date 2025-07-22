import React from 'react';

export default function Skills() {
  const skills = {
    Languages: ['Java', 'SQL'],
    Frontend: ['HTML', 'CSS', 'JavaScript'],
    Database: ['MongoDB'],
    Cloud: ['Azure'],
    Tools: ['GitHub', 'VS Code']
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i} className="mb-6">
            <h3 className="font-semibold text-xl mb-2">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, j) => (
                <span key={j} className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-white px-4 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}