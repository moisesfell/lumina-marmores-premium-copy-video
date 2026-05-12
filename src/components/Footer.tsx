export function Footer() {
  return (
    <footer id="contato" className="bg-stone-mid pt-24 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-primary text-primary font-serif italic text-xl">L</div>
              <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">Lumina</span>
            </div>
            <p className="text-stone-500 font-light text-sm max-w-xs">
              Marmoraria de alto padrão. Elevando a arquitetura contemporânea através de pedras naturais exclusivas.
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 text-xs tracking-widest uppercase mb-6 font-semibold">Contato</h4>
            <ul className="space-y-4 text-sm text-stone-600 font-light">
              <li className="hover:text-primary transition-colors cursor-pointer">+55 11 99999-0000</li>
              <li className="hover:text-primary transition-colors cursor-pointer">contato@luminamarmores.com.br</li>
              <li className="hover:text-primary transition-colors cursor-pointer">@luminamarmores</li>
            </ul>
          </div>



          <div>
            <h4 className="text-stone-900 text-xs tracking-widest uppercase mb-6 font-semibold">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-stone-600 font-light uppercase tracking-wider">
              <li><a href="#materiais" className="hover:text-primary transition-colors">Materiais</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#b2b" className="hover:text-primary transition-colors">Área para Arquitetos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Lumina Mármores Premium. Todos os direitos reservados.</p>
          <p>Design por Lumina Studio</p>
        </div>
      </div>
    </footer>
  );
}
