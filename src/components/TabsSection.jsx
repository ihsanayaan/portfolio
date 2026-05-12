import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,
  FaFigma, FaChrome, FaTools, FaPeopleCarry, FaPuzzlePiece,
  FaComments, FaClock, FaMoon, FaRegEye, FaRoute, FaCheckCircle
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFramer, SiTypescript, SiPostman,
  SiVite, SiAxios, SiReact, SiFormik, SiLucide
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { BsMouse } from 'react-icons/bs';

const iconMap = {
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  Axios: <SiAxios className="text-sky-400" />,
  "React Icons": <FaRegEye className="text-pink-400" />,
  "React Toastify": <SiReact className="text-yellow-300" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  "Git & GitHub": <FaGithub className="text-gray-300" />,
  Git: <FaGitAlt className="text-red-500" />,
  GitHub: <FaGithub className="text-gray-300" />,
  Figma: <FaFigma className="text-pink-500" />,
  "Chrome DevTools": <FaChrome className="text-yellow-400" />,
  Postman: <SiPostman className="text-orange-400" />,
  Vite: <SiVite className="text-purple-400" />,
  "UI/UX Design": <MdDesignServices className="text-rose-400" />,
  Wireframing: <MdDesignServices className="text-purple-400" />,
  "Custom Dark Theme": <FaMoon className="text-indigo-300" />,
  "React Scroll": <BsMouse className="text-green-400" />,
  "ShadCN UI": <SiLucide className="text-purple-400" />,
  Formik: <SiFormik className="text-pink-300" />,
  Yup: <FaCheckCircle className="text-green-400" />, // ← Fixed
  "React Router": <FaRoute className="text-red-400" />,
  Teamwork: <FaPeopleCarry className="text-blue-300" />,
  "Problem-Solving": <FaPuzzlePiece className="text-purple-300" />,
  Communication: <FaComments className="text-green-300" />,
  Adaptability: <FaTools className="text-yellow-300" />,
  "Time Management": <FaClock className="text-indigo-300" />,
};

const categories = {
  "Tech Stack": [
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
    "Framer Motion", "TypeScript", "React Router", "Axios",
    "React Icons", "React Toastify", "ShadCN UI", "Formik", "Yup"
  ],
  "Design Tools": [
    "Figma", 
    "Canva", 
    "Wireframing", 
    "UI/UX Design", 
    "Prototyping",
    "Design Systems"
  ],
  "Tools": [
    "Git & GitHub", "VS Code", "Chrome DevTools",
    "Vite", "React Scroll"
  ],
  "Soft Skills": [
    "Custom Dark Theme", "Teamwork",
    "Problem-Solving", "Communication", "Adaptability", "Time Management"
  ],
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Tech Stack");

  return (
    <div className="mt-8">
      <div className="flex justify-center gap-2 md:gap-3 mb-8 flex-wrap">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 md:px-6 py-2.5 rounded-lg font-medium transition-all duration-200
              ${
                activeTab === key
              ? "bg-[#4EC6F1] text-white shadow-lg shadow-[#4EC6F1]/20"
                  : "bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#252525] border border-gray-800"
              }`}
          >
            {key}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {categories[activeTab].map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.03 }}
            className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#4EC6F1]/50 hover:bg-[#1f1f1f] transition-all duration-200"
          >
            <span className="text-xl md:text-2xl flex-shrink-0">{iconMap[skill] || "🛠"}</span>
            <span className="text-sm md:text-base text-gray-300 font-medium">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default TabsSection;