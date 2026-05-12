import { motion } from 'framer-motion';
import { FaFigma, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const projects = [
  {
    title: 'Healthcare Booking System',
    description: 'Bilingual healthcare platform with complete RTL/LTR support. Designed full wireframes, user flows & high-fidelity prototypes in Figma before development. Features 12+ services, real-time search, and multi-step booking.',
    imageEn: '/project-healthcare-en.png',
    imageAr: '/project-healthcare-ar.png',
    demo: "https://rhombix-technologies-task-3-dr-appo.vercel.app/",
    code: "https://github.com/ihsanayaan/Dr-Appointment-System-RTL.git",
    figma: "https://www.figma.com/design/AZsomF9MAxYn1R4SmWORgr/Booking-Dr-Appointment-System-UI?node-id=0-1&t=YfHUdtIBnS12OSz5-1",
    tech: ["Figma", "React", "Zustand", "i18next", "Tailwind CSS"],
    featured: true,
    category: "Low-Fidelity Design"
  },
  {
    title: 'AI Admin Dashboard',
    description: 'Production-ready admin dashboard with real-time analytics and interactive charts. Designed complete design system in Figma with reusable components, then built with ShadCN UI.',
    imageEn: '/project-dashboard-en.png',
    imageAr: '/project-dashboard-ar.png',
    demo: "https://ai-dashboard-omega-self.vercel.app/",
    code: "https://github.com/ihsanayaan/ai-dashboard.git",
    tech: ["Figma", "React", "ShadCN UI", "Tailwind CSS", "Recharts"]
  },
  {
    title: 'FinTech Student App',
    description: 'Student finance management app with expense tracking, savings goals, and budget analytics. Complete high-fidelity Figma design with interactive prototype, component library, and dark/light mode variants.',
    imageEn: '/project-fintech-en.png',
    figma: "https://www.figma.com/design/nQM3I4jOPc8OT7W4P9fAx9/FSUI-UX?node-id=7-3&t=jz93bQyvnBmMhPOs-1",
    tech: ["Figma", "UI/UX", "Prototyping", "Design System"],
    category: "High-Fidelity Design",
    status: "Design Complete"
  },
  {
    title: 'Food Delivery App',
    description: 'On-demand food delivery platform wireframes with complete user journey mapping. Low-fidelity wireframes covering restaurant browsing, cart management, order tracking, and checkout flow.',
    imageEn: '/project-food-wireframe.png',
    figma: "https://www.figma.com/design/s1R9GBrolNccO1Ia0qSY5U/Restaurants?node-id=1-45&t=YfHUdtIBnS12OSz5-1",
    tech: ["Figma", "Wireframing", "User Flows", "UX Research"],
    category: "Low-Fidelity Wireframe",
    status: "Wireframe Phase"
  },
  {
    title: 'BrewBean Coffee Shop',
    description: 'Modern coffee shop with dynamic menu and bilingual RTL/LTR support. Designed complete Figma prototypes with component variants before building responsive React app with cart persistence.',
    imageEn: '/project-coffee-en.png',
    imageAr: '/project-coffee-ar.png',
    demo: 'https://coffee-shop-one-woad.vercel.app/',
    code: "https://github.com/ihsanayaan/coffee-shop.git",
    tech: ["Figma", "React", "Context API", "Tailwind CSS", "i18next"]
  },
  {
    title: 'CourseHub - E-Learning Platform',
    description: 'Full-featured online learning platform with course browsing, video lessons, and certificate generation. Designed complete user flows and high-fidelity screens in Figma.',
    imageEn: '/project14.png',
    demo: "https://coursehub-react.vercel.app/",
    code: "https://github.com/ihsanayaan/coursehub-react.git",
    tech: ["Figma", "React", "Context API", "Tailwind CSS"]
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Intelligent web app that analyzes resumes using AI. Designed clean, modern UI in Figma with focus on UX, then developed with React and OpenAI integration.',
    imageEn: '/project7.png',
    demo: 'https://ai-resume-analyzer-red.vercel.app/',
    code: "https://github.com/ihsanayaan/ai-resume-analyzer.git",
    tech: ["Figma", "React", "OpenAI API", "Tailwind CSS"]
  },
  {
    title: 'AI ChatBot App',
    description: 'Modern conversational AI chatbot with voice input and theme toggle. Designed conversational UI patterns and chat interface in Figma before development.',
    imageEn: '/project5.png',
    demo: 'https://ai-chatbot-app-vert.vercel.app/',
    code: "https://github.com/ihsanayaan/ai-chatbot-app.git",
    tech: ["Figma", "React", "Web Speech API", "Tailwind CSS"]
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Stripe payments and admin dashboard. Created complete design system and component library in Figma, then built with React + Firebase.',
    imageEn: '/project2.png',
    demo: 'https://ecommerce-platform-qrnn-132j7qral-ihsan-ayaans-projects.vercel.app/',
    code: "https://github.com/ihsanayaan/ecommerce-platform.git",
    tech: ["Figma", "React", "Redux"]
  },
];

// ✅ PROJECT CARD - FIGMA + DUAL IMAGES + STATUS BADGES
const ProjectCard = ({ project, index }) => {
  const hasDualImages = project.imageAr && project.imageEn;
  const hasOnlyFigma = project.figma &&!project.demo &&!project.code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#4EC6F1]/50 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex gap-2 flex-wrap">
        {project.featured && (
          <div className="bg-[#4EC6F1] text-white text-xs font-bold px-3 py-1 rounded-full">
            FEATURED
          </div>
        )}
        {project.category && (
          <div className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${
            project.category === 'High-Fidelity Design'? 'bg-[#5d9a46]' : 
            project.category === 'Low-Fidelity Wireframe'? 'bg-[#70707f]' : 'bg-gray-700'
          }`}>
            {project.category}
          </div>
        )}
      </div>

      {/* Status Badge - Top Right */}
      {project.status && (
        <div className="absolute top-3 right-3 z-20 bg-yellow-500/90 text-black text-xs font-bold px-3 py-1 rounded-full">
          {project.status}
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden bg-[#0D0D0D]">
        <img
          src={project.imageEn || project.image}
          alt={`${project.title} - English`}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hasDualImages? 'group-hover:opacity-0' : ''
          }`}
        />
        
        {hasDualImages && (
          <img
            src={project.imageAr}
            alt={`${project.title} - Arabic`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
          />
        )}
        
        {/* Language Badge */}
        {hasDualImages && (
          <div className="absolute bottom-3 left-3 z-10 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg font-medium">
            <span className="group-hover:hidden">🇬🇧 EN</span>
            <span className="hidden group-hover:inline">🇸🇦 AR</span>
          </div>
        )}

        {/* RTL Badge */}
        {hasDualImages && (
          <div className="absolute top-3 right-3 z-10 bg-[#4EC6F1]/90 text-white text-xs px-2.5 py-1 rounded-md font-bold">
            RTL/LTR
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4EC6F1] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded bg-[#0D0D0D] text-[#4EC6F1] border border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons - Dynamic */}
        <div className="flex gap-2 mt-auto flex-wrap">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] text-center px-3 py-2.5 rounded-lg bg-[#4EC6F1] hover:bg-[#3db5e0] text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt className="text-xs" /> Demo
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] text-center px-3 py-2.5 rounded-lg bg-[#5bb1c7] hover:bg-[#23acbc] text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaFigma className="text-xs" /> Figma
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] text-center px-3 py-2.5 rounded-lg border-2 border-gray-700 text-gray-300 hover:border-[#4EC6F1] hover:text-[#4EC6F1] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaGithub className="text-xs" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ✅ MAIN PROJECTS COMPONENT
const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#0D0D0D] px-4 md:px-6 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Design + Development Projects" />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 mt-4 mb-12 max-w-2xl mx-auto"
        >
          End-to-end projects from wireframes to production. Hover cards for RTL/LTR views • Click Figma for design files
        </motion.p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;