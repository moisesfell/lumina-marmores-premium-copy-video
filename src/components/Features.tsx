import { motion } from 'motion/react';
import { Diamond, Shield, Ruler, Users, Hammer, Star } from 'lucide-react';

const features = [
  {
    icon: <Star strokeWidth={1} size={32} />,
    title: "Acuracidade Impecável",
    description: "Cortes precisos e acabamentos polidos à perfeição, valorizando cada detalhe da pedra."
  },
  {
    icon: <Diamond strokeWidth={1} size={32} />,
    title: "Curadoria de Materiais",
    description: "Seleção rigorosa das melhores jazidas ao redor do mundo para o seu projeto."
  },
  {
    icon: <Shield strokeWidth={1} size={32} />,
    title: "Alta Resistência",
    description: "Superfícies preparadas para durar gerações com tratamentos de impermeabilização premium."
  },
  {
    icon: <Ruler strokeWidth={1} size={32} />,
    title: "Projetos Sob Medida",
    description: "Personalização absoluta. Transformamos sua visão arquitetônica em realidade concreta."
  },
  {
    icon: <Users strokeWidth={1} size={32} />,
    title: "B2B para Arquitetos",
    description: "Atendimento técnico e comercial exclusivo para profissionais e escritórios de arquitetura."
  },
  {
    icon: <Hammer strokeWidth={1} size={32} />,
    title: "Instalação Pristina",
    description: "Equipe própria altamente especializada garantindo uma montagem limpa e perfeita."
  }
];

export function Features() {
  return (
    <section className="py-32 bg-stone-light relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-serif text-3xl md:text-5xl text-stone-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            A Excelência em Cada Detalhe
          </motion.h2>
          <motion.div 
            className="w-24 h-[1px] bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-10 border border-stone-200 bg-white hover:bg-stone-50 transition-colors duration-500 group shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl text-stone-900 mb-4 font-light tracking-wide">{feature.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
