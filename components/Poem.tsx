
import React from 'react';
import { motion } from 'framer-motion';

const Poem: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-rose-200 text-6xl mb-4 font-serif opacity-30"
          >
            &ldquo;
          </motion.div>
          
          <div className="font-serif text-xl md:text-2xl lg:text-3xl text-rose-900/80 leading-loose md:leading-[3rem] italic">
            <p>Di antara pagi yang lelah dan malam yang sunyi,</p>
            <p>Ada namamu yang selalu tenang di hati.</p>
            <p>May, kamu bukan hanya tentang kata cinta,</p>
            <p>Kamu adalah rumah bagi rasa yang tak bersuara.</p>
            
            <p className="mt-8">Lembut caramu menatap dunia,</p>
            <p>Meski kadang diam dan terlihat biasa.</p>
            <p>Namun di balik cuekmu yang sederhana,</p>
            <p>Ada keteguhan seorang wanita luar biasa.</p>
            
            <p className="mt-8">Kamu bekerja keras tanpa banyak keluh,</p>
            <p>Menata mimpi dengan langkah yang teguh.</p>
            <p>Dan tanpa kamu sadari, May,</p>
            <p>Kamu telah menjadi doa yang paling sering kusebut.</p>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-rose-200 text-6xl mt-4 font-serif opacity-30"
          >
            &rdquo;
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-lavender-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
    </section>
  );
};

export default Poem;
