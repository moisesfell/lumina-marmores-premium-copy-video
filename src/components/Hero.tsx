import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/marmoree.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/40 to-stone-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-24 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-primary/50" />
              Superfícies Arquitetônicas
              <span className="w-12 h-[1px] bg-primary/50" />
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl !text-white mb-6 leading-tight max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pedras Naturais que Transformam Ambientes em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EAD8B1] italic">Obras de Arte</span>
          </motion.h1>

          <motion.p 
            className="text-stone-200 max-w-2xl text-base sm:text-lg mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A união perfeita entre a essência da natureza e o design contemporâneo. 
            Acabamento impecável para projetos que exigem exclusividade e sofisticação.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contato" className="px-8 py-4 bg-primary text-white uppercase tracking-widest text-xs font-semibold hover:bg-stone-900 transition-colors duration-300">
              Solicitar Orçamento
            </a>
            <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366]/90 backdrop-blur-sm border border-[#25D366] text-white uppercase tracking-widest text-xs font-semibold hover:bg-[#25D366] transition-colors duration-300 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a href="#projetos" className="px-8 py-4 border border-stone-300 text-stone-100 bg-white/10 backdrop-blur-sm uppercase tracking-widest text-xs font-medium hover:border-white hover:text-stone-900 hover:bg-white transition-all duration-300">
              Ver Portfólio
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>
  );
}
