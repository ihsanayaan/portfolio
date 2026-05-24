import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  FaGraduationCap,
  FaSchool,
  FaFileDownload,
  FaStar,
  FaTimes,
  FaBriefcase,
} from 'react-icons/fa';

import SectionHeading from './SectionHeading';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Agriculture Peshawar',
    duration: '2020 – 2024',
    location: 'Peshawar, Pakistan',
    icon: (
      <FaGraduationCap className="text-[#4EC6F1] text-xl" />
    ),
    description:
      'Specialized in Web Development and UI/UX Design. Built production-ready React applications.',

    degreeCertificate: {
      file: '/certificates/bs-degree.pdf',
      thumbnail:
        '/certificates/bs-degree-thumb.jpg',
      name: 'BS Computer Science Degree',
      type: 'Academic Degree',
    },

    internshipCertificates: [
      {
        name: 'Cognorise',
        file:
          '/certificates/cognorise-certificate.pdf',
        thumbnail:
          '/certificates/cognorise-thumb.jpg',
        role: 'Frontend Development',
      },

      {
        name: 'Internee.pk',
        file:
          '/certificates/internee-pk-certificate.pdf',
        thumbnail:
          '/certificates/internee-thumb.jpg',
        role: 'React Developer',
      },

      {
        name: 'RhombixTech',
        file:
          '/certificates/uiux-certificate.pdf',
        thumbnail:
          '/certificates/uiux-thumb.jpg',
        role: 'UI/UX Designer',
      },
    ],

    skills: [
      'React.js',
      'Tailwind CSS',
      'UI/UX Design',
      'Figma',
      'RTL/LTR',
      'REST APIs',
      'Git',
    ],

    featured: true,
  },

  {
    degree: 'FSc Pre-Engineering',
    institution:
      'Dr Mudasir Khan Shaheed Secondary School',
    duration: '2018 – 2020',
    location: 'Kabal, Swat, Pakistan',

    icon: (
      <FaSchool className="text-[#4EC6F1] text-xl" />
    ),

    description:
      'Strong analytical and problem-solving foundation through Mathematics, Physics, and Chemistry.',

    skills: [
      'Mathematics',
      'Physics',
      'Problem Solving',
    ],
  },

  {
    degree: 'Matriculation (Science)',
    institution:
      'Govt High School Totanobandai Kabal Swat',

    duration: '2016 – 2018',

    location:
      'TotanoBandai, Kabal, Swat, Pakistan',

    icon: (
      <FaSchool className="text-[#4EC6F1] text-xl" />
    ),

    description:
      'Completed science education with strong interest in Computer Science and technology.',

    skills: [
      'Computer Basics',
      'Science',
      'English',
    ],
  },
];

