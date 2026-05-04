export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
          alt="Barbearia Imperial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Eyebrow */}
        <div className="mb-6 flex justify-center items-center gap-4">
          <div className="w-20 h-px bg-[#d4af37]" />
          <span className="font-sans text-xs text-[#f2ca50] tracking-[0.3em] uppercase">
            Excelência em Grooming
          </span>
          <div className="w-20 h-px bg-[#d4af37]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold text-[#e2e2e2] text-5xl md:text-7xl leading-tight tracking-tight mb-4">
          Tradição e Estilo
        </h1>
        <h2 className="font-serif font-semibold text-[#f2ca50] text-2xl md:text-3xl mb-8 tracking-wide">
          para o Homem Moderno
        </h2>

        <p className="font-sans text-[#d0c5af] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Na Imperial Lauzane, cada visita é um ritual. Precisão, tradição e
          atendimento personalizado desde 2012.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="bg-[#d4af37] text-[#3c2f00] px-10 py-4 font-semibold text-xs tracking-widest uppercase transition-all hover:bg-[#e9c349] active:scale-95"
          >
            Marcar Horário
          </a>
          <a
            href="#servicos"
            className="border border-[rgba(226,226,226,0.3)] text-[#e2e2e2] px-10 py-4 font-semibold text-xs tracking-widest uppercase transition-all hover:bg-white/5"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <div className="w-px h-10 bg-[rgba(212,175,55,0.4)]" />
        <span className="text-[#f2ca50] text-[10px] tracking-widest uppercase font-sans">
          Scroll
        </span>
      </div>
    </section>
  );
}
