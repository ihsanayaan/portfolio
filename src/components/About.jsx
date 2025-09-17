import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TabsSection from '../components/TabsSection';

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border border-borderLight rounded-soft"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Section Heading */}
        <SectionHeading title="🙋‍♂️ About Me" />

        {/* Description */}
        <motion.p
          className="text-textMain leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          I'm <strong className="text-accentLight">Ihsan Ali</strong> a Front-End Developer focused on building beautiful, responsive and user friendly websites using React.js, Tailwind CSS, and modern UI/UX principles.
        </motion.p>
        {/* Tabs Section */}
        <TabsSection />
      </div>
    </section>
  );
};

export default About;
