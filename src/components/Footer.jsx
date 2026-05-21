import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
  FaHeart,
} from 'react-icons/fa';
import TooltipIcon from './TooltipIcon';

const Footer = () => {
  const links = [
    'home',
    'about',
    'projects',
    'education',
    'experience',
    'contact',
  ];

  return (
    <footer
      className="
      relative
      bg-[#0D0D0D]
      overflow-hidden
      border-t border-[#4EC6F1]/20
      px-6 py-14
    "
    >
      {/* Background Glow */}
      <div
        className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[500px] h-[250px]
        bg-[#4EC6F1]/10 blur-[120px]
        pointer-events-none
      "
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="
                      inline-block
                      text-gray-400
                      hover:text-[#4EC6F1]
                      font-medium
                      cursor-pointer
                      transition-all duration-300
                    "
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Get In Touch
          </h3>

          <div className="flex justify-center md:justify-start flex-wrap gap-5 mt-5">

            <TooltipIcon
              href="mailto:ihsanaliaup@gmail.com"
              icon={FaEnvelope}
              label="Email"
              color="#EA4335"
            />

            <TooltipIcon
              href="https://wa.me/923444947537"
              icon={FaWhatsapp}
              label="WhatsApp"
              color="#25D366"
            />

            <TooltipIcon
              href="https://t.me/Web1_12"
              icon={FaTelegramPlane}
              label="Telegram"
              color="#26A5E4"
            />

            <TooltipIcon
              href="https://github.com/ihsanayaan"
              icon={FaGithub}
              label="GitHub"
              color="#ffffff"
            />

            <TooltipIcon
              href="https://linkedin.com/in/ihsan-ali-63a5a72a0"
              icon={FaLinkedin}
              label="LinkedIn"
              color="#0A66C2"
            />
          </div>

          {/* Small CTA */}
          <motion.div
            whileHover={{ y: -2 }}
            className="mt-8"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="
                inline-flex items-center gap-2
                px-5 py-3
                rounded-xl
                bg-gradient-to-r
                from-[#4EC6F1]
                to-[#6C63FF]
                text-white
                font-semibold
                cursor-pointer
                hover:shadow-[0_0_25px_rgba(78,198,241,0.35)]
                transition-all duration-300
              "
            >
              Let's Work Together →
            </Link>
          </motion.div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">
            About Portfolio
          </h3>

          <p className="text-gray-400 leading-7 text-sm md:text-base">
            Frontend Developer & UI/UX Designer passionate about
            building modern, responsive, and scalable web
            applications using React.js, Tailwind CSS, and Figma.
          </p>

          <div
            className="
            p-4 rounded-2xl
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-xl
          "
          >
            <p className="text-[#4EC6F1] font-medium text-sm leading-6">
              Based in Pakistan 🇵🇰 <br />
              Open to Remote Frontend & UI/UX Opportunities Worldwide
            </p>
          </div>

          {/* NEW TEXT */}
          <div className="pt-2">
            <p className="text-gray-500 text-sm leading-6">
              Thanks for visiting my portfolio. <br />
              Designed & Developed by{' '}
              <span className="text-[#4EC6F1] font-semibold">
                Ihsan Ali
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
        relative z-10
        mt-12 pt-6
        border-t border-white/10
        text-center
      "
      >
        <motion.p
          whileHover={{ scale: 1.01 }}
          className="
            text-gray-500
            text-sm
            flex items-center justify-center gap-2
            flex-wrap
          "
        >
          © {new Date().getFullYear()} Ihsan Ali  Crafted with
          <FaHeart className="text-red-500 animate-pulse" />
          using React & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;