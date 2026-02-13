
import React from 'react';
import { PERSONAL_INFO, NAV_ITEMS } from '../constants';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-blue-600">.</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-5 mt-6 md:mt-0">
            <a href={`mailto:${PERSONAL_INFO.email}`} className={`transition-colors hover:text-blue-600 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
              <Mail size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-blue-600 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-slate-900'}`}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
