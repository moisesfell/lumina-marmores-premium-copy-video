import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Arthur Valenti",
    role: "Arquiteto Titular, Studio Valenti",
    text: "A qualidade do corte e o nível de detalhe no polimento das bordas é algo raro de encontrar. A Lumina entregou um projeto de ilha em Onyx retroiluminado que superou as expectativas do nosso cliente mais exigente."
  },
  {
    name: "Helena Castro",
    role: "Cliente Residência Alphaville",
    text: "O processo todo foi impecável. Da escolha da chapa de Quartzito Taj Mahal, onde me explicaram sobre os veios, até a instalação limpíssima. O mármore transformou completamente a atmosfera da minha casa."
  },
  {
    name: "Roberto Mendes",
    role: "Diretor de Engenharia, Mendes Alto Padrão",
    text: "Nossa construtora exige precisão milimétrica. O atendimento B2B da Lumina e a tecnologia de medição a laser que utilizam zerou nossa margem de erro nas obras. Parceria de longa data."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-stone-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">Endossos</span>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Nossas Referências</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              className="p-10 border border-stone-200 bg-white/60 backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-stone-700 font-light leading-relaxed mb-8 italic">"{test.text}"</p>
              <div>
                <div className="text-stone-900 font-medium mb-1">{test.name}</div>
                <div className="text-stone-500 text-xs uppercase tracking-wider">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
