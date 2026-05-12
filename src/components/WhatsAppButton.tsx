import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { WhatsAppIcon } from './Icons';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white px-5 py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-stone-100 hidden md:flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <p className="text-sm text-stone-600 font-medium whitespace-nowrap">
              Fale com um especialista
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/5511999990000"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_-5px_rgba(37,211,102,0.4)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <WhatsAppIcon size={32} className="relative z-10" />
        
        {/* Pulse effect rings */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
      </motion.a>
    </div>
  );
}
