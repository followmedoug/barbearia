export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
    >
      {/* Image with corner decoration */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary-container/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="Barber usando navalha"
          className="w-full h-130 object-cover gold-border-glow"
        />
        <div className="absolute -bottom-6 -right-6 bg-surface-container p-8 border border-primary-container/20 z-10">
          <p className="font-serif text-2xl text-primary mb-1">Desde 2012</p>
          <p className="font-sans text-sm text-on-surface-variant">
            Mantendo a essência do clássico.
          </p>
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">
          A Nossa História
        </p>
        <h3 className="font-serif font-bold text-on-surface text-4xl md:text-5xl leading-tight mb-6">
          Compromisso com a Identidade Masculina
        </h3>
        <div className="space-y-5 font-sans text-base text-on-surface-variant leading-relaxed">
          <p>
            Na Barbearia Imperial, não apenas cortamos cabelo. Nós
            preservamos rituais. Localizada no coração do bairro, nossa casa
            foi projetada para ser o refúgio do homem que valoriza a precisão e
            o atendimento personalizado.
          </p>
          <p>
            Cada detalhe, desde a escolha das nossas espumas de barbear até a
            curadoria das nossas cadeiras vintage, foi pensado para proporcionar
            uma experiência de imersão total na era de ouro da barbearia.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-primary-container/15 pt-8">
          <div>
            <span className="font-serif text-3xl text-primary block">
              10k+
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-on-surface-variant">
              Clientes Atendidos
            </span>
          </div>
          <div>
            <span className="font-serif text-3xl text-primary block">
              12 Anos
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-on-surface-variant">
              De Experiência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
