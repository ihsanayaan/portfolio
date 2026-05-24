import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Main Portfolio */}
      {!loading && (
        <div
          className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#050816]
            text-white
            font-sans
          "
        >
          {/* Premium Animated Stars Background */}
          <div className="fixed inset-0 z-0">
            <StarsBackground />
          </div>

          {/* Extra Premium Glow Effects */}
          <div
            className="
              fixed
              top-[-200px]
              left-[-200px]
              w-[500px]
              h-[500px]
              bg-[#4EC6F1]/10
              rounded-full
              blur-[140px]
              z-0
            "
          />

          <div
            className="
              fixed
              bottom-[-200px]
              right-[-200px]
              w-[500px]
              h-[500px]
              bg-[#6C63FF]/10
              rounded-full
              blur-[140px]
              z-0
            "
          />

          <div
            className="
              fixed
              top-[40%]
              left-[50%]
              -translate-x-1/2
              -translate-y-1/2
              w-[700px]
              h-[700px]
              bg-gradient-to-r
              from-[#4EC6F1]/5
              via-[#6C63FF]/5
              to-[#FF6FD8]/5
              rounded-full
              blur-[180px]
              z-0
            "
          />

          {/* Grid Overlay */}
          <div
            className="
              fixed inset-0 z-0 opacity-[0.03]
              bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

          {/* Content */}
          <main className="relative z-10">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default App;