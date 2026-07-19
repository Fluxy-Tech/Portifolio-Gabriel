import { motion } from "framer-motion";
import "./Education.css";

const HIGHLIGHTS = [
  "Engenharia de Software — arquiteturas, mensageria, Clean Code, Scrum e Kanban.",
  "Desenvolvimento Web — React, Node.js, Python, Java, JavaScript e C#.",
  "Banco de Dados — SQL Server, PostgreSQL e MongoDB.",
  "Matemática — Matemática Discreta e Estatística.",
];

const DIFERENCIAIS = [
  {
    n: "01",
    title: "Inteligência Artificial",
    text: "Experiência prática integrando agentes de IA, automação inteligente e LLMs via API.",
  },
  {
    n: "02",
    title: "WhatsApp Business API (Meta)",
    text: "Desenvolvimento de fluxos de atendimento e automação via API oficial da Meta.",
  },
  {
    n: "03",
    title: "Engenharia de Software",
    text: "Aplicação de SOLID, Clean Architecture e Clean Code no dia a dia.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Education() {
  return (
    <section id="formacao" className="section education">
      <div className="wrap education__grid">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <span className="eyebrow"><span className="index-num">04</span> — Formação</span>
          <h2 className="section-heading education__heading">
            Base acadêmica,
            <br />
            <em>prática de mercado.</em>
          </h2>

          <div className="education__card">
            <p className="education__degree">Bacharelado em Sistemas de Informação</p>
            <p className="education__meta mono">Faculdade Uniube · 8º período · Jan 2023 – Dez 2026</p>
            <ul className="education__points">
              {HIGHLIGHTS.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="diferenciais"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <span className="eyebrow">Diferenciais</span>
          <ul className="diferenciais__list">
            {DIFERENCIAIS.map((d) => (
              <li key={d.n} className="diferenciais__item">
                <span className="mono diferenciais__n">{d.n}</span>
                <div>
                  <h3 className="diferenciais__title">{d.title}</h3>
                  <p className="diferenciais__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
