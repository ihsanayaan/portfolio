import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
const projects = [
  {
    title: '🙋‍♂️ Internee.pk Assignment 2',
    description: 'A self intro React app with form, dark mode, and animated profile.',
    image: '/project1.png',
    demo: 'https://internee-assignment2.vercel.app/',
    code: "https://github.com/ihsanayaan/Internee-assignment2.git",
  },
    {
    title: '📸 Unsplash Image Gallery',
    description: 'A responsive React app that fetches and displays high quality images from the Unsplash API with real time search and download functionality. Built with modern UI/UX and deployed on Vercel',
    image: '/project4.png',
    demo: 'https://unsplash-gallery-app-eight.vercel.app/',
    code: "https://github.com/ihsanayaan/unsplash-gallery-app.git",
  },
  {
    title: '🛍️ E-commerce Platform',
    description: "Full stack e-commerce platform with Firebase backend, Stripe payments, and admin dashboard. Built with React, Redux, and Tailwind CSS.",
    image: '/project2.png',
    demo: 'https://ecommerce-platform-qrnn-132j7qral-ihsan-ayaans-projects.vercel.app/',
    code: "https://github.com/ihsanayaan/ecommerce-platform.git",
  },
    {
    title: '☕Coffee Shop App',
    description: '☕ BrewBean  React coffee shop app with dynamic menu, cart system & responsive UI (React/Tailwind)',
    image: '/project3.png',
    demo: 'https://coffee-shop-one-woad.vercel.app/',
    code: "https://github.com/ihsanayaan/coffee-shop.git",
  },
     {
    title: '🤖 AI ChatBot App',
    description: 'A modern AI powered chatbot built using ReactJS that simulates natural conversation. The app includes voice input support, keyword based smart replies, chat history, and theme toggling.',
    image: '/project5.png',
    demo: 'https://ai-chatbot-app-vert.vercel.app/',
    code: "https://github.com/ihsanayaan/ai-chatbot-app.git",
  },
     {
    title: '🗒️ Sticky Notes App',
    description: 'A modern, responsive sticky notes app inspired by Google Keep. Designed for quick note taking with persistent storage and beautiful UI/UX.',
    image: '/project6.png',
    demo: 'https://notes-app-two-opal.vercel.app/',
    code: "https://github.com/ihsanayaan/notes-app.git",
  },
 {
    title: '📄 AI Powered Resume Analyzer',
    description: 'An intelligent web application that analyzes resumes using AI to provide personalized feedback, keyword matching, and score generation  helping users optimize their resumes for better job opportunities.',
    image: '/project7.png',
    demo: 'https://ai-resume-analyzer-red.vercel.app/',
    code: "https://github.com/ihsanayaan/ai-resume-analyzer.git",
  },
    {
    title: '⛅ Weather App',
    description: 'A responsive weather forecast application built using React and OpenWeatherMap API. This app allows users to search for any city and get real time weather updates including temperature, weather condition and more.',
    image: '/project12.png',
    demo: "https://weather-app-three-smoky-41.vercel.app/",
    code:"https://github.com/ihsanayaan/weather-app.git",
  },
  {
    title: '🚀 AI Admin Dashboard ',
    description: 'A fully responsive and modern Admin Dashboard UI built with React, Tailwind CSS, ShadCN UI, and Framer Motion designed to simulate a real world dashboard experience with smooth animations, modals, charts, forms and dark/light mode.',
    image: '/project13.png',
    demo: "https://ai-dashboard-omega-self.vercel.app/",
    code:"https://github.com/ihsanayaan/ai-dashboard.git",
  },
  {
    title: '📚 CourseHub  Online Learning & Certification Platform',
    description: 'CourseHub is a full featured, responsive e learning platform built with React.js, designed for users to browse, enroll, learn, take quizzes and earn certificates.',
    image: '/project14.png',
    demo: "https://coursehub-react.vercel.app/",
    code:"https://github.com/ihsanayaan/coursehub-react.git",
  },
 {
    title: '🧠 Quize App',
    description: 'A fun quiz app that allows users to take quizzes on different topics and get results instantly.',
    image: '/project8.png',
  },
 {
    title: '✅ To Do List App',
    description: 'A simple task management app',
    image: '/project9.png',
  },
   {
    title: '🧮 Calculator App',
    description: 'A simple Calculator app',
    image: '/project10.png',
  },
   {
    title: '💸 Expense Tracker App',
    description: 'To manage your daily efficiently',
    image: '/project11.png',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border-t border-accentLight/50"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* 🔥 Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-accentLight tracking-wide"
        >
          <SectionHeading title="🛠 Projects" />
        </motion.h2>

        {/* 🔥 Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              }}
              className="relative bg-bgDark p-4 rounded-soft border border-accentLight/40 shadow-md transition-all group overflow-hidden"
            >
              {/* ✨ Hover Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-soft border-2 border-transparent group-hover:border-accentLight/40"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* 🔥 Image + Overlay */}
              <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden border border-textSub">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-sm text-white font-medium mb-3">
                    {project.title}
                  </span>
                </motion.div>
              </div>

              {/* Title + Description */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl font-semibold text-accentLight mb-2"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-sm text-textSub mb-4"
              >
                {project.description}
              </motion.p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-[#1A1A1A] text-accentLight px-4 py-1 rounded-soft border border-accentLight overflow-hidden"
                  >
                    <span className="relative z-10">Live Demo</span>
                    {/* Hover Glow Effect */}
                    <motion.span
                      className="absolute inset-0 bg-accentLight/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
                {project.code && (
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-[#1A1A1A] text-accentLight px-4 py-1 rounded-soft border border-accentLight overflow-hidden"
                  >
                    <span className="relative z-10">GitHub</span>
                    <motion.span
                      className="absolute inset-0 bg-accentLight/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
