import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";
import TooltipIcon from "./TooltipIcon";

const Footer = () => {
  const links = ["home", "projects", "contact"];

  return (
    <footer className="relative bg-transparent py-14 overflow-hidden border-t border-white/10 px-6">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-[#4EC6F1]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>

          <ul className="space-y-3">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-[#4EC6F1] cursor-pointer transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5">Connect</h3>

          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <TooltipIcon href="mailto:ihsanaliaup@gmail.com" icon={FaEnvelope} label="Email" color="#EA4335" />
            <TooltipIcon href="https://wa.me/923444947537" icon={FaWhatsapp} label="WhatsApp" color="#25D366" />
            <TooltipIcon href="https://t.me/Web1_12" icon={FaTelegramPlane} label="Telegram" color="#26A5E4" />
            <TooltipIcon href="https://github.com/ihsanayaan" icon={FaGithub} label="GitHub" color="#ffffff" />
            <TooltipIcon href="https://linkedin.com" icon={FaLinkedin} label="LinkedIn" color="#0A66C2" />
          </div>

          {/* CTA */}
          <motion.div whileHover={{ y: -2 }} className="mt-6">
  <Link
    to="contact"
    smooth
    duration={500}
    offset={-80}
    className="
      inline-flex items-center gap-2
      px-5 py-3
      rounded-xl
      bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF]
      text-white font-semibold
      cursor-pointer
      hover:shadow-[0_0_25px_rgba(78,198,241,0.35)]
      transition-all duration-300
    "
  >
    Let's Work Together →
  </Link>
</motion.div>
        </div>

        {/* IDENTITY */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">About</h3>

          <p className="text-gray-400 text-sm leading-6">
            Frontend Developer & UI/UX Designer building modern React experiences.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <p className="text-[#4EC6F1] text-sm font-medium">
              Pakistan 🇵🇰 • Remote Worldwide
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
          © {new Date().getFullYear()} Ihsan Ali
          <FaHeart className="text-red-500 animate-pulse" />
          Built with React & Tailwind CSS
        </p>
      </div>

    </footer>
  );
};

export default Footer;