import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Curadoria",
    desc: "Seleção cuidadosa da chapa ideal baseada nos veios, tonalidade e especificações do projeto arquitetônico."
  },
  {
    num: "02",
    title: "Medição Digital",
    desc: "Levantamento técnico in loco com equipamentos de precisão a laser para garantir encaixe milimétrico."
  },
  {
    num: "03",
    title: "Fabricação CNC",
    desc: "Corte e usinagem automatizada garantindo ângulos exatos e acabamentos de borda perfeitos."
  },
  {
    num: "04",
    title: "Tratamento",
    desc: "Impermeabilização premium e polimento final para durabilidade ímpar."
  },
  {
    num: "05",
    title: "Instalação",
    desc: "Equipe especializada realiza a montagem final de forma limpa, técnica e cirúrgica."
  }
];

export function Process() {
  return (
    <section className="py-32 bg-stone-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">Metodologia Lumina</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Do Garimpo à Instalação</h2>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-stone-200" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className="w-20 h-20 bg-white border border-stone-200 text-primary flex items-center justify-center font-serif text-2xl mb-8 relative z-10 shadow-sm rounded-full">
                  {step.num}
                </div>
                <h3 className="text-xl text-stone-900 mb-4 font-light tracking-wide">{step.title}</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
