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
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen overflow-hidden bg-[#070B14] text-white font-sans">
          
          {/* Premium Stars Background */}
          <StarsBackground />

          {/* Main Content - stars ke upar rahega */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;