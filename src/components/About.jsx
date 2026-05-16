import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TabsSection from '../components/TabsSection';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#0D0D0D] px-4 md:px-6 py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <SectionHeading title="About Me" />

        {/* Description - Clean & Professional */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mt-10 space-y-7 text-gray-300 leading-8 text-[15px] md:text-lg"
>
  <p>
    I'm{" "}
    <span className="text-[#4EC6F1] font-semibold">
      Ihsan Ali
    </span>
    , a Frontend Developer and UI/UX Designer focused on
    building modern, responsive, and user-friendly web
    applications using{" "}
    <span className="text-[#4EC6F1]">React.js</span>,{" "}
    <span className="text-[#4EC6F1]">Tailwind CSS</span>,
    and modern frontend technologies.
  </p>

  <p>
    My workflow begins with creating detailed wireframes,
    user flows, and high-fidelity prototypes in{" "}
    <span className="text-[#4EC6F1]">Figma</span> before
    transforming them into clean, scalable, and
    pixel-perfect React applications with strong focus on
    performance and user experience.
  </p>

  <p>
    I enjoy designing intuitive interfaces, smooth user
    experiences, and modern UI systems that work seamlessly
    across desktop and mobile devices.
  </p>

  <div className="relative overflow-hidden rounded-2xl border border-[#4EC6F1]/20 bg-[#4EC6F1]/5 px-5 py-4">
    <div className="absolute inset-0 bg-gradient-to-r from-[#4EC6F1]/10 to-transparent" />

    <p className="relative z-10 text-[#4EC6F1] font-medium italic leading-7">
      Specialized in RTL/LTR bilingual interfaces, modern
      frontend architecture, and transforming UI/UX designs
      into fully functional React applications.
    </p>
  </div>
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