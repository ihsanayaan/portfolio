import React from "react";

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050816]">

      {/* DARK SPACE BASE */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,#082042_0%,transparent_30%),radial-gradient(circle_at_bottom_right,#0B1330_0%,transparent_30%),linear-gradient(to_bottom,#02040A,#050816,#02040A)]
        "
      />

      {/* LEFT BLUE SOFT GLOW */}
      <div
        className="
          absolute
          top-[15%] left-[-15%]
          w-[550px] h-[550px]
          bg-[#0EA5E9]
          opacity-10
          blur-[180px]
          rounded-full
        "
      />

      {/* RIGHT CYAN SOFT GLOW */}
      <div
        className="
          absolute
          bottom-[0%] right-[-10%]
          w-[500px] h-[500px]
          bg-[#22D3EE]
          opacity-10
          blur-[180px]
          rounded-full
        "
      />
      
      <div className="shooting-star" />
<div className="shooting-star delay-1" />
<div className="shooting-star delay-2" />
      {/* STARS LAYERS */}
      <div className="stars-small" />
      <div className="stars-medium" />
      <div className="stars-big" />


      {/* EXTRA STAR DUST */}
      <div
        className="
          absolute inset-0
          opacity-40
          bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)]
          [background-size:120px_120px]
        "
      />

      {/* BOTTOM CURVE LIGHT */}
      <div
        className="
          absolute
          bottom-[-220px]
          left-1/2
          -translate-x-1/2
          w-[1400px]
          h-[500px]
          rounded-full
          border border-cyan-400/10
          blur-3xl
        "
      />

      {/* TOP STAR FOG */}
      <div
        className="
          absolute top-0 left-0
          w-full h-[300px]
          bg-gradient-to-b
          from-[#0EA5E9]/5
          to-transparent
        "
      />
    </div>
  );
};

export default StarsBackground;