import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-[#0D0D0D]
        flex flex-col
        items-center justify-center
        overflow-hidden
      "
    >
      {/* Glow Background */}
      <div
        className="
          absolute w-[400px] h-[400px]
          bg-gradient-to-r
          from-[#4EC6F1]/20
          to-[#6C63FF]/20
          rounded-full blur-[120px]
        "
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-4xl md:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-[#4EC6F1]
          via-white
          to-[#6C63FF]
          bg-clip-text
          text-transparent
          tracking-wide
          z-10
        "
      >
        Ihsan Ali
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="
          mt-4
          text-gray-400
          text-lg md:text-xl
          tracking-[3px]
          uppercase
          z-10
        "
      >
        Frontend Developer & UI UX Designer
      </motion.p>

      {/* Loading Animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="
          h-[4px]
          mt-10
          rounded-full
          bg-gradient-to-r
          from-[#4EC6F1]
          to-[#6C63FF]
          z-10
        "
      />

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          mt-4
          text-sm
          text-gray-500
          tracking-[5px]
          uppercase
          z-10
        "
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;