import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">My Resume</h1>
      <a
        href="/Mohamed_Nayeemullah_S_Resume_1.pdf"
        download
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white text-sm"
      >
        Download PDF
      </a>
    </div>
  );
}