import React, { useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [done, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_slzxgtg',    
      'template_xdp823h',  
      form.current,
      'TmUlgaXSwj2O9WmlC' 
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
        setLoading(false);
        alert('Failed to send. Please try again or WhatsApp me.'); 
      }
    );
  };

  return (
    <section id="contact" className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border-t border-accentLight/50">
      <div className="max-w-6xl mx-auto">
        {/* FIXED: motion.h2 ko motion.div kar diya */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionHeading title="✉️ Get In Touch" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Info for KSA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently open to Product Designer & Frontend Developer roles in 
              <span className="text-[#4EC6F1] font-semibold"> Riyadh, Jeddah & Remote KSA.</span>
              Available for immediate relocation.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#4EC6F1]/50 transition-all">
                <div className="p-3 bg-[#4EC6F1]/10 rounded-lg">
                  <FaMapMarkerAlt className="text-[#4EC6F1] text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Islamabad, Pakistan → Riyadh, KSA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#4EC6F1]/50 transition-all">
                <div className="p-3 bg-[#4EC6F1]/10 rounded-lg">
                  <FaEnvelope className="text-[#4EC6F1] text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:ihsanaliaup@gmail.com" className="text-white font-semibold hover:text-[#4EC6F1] transition">
                    ihsanaliaup@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#4EC6F1]/50 transition-all">
                <div className="p-3 bg-[#10B981]/10 rounded-lg">
                  <FaWhatsapp className="text-[#10B981] text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a href="https://wa.me/923444947537" target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-[#10B981] transition">
                    +92 344 4947537
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#4EC6F1]/50 transition-all">
                <div className="p-3 bg-[#4EC6F1]/10 rounded-lg">
                  <FaClock className="text-[#4EC6F1] text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-100 
                           focus:border-[#4EC6F1] focus:ring-1 focus:ring-[#4EC6F1] 
                           transition-all duration-300 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-100 
                           focus:border-[#4EC6F1] focus:ring-1 focus:ring-[#4EC6F1] 
                           transition-all duration-300 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject - e.g. Frontend Developer Role in Riyadh"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-100 
                           focus:border-[#4EC6F1] focus:ring-1 focus:ring-[#4EC6F1] 
                           transition-all duration-300 outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message - Tell me about the opportunity..."
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-100 
                           focus:border-[#4EC6F1] focus:ring-1 focus:ring-[#4EC6F1] 
                           transition-all duration-300 outline-none resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-[#4EC6F1] hover:bg-[#3db5e0] 
                           text-black font-semibold shadow-lg transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {done && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#10B981] text-center font-semibold"
                >
                  Message sent successfully ✅ I'll get back to you within 24 hours!
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;