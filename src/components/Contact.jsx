import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#1a1c1c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-sans text-xs text-[#f2ca50] tracking-[0.2em] uppercase mb-4">
              Fale Conosco
            </p>
            <h3 className="font-serif font-bold text-[#e2e2e2] text-4xl md:text-5xl leading-tight mb-6">
              Agende Sua Visita
            </h3>
            <p className="font-sans text-base text-[#d0c5af] leading-relaxed mb-8">
              Preencha o formulário e entraremos em contato para confirmar seu
              horário. Também atendemos via WhatsApp para maior comodidade.
            </p>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase text-[#3c2f00] bg-[#d4af37] px-8 py-4 transition-all hover:bg-[#e9c349] active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3c2f00]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-[#1e2020] p-10 border border-[rgba(212,175,55,0.15)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[rgba(212,175,55,0.15)] flex items-center justify-center">
                  <svg
                    className="fill-[#f2ca50]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-[#e2e2e2]">
                  Mensagem Enviada!
                </h4>
                <p className="font-sans text-sm text-[#d0c5af]">
                  Entraremos em contato em breve para confirmar seu horário.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {/* Name */}
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-[#d0c5af] focus:border-[#f2ca50] outline-none pt-5 pb-2 font-sans text-sm text-[#e2e2e2] transition-colors duration-300"
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-1 left-0 font-sans text-[10px] tracking-widest uppercase text-[#d0c5af] peer-focus:text-[#f2ca50] transition-colors duration-300"
                  >
                    Nome Completo
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-[#d0c5af] focus:border-[#f2ca50] outline-none pt-5 pb-2 font-sans text-sm text-[#e2e2e2] transition-colors duration-300"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-1 left-0 font-sans text-[10px] tracking-widest uppercase text-[#d0c5af] peer-focus:text-[#f2ca50] transition-colors duration-300"
                  >
                    Telefone / WhatsApp
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-[#d0c5af] focus:border-[#f2ca50] outline-none pt-5 pb-2 font-sans text-sm text-[#e2e2e2] transition-colors duration-300 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute top-1 left-0 font-sans text-[10px] tracking-widest uppercase text-[#d0c5af] peer-focus:text-[#f2ca50] transition-colors duration-300"
                  >
                    Mensagem
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase text-[#3c2f00] bg-[#d4af37] px-8 py-4 transition-all hover:bg-[#e9c349] active:scale-95"
                >
                  <Send size={14} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
