
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className={`text-2xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              PIYAS<span className="text-blue-600">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all hover:text-blue-600 ${isActive ? 'text-blue-600' : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full mx-4" 
                    />
                  )}
                </a>
              );
            })}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-slate-800">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-xl transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-slate-600 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-slate-600'}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden absolute top-full left-0 w-full glass-effect shadow-2xl border-t ${darkMode ? 'border-slate-800' : 'border-gray-100'}`}
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${activeSection === item.href.substring(1) ? 'bg-blue-600 text-white' : (darkMode ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-50')}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
