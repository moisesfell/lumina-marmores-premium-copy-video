import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 500, prefix: "+", label: "Projetos Entregues" },
  { number: 15, prefix: "+", label: "Anos de Tradição" },
  { number: 100, prefix: "+", label: "Arquitetos Parceiros" },
  { number: 0, suffix: "mm", label: "Margem de Erro" }
];

function CountUp({ number, prefix, suffix, delay }: { number: number; prefix?: string; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
      const increment = number / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay || 0);

    return () => clearTimeout(timer);
  }, [isInView, number, delay]);

  return <div ref={ref} className="font-serif text-4xl md:text-5xl text-primary mb-2">{prefix}{count}{suffix}</div>;
}

export function B2BSection() {
  return (
    <section id="b2b" className="py-32 relative bg-stone-light overflow-hidden border-t border-b border-stone-200">
      <div className="absolute inset-0 z-0 opacity-[0.05]">
         <img 
          src="/images/b2b_bg.png" 
          alt="Architecture background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-6 block">Divisão B2B</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8 leading-tight">Parceria que Eleva o seu Projeto</h2>
            <p className="text-stone-600 font-light text-lg mb-8 leading-relaxed">
              Atendimento técnico especializado para escritórios de arquitetura e construtoras de alto padrão. 
              Oferecemos suporte desde a especificação do material até a logística e instalação profissional, garantindo precisão milimétrica nos acabamentos.
            </p>
            <a href="#contato" className="inline-flex items-center gap-4 text-stone-900 hover:text-primary transition-colors group">
              <span className="uppercase tracking-widest text-sm font-medium">Seja um Parceiro Homologado</span>
              <span className="w-12 h-[1px] bg-stone-400 group-hover:bg-primary transition-colors" />
            </a>
          </motion.div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full mt-12 lg:mt-0">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-8 border border-stone-200 bg-white/50 backdrop-blur-md shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <CountUp number={stat.number} prefix={stat.prefix} suffix={stat.suffix} delay={index * 150} />
              <div className="text-stone-500 text-xs uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
