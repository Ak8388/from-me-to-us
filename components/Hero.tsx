
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center max-w-2xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-pink-400 font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block"
        >
          Sebuah Dedikasi Kecil
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-900 mb-6"
        >
          Untuk <span className="italic">May.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-500 font-light text-lg md:text-xl leading-relaxed italic"
        >
          "Karena kebahagiaan adalah ketika melihatmu tersenyum dengan cara yang paling tenang."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12"
        >
          <a 
            href="#tentang"
            className="inline-block px-8 py-3 rounded-full bg-pink-50 text-pink-400 border border-pink-100 shadow-sm hover:shadow-md hover:bg-pink-100 transition-all duration-300 font-medium text-sm animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            Scroll pelan-pelan ya...
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
