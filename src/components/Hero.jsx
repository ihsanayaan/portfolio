import { Link } from "react-scroll";
import ParticlesBackground from "./ParticlesBackground";
import TabsSection from "./TabsSection";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [showSkills, setShowSkills] = useState(false);

  /* Top Skills - no icons */
  const topSkills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "RTL/LTR",
  ];

  /* Stats */
  const stats = [
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Certifications" },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#0D0D0D]
        overflow-hidden
        px-4 sm:px-6
        py-20 md:py-28
      "
    >
      <ParticlesBackground />
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px]
          md:w-[650px] md:h-[650px]
          bg-gradient-to-r
          from-[#4EC6F1]/15
          via-[#6C63FF]/15
          to-[#FF6FD8]/15
          rounded-full
          blur-[100px] md:blur-[120px]
          z-0
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          grid lg:grid-cols-2
          gap-12 lg:gap-16
          items-start
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center lg:text-left
            lg:sticky lg:top-20
          "
        >
          {/* Open To Work */}
          <div
            className="
              inline-flex items-center gap-2
              bg-[#10B981]/10
              border-[#10B981]/30
              px-4 py-2
              rounded-full
              mb-6
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  animate-ping
                  absolute inline-flex
                  h-full w-full
                  rounded-full
                  bg-[#10B981]
                  opacity-75
                "
              />
              <span
                className="
                  relative inline-flex
                  rounded-full
                  h-2 w-2
                  bg-[#10B981]
                "
              />
            </span>
            <span
              className="
                text-[#10B981]
                text-xs sm:text-sm
                font-medium
              "
            >
              Open to Remote Frontend & UI/UX Opportunities
            </span>
          </div>

          {/* Profile */}
          <motion.img
            src="/profile.jpg"
            alt="Ihsan Ali"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="
              w-32 h-32
              md:w-36 md:h-36
              rounded-full
              object-cover object-top
              border-2 border-white/10
              mb-4
              mx-auto lg:mx-0
              hover:border-[#4EC6F1]/50
              hover:shadow-[0_0_35px_rgba(78,198,241,0.3)]
              transition-all duration-500
              shadow-2xl
            "
          />

          {/* Heading */}
          <h1
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-bold
              text-white
              leading-tight
              mb-4
            "
          >
            Hi, I'm{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#4EC6F1]
                to-[#6C63FF]
                bg-clip-text
                text-transparent
              "
            >
              Ihsan Ali
            </span>
          </h1>

          {/* Typewriter */}
          <h2
            className="
              text-lg md:text-xl
              text-[#4EC6F1]
              font-medium
              mb-6
              min-h-[2rem]
            "
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "UI/UX Designer",
                "React.js Specialist",
                "RTL/LTR Expert",
                "Modern Web Creator",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          {/* Subtitle */}
          <p
            className="
              text-gray-400
              text-base md:text-lg
              leading-relaxed
              max-w-2xl
            "
          >
            I design and develop modern, responsive web
            applications with React.js and Figma.
            Specialized in clean UI/UX, bilingual RTL/LTR
            interfaces, and scalable frontend experiences
            for global users.
          </p>

          {/* Buttons */}
          <div
            className="
             flex flex-wrap
              gap-3 sm:gap-4
              mt-8
              justify-center
              lg:justify-start
            "
          >
            {/* Resume */}
            <motion.a
              href="/Ihsan_Ali_Figma_Resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center justify-center
                gap-2
                px-4 py-2 sm:px-6 sm:py-3
                rounded-xl
                bg-gradient-to-r
                from-[#4EC6F1]
                to-[#6C63FF]
                hover:shadow-lg
                hover:shadow-[#4EC6F1]/30
                text-white
                font-semibold
                text-sm sm:text-base
                transition-all duration-300
              "
            >
              <FaDownload className="text-sm" />
              Download Resume
            </motion.a>

            {/* Contact */}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center justify-center
                  px-4 py-2 sm:px-6 sm:py-3
                  rounded-xl
                  border-white/15
                  text-white
                  font-semibold
                  text-sm sm:text-base
                  hover:bg-white/5
                  hover:border-[#4EC6F1]/40
                  transition-all duration-300
                "
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* About Card */}
          <div
            className="
              bg-white/[0.03]
              backdrop-blur-xl
              border-white/10
              rounded-3xl
              p-6 md:p-8
            "
          >
            <h3
              className="
                text-xl md:text-2xl
                font-bold
                text-white
                mb-4
              "
            >
              About Me
            </h3>
            <p
              className="
                text-gray-400
                leading-relaxed
                text-sm md:text-base
              "
            >
              I'm a Frontend Developer and UI/UX Designer
              specializing in building modern, responsive,
              and scalable web applications using React.js,
              Tailwind CSS and Figma.
              <br /><br />
              My workflow starts with wireframes and
              high-fidelity UI design before transforming
              ideas into pixel-perfect frontend experiences.
              <br /><br />
              Specialized in bilingual RTL/LTR interfaces
              and modern UI systems.
            </p>
          </div>

          {/* Skills */}
          <div
            className="
              bg-white/[0.03]
              backdrop-blur-xl
              border-white/10
              rounded-3xl
              p-6 md:p-8
            "
          >
            {/* Header */}
            <div
              className="
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                mb-6
              "
            >
              <h3
                className="
                  text-xl md:text-2xl
                  font-bold
                  text-white
                "
              >
               Skills
              </h3>
              <button
                onClick={() => setShowSkills(!showSkills)}
                aria-expanded={showSkills}
                className="
                  text-[#4EC6F1]
                  text-sm
                  font-medium
                  hover:text-white
                  transition-colors duration-300
                "
              >
                {showSkills
                 ? "Hide Skills ↑"
                  : "View more skills →"}
              </button>
            </div>

            {/* Top Skills */}
            <div className="flex flex-wrap gap-2.5">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="
                    px-4 py-2
                    rounded-xl
                    bg-white/[0.03]
                    border-white/10
                    text-gray-300
                    text-sm font-medium
                    hover:border-[#4EC6F1]/40
                    hover:bg-white/[0.06]
                    transition-all duration-300
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Expanded Skills */}
            <AnimatePresence>
              {showSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden mt-6"
                >
                  <TabsSection />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="
                  bg-white/[0.03]
                  backdrop-blur-sm
                  border-white/10
                  rounded-2xl
                  p-5
                  text-center
                  hover:border-[#4EC6F1]/30
                  transition-all duration-300
                "
              >
                <h4
                  className="
                    text-2xl
                    font-bold
                    bg-gradient-to-r
                    from-[#4EC6F1]
                    to-[#6C63FF]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.value}
                </h4>
                <p
                  className="
                    text-gray-400
                    text-sm
                    mt-1
                  "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <Link
        to="projects"
        smooth={true}
        offset={-80}
        duration={600}
        className="
          absolute bottom-6 left-1/2
          -translate-x-1/2
          text-gray-500
          hover:text-[#4EC6F1]
          cursor-pointer
          transition-colors
          hidden md:block
        "
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;