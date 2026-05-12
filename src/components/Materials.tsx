import { motion } from 'motion/react';

const materials = [
  {
    name: "Mármore Calacatta",
    category: "Mármore",
    image: "/images/mat_calacatta.png",
    description: "A essência clássica do design italiano com veios marcantes e fundo cristalino."
  },
  {
    name: "Quartzito Taj Mahal",
    category: "Quartzito",
    image: "/images/mat_tajmahal.png",
    description: "Elegância translúcida com a resistência superior do quartzo natural."
  },
  {
    name: "Ônix Iluminado",
    category: "Ônix",
    image: "/images/mat_onix.png",
    description: "Pedra semipreciosa que permite retroiluminação para efeitos cenográficos únicos."
  },
  {
    name: "Superfícies Ultracompactas",
    category: "Sintético Premium",
    image: "/images/mat_ultra.png",
    description: "Tecnologia de ponta com resistência extrema a calor, riscos e manchas."
  }
];

export function Materials() {
  return (
    <section id="materiais" className="py-32 bg-stone-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">Nossa Galeria</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">O Acervo Naturale</h2>
          </motion.div>
          <motion.a 
            href="#contato"
            className="border-b border-stone-400 text-stone-600 pb-1 hover:border-primary hover:text-primary transition-colors tracking-wide text-sm font-light uppercase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explorar catálogo completo
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <motion.div 
              key={index}
              className="group relative h-[80vh] md:h-[60vh] overflow-hidden bg-stone-light border border-stone-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img 
                src={material.image} 
                alt={material.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:-translate-y-4 transition-transform duration-700">
                <span className="text-primary text-xs uppercase tracking-[0.2em] mb-3 block">{material.category}</span>
                <h3 className="font-serif text-3xl !text-white mb-4">{material.name}</h3>
                <p className="text-stone-200 font-light transition-opacity duration-700 delay-100">{material.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
