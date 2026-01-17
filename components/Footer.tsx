
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-pink-50 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-cursive text-2xl text-pink-300">With love, forever and always.</p>
        <div className="flex items-center justify-center space-x-2 text-xs tracking-[0.2em] text-gray-400 uppercase">
          <span>{currentYear}</span>
          <span>•</span>
          <span>Dibuat Khusus Untuk May</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
