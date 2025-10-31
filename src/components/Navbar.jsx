import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll < lastScrollY || currentScroll < 50);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-2 left-0 w-full z-50 px-4 md:px-6"
    >
      {/* 🌈 Premium Glass Navbar */}
      <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(78,198,241,0.25)] bg-[#0d0d0d]/85">
        {/* ✨ Animated Gradient Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-2xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* 🔹 Navbar Inner Content */}
        <div className="relative flex justify-between items-center px-5 md:px-10 py-3">
          {/* 🧠 Logo / Name */}
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.img
              src="/ihsan.jpg"
              alt="Ihsan Ali"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(78,198,241,0.4)]"
              data-tooltip-id="profile-tooltip"
              data-tooltip-content="Ihsan Ali"
            />
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xl font-extrabold tracking-widest text-cyan-400 group-hover:text-white transition"
            >
              IA
            </motion.h1>
            <Tooltip id="profile-tooltip" place="bottom" className="z-50" />
          </Link>

          {/* 💻 Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="font-semibold text-[#4EC6F1] hover:text-white transition duration-300 flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          {/* 📱 Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-cyan-400 hover:text-white transition"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-[#0D0D0D]/90 backdrop-blur-2xl rounded-2xl shadow-lg border border-cyan-400/20"
          >
            <ul className="flex flex-col gap-4 py-4 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={handleLinkClick}
                    className="font-semibold text-[#4EC6F1] hover:text-white transition duration-300 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
