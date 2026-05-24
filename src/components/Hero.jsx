import { Link } from "react-scroll";
import TabsSection from "./Skills";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [showSkills] = useState(false);

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
    {
      value: "10+",
      label: "Projects",
      link: "projects",
    },

    {
      value: "3+",
      label: "Certifications",
      link: "education",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-x-hidden
        pt-28 md:pt-32
        pb-20
      "
    >
      {/* Premium Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-24 -left-24

            w-64 h-64
            md:w-96 md:h-96

            bg-[#4EC6F1]/20
            rounded-full

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            w-64 h-64
            md:w-96 md:h-96

            bg-[#6C63FF]/20
            rounded-full

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            top-1/2 left-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[450px]
            h-[450px]

            bg-gradient-to-r
            from-[#4EC6F1]/10
            via-[#6C63FF]/10
            to-[#FF6FD8]/10

            rounded-full

            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2

                bg-[#10B981]/10
                border border-[#10B981]/30

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
                    absolute
                    inline-flex
                    h-full w-full
                    rounded-full
                    bg-[#10B981]
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-2 w-2
                    bg-[#10B981]
                  "
                />
              </span>

              <span className="text-[#10B981] text-xs sm:text-sm font-medium">
                Open to Remote Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl

                font-black
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
                  via-white
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
                text-lg md:text-2xl
                text-[#5bcaf2f0]
                font-semibold
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

                text-sm sm:text-base md:text-lg

                leading-relaxed

                max-w-2xl

                mx-auto lg:mx-0
              "
            >
              Building modern, responsive and premium
              frontend experiences using React.js,
              Tailwind CSS and Figma.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                flex flex-wrap
                gap-3

                mt-8

                justify-center
                lg:justify-start
              "
            >
              {/* Resume */}
              <motion.a
                href="/Ihsan_Ali_Figma_Resume.pdf"
                download
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex items-center gap-2

                  px-5 py-3

                  rounded-2xl

                  bg-gradient-to-r
                  from-[#4EC6F1]
                  to-[#6C63FF]

                  text-white
                  font-semibold
                  text-sm

                  hover:shadow-[0_0_30px_rgba(78,198,241,0.35)]

                  transition-all duration-300
                "
              >
                <FaDownload />
                 Resume
              </motion.a>

              {/* Contact */}
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
              >
                <motion.button
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    px-5 py-3

                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]
                    backdrop-blur-xl

                    text-white
                    font-semibold
                    text-sm

                    hover:border-[#4EC6F1]/40
                    hover:bg-white/[0.06]

                    hover:shadow-[0_0_20px_rgba(78,198,241,0.15)]

                    transition-all duration-300
                  "
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-8">

              {stats.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  smooth={true}
                  offset={-80}
                  duration={600}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden

                      cursor-pointer

                      bg-white/[0.03]
                      backdrop-blur-xl

                      border border-white/10
                      rounded-3xl

                      p-5
                      text-center

                      hover:border-[#4EC6F1]/40

                      transition-all duration-500
                    "
                  >
                    {/* Premium Glow */}
                    <div
                      className="
                        absolute inset-0

                        opacity-0
                        group-hover:opacity-100

                        transition duration-500

                        bg-gradient-to-r
                        from-[#4EC6F1]/10
                        via-[#6C63FF]/10
                        to-[#FF6FD8]/10
                      "
                    />

                    {/* Border */}
                    <div
                      className="
                        absolute inset-0
                        rounded-3xl

                        border border-transparent

                        group-hover:border-[#4EC6F1]/30

                        transition-all duration-500
                      "
                    />

                    <h4
                      className="
                        relative z-10

                        text-2xl md:text-3xl
                        font-black

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
                        relative z-10

                        text-gray-400
                        text-xs md:text-sm

                        mt-1
                      "
                    >
                      {item.label}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="space-y-5"
          >
            {/* About */}
            <div
              className="
                bg-white/[0.03]
                backdrop-blur-2xl

                border border-white/10

                rounded-3xl

                p-6

                hover:border-[#4EC6F1]/30

                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                About Me
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Frontend Developer & UI/UX Designer
                focused on creating modern scalable
                UI systems using React.js, Tailwind CSS
                and Figma.
              </p>
            </div>

            {/* Skills */}
            <div
              className="
                bg-white/[0.03]
                backdrop-blur-2xl

                border border-white/10

                rounded-3xl

                p-6

                overflow-hidden

                hover:border-[#4EC6F1]/30

                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-bold text-white mb-5">
                Core Skills
              </h3>

              {/* Marquee */}
              <div className="relative overflow-hidden">

                <div className="marquee-track flex gap-4">
                  {[...topSkills, ...topSkills].map(
                    (skill, index) => (
                      <div
                        key={index}
                        className="
                          px-4 py-2

                          rounded-xl

                          bg-white/[0.03]
                          border border-white/10

                          text-gray-300
                          text-sm font-medium

                          whitespace-nowrap

                          hover:border-[#4EC6F1]/40
                          hover:text-white

                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>

              <AnimatePresence>
                {showSkills && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="mt-6"
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