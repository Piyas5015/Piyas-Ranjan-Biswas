
import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <CheckCircle2 className="mr-2 text-blue-600" size={24} />
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className={darkMode ? 'text-gray-300' : 'text-slate-600'}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className={`text-2xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-xl border text-center transition-transform hover:-translate-y-1 ${darkMode ? 'bg-slate-800/50 border-slate-700 text-gray-300' : 'bg-white border-gray-200 text-slate-700'}`}
              >
                <Award className="mx-auto mb-4 text-blue-600" size={32} />
                <p className="font-semibold text-sm uppercase tracking-wide">{cert.issuer}</p>
                <p className="mt-2 font-medium">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
