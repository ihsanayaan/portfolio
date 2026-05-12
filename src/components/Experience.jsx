import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaUserAlt,
  FaCheckCircle,
  FaFigma,
  FaPalette,
  FaCode,
  FaBriefcase,
} from 'react-icons/fa';

const experienceData = [
 {
  role: 'UI UX  Designer',
  company: 'Rhombix Technologies',
  duration: 'Nov 2025 – Feb 2026',
  location: 'Remote',
  icon: <FaFigma className="text-[#4EC6F1] text-xl" />,
  responsibilities: [
    'Promoted from UI/UX Designer to Product Designer & Frontend Developer in Feb 2026',
    'Led UI/UX design and frontend development for healthcare, fintech and food delivery products serving Middle East market',
    'Created low-fidelity and high-fidelity wireframes for food delivery platform including user flow, cart and checkout screens',
    'Designed high-fidelity prototypes in Figma and converted to production ready React.js applications',
    'Architected bilingual RTL/LTR design systems with 50+ reusable components used across 5+ products',
    'Conducted user research and usability testing to improve product experience',
    'Collaborated with product team to ship features from concept to deployment',
  ],
  skills: ['Product Design', 'UI/UX Design', 'Figma', 'Wireframing', 'React.js', 'Tailwind CSS', 'RTL/LTR', 'Design Systems', 'User Research'],
},
 {
  role: 'React Developer',
  company: 'Internee.pk',
  duration: 'Apr 2025 – Jun 2025',
  location: 'Remote',
  icon: <FaLaptopCode className="text-[#4EC6F1] text-xl" />,
  responsibilities: [
    'Built AI-powered Resume Analyzer with keyword scanning using Gemini API',
    'Developed e-commerce platform with Stripe payment integration',
    'Created AI chatbot with voice input/output capabilities',
    'Developed Sticky Notes app with localStorage persistence and drag drop functionality',
    'Built Unsplash Gallery with API integration, search and infinite scroll',
  ],
  skills: ['React.js', 'Gemini API', 'Unsplash API', 'LocalStorage', 'Tailwind CSS'],
},
  {
    role: 'Web Development',
    company: 'Cognorise InfoTech',
    duration: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    icon: <FaCode className="text-[#4EC6F1] text-xl" />,
    responsibilities: [
      'Developed Expense Tracker with dynamic charting and localStorage',
      'Built interactive Quiz App with category selection',
      'Created Weather App with OpenWeather API integration',
    ],
    skills: ['JavaScript', 'API Integration', 'LocalStorage'],
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-24 scroll-mt-24 bg-[#0D0D0D] px-6 py-16 border-t border-[#4EC6F1]/20"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* SectionHeading hata diya, direct h2 use kiya */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          Professional Experience
          <div className="w-24 h-1 bg-[#4EC6F1] mx-auto mt-4 rounded-full"></div>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 -mt-8 mb-8 max-w-2xl mx-auto"
        >
          Front End React developer and UI/UX designer specializing in React.js, bilingual applications and modern web technologies.
        </motion.p>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4EC6F1] via-[#4EC6F1]/50 to-transparent md:-translate-x-1/2" />
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-6 md:left-1/2 top-6 w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#4EC6F1] flex items-center justify-center shadow-lg shadow-[#4EC6F1]/20 z-10 -translate-x-1/2">
                {exp.icon}
              </div>

              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#4EC6F1]/50 transition-all duration-300 p-6 shadow-lg hover:shadow-[#4EC6F1]/10">
                  
                  {exp.current && (
                    <div className="inline-block bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      CURRENT
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-[#4EC6F1] font-semibold mb-1">{exp.company}</p>
                  {exp.duration && (
                    <div className="text-sm text-gray-400 mb-3 flex items-center gap-2 flex-wrap">
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  )}

                  <ul className="space-y-2 text-gray-400 text-sm mb-4">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#4EC6F1] mt-0.5 flex-shrink-0 text-xs" />
                        <span className="leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#0D0D0D] text-[#4EC6F1] border border-gray-800 hover:border-[#4EC6F1]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;