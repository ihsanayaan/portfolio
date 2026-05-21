import React, { useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

import {
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const [done, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_slzxgtg',
        'template_xdp823h',
        form.current,
        'TmUlgaXSwj2O9WmlC'
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);

          e.target.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);

          setSuccess(false);
          setLoading(false);

          alert(
            'Failed to send message. Please try again or contact me via WhatsApp.'
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      pt-24
      scroll-mt-24
      bg-[#0D0D0D]
      px-4
      md:px-6
      py-20
      border-t
      border-[#4EC6F1]/10
    "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        md:w-[700px]
        md:h-[700px]
        bg-gradient-to-r
        from-[#4EC6F1]/10
        via-[#6C63FF]/10
        to-[#FF6FD8]/10
        rounded-full
        blur-[120px]
        z-0
      "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeading title="Get In Touch" />

          <p
            className="
            text-center
            text-gray-400
            mt-5
            max-w-2xl
            mx-auto
            leading-8
            text-sm
            md:text-base
          "
          >
            Let’s collaborate on modern frontend experiences,
            React.js applications, UI/UX systems, or remote
            development opportunities.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card */}
            <div
              className="
              relative
              overflow-hidden
              bg-white/[0.03]
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-7
              hover:border-[#4EC6F1]/30
              transition-all
              duration-500
            "
            >
              {/* Glow */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-r
                from-[#4EC6F1]/10
                via-transparent
                to-[#6C63FF]/10
                opacity-0
                hover:opacity-100
                transition-opacity
                duration-500
              "
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let’s Build Something Amazing
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">
                  Available for frontend development,
                  React.js projects, UI/UX collaboration,
                  RTL/LTR applications, and remote opportunities.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mt-8">

                  {/* Email */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="
                    flex items-center gap-4
                    p-4 rounded-2xl
                    bg-[#111]
                    border border-white/10
                    hover:border-[#4EC6F1]/40
                    transition-all duration-300
                  "
                  >
                    <div
                      className="
                      p-3 rounded-xl
                      bg-[#4EC6F1]/10
                    "
                    >
                      <FaEnvelope className="text-[#4EC6F1] text-xl" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        Email
                      </p>

                      <a
                        href="mailto:ihsanaliaup@gmail.com"
                        className="
                        text-white font-semibold
                        hover:text-[#4EC6F1]
                        transition-colors
                      "
                      >
                        ihsanaliaup@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="
                    flex items-center gap-4
                    p-4 rounded-2xl
                    bg-[#111]
                    border border-white/10
                    hover:border-[#10B981]/40
                    transition-all duration-300
                  "
                  >
                    <div
                      className="
                      p-3 rounded-xl
                      bg-[#10B981]/10
                    "
                    >
                      <FaWhatsapp className="text-[#10B981] text-xl" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/923444947537"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        text-white font-semibold
                        hover:text-[#10B981]
                        transition-colors
                      "
                      >
                        +92 344 4947537
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="
                    flex items-center gap-4
                    p-4 rounded-2xl
                    bg-[#111]
                    border border-white/10
                    hover:border-[#6C63FF]/40
                    transition-all duration-300
                  "
                  >
                    <div
                      className="
                      p-3 rounded-xl
                      bg-[#6C63FF]/10
                    "
                    >
                      <FaMapMarkerAlt className="text-[#6C63FF] text-xl" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        Location
                      </p>

                      <p className="text-white font-semibold">
                        Pakistan • Remote Worldwide
                      </p>
                    </div>
                  </motion.div>

                  {/* Response */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="
                    flex items-center gap-4
                    p-4 rounded-2xl
                    bg-[#111]
                    border border-white/10
                    hover:border-[#4EC6F1]/40
                    transition-all duration-300
                  "
                  >
                    <div
                      className="
                      p-3 rounded-xl
                      bg-[#4EC6F1]/10
                    "
                    >
                      <FaClock className="text-[#4EC6F1] text-xl" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        Response Time
                      </p>

                      <p className="text-white font-semibold">
                        Within 24 Hours
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="
              relative
              overflow-hidden
              bg-white/[0.03]
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-7
              hover:border-[#4EC6F1]/30
              transition-all
              duration-500
            "
            >
              {/* Glow */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-r
                from-[#4EC6F1]/10
                via-transparent
                to-[#6C63FF]/10
                opacity-0
                hover:opacity-100
                transition-opacity
                duration-500
              "
              />

              <form
                ref={form}
                onSubmit={sendEmail}
                className="relative z-10 space-y-5"
              >
                {/* Name */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                  w-full
                  px-5
                  py-3.5
                  rounded-2xl
                  bg-[#111]
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#4EC6F1]
                  focus:ring-2
                  focus:ring-[#4EC6F1]/20
                  outline-none
                  transition-all duration-300
                "
                />

                {/* Email */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
                  w-full
                  px-5
                  py-3.5
                  rounded-2xl
                  bg-[#111]
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#4EC6F1]
                  focus:ring-2
                  focus:ring-[#4EC6F1]/20
                  outline-none
                  transition-all duration-300
                "
                />

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="
                  w-full
                  px-5
                  py-3.5
                  rounded-2xl
                  bg-[#111]
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#4EC6F1]
                  focus:ring-2
                  focus:ring-[#4EC6F1]/20
                  outline-none
                  transition-all duration-300
                "
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#111]
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#4EC6F1]
                  focus:ring-2
                  focus:ring-[#4EC6F1]/20
                  outline-none
                  resize-none
                  transition-all duration-300
                "
                />

                {/* Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#4EC6F1]
                  to-[#6C63FF]
                  hover:shadow-[0_0_30px_rgba(78,198,241,0.35)]
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
                >
                  <FaPaperPlane />

                  {loading ? 'Sending Message...' : 'Send Message'}
                </motion.button>

                {/* Success */}
                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="
                      text-center
                      text-[#10B981]
                      font-medium
                      bg-[#10B981]/10
                      border border-[#10B981]/20
                      py-3
                      rounded-2xl
                    "
                    >
                      Message sent successfully ✅
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;