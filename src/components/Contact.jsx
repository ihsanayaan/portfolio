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
        className="w-full px-4 py-2 bg-bgDark border border-borderLight rounded-soft text-textMain outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 bg-bgDark border border-borderLight rounded-soft text-textMain outline-none"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 bg-bgDark border border-borderLight rounded-soft text-textMain outline-none"
      />
      <button
        type="submit"
       className="bg-[#1A1A1A] text-accentLight px-6 py-2 rounded-soft border border-accentLight hover:bg-[#222222] hover:text-white hover:shadow-md hover:shadow-accentLight/20 transition duration-300"
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