const Education = () => {
  const [preview, setPreview] = useState(null);

  const openPreview = (cert) =>
    setPreview(cert);

  const closePreview = () =>
    setPreview(null);

  return (
    <section
      id="education"
      className="scroll-mt-24 bg-transparent md:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        <SectionHeading title="Education & Certifications" />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-5 mb-16 max-w-3xl mx-auto"
        >
          <p className="text-gray-400 leading-8">
            Academic background combined with real-world
            internship experience in React development,
            UI/UX design, and scalable frontend systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0
            w-px bg-gradient-to-b
            from-[#4EC6F1]
            via-[#6C63FF]/60
            to-transparent
            md:-translate-x-1/2"
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative mb-14"
            >

              {/* Timeline Dot */}
              <div
                className="absolute left-6 md:left-1/2 top-6
                w-12 h-12 rounded-full
                bg-[#111]
                border border-[#4EC6F1]/40
                shadow-[0_0_25px_rgba(78,198,241,0.25)]
                flex items-center justify-center
                z-20 -translate-x-1/2"
              >
                {edu.icon}
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)]
                ${
                  index % 2 === 0
                    ? 'md:mr-auto md:pr-10'
                    : 'md:ml-auto md:pl-10'
                }`}
              >
                <div
                  className="
                  group
                  relative
                  overflow-hidden
                  bg-white/[0.03]
                  backdrop-blur-xl
                  rounded-3xl
                  border
                  border-white/10
                  hover:border-[#4EC6F1]/40
                  p-6 md:p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(78,198,241,0.12)]
                  "
                >

                  {/* Glow */}
                  <div
                    className="absolute inset-0
                    bg-gradient-to-r
                    from-[#4EC6F1]/5
                    via-[#6C63FF]/5
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500"
                  />

                  <div className="relative z-10">

                    {/* Featured Badge */}
                    {edu.featured && (
                      <div
                        className="inline-flex items-center gap-2
                        bg-gradient-to-r
                        from-[#4EC6F1]
                        to-[#6C63FF]
                        text-white text-xs font-semibold
                        px-4 py-1.5 rounded-full mb-5
                        shadow-lg shadow-[#4EC6F1]/20"
                      >
                        FEATURED
                      </div>
                    )}

                    {/* Degree */}
                    <h3
                      className="text-2xl font-bold text-white
                      mb-2 leading-tight"
                    >
                      {edu.degree}
                    </h3>

                    <p
                      className="text-[#4EC6F1]
                      font-semibold mb-2"
                    >
                      {edu.institution}
                    </p>

                    <div
                      className="text-sm text-gray-400
                      mb-5 flex items-center gap-2 flex-wrap"
                    >
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-gray-400
                      leading-7 text-[15px] mb-6"
                    >
                      {edu.description}
                    </p>

                    {/* Certificates */}
                    {(edu.degreeCertificate ||
                      edu.internshipCertificates) && (
                      <div className="mb-6">

                        <h4
                          className="text-white font-semibold
                          mb-4 flex items-center gap-2"
                        >
                          <FaBriefcase className="text-[#4EC6F1]" />
                          Certificates & Internships
                        </h4>

                        <div
                          className="grid grid-cols-2
                          md:grid-cols-3 gap-4"
                        >

                          {/* Degree */}
                          {edu.degreeCertificate && (
                            <div
                              onClick={() =>
                                openPreview(
                                  edu.degreeCertificate
                                )
                              }
                              className="group/item cursor-pointer"
                            >
                              <div
                                className="relative overflow-hidden
                                rounded-2xl border border-white/10
                                hover:border-[#4EC6F1]/40
                                hover:shadow-[0_0_20px_rgba(78,198,241,0.15)]
                                transition-all duration-300"
                              >
                                <img
                                  src={
                                    edu.degreeCertificate
                                      .thumbnail
                                  }
                                  alt="Degree"
                                  className="w-full h-28 object-cover
                                  group-hover/item:scale-110
                                  transition-transform duration-500"
                                />

                                <div
                                  className="absolute inset-0
                                  bg-black/60 opacity-0
                                  group-hover/item:opacity-100
                                  transition-opacity
                                  flex items-center justify-center"
                                >
                                  <span
                                    className="text-white
                                    text-sm font-semibold"
                                  >
                                    View
                                  </span>
                                </div>
                              </div>

                              <p
                                className="text-xs text-gray-300
                                mt-2 text-center"
                              >
                                {
                                  edu.degreeCertificate
                                    .name
                                }
                              </p>

                              <p
                                className="text-xs text-[#4EC6F1]
                                text-center font-medium mt-1"
                              >
                                {
                                  edu.degreeCertificate
                                    .type
                                }
                              </p>
                            </div>
                          )}

                          {/* Internships */}
                          {edu.internshipCertificates?.map(
                            (cert, i) => (
                              <div
                                key={i}
                                onClick={() =>
                                  openPreview(cert)
                                }
                                className="group/item cursor-pointer"
                              >
                                <div
                                  className="relative overflow-hidden
                                  rounded-2xl border border-white/10
                                  hover:border-[#4EC6F1]/40
                                  hover:shadow-[0_0_20px_rgba(78,198,241,0.15)]
                                  transition-all duration-300"
                                >
                                  <img
                                    src={cert.thumbnail}
                                    alt={cert.name}
                                    className="w-full h-28 object-cover
                                    group-hover/item:scale-110
                                    transition-transform duration-500"
                                  />

                                  <div
                                    className="absolute inset-0
                                    bg-black/60 opacity-0
                                    group-hover/item:opacity-100
                                    transition-opacity
                                    flex items-center justify-center"
                                  >
                                    <span
                                      className="text-white
                                      text-sm font-semibold"
                                    >
                                      View
                                    </span>
                                  </div>
                                </div>

                                <p
                                  className="text-xs text-gray-300
                                  mt-2 text-center"
                                >
                                  {cert.name}
                                </p>

                                <p
                                  className="text-xs text-[#4EC6F1]
                                  text-center font-medium mt-1"
                                >
                                  {cert.role}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {edu.skills && (
                      <div>

                        <h4
                          className="text-sm font-semibold
                          text-white mb-3"
                        >
                          Key Skills
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map(
                            (skill, i) => (
                              <span
                                key={i}
                                className="
                                text-xs
                                px-3 py-2
                                rounded-xl
                                bg-white/[0.03]
                                border border-white/10
                               text-gray-300
                                flex items-center gap-1.5
                                transition-all duration-300
                                "
                              >
                                <FaStar className="text-[10px]" />
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {preview && (
            <motion.div
              className="fixed inset-0 z-50
              flex items-center justify-center
              bg-black/80 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreview}
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) =>
                  e.stopPropagation()
                }
                className="
                relative
                bg-[#111]/95
                backdrop-blur-2xl
                rounded-3xl
                border border-white/10
                p-6
                max-w-5xl
                w-full
                shadow-2xl
                "
              >

                {/* Close */}
                <button
                  onClick={closePreview}
                  className="absolute top-5 right-5
                  text-gray-400 hover:text-white
                  text-xl transition-all duration-300"
                >
                  <FaTimes />
                </button>

                {/* Title */}
                <h3
                  className="text-2xl font-bold
                  text-[#4EC6F1] mb-5"
                >
                  {preview.name}
                </h3>

                {/* PDF */}
                <iframe
                  src={preview.file}
                  title="Certificate Preview"
                  className="w-full h-[600px]
                  rounded-2xl border border-white/10
                  bg-white"
                />

                {/* Download */}
                <a
                  href={preview.file}
                  download
                  className="
                  mt-5 inline-flex items-center gap-2
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r
                  from-[#4EC6F1]
                  to-[#6C63FF]
                  text-white font-semibold
                  hover:shadow-lg
                  hover:shadow-[#4EC6F1]/30
                  transition-all duration-300
                  "
                >
                  <FaFileDownload />
                  Download Certificate
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;