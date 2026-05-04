const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/5511987654321" },
  { label: "Facebook", href: "#" },
];

const footerLinks = [
  { label: "Termos de Uso", href: "#" },
  { label: "Privacidade", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0f0f] border-t border-[rgba(212,175,55,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif font-bold text-[#f2ca50] uppercase tracking-widest text-lg mb-3">
              Imperial Lauzane
            </p>
            <p className="font-sans text-xs text-[#d0c5af] leading-relaxed">
              Tradição, precisão e estilo para o homem que se respeita. Desde
              2012 em Lauzane Paulista, São Paulo.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-[#e2e2e2] mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Home",
                "Sobre",
                "Serviços",
                "Barbeiros",
                "Localização",
                "Contato",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s/g, "")}`}
                    className="font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-[#e2e2e2] mb-4">
              Contato
            </p>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-xs text-[#d0c5af]">
                (11) 98765-4321
              </li>
              <li className="font-sans text-xs text-[#d0c5af]">
                contato@imperiallauzane.com.br
              </li>
              <li className="font-sans text-xs text-[#d0c5af]">
                Seg–Sex: 09h–21h · Sáb: 08h–19h
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-[#e2e2e2] mb-4">
              Redes Sociais
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors duration-300 tracking-wider"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 opacity-20">
          <div className="h-px flex-1 bg-[#f2ca50]" />
          <svg
            className="fill-[#f2ca50] shrink-0"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <polygon points="5,0 6.2,3.8 10,3.8 7,6.1 8.1,10 5,7.5 1.9,10 3,6.1 0,3.8 3.8,3.8" />
          </svg>
          <div className="h-px flex-1 bg-[#f2ca50]" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[#d0c5af]">
            © {new Date().getFullYear()} Barbearia Imperial Lauzane. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
