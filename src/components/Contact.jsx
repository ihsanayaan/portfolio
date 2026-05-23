import React, { useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

import {
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [done, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_slzxgtg",
        "template_xdp823h",
        form.current,
        "TmUlgaXSwj2O9WmlC"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();

          setTimeout(() => setSuccess(false), 5000);
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Try WhatsApp instead.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-24 scroll-mt-24 px-4 md:px-6 py-20 border-t border-white/10"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-[#4EC6F1]/10 via-[#6C63FF]/10 to-[#FF6FD8]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeading title="Get In Touch" />

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
            Let’s collaborate on React apps, UI/UX systems, and modern frontend experiences.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              p-6 md:p-8 rounded-3xl
              bg-white/[0.03]
              backdrop-blur-2xl
              border border-white/10
              hover:shadow-[0_20px_60px_rgba(78,198,241,0.12)]
              transition-all duration-500
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let’s Work Together 
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-7">
              Available for frontend development, UI/UX design, and freelance opportunities worldwide.
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-4 mt-8">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#4EC6F1]/30 transition">
                <FaEnvelope className="text-[#4EC6F1] text-xl" />
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <a href="mailto:ihsanaliaup@gmail.com" className="text-white font-semibold hover:text-[#4EC6F1]">
                    ihsanaliaup@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#10B981]/30 transition">
                <FaWhatsapp className="text-[#10B981] text-xl" />
                <div>
                  <p className="text-gray-400 text-xs">WhatsApp</p>
                  <a href="https://wa.me/923444947537" target="_blank" className="text-white font-semibold hover:text-[#10B981]">
                    +92 344 4947537
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <FaMapMarkerAlt className="text-[#6C63FF] text-xl" />
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white font-semibold">Pakistan • Remote Worldwide</p>
                </div>
              </div>

              {/* Response */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <FaClock className="text-[#4EC6F1] text-xl" />
                <div>
                  <p className="text-gray-400 text-xs">Response Time</p>
                  <p className="text-white font-semibold">Within 24 Hours</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              p-6 md:p-8 rounded-3xl
              bg-white/[0.03]
              backdrop-blur-2xl
              border border-white/10
              hover:shadow-[0_20px_60px_rgba(78,198,241,0.12)]
              transition-all duration-500
            "
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              {["user_name", "user_email", "subject"].map((field, i) => (
                <input
                  key={i}
                  type={field === "user_email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "user_name"
                      ? "Your Name"
                      : field === "user_email"
                      ? "Your Email"
                      : "Subject"
                  }
                  required
                  className="
                    w-full px-5 py-3.5
                    rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                    text-white
                    placeholder:text-gray-500
                    focus:border-[#4EC6F1]
                    focus:ring-2 focus:ring-[#4EC6F1]/20
                    outline-none
                    transition
                  "
                />
              ))}

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="
                  w-full px-5 py-4
                  rounded-2xl
                  bg-white/[0.03]
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#4EC6F1]
                  focus:ring-2 focus:ring-[#4EC6F1]/20
                  outline-none
                  resize-none
                  transition
                "
              />
              <motion.button
  whileTap={{ scale: 0.97 }}
  type="submit"
  disabled={loading}
  className="
    inline-flex items-center justify-center gap-2

    w-auto

    mx-auto sm:mx-0

    px-4 sm:px-5
    py-2.5 sm:py-3

    rounded-xl
    bg-gradient-to-r from-[#4EC6F1] to-[#6C63FF]
    text-white font-semibold text-sm

    hover:shadow-[0_0_25px_rgba(78,198,241,0.25)]
    transition-all duration-300

    disabled:opacity-60
  "
>
  <FaPaperPlane />
  {loading ? "Sending..." : "Send Message"}
</motion.button>
              {/* SUCCESS */}
              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="
                      text-center
                      text-[#10B981]
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;