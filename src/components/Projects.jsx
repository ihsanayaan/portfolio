import { useState } from 'react';
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

// ================= PROJECTS =================

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
    filter: ['Frontend', 'RTL/LTR', 'React'],
    category: 'Featured Project',
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
    filter: ['Frontend','RTL/LTR', 'React'],
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
    ],
    filter: ['UI/UX'],
  },

  {
    title: 'BrewBean Coffee Shop',
    description:
      'Modern coffee shop with bilingual RTL/LTR support and responsive React experience.',
    imageEn: '/project-coffee-en.png',
    imageAr: '/project-coffee-ar.png',
    demo:
      'https://coffee-shop-one-woad.vercel.app/',
    code:
      'https://github.com/ihsanayaan/coffee-shop.git',
    tech: [
      'React',
      'Tailwind CSS',
      'i18next',
    ],
    filter: ['Frontend', 'RTL/LTR', 'React'],
  },

  {
    title: 'AI Resume Analyzer',
    description:
      'Modern AI resume analyzer with OpenAI integration and clean UX.',
    imageEn: '/project7.png',
    demo:
      'https://ai-resume-analyzer-red.vercel.app/',
    code:
      'https://github.com/ihsanayaan/ai-resume-analyzer.git',
    tech: [
      'React',
      'OpenAI API',
      'Tailwind CSS',
    ],
    filter: ['Frontend', 'React'],
  },
{
  title: 'Food Delivery App',
  description:
    'Modern food delivery application focused on user-friendly ordering experience, restaurant browsing, cart management, and smooth checkout flows. Designed complete wireframes and responsive UI screens in Figma before development.',
  imageEn: '/project-food-wireframe.png',
  figma:
    'https://www.figma.com/design/s1R9GBrolNccO1Ia0qSY5U/Restaurants?node-id=1-45&t=YfHUdtIBnS12OSz5-1',
  tech: [
    'Figma',
    'Wireframing',
    'UX Research',
    'Responsive Design',
  ],
  filter: ['UI/UX'],
  status: 'Design Phase',
},

{
  title: 'CourseHub - E-Learning Platform',
  description:
    'Modern e-learning platform with course browsing, lesson management, responsive dashboards, and interactive student experience. Designed complete high-fidelity UI system in Figma before frontend development.',
  imageEn: '/project14.png',
  demo: 'https://coursehub-react.vercel.app/',
  code:
    'https://github.com/ihsanayaan/coursehub-react.git',
  tech: [
    'React',
    'Tailwind CSS',
    'Context API',
    'Figma',
  ],
  filter: ['Frontend', 'React'],
},

{
  title: 'E-Commerce Platform',
  description:
    'Modern e-commerce platform with product listings, shopping cart, responsive UI, and scalable frontend architecture. Designed complete design system and reusable UI components before development.',
  imageEn: '/project2.png',
  demo:
    'https://ecommerce-platform-qrnn-132j7qral-ihsan-ayaans-projects.vercel.app/',
  code:
    'https://github.com/ihsanayaan/ecommerce-platform.git',
  tech: [
    'React',
    'Redux',
    'Tailwind CSS',
    'Figma',
  ],
  filter: ['Frontend', 'React'],
},
  {
    title: 'AI ChatBot App',
    description:
      'Conversational AI chatbot with voice input and modern UI patterns.',
    imageEn: '/project5.png',
    demo:
      'https://ai-chatbot-app-vert.vercel.app/',
    code:
      'https://github.com/ihsanayaan/ai-chatbot-app.git',
    tech: [
      'React',
      'Web Speech API',
      'Tailwind CSS',
    ],
    filter: ['Frontend', 'React'],
  },
];

// ================= CARD =================

const ProjectCard = ({ project }) => {
  const hasDualImages =
    project.imageAr && project.imageEn;

  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
      }}
      transition={{ duration: 0.35 }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      bg-white/[0.03]
      border border-white/10
      backdrop-blur-xl
      hover:border-[#4EC6F1]/40
      transition-all duration-500
      "
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Animated Glow */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-gradient-to-r from-[#4EC6F1]/10 via-[#6C63FF]/10 to-[#FF6FD8]/10
      "
      />

      {/* Animated Border */}
      <div
        className="
        absolute inset-0 rounded-3xl
        border border-transparent
        group-hover:border-[#4EC6F1]/40
        transition-all duration-500
      "
      />

      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.imageEn}
          alt={project.title}
          className={`
          w-full h-full object-cover
          transition-all duration-700
          group-hover:scale-110
          ${
            hasDualImages
              ? 'group-hover:opacity-0'
              : ''
          }
          `}
        />

        {hasDualImages && (
          <img
            src={project.imageAr}
            alt={project.title}
            className="
            absolute inset-0 w-full h-full object-cover
            opacity-0 group-hover:opacity-100
            transition-all duration-700
            group-hover:scale-110
          "
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        {/* Category */}
        {project.category && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-[#4EC6F1] text-white text-xs font-bold px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        )}

        {/* RTL */}
        {hasDualImages && (
          <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white">
            RTL / LTR
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">
        <h3
          className="
          text-2xl font-bold text-white mb-3
          group-hover:text-[#4EC6F1]
          transition-colors duration-300
        "
        >
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 text-sm mb-5">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((item, index) => (
            <span
              key={index}
              className="
              px-3 py-1 rounded-full
              bg-[#111]
              border border-white/10
              text-[#4EC6F1]
              text-xs
            "
            >
              {item}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 flex-wrap">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex-1 min-w-[120px]
              flex items-center justify-center gap-2
              px-4 py-3 rounded-xl
              bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF]
              hover:scale-[1.02]
              transition-all duration-300
              text-white text-sm font-semibold
            "
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
              className="
              flex items-center justify-center gap-2
              px-4 py-3 rounded-xl
              border border-white/10
              hover:border-[#4EC6F1]/40
              text-white text-sm font-semibold
              transition-all duration-300
            "
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
              className="
              flex items-center justify-center gap-2
              px-4 py-3 rounded-xl
              border border-white/10
              hover:border-[#4EC6F1]/40
              text-white text-sm font-semibold
              transition-all duration-300
            "
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

// ================= MAIN =================

const filters = [
  'All',
  'UI/UX',
  'Frontend',
  'RTL/LTR',
  'React',
];

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState('All');

  const featuredProject = projects.find(
    (p) => p.featured
  );

  const filteredProjects =
    activeFilter === 'All'
      ? projects.filter((p) => !p.featured)
      : projects.filter(
          (p) =>
            !p.featured &&
            p.filter?.includes(activeFilter)
        );

  return (
    <section
      id="projects"
      className="
      scroll-mt-24
      bg-[#0D0D0D]
      px-4 md:px-6
      py-24
    "
    >
      <div className="max-w-[1450px] mx-auto">

        <SectionHeading title="Featured Projects" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          text-center text-gray-400
          mt-4 mb-14
          max-w-3xl mx-auto
          leading-8
        "
        >
          Modern UI/UX + Frontend projects with
          responsive design, RTL/LTR support,
          scalable architecture, and premium user
          experiences.
        </motion.p>

        {/* FEATURED PROJECT */}
        <div className="mb-20">
          <ProjectCard project={featuredProject} />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
              px-5 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-300
              ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF] text-white'
                  : 'bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white'
              }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
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
          className="pb-16"
        >
          {filteredProjects.map(
            (project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  project={project}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;