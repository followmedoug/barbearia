import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#barbeiros", label: "Barbeiros" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-primary-container/15 ${
        scrolled
          ? "bg-overlay backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-primary font-serif font-bold tracking-tighter text-xl uppercase"
        >
          Imperial
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                active === link.href
                  ? "text-primary border-b border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contato"
          className="hidden md:block bg-primary-container text-on-primary px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-surface-tint active:scale-95"
        >
          Marcar Horário
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-primary-container/15 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
              className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                active === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-primary-container text-on-primary px-6 py-2 text-xs font-semibold tracking-widest uppercase text-center"
          >
            Marcar Horário
          </a>
        </div>
      )}
    </nav>
  );
}
