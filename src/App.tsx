import { motion } from 'framer-motion'
import { ArrowUpRight, Brain, Briefcase, Cloud, Code2, Database, FileText, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'
import { useState } from 'react'

type Project = {
  num: string
  title: string
  tag: string
  description: string
  link: string
}

type Experience = {
  role: string
  company: string
  period: string
  location: string
  icon: React.ReactNode
  points: string[]
}

type SkillGroup = {
  title: string
  icon: React.ReactNode
  items: string[]
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Brand Guardian AI',
    tag: 'Agentic AI · LangGraph · Azure · GPT-4o',
    description:
      'Multi-modal YouTube ad compliance engine. LangGraph orchestrates Azure Video Indexer, RAG retrieval from Azure AI Search, and GPT-4o auditing against real FTC rules — cutting review time by ~80%.',
    link: 'https://brandgurdian.azurewebsites.net',
  },
  {
    num: '02',
    title: 'DocLense',
    tag: 'RAG · LangGraph · Qdrant · Azure',
    description:
      'PDF-native Q&A platform. LangGraph pipeline classifies intent and adaptively escalates from GPT-4o-mini to GPT-4o. Top-15 chunk retrieval from Qdrant, conversation history in MongoDB, deployed on Azure Container Apps.',
    link: 'https://doclense-server.victoriousisland-1f528db7.polandcentral.azurecontainerapps.io',
  },
  {
    num: '03',
    title: 'MSc Research — Lottery Ticket Hypothesis',
    tag: 'PyTorch · RNN · Pruning · Research',
    description:
      'Comparing Gradient Descent vs Exponential Gradient optimisers on Fashion-MNIST with a recurrent network. Applies iterative magnitude pruning with weight rewinding and network topology analysis.',
    link: 'https://github.com/ShibjiRout/Msc_project',
  },
  {
    num: '04',
    title: 'Student Performance Predictor',
    tag: 'ML · Scikit-Learn · Docker · Azure',
    description:
      'End-to-end pipeline benchmarking 9 regression models via GridSearchCV. Ridge Regression selected at 88.06% R². Modular ingestion, transformation, and trainer components deployed to Azure via Docker CI/CD.',
    link: 'https://shibji-student-per.azurewebsites.net/',
  },
]

const experiences: Experience[] = [
  {
    role: 'Application Development Analyst',
    company: 'Accenture',
    period: '2021 – 2023',
    location: 'India',
    icon: <Briefcase size={16} />,
    points: [
      'Managed high-consequence financial modules processing 1M+ records with zero critical failures',
      'Reduced system latency by 70% through pipeline and async processing optimisations',
      'Maintained 99.9% uptime across production environments with 97% SLA compliance',
    ],
  },
  {
    role: 'MSc Advanced Computer Science',
    company: 'University of Leeds',
    period: '2023 – 2024',
    location: 'Leeds, UK',
    icon: <GraduationCap size={16} />,
    points: [
      'Graduated with Merit — specialising in machine learning and intelligent systems',
      'Dissertation: Lottery Ticket Hypothesis on RNNs with custom EG optimiser',
      'Deep coursework in neural networks, distributed systems, and software engineering',
    ],
  },
]

