import { Link } from "react-scroll";
import TabsSection from "./Skills";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [setShowSkills] = useState(false);
  const topSkills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Figma",
    "UI/UX Design",
    "RTL/LTR",
    "TypeScript",
  ];

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Certifications" },
  ];

  return (
    <section id="home" className="pt-28 md:pt-32 relative w-full overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-[#4EC6F1]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-[#6C63FF]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 px-3 py-1.5 rounded-full mb-6">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981] text-xs font-medium">
                Open to Remote Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#4EC6F1] via-white to-[#6C63FF] bg-clip-text text-transparent">
                Ihsan Ali
              </span>
            </h1>
            {/* Typewriter */}
            <h2 className="text-base sm:text-lg md:text-2xl text-[#4EC6F1] font-semibold mb-6">
              <Typewriter
                words={["Frontend Developer", "UI/UX Designer", "React.js Specialist"]}
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Building modern, responsive web apps with React & Figma.
            </p>
            {/* CTA BUTTONS FIXED */}
           {/* CTA BUTTONS */}
<div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">

  {/* Resume Button */}
  <motion.a
    href="/Ihsan_Ali_Figma_Resume.pdf"
    download
    whileHover={{
      y: -3,
      scale: 1.02,
    }}
    whileTap={{ scale: 0.97 }}
    className="
      inline-flex items-center gap-2
      px-4 sm:px-5 py-2.5
      rounded-xl

      bg-gradient-to-r
      from-[#4EC6F1]
      to-[#6C63FF]

      text-white
      font-semibold
      text-xs sm:text-sm

      whitespace-nowrap

      hover:shadow-[0_0_25px_rgba(78,198,241,0.35)]

      transition-all duration-300
    "
  >
    <FaDownload />
    Resume
  </motion.a>

  {/* Contact Button */}
  <Link to="contact" smooth offset={-96} duration={600}>
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.97 }}
      className="
        inline-flex items-center
        px-4 sm:px-5 py-2.5
        rounded-xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        text-white
        font-semibold
        text-xs sm:text-sm
        whitespace-nowrap
        hover:border-[#4EC6F1]/40
        hover:bg-white/[0.06]
        hover:shadow-[0_0_20px_rgba(78,198,241,0.15)]
        transition-all duration-300
        cursor-pointer
      "
    >
      Get In Touch
    </motion.button>
  </Link>

</div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {stats.map((item, i) => (
                <div key={i} className="bg-white/[0.03] rounded-2xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF]">
                    {item.value}
                  </h4>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >

            {/* About */}
            <div className="bg-white/[0.03] rounded-3xl p-5 md:p-6">
              <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Frontend Developer & UI/UX Designer focused on modern scalable UI systems using React, Tailwind & Figma.
              </p>
            </div>

            {/* SKILLS MARQUEE FIXED */}
            <div className="bg-white/[0.03] rounded-3xl p-5 md:p-6 overflow-hidden">

              <h3 className="text-xl font-bold text-white mb-4">Core Skills</h3>

              <div className="relative w-full overflow-hidden">

                <div className="flex gap-3 w-max animate-marquee">
                  {[...topSkills, ...topSkills].map((skill, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] text-gray-200 text-xs sm:text-sm whitespace-nowrap"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

              </div>

              <AnimatePresence>
                {showSkills && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-5"
                  >
                    <TabsSection />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;