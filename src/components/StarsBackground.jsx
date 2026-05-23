import React from "react";

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#050816] via-[#070B14] to-[#0B1220]">
      
      <div className="stars-small"></div>

      <div className="stars-medium"></div>

      <div className="stars-big"></div>

      {/* Glow 1 */}
      <div
        className="absolute top-1/3 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px]
        bg-[#4EC6F1]/10 rounded-full blur-[120px]"
      />

      {/* Glow 2 */}
      <div
        className="absolute bottom-0 right-0
        w-[400px] h-[400px]
        bg-[#6C63FF]/10 rounded-full blur-[120px]"
      />
    </div>
  );
};

export default StarsBackground;