import React, { useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [done, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ivqeezy',    
      'template_ylx1wcn',  
      form.current,
      'TmUlgaXSwj2O9WmlC' 
    ).then(
      () => setSuccess(true),
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );

    e.target.reset();
  };

  return (
     <section
  id="contact"
  className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border-t  border-accentLight/50"
>
  <div className="max-w-xl mx-auto text-center">
   <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl font-bold text-accentLight tracking-wide"
>
  <SectionHeading title="✉️ Contact" /><br></br>
</motion.h2>
    <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 rounded-soft bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-100 shadow-lg shadow-black/20 focus:shadow-cyan-500/40 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 rounded-soft bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-100 shadow-lg shadow-black/20 focus:shadow-cyan-500/40 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 outline-none"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 rounded-soft bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-100 shadow-lg shadow-black/20 focus:shadow-cyan-500/40 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 outline-none"
      />
    <button
  type="submit"
  className="relative w-fit px-6 py-2 rounded-soft bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-100 font-medium shadow-lg shadow-black/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:text-cyan-400 transition-all duration-300 outline-none"
>
  Send Message
</button>
      {done && <p className="text-green-500 mt-2">Message sent successfully ✅</p>}
    </form>
      </div>
    </section>
  );
};

export default Contact;
