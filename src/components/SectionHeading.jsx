import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-fit mx-auto px-6 py-2 border border- border-accentLight/50  rounded-soft text-accentLight text-2xl md:text-3xl font-semibold tracking-wide uppercase shadow-sm"
    >
      {title}
    </motion.div>
  );
};

export default SectionHeading;
