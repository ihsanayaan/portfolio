import React, { useEffect, useState } from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Loader Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-bgDark text-textMain min-h-screen font-sans overflow-x-hidden">
  <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;