import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaFileDownload, FaStar, FaTimes, FaBriefcase, } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Agriculture Peshawar',
    duration: '2020 – 2024',
    location: 'Peshawar, Pakistan',
    icon: <FaGraduationCap className="text-[#4EC6F1] text-xl" />,
    description: 'Specialized in Web Development and UI/UX Design. Built 10+ production ready projects including bilingual RTL applications for Middle East market.',
    degreeCertificate: {
      file: '/certificates/bs-degree.pdf',
      thumbnail: '/certificates/bs-degree-thumb.jpg',
      name: 'BS Computer Science Degree',
      type: 'Academic Degree'
    },
    internshipCertificates: [
      {
        name: 'Cognorise',
        file: '/certificates/cognorise-certificate.pdf',
        thumbnail: '/certificates/cognorise-thumb.jpg',
        role: 'Frontend Development'
      },
      {
        name: 'Internee.pk',
        file: '/certificates/internee-pk-certificate.pdf',
        thumbnail: '/certificates/internee-thumb.jpg',
        role: 'React Developer'
      },
      {
        name: 'RhombixTech',
        file: '/certificates/uiux-certificate.pdf',
        thumbnail: '/certificates/uiux-thumb.jpg',
        role: 'UI UX Designer'
      },
    ],
    skills: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Figma', 'RTL/LTR', 'REST APIs', 'Git'],
    featured: true
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Dr Mudasir Khan Shaheed Secondary School',
    duration: '2018 – 2020',
    location: 'Kabal, Swat, Pakistan',
    icon: <FaSchool className="text-[#4EC6F1] text-xl" />,
    description: 'Mathematics, Physics, Chemistry  Strong foundation in analytical thinking and problem solving.',
    skills: ['Mathematics', 'Physics', 'Problem Solving']
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Govt High School Totanobandai Kabal Swat',
    duration: '2016 – 2018',
    location: 'TotanoBandai, Kabal, Swat, Pakistan',
    icon: <FaSchool className="text-[#4EC6F1] text-xl" />,
    description: 'Science subjects with distinction in Computer Science.',
    skills: ['Computer Basics', 'Science', 'English']
  },
];

const Education = () => {
  const [preview, setPreview] = useState(null);

  const openPreview = (cert) => setPreview(cert);
  const closePreview = () => setPreview(null);

  return (
    <section id="education" className="pt-24 scroll-mt-24 bg-[#0D0D0D] px-6 py-16 border-t border-[#4EC6F1]/20">
      <div className="max-w-5xl mx-auto space-y-12">
        <SectionHeading title="Education & Certifications" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center -mt-8 mb-8 max-w-2xl mx-auto space-y-3"
        >
          <p className="text-gray-400">
            Academic background with hands on internship experience in modern web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Centered on desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4EC6F1] via-[#4EC6F1]/50 to-transparent md:-translate-x-1/2" />
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot - FIXED POSITION */}
              <div className="absolute left-6 md:left-1/2 top-6 w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#4EC6F1] flex items-center justify-center shadow-lg shadow-[#4EC6F1]/20 z-10 -translate-x-1/2 md:-translate-x-1/2">
                {edu.icon}
              </div>
              {/* Content Card - FIXED ZIGZAG */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-gray-800 hover:border-[#4EC6F1]/50 transition-all duration-300 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(78,198,241,0.15)]/10">
                  
                  {edu.featured && (
                    <div className="inline-block bg-[#4EC6F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      FEATURED
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-[#4EC6F1] font-semibold mb-1">{edu.institution}</p>
                  <div className="text-sm text-gray-400 mb-3 flex items-center gap-2 flex-wrap">
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.description && (
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* Certificates */}
                  {(edu.degreeCertificate || edu.internshipCertificates) && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-[#4EC6F1]" />
                        Certificates & Internships
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.degreeCertificate && (
                          <div 
                            onClick={() => openPreview(edu.degreeCertificate)}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg border border-white/10 hover:border-[#4EC6F1] transition-all">
                              <img
                                src={edu.degreeCertificate.thumbnail}
                                alt="Degree"
                                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">View</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5 text-center">{edu.degreeCertificate.name}</p>
                            
                            {/* ✅ DEGREE TYPE ADDED */}
                            {edu.degreeCertificate.type && (
                              <p className="text-xs text-[#4EC6F1] text-center font-semibold">
                                {edu.degreeCertificate.type}
                              </p>
                            )}
                          </div>
                        )}
                        
                        {edu.internshipCertificates?.map((cert, i) => (
                          <div 
                            key={i}
                            onClick={() => openPreview(cert)}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg border border-gray-800 hover:border-[#4EC6F1] transition-all">
                              <img
                                src={cert.thumbnail}
                                alt={cert.name}
                                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">View</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5 text-center">{cert.name}</p>
                            {cert.role && (
                              <p className="text-xs text-[#4EC6F1] text-center font-medium">{cert.role}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Skills */}
                  {edu.skills && (
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-3 py-1.5 rounded-lg bg-[#0D0D0D] text-[#4EC6F1] border border-gray-800 flex items-center gap-1.5 hover:border-[#4EC6F1]/50 transition-colors"
                          >
                            <FaStar className="text-xs" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <AnimatePresence>
          {preview && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreview}
            >
              <motion.div 
                className="relative bg-[#1a1a1a] rounded-xl p-6 max-w-4xl w-full border border-[#4EC6F1]/30 shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePreview}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors hover:rotate-90 duration-300"
                >
                  <FaTimes />
                </button>
                <div className="mb-4 text-[#4EC6F1] font-bold text-xl">{preview.name}</div>
                <iframe
                  src={preview.file}
                  className="w-full h-[600px] rounded-lg border border-gray-800 bg-white"
                  title="Certificate Preview"
                ></iframe>
                <a
                  href={preview.file}
                  download
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4EC6F1] hover:bg-[#3db5e0] text-white font-semibold transition-all"
                >
                  <FaFileDownload /> Download Certificate
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