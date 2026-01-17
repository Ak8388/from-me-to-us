
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Poem from './components/Poem';
import Message from './components/Message';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay for a smooth entry
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      <FloatingHearts />
      
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9F9]"
            exit={{ opacity: 0 }}
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-pink-300 text-4xl"
            >
              ❤️
            </motion.div>
          </motion.div>
        ) : (
          <motion.main 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Hero />
            <About />
            <Poem />
            <Message />
            <Surprise />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
