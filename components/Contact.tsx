
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Simulating a real API call for 1.5 seconds
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6"
          />
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Have a project in mind or want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-start space-x-5"
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email Me</h4>
                <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-base hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-start space-x-5"
            >
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Call Me</h4>
                <a href={`tel:${PERSONAL_INFO.phone}`} className={`text-base hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-start space-x-5"
            >
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Location</h4>
                <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-8 md:p-10 rounded-[2rem] border shadow-2xl transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-100'}`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      disabled={status === 'submitting'}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className={`w-full px-5 py-4 rounded-2xl border outline-none focus:ring-4 focus:ring-blue-600/20 transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'}`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      disabled={status === 'submitting'}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className={`w-full px-5 py-4 rounded-2xl border outline-none focus:ring-4 focus:ring-blue-600/20 transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'}`}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-2 ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    disabled={status === 'submitting'}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className={`w-full px-5 py-4 rounded-2xl border outline-none focus:ring-4 focus:ring-blue-600/20 transition-all resize-none ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'}`}
                    placeholder="How can I help you?"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center p-4 bg-green-500/10 text-green-500 rounded-2xl font-bold"
                    >
                      <CheckCircle className="mr-2" size={20} />
                      Message sent successfully!
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div 
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center p-4 bg-red-500/10 text-red-500 rounded-2xl font-bold"
                    >
                      <AlertCircle className="mr-2" size={20} />
                      {errorMessage}
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full flex items-center justify-center py-5 px-8 rounded-2xl text-lg font-bold text-white transition-all shadow-xl shadow-blue-500/25 ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={24} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
