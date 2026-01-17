
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 10 + Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, heart.opacity, 0],
            x: ['-5%', '5%', '-5%'] 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: heart.left,
            fontSize: heart.size,
          }}
          className="text-pink-200"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
