import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center border border-primary text-primary font-serif italic text-xl">L</div>
          <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">Lumina</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#materiais" className="text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300">Materiais</a>
          <a href="#projetos" className="text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300">Projetos</a>
          <a href="#b2b" className="text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300">Para Arquitetos</a>
          <a href="#contato" className="px-6 py-3 border border-primary/50 text-primary uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-300">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-0 right-0 glass border-b border-stone-200 p-6 flex flex-col gap-6"
        >
          <a href="#materiais" onClick={() => setIsOpen(false)} className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900">Materiais</a>
          <a href="#projetos" onClick={() => setIsOpen(false)} className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900">Projetos</a>
          <a href="#b2b" onClick={() => setIsOpen(false)} className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900">Para Arquitetos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-primary/50 text-primary uppercase tracking-widest text-xs text-center hover:bg-primary hover:text-white transition-all">Fale Conosco</a>
        </motion.div>
      )}
    </nav>
  );
}
