
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="tentang" className="py-24 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-rose-800">
              Satu dalam Sejuta
            </h2>
            <div className="w-16 h-1 bg-pink-200 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              Mengenalmu adalah perjalanan yang penuh ketenangan. Setiap detail kecil tentangmu
              selalu memiliki tempat tersendiri di dalam ingatan.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-100 to-lavender-100 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-pink-50">
              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-pink-300 font-bold">Nama Lengkap</label>
                  <p className="text-xl font-serif text-rose-900">May Syavarul Hidayah</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-pink-300 font-bold">Lahir Pada</label>
                  <p className="text-xl text-gray-700">05 • 06 • 2001</p>
                </div>
                <div className="pt-4 border-t border-gray-50">
                  <label className="text-xs uppercase tracking-widest text-pink-300 font-bold block mb-3">Sifat yang Berharga</label>
                  <div className="flex flex-wrap gap-2">
                    {['Lembut', 'Terkadang Cuek', 'Pekerja Keras'].map((trait) => (
                      <span 
                        key={trait} 
                        className="px-4 py-1.5 bg-pink-50 text-pink-600 text-sm rounded-full border border-pink-100"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
