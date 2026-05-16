import { Link } from "react-scroll";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Subtle Single Glow - Clean */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                   bg-gradient-to-r from-[#4EC6F1]/20 via-[#6C63FF]/20 to-[#FF6FD8]/20
                   rounded-full blur-[120px] z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981] px-4 py-2 rounded-full mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
          </span>
          <span className="text-[#10B981] text-sm font-semibold">
            Open to Remote Frontend & UI/UX Opportunities Worldwide
          </span>
        </motion.div>

        {/* Profile Image*/}
        <motion.img
          src="/profile.jpg"
          alt="Ihsan Ali"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover object-top
                     mx-auto mb-6 border-4 border-white/10 hover:scale-105 transition-all duration-500"
        />
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-3"
        >
          Hi, I'm Ihsan Ali
        </motion.h1>

        {/* Typewriter - KSA Focused */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#4EC6F1] font-semibold mb-6 h-8"
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "UI/UX Designer",
              "React.js Specialist",
              "RTL/LTR Expert",
              "Modern Web Creator"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-4 md:px-0"
        >
         I design and develop modern, responsive web applications with React.js and Figma. Specialized in clean UI/UX, bilingual RTL/LTR interfaces, and scalable frontend experiences for global users.
        </motion.p>
        {/* Buttons - Clean */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Resume Button */}
          <motion.a
            href="/Ihsan_Ali_Figma_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                       bg-[#4EC6F1] hover:bg-[#3db5e0]
                       text-white font-semibold shadow-lg transition-all duration-300"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </motion.a>
          {/* Hire Me Button */}
          <Link to="contact" smooth={true} offset={-80} duration={600}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg
                         border-2 border-[#4EC6F1] text-[#4EC6F1] hover:bg-[#4EC6F1]/10
                         font-semibold transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      {/* Scroll Down - Simple */}
      <Link
        to="about"
        smooth={true}
        offset={-80}
        duration={600}
        className="absolute bottom-8 text-gray-500 hover:text-[#4EC6F1] text-xl cursor-pointer transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;