const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Cliente desde 2015",
    text: "A Imperial transformou minha relação com o próprio estilo. O Márcio é um artista — cada detalhe é pensado com precisão.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Felipe Andrade",
    role: "Cliente desde 2018",
    text: "Ambiente impecável, atendimento excepcional. O Bruno entende exatamente o que você precisa sem precisar explicar muito.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Marcos Vinicius",
    role: "Cliente desde 2020",
    text: "A barboterapia do Henrique é diferente de tudo que já experimentei. Saio de lá renovado. Não troco por nada.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Depoimentos
          </p>
          <h3 className="font-serif font-bold text-on-surface text-4xl md:text-5xl">
            O Que Dizem Nossos Clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container p-8 border border-primary-container/15 hover:border-primary-container/35 transition-all duration-300"
            >
              {/* Quote */}
              <p className="font-serif text-4xl text-primary-container mb-4 leading-none">
                "
              </p>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-8 italic">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-primary-container/10 pt-6">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-primary-container/40">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-on-surface text-sm">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
