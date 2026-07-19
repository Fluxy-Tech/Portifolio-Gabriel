import { motion } from "framer-motion";
import "./Contact.css";

const CHANNELS = [
  { label: "E-mail", value: "lopes.biel2588@gmail.com", href: "mailto:lopes.biel2588@gmail.com" },
  { label: "Telefone", value: "+55 34 99780-1829", href: "tel:+5534997801829" },
  { label: "LinkedIn", value: "linkedin.com/in/gabriel-lopes", href: "https://linkedin.com/in/gabriel-lopes" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <footer id="contato" className="section section--dark contact">
      <div className="blueprint-grid" />
      <div className="grain" />
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <span className="eyebrow eyebrow--dark"><span className="index-num">06</span> — Contato</span>
          <h2 className="contact__heading">
            Vamos construir
            <br />
            <em>algo juntos.</em>
          </h2>
          <p className="contact__lede">
            Disponível para oportunidades presenciais, híbridas ou remotas.
            Me chame e vamos conversar sobre o seu projeto.
          </p>

          <a href="mailto:lopes.biel2588@gmail.com" className="contact__mail mono link-underline">
            lopes.biel2588@gmail.com
          </a>
        </motion.div>

        <motion.ul
          className="contact__channels mono"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <span className="contact__channel-label">{c.label}</span>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-underline">
                {c.value}
              </a>
            </li>
          ))}
        </motion.ul>

        <div className="contact__bottom mono">
          <span>© {new Date().getFullYear()} Gabriel Lopes Souza</span>
          <span>Uberlândia, MG — Brasil</span>
          <a href="#topo" className="link-underline">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
