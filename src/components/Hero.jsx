import { Link } from "react-scroll";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0D0D0D] overflow-hidden"
    >
      {/* 🔵 Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4EC6F1]/10 blur-3xl rounded-full z-0" />

      {/* 🔤 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
       {/* 🖼️ Profile Image with Animated Glow Ring */}
<div className="relative inline-block mt-2">
  {/* 🔵 Outer Animated Glow Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    className="absolute -inset-4 rounded-full border-4 border-transparent bg-gradient-to-r from-[#4EC6F1] via-[#6C63FF] to-[#4EC6F1] blur-md opacity-70"
  />

  {/* 🔵 Static Glow Layer */}
  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-accentLight/20 blur-2xl z-[-1]" />

  {/* 🖼️ Actual Image */}
  <motion.img
    src="/profile.jpg"
    alt="Ihsan Ali"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    className="relative w-36 h-36 rounded-full object-cover object-top shadow-lg border-2 border-accentLight mx-auto mb-6 transition-all duration-300"
  />
</div>

        {/* 🙋‍♂️ Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-textMain mb-2"
        >
          Hi, I'm <span className="text-accentLight">Ihsan Ali</span>
        </motion.h1>

        {/* ✨ Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-textSub max-w-md mx-auto mb-4"
        >
          I design and develop modern websites that blend clean design, smooth
          interactions and strong functionality helping ideas turn into
          impactful digital experiences.
        </motion.p>

        {/* ✍️ Typewriter Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-accentLight font-semibold tracking-wide mb-4"
        >
          <Typewriter
            words={[
              "Ihsan Ali",
              "Front-End Developer",
              "React Developer",
              "UI/UX Designer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

       {/* 📄 Resume Download Button */}
<motion.div
  className="mt-4"
  initial={{ opacity: 0, y: 30, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
  viewport={{ once: true }}
>
  <motion.a
    href="/IhsanAli_Resume.pdf"
    download
    whileHover={{
      scale: 1.08,
      boxShadow: "0px 0px 20px rgba(128,208,255,0.6)",
    }}
    whileTap={{ scale: 0.95 }}
    className="relative inline-flex items-center gap-2 px-6 py-2 rounded-lg 
               bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF] 
               text-white font-semibold shadow-lg overflow-hidden"
  >
    {/* Shine Effect */}
    <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                     translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

    <FaDownload className="relative z-10" />
    <span className="relative z-10">Download Resume</span>
  </motion.a>
</motion.div>
      </motion.div>

      {/* ⬇️ Scroll Down Arrow */}
      <Link
        to="about"
        smooth={true}
        offset={-80}
        duration={600}
        className="absolute bottom-10 text-accentLight text-2xl cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
          }}
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
