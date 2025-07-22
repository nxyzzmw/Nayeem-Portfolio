import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Menu } from 'lucide-react';

export default function App() {
  const sectionStyle = "max-w-6xl mx-auto px-4 sm:px-8 py-16 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-lg";
  const formRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const Card = ({ title, children }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 bg-opacity-90 backdrop-blur-md text-white shadow-md rounded-lg p-6 border border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md text-center sm:text-left">{title}</h3>
      {children}
    </motion.div>
  );

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      formRef.current,
      'your_public_key'
    ).then(
      () => {
        alert('Message sent successfully!');
        formRef.current.reset();
      },
      () => {
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div
      className="bg-[#0c0f24] text-white font-sans min-h-screen"
      style={{
        backgroundImage: `url('https://images.ctfassets.net/pdf29us7flmy/WgINijiNb5WSNcLqoeiKx/d0436463d10dde16992b694f6838bf0f/How-to-Make-Your-Graphic-Design-Portfolio-Pop-Social-D1.png')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <header className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-lg bg-[#0c0f24] shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Nayeem S</h1>
        <nav className="hidden sm:flex gap-6 text-sm">
          {["home", "about", "education", "internships", "certifications", "skills", "projects", "resume", "contact"].map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-yellow-400 capitalize"
            >
              {sec}
            </Link>
          ))}
        </nav>
        <div className="sm:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            <Menu className="text-white" />
          </button>
        </div>
      </header>

      {navOpen && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-[#0c0f24] bg-opacity-95 backdrop-blur-md py-4 px-6 z-40">
          <nav className="flex flex-col gap-4">
            {["home", "about", "education", "internships", "certifications", "skills", "projects", "resume", "contact"].map((sec) => (
              <Link
                key={sec}
                to={sec}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 capitalize"
                onClick={() => setNavOpen(false)}
              >
                {sec}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="pt-20 space-y-20">
        <section id="home" className="min-h-screen flex items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 sm:p-10 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">Hi! I'm Mohamed Nayeemullah</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">Software Engineer | Cloud Enthusiast</p>
            <Link
              to="resume"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-300 cursor-pointer"
            >
              View Resume
            </Link>
          </motion.div>
        </section>

        <section id="about" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md text-center sm:text-left">About</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/nayeem photo.png"
              alt="Nayeem profile"
              className="rounded-full w-40 h-40 object-cover border-4 border-yellow-300 shadow-lg hover:scale-105 transition duration-300"
            />
            <p className="bg-gray-900 bg-opacity-70 backdrop-blur-md p-4 rounded text-justify">
              Motivated engineer with hands-on experience in building cloud data pipelines using Azure (ADF, Java-based Functions, Logic Apps) and full-stack web development. Proficient in Java, HTML, CSS, and JavaScript, with a strong foundation in data structures, DBMS, and real-time automation.
            </p>
          </div>
        </section>


        {/* Education Section */}
        <section id="education" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="grid gap-6">
            <Card title="B.Tech in Information Technology">
              <p>Velammal Institute of Technology | 2021 – 2025</p>
              <p>CGPA: 8.6</p>
            </Card>
            <Card title="High School">
              <p>Nazareth Matriculation Higher Secondary School</p>
              <p>HSC: 87% (2021), SSLC: 87% (2019)</p>
            </Card>
          </div>
        </section>

        {/* Internships */}
        <section id="internships" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4">Internships</h2>
          <div className="grid gap-6">
            <Card title="IITM Pravartak (March 2024)">
              <p>Intern – DST-PRAVARTAK Government Project Contributor</p>
            </Card>
            <Card title="TechnoHacks Edutech (Oct – Nov 2023)">
              <p>Web Development Intern – Full stack exposure to frontend and backend tools</p>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="grid gap-6">
            <Card title="Cloud Computing & Distributed Systems">
              <p>NPTEL (Elite)</p>
            </Card>
            <Card title="Java 11 for Developers">
              <p>LinkedIn Learning</p>
            </Card>
            <Card title="Hands-On AI: Build a Language Model">
              <p>LinkedIn Learning</p>
            </Card>
            <Card title="UI/UX Design & Project Expo - 1st Place">
              <p>Velammal Institute</p>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Azure', 'GitHub', 'VS Code'].map(skill => (
              <span key={skill} className="bg-blue-800 px-3 py-2 rounded text-center shadow-sm">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={sectionStyle}>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Book Recommendation System',
              tech: 'Python, Flask, HTML, CSS, JS',
              desc: 'Suggested books using NLP-based similarity metrics and content-based filtering.'
            }, {
              title: 'Automated Sales Data Processing',
              tech: 'Azure ADF, Functions, SQL, Logic Apps',
              desc: 'Processed sales CSVs, validated data, triggered alerts, and stored in SQL.'
            }, {
              title: 'Responsive Portfolio Website',
              tech: 'HTML, CSS, JavaScript',
              desc: 'Built a fully responsive and mobile-friendly personal website.'
            }].map((proj, index) => (
              <Card key={index} title={proj.title}>
                <p className="text-sm italic text-gray-400 mb-2">{proj.tech}</p>
                <p>{proj.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className={`${sectionStyle} text-center`}>
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          <a href="/Mohamed Nayeemullah S Resume 1.pdf" download className="bg-green-600 hover:bg-green-700 px-6 py-3 text-white rounded">
            Download PDF
          </a>
        </section>

        {/* Contact */}
<section id="contact" className={sectionStyle}>
  <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-md">Contact Me</h2>
  <form
    action="https://formspree.io/f/mvgqkgla"
    method="POST"
    className="max-w-2xl mx-auto space-y-4"
  >
      
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full p-3 border rounded bg-gray-800 text-white"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full p-3 border rounded bg-gray-800 text-white"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      required
      className="w-full p-3 border rounded bg-gray-800 text-white"
    ></textarea>
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
    >
      Send
    </button>
  </form>
</section>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-6 mt-12">
          <p className="text-sm text-gray-400">Email: nnayeem439@gmail.com</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/nxyzzmw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
            <a href="https://linkedin.com/in/mohamed-nayeemullah-s-b01bb3248" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
