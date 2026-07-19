import { motion } from "framer-motion";
import portrait from "../assets/gabriel.webp";
import "./Hero.css";

const TICKER_ITEMS = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "PYTHON", "JAVA / SPRING BOOT",
  "LANGCHAIN", "LANGGRAPH", "POSTGRESQL", "DOCKER", "WHATSAPP API",
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="blueprint-grid" />
      <div className="grain" />

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <motion.p className="eyebrow eyebrow--dark" custom={0} variants={fadeUp} initial="hidden" animate="show">
            Desenvolvedor Full-Stack — Front-End &amp; Back-End &amp; IA
          </motion.p>

          <motion.h1 className="hero__name" custom={1} variants={fadeUp} initial="hidden" animate="show">
            Gabriel Lopes
            <br />
            <em>Souza</em>
          </motion.h1>

          <motion.p className="hero__lede" custom={2} variants={fadeUp} initial="hidden" animate="show">
            Construo aplicações web escaláveis, APIs robustas e agentes de IA
            aplicada — de bancos e fintechs a plataformas de e-commerce, da
            arquitetura à entrega ponta a ponta.
          </motion.p>

          <motion.div className="hero__actions" custom={3} variants={fadeUp} initial="hidden" animate="show">
            <a href="#experiencia" className="btn btn--on-dark">Ver experiência ↓</a>
            <a href="#contato" className="btn btn--solid-on-dark">Falar comigo</a>
          </motion.div>

          <motion.div className="hero__meta mono" custom={4} variants={fadeUp} initial="hidden" animate="show">
            <span>Uberlândia, MG — Brasil</span>
            <span className="hero__meta-sep">/</span>
            <span>PT-BR · EN</span>
            <span className="hero__meta-sep">/</span>
            <span>Remoto · Híbrido · Presencial</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__portrait-frame">
            <img src={portrait} alt="Retrato de Gabriel Lopes Souza" />
          </div>
          <div className="hero__portrait-tag mono">
            <span>GL / 01</span>
            <span>Uberlândia — MG</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="mono" key={i}>
              {item} <span aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
