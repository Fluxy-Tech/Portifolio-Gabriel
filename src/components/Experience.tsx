import { motion } from "framer-motion";
import "./Experience.css";

const ROLES = [
  {
    period: "Out 2025 — Atual",
    role: "Analista de Implementação",
    org: "ColmeIA (Banco Mercantil)",
    place: "São Paulo — Remoto",
    bullets: [
      "Node.js + TypeScript: desenvolvimento e manutenção de aplicações internas.",
      "IA: fluxos de conversa para agentes de IA em Python com LangChain e LangGraph.",
      "APIs RESTful: integrações e conexões com APIs de terceiros.",
      "Arquitetura de software para processamento de grande volume de dados.",
      "GCP e BigQuery: consultas avançadas em nuvem para suporte a decisões de negócio.",
    ],
  },
  {
    period: "Mai 2026 — Atual",
    role: "Desenvolvedor Full-Stack",
    org: "Viva Vino",
    place: "Uberlândia — Temporário",
    bullets: [
      "Back-end em Node.js/TypeScript: checkout, pagamentos, auth e estoque em tempo real.",
      "IA: agentes para enriquecimento automatizado de catálogo e fichas técnicas.",
      "Front-end em React e Vite, com foco em UX/UI e taxa de conversão.",
      "Evolução da arquitetura para escala em grandes volumes de produtos e clientes.",
      "PostgreSQL, Redis para cache e storage compatível com S3.",
    ],
  },
  {
    period: "Jan 2025 — Out 2025",
    role: "Desenvolvedor Full-Stack",
    org: "Telek Sistema — Banco Bradesco e outras empresas",
    place: "Uberlândia, MG",
    bullets: [
      "Next.js, TypeScript e React: aplicações completas com autenticação e alto volume de dados.",
      "APIs RESTful com Node.js/Express e Python.",
      "Integração com a API oficial do WhatsApp Business (Meta).",
      "PostgreSQL, MySQL e MongoDB.",
      "Docker e EasyPanel para deploy; RabbitMQ para arquiteturas orientadas a eventos.",
    ],
  },
  {
    period: "Dez 2023 — Jan 2025",
    role: "Desenvolvedor Back-End / Chatbot",
    org: "Telek Sistema",
    place: "Uberlândia, MG",
    bullets: [
      "Desenvolvimento de chatbots corporativos na plataforma Blip.",
      "Integrações com Sankhya ERP, RD Station e WhatsApp API (Meta).",
      "APIs REST com arquitetura MVC, Node.js + TypeScript.",
      "Agentes conversacionais com OpenAI, Gemini e Google ADK.",
    ],
  },
  {
    period: "Out 2023 — Dez 2023",
    role: "Estagiário em Desenvolvimento",
    org: "Telek Sistema",
    place: "Uberlândia, MG",
    bullets: [
      "Desenvolvimento de chatbots na plataforma Blip com Node.js.",
      "Integrações iniciais com sistemas Blip e APIs de terceiros.",
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="wrap">
        <span className="eyebrow"><span className="index-num">03</span> — Experiência</span>
        <h2 className="section-heading experience__heading">
          Uma trajetória construída
          <br />
          <em>entrega após entrega.</em>
        </h2>

        <ol className="experience__list">
          {ROLES.map((r) => (
            <motion.li
              className="experience__item"
              key={r.role + r.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
            >
              <div className="experience__period mono">{r.period}</div>
              <div className="experience__body">
                <h3 className="experience__role">{r.role}</h3>
                <p className="experience__org mono">{r.org} · {r.place}</p>
                <ul className="experience__bullets">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
