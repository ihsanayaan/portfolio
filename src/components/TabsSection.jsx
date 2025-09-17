import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,
  FaFigma, FaChrome, FaTools, FaPeopleCarry, FaPuzzlePiece,
  FaComments, FaClock, FaMoon, FaRegEye, FaRoute,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFramer, SiTypescript, SiPostman,
  SiVite, SiAxios, SiReact, SiFormik, SiLucide
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { BsMouse } from 'react-icons/bs'; // For React Scroll

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
  "Custom Dark Theme": <FaMoon className="text-indigo-300" />,
  "React Scroll": <BsMouse className="text-green-400" />,
    "ShadCN UI": <SiLucide className="text-purple-400" />,
  Formik: <SiFormik className="text-pink-300" />,
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
    "Framer Motion", "React Icons", "React Toastify",
    "UI/UX Design", "Custom Dark Theme", "React Scroll", "TypeScript","ShadCN UI", "Formik", "Yup", "React Router"
  ],
  Tools: [
    "Git & GitHub", "VS Code", "Figma", "Chrome DevTools",
    "Axios", "Vite"
  ],
  "Soft Skills": [
    "Teamwork", "Problem-Solving", "Communication", "Adaptability", "Time Management"
  ],
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Tech Stack");

  return (
    <div className="mt-8">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-soft font-medium border transition-all ${
              activeTab === key
                ? "bg-[#1A1A1A] text-accentLight border-accentLight shadow-md shadow-accent/20"
                : "bg-[#0F0F0F] text-textSub border-borderLight hover:bg-[#1C1C1C]/50"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Animated Skills List */}
      <motion.ul
        key={activeTab}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-textSub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {categories[activeTab].map((skill, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-2 pl-2"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <span className="text-lg">{iconMap[skill] || "🛠"}</span>
            <span>{skill}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TabsSection;