const skillGroups: SkillGroup[] = [
  { title: 'AI & Agents', icon: <Brain size={16} />, items: ['LangChain', 'LangGraph', 'RAG Systems', 'Prompt Engineering', 'Agentic Workflows', 'MCP'] },
  { title: 'ML & Data', icon: <Layers3 size={16} />, items: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy'] },
  { title: 'Retrieval & Memory', icon: <Database size={16} />, items: ['Qdrant', 'ChromaDB', 'Milvus', 'PostgreSQL', 'Neo4j', 'Semantic Search'] },
  { title: 'Backend', icon: <Code2 size={16} />, items: ['FastAPI', 'Flask', 'Python Asyncio', 'REST APIs', 'SQL', 'Node.js'] },
  { title: 'Cloud & DevOps', icon: <Cloud size={16} />, items: ['Azure Container Apps', 'Azure ACR', 'Docker', 'GitHub Actions', 'CI/CD', 'System Design'] },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site">
      {/* ── NAV ── */}
      <header className="nav">
        <a className="nav-brand" href="#home">
          <span className="nav-avatar">SR</span>
          <span>Shibji Shekhar Rout</span>
        </a>

        <nav className="nav-links">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav-end">
          <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:mrshibji@gmail.com" className="btn-solid">
            Hire Me
          </a>
        </div>

        <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label="menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && (
        <motion.div className="mobile-nav" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="mailto:mrshibji@gmail.com" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}

      <main>
        {/* ── HERO ── */}
        <section className="hero" id="home">
          <motion.div className="hero-content" initial="hidden" animate="show">
            <motion.p className="hero-tag" custom={0} variants={fadeUp}>
              AI Engineer &nbsp;·&nbsp; Agentic Systems &nbsp;·&nbsp; Leeds, UK
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp}>
              Architecting AI<br />systems that<br /><em>actually work.</em>
            </motion.h1>
            <motion.p className="hero-desc" custom={2} variants={fadeUp}>
              I build end-to-end agentic AI — LangGraph pipelines, production RAG systems, and
              ML solutions. Ex-Accenture. MSc Computer Science, University of Leeds.
            </motion.p>
            <motion.div className="hero-actions" custom={3} variants={fadeUp}>
              <a className="btn-solid" href="#projects">See My Work</a>
              <a className="btn-outline" href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer">
                <FileText size={16} /> Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="hstat">
              <strong>4+</strong>
              <span>Production Projects</span>
            </div>
            <div className="hstat-div" />
            <div className="hstat">
              <strong>2+</strong>
              <span>Years at Accenture</span>
            </div>
            <div className="hstat-div" />
            <div className="hstat">
              <strong>70%</strong>
              <span>Latency Reduced</span>
            </div>
            <div className="hstat-div" />
            <div className="hstat">
              <strong>1M+</strong>
              <span>Records Managed</span>
            </div>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section about-section" id="about">
          <div className="section-row">
            <div className="section-col-label">
              <span className="label-tag">About</span>
            </div>
            <div className="section-col-content">
              <motion.h2
                className="about-headline"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp}
              >
                I turn complex AI research into production systems that ship.
              </motion.h2>
              <motion.p
                className="about-body"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={1} variants={fadeUp}
              >
                I specialise in retrieval-augmented generation (RAG) and autonomous multi-agent
                systems. With a background in managing enterprise-scale financial infrastructure at
                Accenture, I understand what it means to build for reliability, performance, and scale.
                My MSc research gave me a deep foundation in neural network theory — I bring both
                the practical and the academic to every project.
              </motion.p>
              <motion.div
                className="about-pills"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={2} variants={fadeUp}
              >
                <span><GraduationCap size={14} /> MSc, University of Leeds</span>
                <span><Briefcase size={14} /> Ex-Accenture Analyst</span>
                <span><MapPin size={14} /> Leeds, UK</span>
                <span><Cloud size={14} /> Azure Certified</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section" id="projects">
          <div className="section-row section-row-top">
            <div className="section-col-label">
              <span className="label-tag">Work</span>
            </div>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <motion.a
                key={p.num}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.5} variants={fadeUp}
              >
                <div className="project-card-top">
                  <span className="project-num">{p.num}</span>
                  <ArrowUpRight size={20} className="project-arrow" />
                </div>
                <h3>{p.title}</h3>
                <p className="project-tag-line">{p.tag}</p>
                <p className="project-desc">{p.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section" id="experience">
          <div className="section-row section-row-top">
            <div className="section-col-label">
              <span className="label-tag">Experience</span>
            </div>
            <h2 className="section-title">Where I've worked</h2>
          </div>
          <div className="exp-list">
            {experiences.map((e, i) => (
              <motion.div
                key={e.company}
                className="exp-item"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.5} variants={fadeUp}
              >
                <div className="exp-left">
                  <div className="exp-icon">{e.icon}</div>
                  <div>
                    <div className="exp-period">{e.period}</div>
                    <div className="exp-loc"><MapPin size={12} />{e.location}</div>
                  </div>
                </div>
                <div className="exp-right">
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                  <ul className="exp-points">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="section-row section-row-top">
            <div className="section-col-label">
              <span className="label-tag">Skills</span>
            </div>
            <h2 className="section-title">Technical Stack</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                className="skill-block"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i * 0.4} variants={fadeUp}
              >
                <div className="skill-block-title">
                  <span className="skill-icon">{g.icon}</span>
                  {g.title}
                </div>
                <div className="skill-chips">
                  {g.items.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <motion.div
            className="contact-inner"
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="label-tag">Contact</span>
            <h2>Let's work together.</h2>
            <p>
              Open to AI Engineer roles, freelance ML projects, and research collaborations.
              I respond within 24 hours.
            </p>
            <div className="contact-actions">
              <a className="btn-solid btn-lg" href="mailto:mrshibji@gmail.com">
                <Mail size={18} /> mrshibji@gmail.com
              </a>
              <a className="btn-outline btn-lg" href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="btn-outline btn-lg" href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer">
                <FileText size={18} /> Resume
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <a className="nav-brand" href="#home">
            <span className="nav-avatar nav-avatar-sm">SR</span>
            <span>Shibji Shekhar Rout</span>
          </a>
          <p>© 2025 · AI Engineer · Leeds, UK</p>
          <div className="footer-icons">
            <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href="mailto:mrshibji@gmail.com"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
