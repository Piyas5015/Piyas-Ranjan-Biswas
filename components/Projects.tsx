
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Selected work demonstrating technical skills in data analysis, finance, and problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.link} className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className={`text-sm mb-6 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Details <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
