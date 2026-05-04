const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Cliente desde 2015",
    text: "A Imperial Lauzane transformou minha relação com o próprio estilo. O Ricardo é um artista — cada detalhe é pensado com precisão.",
    avatar: "C",
  },
  {
    name: "Felipe Andrade",
    role: "Cliente desde 2018",
    text: "Ambiente impecável, atendimento excepcional. O Lucas entende exatamente o que você precisa sem precisar explicar muito.",
    avatar: "F",
  },
  {
    name: "Marcos Vinicius",
    role: "Cliente desde 2020",
    text: "A barboterapia do Gabriel é diferente de tudo que já experimentei. Saio de lá renovado. Não troco por nada.",
    avatar: "M",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1c1c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-[#f2ca50] tracking-[0.2em] uppercase mb-4">
            Depoimentos
          </p>
          <h3 className="font-serif font-bold text-[#e2e2e2] text-4xl md:text-5xl">
            O Que Dizem Nossos Clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1e2020] p-8 border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-300"
            >
              {/* Quote */}
              <p className="font-serif text-4xl text-[#d4af37] mb-4 leading-none">
                "
              </p>
              <p className="font-sans text-sm text-[#d0c5af] leading-relaxed mb-8 italic">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-[rgba(212,175,55,0.1)] pt-6">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-[#3c2f00] font-bold font-serif text-lg shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#e2e2e2] text-sm">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-[#d0c5af]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
