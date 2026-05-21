import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
  "Tech Stack": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "TypeScript",
    "React Router",
    "Axios",
    "React Icons",
    "React Toastify",
    "ShadCN UI",
    "Formik",
    "Yup"
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
    "Git & GitHub",
    "VS Code",
    "Chrome DevTools",
    "Vite",
    "React Scroll"
  ],

  "Soft Skills": [
    "Teamwork",
    "Problem-Solving",
    "Communication",
    "Adaptability",
    "Time Management"
  ],
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Tech Stack");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <div className="mt-6">

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">

        {Object.keys(categories).map((key) => (

          <motion.button
            key={key}
            onClick={() => setActiveTab(key)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-5 py-2.5 rounded-xl
              text-sm md:text-base font-medium
              border transition-all duration-300

              ${
                activeTab === key
                  ? "bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF] text-white border-transparent shadow-lg shadow-[#4EC6F1]/20"
                  : "bg-[#111] border-white/10 text-gray-400 hover:text-white hover:border-[#4EC6F1]/30 hover:bg-[#151515]"
              }
            `}
          >
            {key}
          </motion.button>

        ))}

      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
          "
        >

          {categories[activeTab].map((skill) => (

            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden

                flex items-center justify-center text-center

                min-h-[85px]
                px-4 py-5

                rounded-2xl

                bg-[#111]/80
                backdrop-blur-xl

                border border-white/10

                hover:border-[#4EC6F1]/40
                hover:bg-[#151515]

                transition-all duration-300
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500

                  bg-gradient-to-br
                  from-[#4EC6F1]/10
                  to-[#6C63FF]/10
                "
              />

              {/* Text */}
              <span
                className="
                  relative z-10

                  text-sm md:text-[15px]
                  font-medium
                  text-gray-300

                  leading-relaxed
                "
              >
                {skill}
              </span>

            </motion.div>

          ))}

        </motion.div>

      </AnimatePresence>

    </div>
  );
};

export default TabsSection;