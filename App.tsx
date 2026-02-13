
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './constants';

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="mouse-glow hidden lg:block" 
      style={{ 
        left: mousePos.x, 
        top: mousePos.y,
        opacity: opacity 
      }} 
    />
  );
};

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  // Set default night mode to true
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <MouseGlow />
        
        {/* Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]" style={{ scaleX }} />

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="relative z-10">
          <Hero darkMode={darkMode} />
          
          <SectionWrapper id="about">
            <section className="py-24 border-t border-gray-100 dark:border-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
                  <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    {PERSONAL_INFO.about}
                  </p>
                </div>
              </div>
            </section>
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills darkMode={darkMode} />
          </SectionWrapper>

          <SectionWrapper id="education">
            <Education darkMode={darkMode} />
          </SectionWrapper>

          <SectionWrapper id="certificates">
            <Certificates darkMode={darkMode} />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact darkMode={darkMode} />
          </SectionWrapper>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
