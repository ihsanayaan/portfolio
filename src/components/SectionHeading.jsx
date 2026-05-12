import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
    >
      {title}
      <div className="w-24 h-1 bg-[#4EC6F1] mx-auto mt-4 rounded-full"></div>
    </motion.h2>
  );
};

export default SectionHeading;