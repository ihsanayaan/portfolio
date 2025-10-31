import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaFileDownload, FaStar, FaTimes } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Agriculture Peshawar',
    duration: '2020 – 2024',
    location: 'Peshawar, Pakistan',
    icon: <FaGraduationCap className="text-accentLight text-xl" />,
    degreeCertificate: {
      file: '/certificates/bs-degree.pdf',
      thumbnail: '/certificates/bs-degree-thumb.jpg',
      name: 'Degree Certificate',
    },
    internshipCertificates: [
      {
        name: 'Cognorise Certificate',
        file: '/certificates/cognorise-certificate.pdf',
        thumbnail: '/certificates/cognorise-thumb.jpg',
      },
      {
        name: 'Internee.pk Certificate',
        file: '/certificates/internee-pk-certificate.pdf',
        thumbnail: '/certificates/internee-thumb.jpg',
      },
    ],
    skills: ['React.js', 'Tailwind CSS', 'UI/UX', 'Projects'],
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Dr Mudasir Khan Shaheed Secondary School',
    duration: '2018 – 2020',
    location: 'Kabal, Swat, Pakistan',
    icon: <FaSchool className="text-accentLight text-xl" />,
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Govt High School Totanobandai Kabal Swat',
    duration: '2016 – 2018',
    location: 'TotanoBandai, Kabal, Swat, Pakistan',
    icon: <FaSchool className="text-accentLight text-xl" />,
  },
];

const Education = () => {
  const [preview, setPreview] = useState(null);

  const openPreview = (cert) => setPreview(cert);
  const closePreview = () => setPreview(null);

  return (
    <section id="education" className="pt-24 scroll-mt-24 bg-bgDarkAlt px-6 py-16 border-t border- border-accentLight/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <SectionHeading title="🎓 Education" />

        <div className="relative border-l border- border-accentLight/50 ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-6 mb-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-4 top-2 w-8 h-8 rounded-full bg-bgDark border border-accentLight/50 flex items-center justify-center shadow-md animate-pulse">
                {edu.icon}
              </span>

              <h3 className="text-lg font-bold text-accentLight mb-1">{edu.degree}</h3>
              <p className="text-textMain font-medium">{edu.institution}</p>
              <div className="text-sm text-textSub mb-2">{edu.duration} — {edu.location}</div>

              {/* Certificates */}
              <div className="flex flex-wrap gap-4 mt-4">
                {edu.degreeCertificate && (
                  <div className="w-40">
                    <img
                      src={edu.degreeCertificate.thumbnail}
                      alt="preview"
                      className="w-full h-auto rounded-md border border-borderLight cursor-pointer hover:shadow-lg"
                      onClick={() => openPreview(edu.degreeCertificate)}
                    />
                    <button
                      onClick={() => openPreview(edu.degreeCertificate)}
                      className="mt-2 w-full px-3 py-2 text-sm rounded-soft 
bg-[#0f172a]/60 text-accentLight hover:bg-cyan-500/20 hover:text-white 
shadow-[0_0_10px_rgba(78,198,241,0.2)] hover:shadow-[0_0_20px_rgba(78,198,241,0.4)] 
transition-all duration-300 cursor-pointer text-center backdrop-blur-md"
 >
                      Degree Certificate
                    </button>
                  </div>
                )}

                {edu.internshipCertificates?.map((cert, i) => (
                  <div key={i} className="w-40">
                    <img
                      src={cert.thumbnail}
                      alt="preview"
                      className="w-full h-auto rounded-md border border-borderLight cursor-pointer hover:shadow-lg"
                      onClick={() => openPreview(cert)}
                    />
                    <button
                      onClick={() => openPreview(cert)}
                     className="mt-2 w-full px-3 py-2 text-sm rounded-soft 
bg-[#0f172a]/60 text-accentLight hover:bg-cyan-500/20 hover:text-white 
shadow-[0_0_10px_rgba(78,198,241,0.2)] hover:shadow-[0_0_20px_rgba(78,198,241,0.4)] 
transition-all duration-300 cursor-pointer text-center backdrop-blur-md"
 >
                      Internship Certificate
                    </button>
                  </div>
                ))}
              </div>

              {edu.skills && (
                <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {edu.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-textSub">
                      <FaStar className="text-accentLight" />
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <AnimatePresence>
          {preview && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative bg-bgDark rounded-lg p-4 max-w-2xl w-full">
                <button
                  onClick={closePreview}
                  className="absolute top-2 right-2 text-accentLight hover:text-white text-xl"
                >
                  <FaTimes />
                </button>
                <div className="mb-4 text-accentLight font-semibold text-lg">{preview.name}</div>
                <iframe
                  src={preview.file}
                  className="w-full h-[500px] rounded border border-borderLight"
                  title="Certificate Preview"
                ></iframe>
                <a
                  href={preview.file}
                  download
                  className="mt-4 inline-block px-6 py-2 rounded-soft border border-accentLight text-accentLight hover:bg-[#222] transition"
                >
                  📂 Download Certificate
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;