import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Education from "./components/Education";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-bgDark text-textMain min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
