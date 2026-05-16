import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

 useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
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
      animate={{ y: showNavbar? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Clean Glass Navbar */}
      <div className="backdrop-blur-2xl bg-[#0d0d0d]/70 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          {/* Logo - Optimized with WebP + Hover */}
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setActiveLink("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.img
              src="/ihsan.webp"
              alt="Ihsan Ali - Frontend Developer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-9 h-9 rounded-full border-2 border-[#4EC6F1] object-cover group-hover:border-white group-hover:shadow-lg group-hover:shadow-[#4EC6F1]/30"
              loading="eager"
            />
            <h1 className="text-xl font-bold text-white group-hover:text-[#4EC6F1] transition-colors duration-300">
              Ihsan Ali
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveLink(link.to)}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                activeLink === link.to
                ? "text-[#4EC6F1] bg-[#4EC6F1]/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
        }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-300 hover:text-[#4EC6F1] transition p-2"
            aria-label="Toggle menu"
          >
            {isOpen? <FaTimes /> : <FaBars />}
          </button>
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
      />

      {/* Sidebar */}
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", damping: 25 }}
  className="fixed top-16 right-0 h-auto max-h-[calc(100vh-64px)] w-[280px]
             bg-[#111]/95 backdrop-blur-2xl border-l border-t border-white/10
             shadow-2xl z-50 md:hidden flex-col rounded-bl-2xl overflow-y-auto"
>
  {/* Header wapas */}
  <div className="flex items-center justify-between p-5 border-b border-white/10">
    <h2 className="text-white font-bold text-lg">Navigation</h2>

    <button
      onClick={() => setIsOpen(false)}
      className="text-gray-400 hover:text-[#4EC6F1] text-xl transition p-2"
    >
      <FaTimes />
    </button>
  </div>

  {/* Links */}
  <div className="flex flex-col p-4 gap-2">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => handleLinkClick(link.to)}
        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
          activeLink === link.to
           ? "text-[#4EC6F1] bg-[#4EC6F1]/10 border-[#4EC6F1]/20"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`}
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