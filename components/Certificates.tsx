
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certificates: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Certifications
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Validating my expertise through global standards and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col md:flex-row rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-100'}`}
            >
              <div className="md:w-1/3 relative overflow-hidden h-48 md:h-auto">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-blue-600" size={20} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {cert.issuer}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h3>
                <div className="flex items-center gap-4 mt-auto">
                   <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
