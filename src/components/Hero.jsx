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
        {/* 🖼️ Profile Image with Glow */}
        <div className="relative inline-block mt-2">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-accentLight/20 blur-2xl z-[-1]" />
          <motion.img
            src="/profile.jpg"
            alt="Ihsan Ali"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 md:w-36 md:h-36 rounded-full object-cover shadow-xl border-4 border-accentLight mx-auto mb-6 transition-all duration-300"
          />
        </div>

        {/* 🙋‍♂️ Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-2">
          Hi, I'm <span className="text-accentLight">Ihsan Ali</span>
        </h1>

        {/* ✨ Short Subtitle */}
        <p className="text-sm md:text-base text-textSub max-w-md mx-auto mb-4">
          A passionate developer crafting elegant interfaces & smooth user experiences with React.js, Tailwind, and a touch of creativity.
        </p>

        {/* ✍️ Typewriter Text */}
        <h2 className="text-lg md:text-xl text-accentLight font-semibold tracking-wide mb-4">
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
        </h2>

        {/* 📄 Resume Download Button */}
        <div className="mt-4">
          <a
            href="/IhsanAli_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 rounded-soft border border-accentLight bg-[#1A1A1A] text-accentLight hover:bg-[#222222] hover:shadow-lg hover:shadow-accentLight/20 transition-all duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
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
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
