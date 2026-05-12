import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img 
          src="/images/cta_bg.png" 
          alt="Dark marble texture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-stone-light/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Seu projeto merece materiais <span className="italic text-primary">à altura.</span>
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#contato" className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white uppercase tracking-widest text-sm font-semibold hover:bg-stone-900 transition-all duration-300 group">
            Solicitar atendimento exclusivo
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
