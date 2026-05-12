import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  return (
    <section id="localizacao" className="py-32 bg-stone-light border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">Showroom</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Venha tomar um café conosco</h2>
            <p className="text-stone-600 font-light mb-10 leading-relaxed">
              Nosso showroom foi projetado para oferecer uma experiência sensorial completa. 
              Sinta as texturas, aprecie os veios naturais e converse com nossos especialistas 
              sobre as melhores opções para o seu projeto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-stone-900 font-medium mb-1">Endereço</h4>
                  <p className="text-stone-500 font-light text-sm">Av. Europa, 1500 - Jardim Europa<br/>São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-stone-900 font-medium mb-1">Horário de Funcionamento</h4>
                  <p className="text-stone-500 font-light text-sm">Segunda a Quinta: 08h às 18h<br/>Sexta-feira: 08h às 17h<br/>Sábado: 08h às 14h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-stone-900 font-medium mb-1">Contato</h4>
                  <p className="text-stone-500 font-light text-sm">+55 11 99999-0000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 w-full h-[500px] border border-stone-200 bg-stone-200 overflow-hidden relative shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=Av.%20Europa,%201500%20-%20Jardim%20Europa,%20S%C3%A3o%20Paulo&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
