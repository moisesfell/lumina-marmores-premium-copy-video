import { motion } from 'motion/react';

const projects = [
  {
    title: "Residência Alphaville",
    category: "Cozinha e Área Gourmet",
    image: "/images/proj_alphaville.png",
    style: "col-span-1 md:col-span-2 row-span-2 h-[600px]"
  },
  {
    title: "Cobertura Jardins",
    category: "Banheiro Master",
    image: "/images/proj_jardins.png",
    style: "col-span-1 h-[288px]"
  },
  {
    title: "Corporate Faria Lima",
    category: "Lobby em Travertino",
    image: "/images/proj_farialima.png",
    style: "col-span-1 h-[288px]"
  },
  {
    title: "Fazenda Boa Vista",
    category: "Lareira em Quartzito",
    image: "/images/proj_fazenda.png",
    style: "col-span-1 md:col-span-3 h-[400px]"
  }
];

export function Projects() {
  return (
    <section id="projetos" className="py-32 bg-stone-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">Portfólio</span>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6">Obras de Arte Realizadas</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">Uma seleção das nossas execuções mais emblemáticas, onde a pedra natural encontra o design paramétrico e a arquitetura contemporânea.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`relative overflow-hidden group cursor-pointer border border-stone-200 ${project.style}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8">
                <span className="text-primary text-xs uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                <h3 className="font-serif text-2xl !text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
