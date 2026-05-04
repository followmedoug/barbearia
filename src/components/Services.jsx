const services = [
  {
    icon: "✂",
    title: "Corte Imperial",
    description:
      "Corte clássico com acabamento preciso usando tesoura e máquina profissional.",
    price: "R$ 65",
  },
  {
    icon: "🪒",
    title: "Barba Completa",
    description:
      "Modelagem, aparagem e hidratação com produtos premium e toalha quente.",
    price: "R$ 55",
  },
  {
    icon: "💆",
    title: "Corte + Barba",
    description: "O combo perfeito para quem quer sair impecável da barbearia.",
    price: "R$ 110",
  },
  {
    icon: "🧴",
    title: "Barboterapia",
    description:
      "Ritual completo com navalha, toalha quente e óleos essenciais.",
    price: "R$ 80",
  },
  {
    icon: "👑",
    title: "Tratamento Premium",
    description:
      "Hidratação capilar, massagem facial e finalização com cera artesanal.",
    price: "R$ 120",
  },
  {
    icon: "🎩",
    title: "Noivo/Formando",
    description:
      "Pacote especial para grandes ocasiões. Corte, barba e skincare.",
    price: "R$ 180",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">
            O Que Oferecemos
          </p>
          <h3 className="font-serif font-bold text-on-surface text-4xl md:text-5xl">
            Nossos Serviços
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-surface-container p-8 border border-primary-container/15 hover:border-primary-container/40 transition-all duration-300 group"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{s.icon}</span>
                <h4 className="font-serif font-semibold text-on-surface text-xl">
                  {s.title}
                </h4>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-primary-container/20" />
                <svg
                  className="fill-primary-container"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                >
                  <polygon points="4,0 5,3 8,3 5.5,4.8 6.5,8 4,6 1.5,8 2.5,4.8 0,3 3,3" />
                </svg>
                <div className="h-px flex-1 bg-primary-container/20" />
              </div>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                {s.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-primary">
                  {s.price}
                </span>
                <a
                  href="#contato"
                  className="font-sans text-xs tracking-widest uppercase text-on-primary bg-primary-container px-4 py-2 transition-all hover:bg-surface-tint active:scale-95"
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
