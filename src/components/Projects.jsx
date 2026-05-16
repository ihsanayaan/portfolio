import { motion } from 'framer-motion';
import {
  FaFigma,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  Autoplay,
  Pagination,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import SectionHeading from '../components/SectionHeading';

// ✅ PROJECTS DATA
const projects = [
  {
    title: 'Healthcare Booking System',
    description:
      'Bilingual healthcare platform with complete RTL/LTR support. Designed full wireframes, user flows & high-fidelity prototypes in Figma before development.',
    imageEn: '/project-healthcare-en.png',
    imageAr: '/project-healthcare-ar.png',
    demo:
      'https://rhombix-technologies-task-3-dr-appo.vercel.app/',
    code:
      'https://github.com/ihsanayaan/Dr-Appointment-System-RTL.git',
    figma:
      'https://www.figma.com/design/AZsomF9MAxYn1R4SmWORgr/Booking-Dr-Appointment-System-UI?node-id=0-1&t=YfHUdtIBnS12OSz5-1',
    tech: [
      'Figma',
      'React',
      'Zustand',
      'i18next',
      'Tailwind CSS',
    ],
    featured: true,
    category: 'Low-Fidelity Design',
  },

  {
    title: 'AI Admin Dashboard',
    description:
      'Production-ready admin dashboard with real-time analytics and interactive charts.',
    imageEn: '/project-dashboard-en.png',
    imageAr: '/project-dashboard-ar.png',
    demo:
      'https://ai-dashboard-omega-self.vercel.app/',
    code:
      'https://github.com/ihsanayaan/ai-dashboard.git',
    tech: [
      'Figma',
      'React',
      'ShadCN UI',
      'Tailwind CSS',
      'Recharts',
    ],
  },

  {
    title: 'FinTech Student App',
    description:
      'Student finance management app with expense tracking, savings goals, and budget analytics.',
    imageEn: '/project-fintech-en.png',
    figma:
      'https://www.figma.com/design/nQM3I4jOPc8OT7W4P9fAx9/FSUI-UX?node-id=7-3&t=jz93bQyvnBmMhPOs-1',
    tech: [
      'Figma',
      'UI/UX',
      'Prototyping',
      'Design System',
    ],
    category: 'High-Fidelity Design',
    status: 'Design Complete',
  },

  {
    title: 'Food Delivery App',
    description:
      'Low-fidelity wireframes covering restaurant browsing, cart management, order tracking, and checkout flow.',
    imageEn: '/project-food-wireframe.png',
    figma:
      'https://www.figma.com/design/s1R9GBrolNccO1Ia0qSY5U/Restaurants?node-id=1-45&t=YfHUdtIBnS12OSz5-1',
    tech: [
      'Figma',
      'Wireframing',
      'User Flows',
      'UX Research',
    ],
    category: 'Low-Fidelity Wireframe',
    status: 'Wireframe Phase',
  },
  {
  title: 'BrewBean Coffee Shop',
  description:
    'Modern coffee shop with dynamic menu and bilingual RTL/LTR support. Designed complete Figma prototypes with component variants before building responsive React app with cart persistence.',
  imageEn: '/project-coffee-en.png',
  imageAr: '/project-coffee-ar.png',
  demo: 'https://coffee-shop-one-woad.vercel.app/',
  code: 'https://github.com/ihsanayaan/coffee-shop.git',
  tech: [
    'Figma',
    'React',
    'Context API',
    'Tailwind CSS',
    'i18next',
  ],
},

{
  title: 'CourseHub - E-Learning Platform',
  description:
    'Full-featured online learning platform with course browsing, video lessons, and certificate generation. Designed complete user flows and high-fidelity screens in Figma.',
  imageEn: '/project14.png',
  demo: 'https://coursehub-react.vercel.app/',
  code:
    'https://github.com/ihsanayaan/coursehub-react.git',
  tech: [
    'Figma',
    'React',
    'Context API',
    'Tailwind CSS',
  ],
},

{
  title: 'AI Resume Analyzer',
  description:
    'Intelligent web app that analyzes resumes using AI. Designed clean, modern UI in Figma with focus on UX, then developed with React and OpenAI integration.',
  imageEn: '/project7.png',
  demo:
    'https://ai-resume-analyzer-red.vercel.app/',
  code:
    'https://github.com/ihsanayaan/ai-resume-analyzer.git',
  tech: [
    'Figma',
    'React',
    'OpenAI API',
    'Tailwind CSS',
  ],
},

{
  title: 'AI ChatBot App',
  description:
    'Modern conversational AI chatbot with voice input and theme toggle. Designed conversational UI patterns and chat interface in Figma before development.',
  imageEn: '/project5.png',
  demo:
    'https://ai-chatbot-app-vert.vercel.app/',
  code:
    'https://github.com/ihsanayaan/ai-chatbot-app.git',
  tech: [
    'Figma',
    'React',
    'Web Speech API',
    'Tailwind CSS',
  ],
},

{
  title: 'E-Commerce Platform',
  description:
    'Full-stack e-commerce solution with Stripe payments and admin dashboard. Created complete design system and component library in Figma, then built with React + Firebase.',
  imageEn: '/project2.png',
  demo:
    'https://ecommerce-platform-qrnn-132j7qral-ihsan-ayaans-projects.vercel.app/',
  code:
    'https://github.com/ihsanayaan/ecommerce-platform.git',
  tech: [
    'Figma',
    'React',
    'Redux',
  ],
},
];

// ✅ PROJECT CARD
const ProjectCard = ({ project, index }) => {
  const hasDualImages =
    project.imageAr && project.imageEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        hover:border-[#4EC6F1]/40
        transition-all
        duration-500
        flex
        flex-col
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4EC6F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
        {project.featured && (
          <div className="bg-[#4EC6F1] text-white text-xs font-bold px-3 py-1 rounded-full">
            FEATURED
          </div>
        )}

        {project.category && (
          <div className="bg-[#232323] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </div>
        )}
      </div>

      {/* Status */}
      {project.status && (
        <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          {project.status}
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={project.imageEn}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            hasDualImages
              ? 'group-hover:opacity-0'
              : ''
          }`}
        />

        {hasDualImages && (
          <img
            src={project.imageAr}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        {/* RTL Badge */}
        {hasDualImages && (
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-medium z-20">
            <span className="group-hover:hidden">
              🇬🇧 EN
            </span>

            <span className="hidden group-hover:inline">
              🇸🇦 AR
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4EC6F1] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-[15px] leading-7 text-gray-300 mb-5 flex-grow">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-[#111] border border-white/10 text-[#4EC6F1]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 rounded-xl bg-[#4EC6F1] hover:bg-[#39b4df] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 rounded-xl bg-[#242424] hover:bg-[#2d2d2d] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
            >
              <FaFigma />
              Figma
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 rounded-xl border border-white/10 hover:border-[#4EC6F1] hover:text-[#4EC6F1] text-gray-300 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ✅ MAIN COMPONENT
const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#0D0D0D] px-4 md:px-6 py-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading title="Design + Development Projects" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-4 mb-14 max-w-3xl mx-auto leading-8"
        >
          End-to-end projects from wireframes to
          production-ready applications with modern UI,
          responsive UX, RTL/LTR support, and scalable
          frontend architecture.
        </motion.p>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                project={project}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;