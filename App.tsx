import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseManagementSystem from './components/CourseManagementSystem';

interface Project {
  title: string;
  company?: string;
  date: string;
  description: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description?: string[];
}

const projects: Project[] = [
  {
    title: "NCAA Player Data Scraper",
    company: "Cherokee Acquisitions",
    date: "Dec 2024",
    description: [
      "Developed a Python-based tool to scrape and organize data on Power 5 conference football players from 2016-2024",
      "Automated web scraping, data cleaning, and deduplication processes to produce a structured CSV file for analysis",
      "Ensured efficiency and accuracy while handling large datasets and resolving data inconsistencies"
    ],
    technologies: ["Python", "Web Scraping", "Data Processing", "CSV"],
    image: "images/NCAA.jpg",
    githubUrl: "https://github.com/Jacob-1122/CFB_Roster_Scraper"
  },
  {
    title: "Smart Weather & Fire Risk Monitor",
    company: "Personal Project",
    date: "Mar 2025",
    description: [
      "Developed a web application providing real-time weather data and fire risk assessments using advanced weather analysis and machine learning predictions",
      "Integrated multiple APIs, including Weather.gov for weather data, OpenStreetMap for geocoding, and RainViewer for real-time precipitation radar",
      "Implemented an intelligent city search with fuzzy matching and auto-completion and used JavaScript and Vite to have seamless user experience across all devices"
    ],
    technologies: ["JavaScript", "Vite", "Weather.gov API", "OpenStreetMap", "Machine Learning"],
    image: "images/Weather.jpg",
    githubUrl: "https://github.com/Jacob-1122/Setup-Fire-Risk-Prediction-Web-App",
    liveUrl: "https://meek-chimera-b4ac38.netlify.app/"
  },
  {
    title: "Course Management System",
    company: "Personal Project",
    date: "Apr 2025",
    description: [
      "Uses modern frontend frameworks like PostgreSQL-based backend-as-a-service for enterprise-grade performance",
      "Uses PostgreSQL's advanced trigger system for real-time enrollment management",
      "Automated CI/CD Pipeline Integration - build-time database initialization"
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Vite", "Supabase"],
    image: "images/Course.jpg",
    githubUrl: "https://github.com/Jacob-1122/Course-Managment-System-Web-App_V.2",
    liveUrl: "https://coursemanagment.netlify.app"
  }
];

const experiences: ExperienceItem[] = [
  {
    title: "Data Research and Marketing",
    company: "Cherokee Acquisition",
    location: "Remote",
    date: "Dec 2022 – Present",
    description: [
      "Conducted automated research using API's",
      "Played a key role in initiatives that contributed to the acquisition and processing of over $300MM",
      "Developed an automated data collection tool to enhance efficiency in identifying high-value claims",
      "Conducted marketing efforts to engage with creditors"
    ]
  },
  {
    title: "Sales Associate and Warehouse Coordinator",
    company: "TJMAX",
    location: "Victoria, TX",
    date: "Nov 2024 – Present",
    description: [
      "Assisted in inventory management and warehouse organization",
      "Provided customer service and facilitated retail operations"
    ]
  },
  {
    title: "Bartender",
    company: "Cosmic Cowboy Lounge",
    location: "Spring, TX",
    date: "Nov 2022 - Jan 2023 | Jun 2024 - Aug 2024"
  },
  {
    title: "Valet Attendant",
    company: "Marriot",
    location: "Houston, TX",
    date: "Nov 2022 – Aug 2023"
  }
];

function ProjectDescription({ description }: { description: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
      >
        <span className="mr-2">{isOpen ? 'Hide' : 'Show'} Details</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <ul className="space-y-2 mt-4">
          {description.map((desc, i) => (
            <li key={i} className="flex items-start text-gray-300">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              {desc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimelineExperience({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <div className="timeline space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <span className="timeline-date">{exp.date}</span>
          <h3 className="text-lg font-semibold text-blue-400">{exp.title}</h3>
          <p className="text-gray-300">{exp.company} | {exp.location}</p>
          {exp.description && (
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/course-management" element={<CourseManagementSystem />} />
        <Route path="/" element={
          <div className="min-h-screen bg-[#111111] text-gray-300">
            <header className="relative min-h-screen flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]"></div>
              <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Jacob Goings
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-200">
                  Computer and Information Systems Security Student
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                  <div className="flex items-center glass px-4 py-2 rounded-full">
                    <MapPin size={20} className="mr-2 text-blue-400" />
                    Houston, TX
                  </div>
                  <div className="flex items-center glass px-4 py-2 rounded-full">
                    <Phone size={20} className="mr-2 text-blue-400" />
                    <a href="tel:8323929920" className="hover:text-blue-400 transition-colors">(832) 392-9920</a>
                  </div>
                  <div className="flex items-center glass px-4 py-2 rounded-full">
                    <Mail size={20} className="mr-2 text-blue-400" />
                    <a href="mailto:Jacob.Goingss@gmail.com" className="hover:text-blue-400 transition-colors">Jacob.Goingss@gmail.com</a>
                  </div>
                </div>
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: Linkedin, url: "http://www.linkedin.com/in/jacob-goings-a79903256/", hoverColor: "hover:text-blue-400" },
                    { icon: Github, url: "https://github.com/Jacob-1122", hoverColor: "hover:text-white" },
                    { icon: ExternalLink, url: "https://drive.google.com/drive/folders/1Kp-pf8YsmvmPndK9mqYz2GuR1RuhXgSw?usp=drive_link", hoverColor: "hover:text-blue-400" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass p-4 rounded-full ${social.hoverColor} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </header>

            <div className="container mx-auto px-6 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-12">
                  <section className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Computer and Information Systems Security student with hands-on experience in data analysis, 
                      automation, and information management. Skilled in data acquisition, verification, and workflow optimization.
                    </p>
                  </section>

                  <section className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {["C++", "Python", "API", "Networking", "IT Support", "Digital Marketing"].map((skill, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Education
                    </h2>
                    <div className="text-gray-300">
                      <h3 className="text-lg font-semibold text-blue-400">B.S. Computer Information Systems</h3>
                      <p>University of Houston - At Victoria</p>
                      <p className="text-gray-400">Sep 2022 – Present</p>
                      <p className="mt-2 font-medium text-blue-300">Student Athlete</p>
                    </div>
                  </section>

                  <section className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Certifications
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400">Google IT Support Professional Certificate</h3>
                        <p>Google | Jan 2025</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400">Microsoft IT Support Specialist</h3>
                        <p>Microsoft | Dec 2024</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="lg:col-span-2 space-y-12">
                  <section className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Work Experience
                    </h2>
                    <TimelineExperience experiences={experiences} />
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Featured Projects
                    </h2>
                    <div className="space-y-8">
                      {projects.map((project, index) => (
                        <div key={index} className="glass rounded-2xl overflow-hidden">
                          <div className="relative h-64">
                            <a 
                              href={project.liveUrl || project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full transition-transform duration-300 hover:scale-105"
                            >
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                            </a>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.company} | {project.date}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <ProjectDescription description={project.description} />
                            <div className="flex gap-4 mt-4">
                              {project.githubUrl && (
                                <a 
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                  <Github size={18} className="mr-1" />
                                  View Code
                                </a>
                              )}
                              {project.liveUrl && (
                                <a 
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                  <ExternalLink size={18} className="mr-1" />
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <section className="py-20">
              <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-12 text-lg">
                  I'm always excited to collaborate on innovative projects and explore new opportunities.
                  Feel free to reach out!
                </p>
                <a 
                  href="mailto:Jacob.Goingss@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-lg font-medium group"
                >
                  <Mail size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </a>
              </div>
            </section>

            <footer className="py-12 glass mt-20">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="mb-4 md:mb-0 text-gray-400">© {new Date().getFullYear()} Jacob Goings. All rights reserved.</p>
                  <div className="flex space-x-6">
                    {[
                      { icon: Linkedin, url: "http://www.linkedin.com/in/jacob-goings-a79903256/", hoverColor: "hover:text-blue-400" },
                      { icon: Github, url: "https://github.com/Jacob-1122", hoverColor: "hover:text-white" },
                      { icon: ExternalLink, url: "https://drive.google.com/drive/folders/1Kp-pf8YsmvmPndK9mqYz2GuR1RuhXgSw?usp=drive_link", hoverColor: "hover:text-blue-400" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.hoverColor} transition-colors`}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
