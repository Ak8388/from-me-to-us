
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Surprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const triggerHearts = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 3000);
  };

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
      >
        <div className="absolute -inset-4 bg-pink-100/50 rounded-full blur-xl group-hover:bg-pink-200/50 transition-all duration-500 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-full shadow-lg border border-pink-100 text-3xl">
          ✉️
        </div>
        <span className="relative font-serif italic text-rose-800 tracking-wide text-lg">
          Ada surat kecil untukmu, May...
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-rose-900/20 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FFFDF9] rounded-lg shadow-2xl overflow-hidden border border-orange-100"
            >
              {/* Header Surat */}
              <div className="h-2 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200"></div>
              
              <div className="p-8 md:p-12 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="font-cursive text-3xl text-rose-300">Dear May,</div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="font-serif text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Aku menulis ini hanya untuk mengingatkanmu, bahwa di dunia yang seringkali bising ini, kamu adalah ketenangan yang paling aku syukuri.
                  </p>
                  <p>
                    Terima kasih telah berjuang sejauh ini. Jangan pernah lupa bahwa kamu sangat berharga, lebih dari yang bisa kata-kata ini jelaskan.
                  </p>
                  <p className="text-right font-cursive text-2xl text-rose-400 pt-4">
                    Selamanya, <br /> Pengagum Rahasiamu
                  </p>
                </div>

                <div className="pt-8 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={triggerHearts}
                    className="px-6 py-2 rounded-full bg-rose-400 text-white text-sm font-medium shadow-md shadow-rose-200 flex items-center gap-2"
                  >
                    <span>Kirim Pelukan Hangat</span>
                    <span>❤️</span>
                  </motion.button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-50 to-transparent opacity-50 -z-10"></div>
            </motion.div>

            {/* Heart Explosion Effect */}
            <AnimatePresence>
              {showHearts && (
                <div className="fixed inset-0 pointer-events-none">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 1, 
                        scale: 0, 
                        x: '50vw', 
                        y: '50vh' 
                      }}
                      animate={{ 
                        opacity: 0, 
                        scale: Math.random() * 2 + 1, 
                        x: `${Math.random() * 100}vw`, 
                        y: `${Math.random() * 100}vh`,
                        rotate: Math.random() * 360
                      }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="absolute text-3xl"
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Surprise;
