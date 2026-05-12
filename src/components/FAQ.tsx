import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qual é o horário de atendimento?",
    answer: "Nosso atendimento funciona nos seguintes horários:\n\nSegunda a quinta: 08h às 12h | 13h às 18h\nSexta-feira: 08h às 12h | 13h às 17h\nSábado: 08h às 14h\n\nSe preferir, você também pode falar conosco pelo WhatsApp para tirar dúvidas e solicitar orçamentos."
  },
  {
    question: "A marmoaria realiza instalação?",
    answer: "Sim. Contamos com uma equipe especializada para executar a instalação completa com precisão e acabamento profissional.\n\nTrabalhamos com:\n• bancadas,\n• ilhas gourmet,\n• lavatórios,\n• escadas,\n• nichos,\n• revestimentos,\n• soleiras,\n• mesas,\n• entre outros projetos sob medida.\n\nTudo é realizado com cuidado técnico e atenção aos detalhes."
  },
  {
    question: "Posso visitar a empresa e conhecer os materiais?",
    answer: "Claro. Temos um espaço com amostras e opções de materiais para que você possa visualizar texturas, acabamentos e tonalidades pessoalmente.\n\nO atendimento pode ser agendado sem compromisso para oferecer uma experiência mais tranquila e personalizada."
  },
  {
    question: "Vocês trabalham com pedras diferenciadas ou importadas?",
    answer: "Sim. Além dos materiais tradicionais, também trabalhamos com pedras especiais e materiais importados para projetos exclusivos.\n\nTemos parceiros e fornecedores nacionais e internacionais para atender propostas arquitetônicas de alto padrão."
  },
  {
    question: "Como funciona a medição do projeto?",
    answer: "O processo é simples e organizado.\n\nApós o primeiro contato, enviamos uma estimativa inicial pelo WhatsApp. Com a aprovação do orçamento, nossa equipe agenda a visita técnica para realizar a medição final no local.\n\nEsse processo garante máxima precisão para a fabricação das peças."
  },
  {
    question: "Qual é o prazo para produção e instalação?",
    answer: "O prazo pode variar conforme o tamanho e a complexidade do projeto, além do tipo de material escolhido.\n\nNosso compromisso é manter um cronograma claro e cumprir cada etapa conforme o combinado com o cliente."
  },
  {
    question: "Vocês atendem somente construtoras e arquitetos?",
    answer: "Não. Atendemos tanto profissionais da área quanto clientes residenciais.\n\nRealizamos desde projetos completos para construtoras até cozinhas, banheiros e áreas gourmet planejadas para residências."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-stone-light border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
           <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">F.A.Q</span>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-stone-200 bg-white/60 backdrop-blur-sm shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button 
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <h3 className="font-serif text-xl text-stone-900 pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0"
                >
                  <ChevronDown size={24} strokeWidth={1} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-stone-600 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
