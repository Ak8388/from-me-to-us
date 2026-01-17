
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Surprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const triggerHearts = useCallback(() => {
    setShowHearts(true);
    // Menggunakan function reference, bukan string
    window.setTimeout(() => setShowHearts(false), 3000);
  }, []);

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className="group relative flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
      >
        <div className="absolute -inset-4 bg-pink-100/50 rounded-full blur-xl group-hover:bg-pink-200/50 transition-all duration-500"></div>
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
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FFFDF9] rounded-lg shadow-2xl overflow-hidden border border-orange-100"
            >
              <div className="h-2 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200"></div>
              
              <div className="p-8 md:p-12 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="font-cursive text-3xl text-rose-300">Dear May,</div>
                  <button onClick={handleClose} className="text-gray-300 hover:text-rose-400">✕</button>
                </div>

                <div className="font-serif text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>Aku menulis ini hanya untuk mengingatkanmu, bahwa di dunia yang seringkali bising ini, kamu adalah ketenangan yang paling aku syukuri.</p>
                  <p>Terima kasih telah berjuang sejauh ini. Jangan pernah lupa bahwa kamu sangat berharga, lebih dari yang bisa kata-kata ini jelaskan.</p>
                  <p className="text-right font-cursive text-2xl text-rose-400 pt-4">Selamanya, <br /> Pengagum Rahasiamu</p>
                </div>

                <div className="pt-8 flex justify-center">
                  <button
                    onClick={triggerHearts}
                    className="px-6 py-2 rounded-full bg-rose-400 text-white text-sm font-medium shadow-md hover:bg-rose-500 transition-colors flex items-center gap-2"
                  >
                    <span>Kirim Pelukan Hangat</span>
                    <span>❤️</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {showHearts && (
              <div className="fixed inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: '50vw', y: '50vh' }}
                    animate={{ 
                      opacity: 0, 
                      scale: 1.5, 
                      x: `${Math.random() * 100}vw`, 
                      y: `${Math.random() * 100}vh` 
                    }}
                    transition={{ duration: 2 }}
                    className="absolute text-2xl"
                  >❤️</motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Surprise;
