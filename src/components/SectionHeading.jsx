import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      {/* Title */}
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-black
          text-white
          leading-tight
        "
      >
        {title}
      </h2>

      {/* Gradient Line */}
      <div
        className="
          w-28 h-[4px]
          rounded-full
          mx-auto mt-5
          bg-gradient-to-r from-[#4EC6F1] via-white to-[#6C63FF]
        "
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            text-gray-400
            text-sm md:text-base
            leading-8

            max-w-2xl
            mx-auto
            mt-5
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
export default SectionHeading;