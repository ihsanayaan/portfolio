import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaCheckCircle,
  FaFigma,
  FaCode,
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
      className="pt-24 scroll-mt-24 bg-[#0D0D0D] px-4 md:px-6 py-20 border-t border-[#4EC6F1]/10 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] md:w-[700px] md:h-[700px]
        bg-gradient-to-r from-[#4EC6F1]/10 via-[#6C63FF]/10 to-[#FF6FD8]/10
        rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF] mx-auto rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-sm md:text-base">
            Frontend React Developer and UI/UX Designer specializing in
            modern React.js applications, scalable frontend architecture,
            bilingual RTL/LTR systems, and premium user experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0
            w-[2px] bg-gradient-to-b
            from-[#4EC6F1]
            via-[#6C63FF]/50
            to-transparent
            md:-translate-x-1/2"
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-14 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              {/* Timeline Icon */}
              <div
                className="absolute left-5 md:left-1/2 top-6
                w-11 h-11 md:w-12 md:h-12 rounded-full
                bg-[#111]
                border border-[#4EC6F1]/50
                flex items-center justify-center
                shadow-[0_0_25px_rgba(78,198,241,0.25)]
                z-10 -translate-x-1/2"
              >
                {exp.icon}
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)]
                ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(78,198,241,0.35)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                  group
                  relative
                  overflow-hidden
                  bg-white/[0.03]
                  backdrop-blur-xl
                  rounded-3xl
                  border border-white/10
                  p-6 md:p-7
                  transition-all duration-500
                  hover:shadow-[0_0_40px_rgba(78,198,241,0.12)]
                "
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0
                    bg-gradient-to-r
                    from-[#4EC6F1]/10
                    via-transparent
                    to-[#6C63FF]/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
                  />

                  {/* Current Badge */}
                  {exp.current && (
                    <div
                      className="inline-flex items-center gap-2
                      bg-[#10B981]/15
                      border border-[#10B981]/30
                      text-[#10B981]
                      text-xs font-bold
                      px-3 py-1 rounded-full mb-4"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      CURRENT
                    </div>
                  )}

                  {/* Role */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="text-[#4EC6F1] font-semibold text-lg mb-2">
                    {exp.company}
                  </p>

                  {/* Duration */}
                  {exp.duration && (
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-5">
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-6">
                    {exp.responsibilities.map((task, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="mt-1.5 w-2 h-2 rounded-full
                          bg-[#4EC6F1] flex-shrink-0"
                        />

                        <p className="text-gray-300 text-sm leading-7">
                          {task}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2.5">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="
                          px-3.5 py-2
                          rounded-xl
                          bg-[#0D0D0D]
                          border border-white/10
                          text-[#4EC6F1]
                          text-xs md:text-sm
                          font-medium
                          hover:border-[#4EC6F1]/40
                          transition-all duration-300
                        "
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;