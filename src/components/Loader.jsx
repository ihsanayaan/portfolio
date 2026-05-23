import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#0D0D0D]
      flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute w-[400px] h-[400px]
        bg-[#4EC6F1]/20 rounded-full blur-[120px]"
      />

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-bold
        text-white tracking-wide"
      >
        Ihsan Ali
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-[#4EC6F1]
        text-lg md:text-xl font-medium"
      >
        Frontend Developer & UI/UX Designer
      </motion.p>

      {/* Loading Text */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="h-[3px] bg-gradient-to-r
        from-[#4EC6F1] to-[#6C63FF]
        rounded-full mt-8"
      />

      <motion.p
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mt-5 text-gray-400 text-sm tracking-[3px]"
      >
        Loading Experience...
      </motion.p>
    </motion.div>
  );
};

export default Loader;