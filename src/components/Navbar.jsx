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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1 left-1 w-[99%] mr-1 z-50"
    >
      {/* Navbar Glass Container with Gradient Ring */}
      <div className="relative rounded-2xl p-[2px] 
                      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                      animate-gradient-x shadow-lg">
        <div className="flex justify-between items-center px-4 md:px-6 py-3 
                        bg-[#0D0D0D]/80 backdrop-blur-xl 
                        rounded-2xl border border-accentLight/50 shadow-lg">
          {/* Profile + Initials */}
          <Link
            to="home"
            smooth={true}
            offset={-96}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-accentLight/50 blur-md opacity-30 animate-ping"></span>
              <motion.img
                src="/ihsan.jpg"
                alt="Ihsan Ali"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 md:w-12 md:h-12 rounded-full object-cover border-2 border-accentLight shadow-xl z-10 relative"
                data-tooltip-id="profile-tooltip"
                data-tooltip-content="Ihsan Ali"
              />
            </div>
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-lg md:text-2xl font-extrabold tracking-widest text-accentLight group-hover:text-white transition"
            >
              IA
            </motion.h1>
            <Tooltip id="profile-tooltip" place="bottom" className="z-50" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 bg-accentLight rounded-full shadow-md animate-pulse" />
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  className="font-semibold text-[#4EC6F1] hover:text-white transition duration-300 cursor-pointer flex items-center gap-1"
                >
                  {link.name}
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-accentLight hover:text-white hover:scale-110 transition"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 p-4 
                       bg-[#0D0D0D]/90 backdrop-blur-xl 
                       border border-white/10 rounded-xl"
          >
            <ul className="flex flex-col gap-4 mt-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 bg-accentLight rounded-full animate-pulse" />
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    onClick={handleLinkClick}
                    className="font-semibold text-[#4EC6F1] hover:text-white transition duration-300 cursor-pointer flex items-center gap-1"
                  >
                    {link.name}
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
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
