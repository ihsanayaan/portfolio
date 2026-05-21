import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 180,
        mass: 0.5,
      }}
      className="
        fixed
        top-0
        left-0
        w-[240px]
        h-[240px]
        rounded-full
        pointer-events-none
        z-[1]
        blur-[100px]
        bg-gradient-to-r
        from-[#4EC6F1]/20
        via-[#6C63FF]/15
        to-[#FF6FD8]/10
      "
    />
  );
};

export default CursorGlow;