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
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-[rgba(212,175,55,0.15)] ${
        scrolled
          ? "bg-[rgba(10,10,10,0.97)] backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-[#f2ca50] font-serif font-bold tracking-tighter text-xl uppercase"
        >
          Imperial<span className="text-[#e2e2e2]"> Lauzane</span>
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
                  ? "text-[#f2ca50] border-b border-[#f2ca50] pb-0.5"
                  : "text-[#d0c5af] hover:text-[#f2ca50]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contato"
          className="hidden md:block bg-[#d4af37] text-[#3c2f00] px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-[#e9c349] active:scale-95"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f2ca50]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0f0f] border-t border-[rgba(212,175,55,0.15)] px-6 py-6 flex flex-col gap-5">
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
                  ? "text-[#f2ca50]"
                  : "text-[#d0c5af] hover:text-[#f2ca50]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-[#d4af37] text-[#3c2f00] px-6 py-2 text-xs font-semibold tracking-widest uppercase text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
