const barbers = [
  {
    name: 'Márcio "Lâmina"',
    role: "Fundador & Master",
    specialty: "Especialista em cortes clássicos e barboterapia.",
    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Bruno Cavalcante",
    role: "Especialista em Visagismo",
    specialty: "Referência em barbas modeladas e fade moderno.",
    img: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1030&auto=format&fit=crop",
  },
  {
    name: "Henrique Nobre",
    role: "Tradição Italiana",
    specialty: "Mestre em técnicas de navalha e toalha quente.",
    img: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=987&auto=format&fit=crop",
  },
];

export default function Barbers() {
  return (
    <section id="barbeiros" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Os Mestres
          </p>
          <h3 className="font-serif font-bold text-on-surface text-4xl md:text-5xl">
            Artesãos da Lâmina
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((b) => (
            <div
              key={b.name}
              className="group relative overflow-hidden aspect-[3/4] gold-border-glow"
            >
              <img
                src={b.img}
                alt={b.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-xs text-primary uppercase tracking-widest mb-2">
                  {b.role}
                </p>
                <h4 className="font-serif font-semibold text-on-surface text-2xl mb-2">
                  {b.name}
                </h4>
                <p className="font-sans text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {b.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
