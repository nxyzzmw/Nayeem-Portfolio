import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-md">
          Contact Me
        </h1>

        <form
          action="https://formspree.io/f/mvgqkgla"
          method="POST"
          className="space-y-4"
        >
          {/* Success redirect (optional) */}
          <input type="hidden" name="_next" value="https://your-site.com/thank-you" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Send
          </button>
        </form>

        {/* Footer Info */}
        <div className="text-center mt-6">
          <p>Email: <a href="mailto:nnayeem439@gmail.com" className="underline">nnayeem439@gmail.com</a></p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/nxyzzmw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
            <a href="https://linkedin.com/in/mohamed-nayeemullah-s-b01bb3248" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
