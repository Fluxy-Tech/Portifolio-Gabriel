import { motion } from "framer-motion";
import "./Stacks.css";

const CATEGORIES = [
  {
    n: "01",
    title: "Front-End",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "CSS3", "Tailwind", "Shadcn", "Bootstrap", "Material UI"],
  },
  {
    n: "02",
    title: "Back-End",
    items: ["Node.js", "Python", "Java", "Go", "C# / .NET"],
  },
  {
    n: "03",
    title: "Dados & Cache",
    items: ["PostgreSQL", "pgvector", "MySQL", "SQL Server", "SQLite", "MongoDB", "BigQuery", "Redis", "Dragonfly", "SeaweedFS / S3"],
  },
  {
    n: "04",
    title: "IA & Integrações",
    items: ["Claude Code", "Lovable", "Gemini", "OpenAI", "Google ADK", "LLM / GPT APIs", "LangChain", "LangGraph", "RAG", "WhatsApp API (Meta)"],
  },
  {
    n: "05",
    title: "DevOps & Engenharia",
    items: ["Docker", "Git / GitHub", "Jest", "RabbitMQ", "Kafka", "Better-Auth", "Clean Code", "SOLID", "Arquitetura Hexagonal", "Clean Architecture", "MVC", "Scrum", "Kanban"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Stacks() {
  return (
    <section id="stack" className="section section--dark stacks">
      <div className="blueprint-grid" />
      <div className="wrap">
        <span className="eyebrow eyebrow--dark"><span className="index-num">02</span> — Stack técnica</span>
        <h2 className="section-heading stacks__heading">
          Ferramentas que uso
          <br />
          <em>para tirar ideias do papel.</em>
        </h2>

        <div className="stacks__grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              className="stack-card"
              key={cat.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <div className="stack-card__head">
                <span className="mono stack-card__n">{cat.n}</span>
                <h3 className="stack-card__title">{cat.title}</h3>
              </div>
              <ul className="stack-card__list">
                {cat.items.map((item) => (
                  <li key={item} className="mono">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
