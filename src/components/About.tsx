import { motion } from "framer-motion";
import "./About.css";

const SPECS = [
  { label: "Localização", value: "Uberlândia, MG — Brasil" },
  { label: "Idiomas", value: "Português (nativo) · Inglês (intermediário)" },
  { label: "Formação", value: "Sistemas de Informação — Uniube, 8º período" },
  { label: "Foco atual", value: "Desenvolvimento web full-stack & IA aplicada em agentes conversacionais" },
  { label: "Disponibilidade", value: "Presencial · Híbrido · Remoto" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="wrap about__grid">
        <motion.div
          className="about__intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <span className="eyebrow"><span className="index-num">01</span> — Sobre mim</span>
          <h2 className="section-heading">
            Do código à decisão de negócio,
            <br />
            <em>pensando em escala.</em>
          </h2>

          <p className="about__lede">
            Desenvolvedor Full-Stack com atuação em Front-End e Back-End,
            especializado em construir aplicações web escaláveis, APIs
            RESTful e soluções de Inteligência Artificial aplicada —
            incluindo agentes conversacionais e integrações com a API oficial
            do WhatsApp (Meta).
          </p>
          <p className="about__lede">
            Sólido em <strong>React, Next.js e TypeScript</strong> no
            Front-End e em <strong>Node.js, Java (Spring Boot) e Python</strong>{" "}
            no Back-End, com experiência prática em arquiteturas Hexagonal e
            MVC, princípios SOLID/Clean Code e metodologias ágeis. Já atuei em
            projetos para instituições financeiras (Bradesco, Mercantil) e
            plataformas de e-commerce, contribuindo desde a arquitetura até a
            entrega de features de ponta a ponta.
          </p>
        </motion.div>

        <motion.dl
          className="about__specs mono"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          {SPECS.map((spec) => (
            <div className="about__spec-row" key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
