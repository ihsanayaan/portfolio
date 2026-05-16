import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import TooltipIcon from './TooltipIcon';

const Footer = () => {
  const links = ['home', 'about', 'projects', 'education', 'experience', 'contact'];

  return (
    <footer className="bg-[#0D0D0D] text-textSub border-t border-accentLight/50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 🔗 Navigation Links */}
        <div>
          <h3 className="text-lg text-accentLight font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 8px #4EC6F1",
                    color: "#4EC6F1",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="block font-semibold text-accentLight hover:text-white cursor-pointer transition duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* 📬 Contact Info */}
        <div>
          <h3 className="text-lg text-accentLight font-semibold mb-4">Get in Touch</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-6 text-2xl mt-4">
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
              color="#fff" 
            />
            <TooltipIcon 
              href="https://linkedin.com/in/ihsan-ali-63a5a72a0" 
              icon={FaLinkedin} 
              label="LinkedIn" 
              color="#0A66C2" 
            />
          </div>
        </div>

        {/* 🧾 Summary */}
        <div className="text-sm text-textMain space-y-3">
          <h3 className="text-lg text-accentLight font-semibold mb-2">Let's Connect</h3>
          <p>
            Front-End Developer passionate about building beautiful, responsive and user-friendly websites using React, Tailwind & UI/UX design.
          </p>
          <p className="text-accentLight font-medium">
            Based in Pakistan 🇵🇰 | Open to Remote Frontend & UI/UX Opportunities Worldwide
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="pt-2"
          >
            <a 
              href="#contact"
              className="inline-block text-sm font-semibold text-accentLight hover:text-white transition-colors"
            >
              Let's Build Something Amazing →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-textSub mt-10 border-t border-accentLight/50 pt-6">
        <p>
          © {new Date().getFullYear()} Ihsan Ali — Crafted with ❤️ using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;