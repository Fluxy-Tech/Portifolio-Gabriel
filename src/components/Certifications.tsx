import { motion } from "framer-motion";
import "./Certifications.css";

const CERTIFICATES = [
  {
    n: "01",
    title: "Formação Google BigQuery",
    issuer: "Alura",
    topics: [
      "Manipulação de dados",
      "Funções lógicas e numéricas",
      "Strings e Data",
      "Navegando na nuvem",
      "Consultas avançadas",
    ],
    href: "https://cursos.alura.com.br/degree/certificate/532aa153-a5fe-40d6-ad9d-2f783f28ad27",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  return (
    <section id="certificacoes" className="section certifications">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <span className="eyebrow"><span className="index-num">05</span> — Certificações</span>
          <h2 className="section-heading certifications__heading">
            Aprendizado contínuo,
            <br />
            <em>validado na prática.</em>
          </h2>
        </motion.div>

        <ul className="certifications__list">
          {CERTIFICATES.map((c) => (
            <motion.li
              className="certificate-card"
              key={c.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
            >
              <span className="mono certificate-card__n">{c.n}</span>
              <div className="certificate-card__body">
                <div className="certificate-card__head">
                  <h3 className="certificate-card__title">{c.title}</h3>
                  <span className="mono certificate-card__issuer">{c.issuer}</span>
                </div>
                <ul className="certificate-card__topics">
                  {c.topics.map((t) => (
                    <li key={t} className="mono">{t}</li>
                  ))}
                </ul>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-card__link mono link-underline"
                >
                  Ver certificado ↗
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
