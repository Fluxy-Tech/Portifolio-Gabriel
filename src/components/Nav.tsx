import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#topo" className="nav__mark mono">
          GL<span className="nav__mark-dot">.</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link mono">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="nav__cta mono">
          Disponível para novos projetos
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__mobile-link mono"
            style={{ transitionDelay: `${i * 40}ms` }}
            onClick={() => setOpen(false)}
          >
            <span className="index-num">0{i + 1}</span> {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
