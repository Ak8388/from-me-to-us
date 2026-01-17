
import React from 'react';
import { motion } from 'framer-motion';

const Message: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 p-10 md:p-16 rounded-[3rem] border border-white/60 shadow-inner"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-rose-800 mb-6">Sebuah Pesan Hangat</h3>
          <p className="text-gray-600 leading-relaxed text-lg italic">
            "Terima kasih sudah menjadi May yang apa adanya. Tetaplah menjadi versi terbaik dirimu, 
            karena bagiku, kehadiranmu lebih dari cukup untuk membuat dunia ini terasa jauh lebih indah."
          </p>
          <motion.div 
            className="mt-10 text-pink-300 text-2xl inline-block"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            🌸
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
