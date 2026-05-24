import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Responsive Design",
      "RTL/LTR Layouts",
    ],
  },

  {
    title: "Design & UI/UX",
    skills: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "Design Systems",
      "Wireframing",
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vite",
      "Chrome DevTools",
      "Agile/Scrum",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        scroll-mt-24
        px-4 md:px-6
        py-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#4EC6F1]/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#6C63FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-center mb-14">
  <h2
    className="
      text-2xl md:text-4xl
      font-black
      text-white
      leading-tight
    "
  >
    Skills & Expertise
  </h2>
  {/* Gradient Line */}
  <div
    className="
      w-28 h-[4px]
      rounded-full
      mx-auto mt-5
      bg-gradient-to-r from-[#4EC6F1] via-white to-[#6C63FF]
    "
  />
</div>
        </motion.div>
        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden

                p-6 md:p-7
                rounded-3xl

                bg-white/[0.03]
                backdrop-blur-xl

                border border-white/10

                hover:border-[#4EC6F1]/30
                hover:shadow-[0_0_35px_rgba(78,198,241,0.12)]

                transition-all duration-500
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
                  via-transparent
                  to-[#6C63FF]/10
                "
              />

              {/* Title */}
              <h3
                className="
                  relative z-10
                  text-xl font-bold text-white
                  mb-5
                "
              >
                {group.title}
              </h3>
              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      px-3 py-1.5
                      rounded-full

                     bg-white/[0.03]
                          border border-white/10

                      text-gray-300
                      text-xs md:text-sm
                      font-medium

                      hover:border-[#4EC6F1]/40
                      hover:text-white
                    

                      transition-all duration-300
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;