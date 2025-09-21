import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  FaLaptopCode,
  FaUserAlt,
  FaUserCheck,
  FaCheckCircle,
} from 'react-icons/fa';

const experienceData = [
 {
  role: 'React Intern',
  company: 'Internee.pk',
  duration: 'April 2025 – June 2025',
  location: 'Remote',
  icon: <FaLaptopCode className="text-accentLight text-xl" />,
  responsibilities: [
    'Developed self introduction app using React.js, Formik and Tailwind CSS',
    'Built responsive e-commerce platform with Stripe integration & admin dashboard',
    'Created an AI powered Resume Analyzer with keyword scanning and scoring',
    'Built Unsplash image gallery app with real time search and responsive grid layout',
    'Designed and deployed AI chatbot app with voice input/output using Gemini API',
    'Created Sticky Notes app with localStorage, speech-to-text and Masonry layout',
  ],
  skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Stripe API', 'OpenAI/Gemini API'],
},
  {
    role: 'Virtual Intern',
    company: 'Cognorise InfoTech',
    duration: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    icon: <FaUserCheck className="text-accentLight text-xl" />,
    responsibilities: [
      'Simple To Do List app',
      'Simple Calculator App',
      'Expense Tracker App',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Git & GitHub'],
  },
    {
    role: 'Front-End Developer',
    company: 'Personal Projects',
    icon: <FaUserAlt className="text-accentLight text-xl" />,
    responsibilities: [
      'Developed a Coffee Shop App with animated UI and cart system using React & Tailwind',
      'Built an Expense Tracker App with dynamic charting and state management',
      'Created a fun Quiz App with scoring, instant feedback and category selection',
      'Designed a Weather App using OpenWeather API with location based search and icons',
    'Designed a Weather App using OpenWeather API with location based search and icons',
    'Crafted a modern Portfolio Website featuring animations, smooth scroll, dark mode, responsive design and Framer Motion enhancements',
    'Built an AI Admin Dashboard with React, Tailwind CSS, ShadCN UI, Framer Motion & Formik featuring charts, user management, pricing, dark/light mode and a full real world UI structure',
    'Built CourseHub an online learning platform with user auth, quizzes, certificate generation, responsive UI and localStorage state management',
  ],
  skills: [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'API Integration',
    'UI/UX Design',
    'Framer Motion',
    'React Scroll',
    'ShadCN UI',
    'Formik',
    'Yup',
    'React Router',
    'Lucide Icons',
    'html2canvas',
    'LocalStorage',
  ],
}
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border-t border- border-accentLight/50"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <SectionHeading title="💼 Experience" />

        <div className="relative border-l border- border-accentLight/50 ml-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6 mb-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated Dot with Icon */}
              <span className="absolute -left-4 top-2 w-8 h-8 rounded-full bg-bgDark border border-accentLight flex items-center justify-center shadow-md animate-pulse">
                {exp.icon}
              </span>

              {/* Role Details */}
              <h3 className="text-lg font-bold text-accentLight mb-1">{exp.role}</h3>
              <p className="text-textMain font-medium">{exp.company}</p>
              <div className="text-sm text-textSub mb-2">
                {exp.duration} — {exp.location}
              </div>

              {/* Responsibilities */}
              <ul className="list-disc ml-4 text-textSub space-y-1 text-sm">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#1A1A1A] text-accentLight border border-accentLight rounded-full"
                  >
                    <FaCheckCircle className="text-[10px]" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
