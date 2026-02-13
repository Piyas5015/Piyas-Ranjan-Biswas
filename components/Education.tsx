
import React from 'react';
import { EDUCATION, ACTIVITIES } from '../constants';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Education</h2>
            </div>
            
            <div className="space-y-10 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800"></div>
              
              {EDUCATION.map((item, idx) => (
                <div key={idx} className="relative pl-16">
                  <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 z-10"></div>
                  <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.period}
                  </span>
                  <h3 className={`text-xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.degree}</h3>
                  <p className={`font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{item.institution}</p>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>{item.location}</p>
                  {item.details && (
                    <p className={`mt-2 text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <Briefcase className="text-indigo-600" size={28} />
              </div>
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Leadership</h2>
            </div>

            <div className="space-y-12">
              {ACTIVITIES.map((activity, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{activity.title}</h3>
                      <p className={`font-medium text-blue-600 dark:text-blue-400`}>{activity.role}</p>
                    </div>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>{activity.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {activity.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-sm leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className={darkMode ? 'text-gray-400' : 'text-slate-600'}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
