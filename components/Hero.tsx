
import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full"
            >
              Available for Finance & Data Roles
            </motion.div>
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{PERSONAL_INFO.name}</span>
            </h1>
            <p className={`text-xl md:text-2xl font-medium mb-10 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25"
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`inline-flex items-center px-8 py-4 border text-base font-bold rounded-xl transition-all ${darkMode ? 'border-slate-700 text-gray-300 hover:bg-slate-800' : 'border-gray-300 text-slate-700 hover:bg-gray-50'}`}
              >
                Get In Touch
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start space-x-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className={`transition-all hover:scale-110 hover:text-blue-600 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                <Mail size={28} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-110 hover:text-blue-600 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                <Linkedin size={28} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/piyas-profile.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="w-72 md:w-[450px] aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to a high quality professional placeholder if image path fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=1000&q=80";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
