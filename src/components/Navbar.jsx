import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  // Social Links
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ihsan-ali-63a5a72a0",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]",
    },

    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/923444947537",
      label: "WhatsApp",
      hoverColor: "hover:text-[#25D366]",
    },

    {
      icon: <FaGithub />,
      url: "https://github.com/ihsanayaan",
      label: "GitHub",
      hoverColor: "hover:text-white",
    },
  ];

  // Hide Navbar on Scroll
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > lastY && window.scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (to) => {
    setIsOpen(false);
    setActiveLink(to);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3"
    >
      {/* Navbar Container */}
      <div
        className={`
          max-w-7xl mx-auto
          rounded-2xl
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#111]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(78,198,241,0.08)]"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex justify-between items-center px-4 md:px-7 py-4">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <h1
                className="
                  text-xl md:text-2xl
                  font-extrabold
                  bg-gradient-to-r
                  from-[#4EC6F1]
                  via-white
                  to-[#6C63FF]
                  bg-clip-text
                  text-transparent
                  tracking-wide
                "
              >
                Ihsan Ali
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">

            {/* Nav Links */}
            <div
              className="
                flex items-center gap-1
                bg-white/[0.03]
                border border-white/10
                rounded-2xl
                px-2 py-2
                backdrop-blur-xl
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveLink(link.to)}
                  className={`
                    relative
                    px-4 py-2.5
                    rounded-xl
                    font-medium
                    text-sm
                    cursor-pointer
                    transition-all duration-300
                    ${
                      activeLink === link.to
                        ? "text-white bg-gradient-to-r from-[#4EC6F1]/20 to-[#6C63FF]/20 border border-[#4EC6F1]/20"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div
              className="
                flex items-center gap-3
                ml-3
                px-4 py-3
                rounded-2xl
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
              "
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className={`
                    text-gray-400
                    ${social.hoverColor}
                    text-lg
                    transition-all duration-300
                  `}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-3 md:hidden">

            {/* Mobile Social */}
            {socialLinks.slice(0, 2).map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
                className={`
                  text-gray-400
                  ${social.hoverColor}
                  text-xl
                  transition-all duration-300
                `}
              >
                {social.icon}
              </motion.a>
            ))}

            {/* Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="
                w-11 h-11
                flex items-center justify-center
                rounded-xl
                bg-white/[0.04]
                border border-white/10
                text-gray-300
                hover:text-[#4EC6F1]
                transition-all duration-300
              "
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
    <AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="
          fixed inset-0
          bg-black/60
          backdrop-blur-sm
          z-40
          md:hidden
        "
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 220,
        }}
        className="
          fixed top-0 right-0
          h-auto
          w-[280px]
          bg-[#111]/95
          backdrop-blur-2xl
          border-l border-b border-white/10
          shadow-2xl
          z-50
          md:hidden
          rounded-bl-3xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            px-5 py-5
            border-b border-white/10
          "
        >
          <h2 className="text-white text-lg font-bold">
            Navigation
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="
              text-gray-400
              hover:text-[#4EC6F1]
              text-xl
              transition
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleLinkClick(link.to)}
              className={`
                px-5 py-3.5
                rounded-xl
                font-medium
                cursor-pointer
                transition-all duration-300
                ${
                  activeLink === link.to
                    ? "bg-gradient-to-r from-[#4EC6F1]/20 to-[#6C63FF]/20 text-white border border-[#4EC6F1]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;