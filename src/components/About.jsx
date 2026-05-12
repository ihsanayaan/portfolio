import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TabsSection from '../components/TabsSection';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#111] px-4 md:px-6 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <SectionHeading title="About Me" />

        {/* Description - Clean & Professional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg"
        >
          <p>
            I'm <span className="text-[#4EC6F1] font-semibold">Ihsan Ali</span>, 
            a Front-End Developer specializing in building modern, responsive web applications 
            with <span className="text-[#4EC6F1]">React.js</span> and <span className="text-[#4EC6F1]">Tailwind CSS</span>.
          </p>

         <p>
  My workflow starts with creating detailed prototypes in <span className="text-[#4EC6F1]">Figma</span> and <span className="text-[#4EC6F1]">Canva</span> to 
  ensure alignment with client requirements. I design complete wireframes, user flows, and high-fidelity mockups before 
  transforming them into pixel-perfect React applications.
</p>

          <p className="text-[#4EC6F1] font-medium italic border-l-4 border-[#4EC6F1] pl-4 py-2 bg-[#4EC6F1]/5 rounded-r">
            Specialized in RTL/LTR bilingual interfaces and turning design mockups into 
            fully functional React applications.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <div className="mt-12">
          <TabsSection />
        </div>
      </div>
    </section>
  );
};

export default About;