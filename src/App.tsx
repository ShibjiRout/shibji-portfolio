import { motion } from 'framer-motion'
import { ArrowUpRight, Brain, Briefcase, Cloud, Code2, Database, FileText, Github, GraduationCap, Layers3, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const skills = ['LangGraph', 'RAG Systems', 'PyTorch', 'FastAPI', 'Azure', 'Docker', 'LangChain', 'Qdrant', 'ChromaDB', 'Scikit-Learn', 'GitHub Actions', 'FastAPI', 'Neo4j', 'GPT-4o', 'Prompt Engineering']

const projects = [
  {
    num: '01',
    title: 'Brand Guardian AI',
    role: 'Agentic AI System',
    year: '2024',
    desc: 'Multi-modal YouTube ad compliance engine using LangGraph, Azure Video Indexer, and GPT-4o. Cuts review time by ~80%.',
    tags: ['LangGraph', 'Azure', 'GPT-4o'],
    color: '#0d1117',
    accent: '#2563eb',
    link: 'https://brandgurdian.azurewebsites.net',
  },
  {
    num: '02',
    title: 'DocLense',
    role: 'RAG Platform',
    year: '2024',
    desc: 'PDF-native Q&A with adaptive GPT-4o escalation, Qdrant vector retrieval, and MongoDB conversation history on Azure Container Apps.',
    tags: ['RAG', 'Qdrant', 'Azure'],
    color: '#eff6ff',
    accent: '#1d4ed8',
    link: 'https://doclense-server.victoriousisland-1f528db7.polandcentral.azurecontainerapps.io',
  },
  {
    num: '03',
    title: 'MSc Research',
    role: 'ML Research',
    year: '2024',
    desc: 'Lottery Ticket Hypothesis on Fashion-MNIST with RNN, comparing GD vs EG optimisers with iterative magnitude pruning.',
    tags: ['PyTorch', 'RNN', 'Research'],
    color: '#fafaf9',
    accent: '#374151',
    link: 'https://github.com/ShibjiRout/Msc_project',
  },
  {
    num: '04',
    title: 'Student Performance Predictor',
    role: 'ML Pipeline',
    year: '2023',
    desc: '9 regression models benchmarked via GridSearchCV. Ridge Regression at 88.06% R². Deployed to Azure via Docker CI/CD.',
    tags: ['Scikit-Learn', 'Docker', 'Azure'],
    color: '#f7f7f5',
    accent: '#374151',
    link: 'https://shibji-student-per.azurewebsites.net/',
  },
]

const experiences = [
  {
    role: 'Application Development Analyst',
    company: 'Accenture',
    period: '2021 – 2023',
    location: 'India',
    icon: <Briefcase size={15} />,
    points: ['Managed financial modules processing 1M+ records with zero critical failures', 'Cut system latency by 70% through pipeline and async optimisations', 'Maintained 99.9% uptime with 97% SLA compliance across production systems'],
  },
  {
    role: 'MSc Advanced Computer Science',
    company: 'University of Leeds',
    period: '2023 – 2024',
    location: 'Leeds, UK',
    icon: <GraduationCap size={15} />,
    points: ['Graduated with Merit — ML and intelligent systems specialisation', 'Dissertation: Lottery Ticket Hypothesis on RNNs with custom EG optimiser', 'Modules: neural networks, distributed systems, software engineering'],
  },
]

const skillGroups = [
  { title: 'AI & Agents', icon: <Brain size={15} />, items: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'MCP', 'Agentic Workflows'] },
  { title: 'ML & Data', icon: <Layers3 size={15} />, items: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy'] },
  { title: 'Retrieval', icon: <Database size={15} />, items: ['Qdrant', 'ChromaDB', 'Milvus', 'PostgreSQL', 'Neo4j', 'Semantic Search'] },
  { title: 'Backend', icon: <Code2 size={15} />, items: ['FastAPI', 'Flask', 'Python Asyncio', 'REST APIs', 'SQL', 'Node.js'] },
  { title: 'Cloud', icon: <Cloud size={15} />, items: ['Azure Container Apps', 'Azure ACR', 'Docker', 'GitHub Actions', 'CI/CD'] },
]

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="root">

      {/* ── NAVBAR ── */}
      <header className="navbar">
        <a href="#home" className="logo">Shibji<span>.</span></a>
        <nav className="navbar-links">
          {nav.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="navbar-right">
          <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer" className="icon-link"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" className="icon-link"><Linkedin size={18} /></a>
          <a href="mailto:mrshibji@gmail.com" className="pill-btn">Let's Talk</a>
        </div>
        <button className="burger" onClick={() => setOpen(v => !v)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      {open && (
        <motion.div className="drawer" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {nav.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href="mailto:mrshibji@gmail.com" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <motion.div className="available-badge" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="dot" /> Available for opportunities
        </motion.div>

        <div className="hero-name-row">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Shibji<br />Shekhar<br />Rout
          </motion.h1>
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/Shibji_Github.png" alt="Shibji Shekhar Rout" className="hero-photo" />
          </motion.div>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="hero-meta">
            <p className="hero-role">AI Engineer · Agentic Systems</p>
            <p className="hero-location">Leeds, UK · Open to Remote</p>
          </div>
          <p className="hero-desc">
            I build end-to-end AI systems — LangGraph agents, RAG pipelines, and ML solutions
            that are fast, secure, and production-ready. Ex-Accenture. MSc Computer Science.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="pill-btn pill-btn-lg">See My Work <ArrowUpRight size={16} /></a>
            <a href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer" className="ghost-btn ghost-btn-lg"><FileText size={16} /> Resume</a>
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="marquee-item">{s} <span className="marquee-dot">·</span></span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-tag">About</span>
            <div className="about-stats">
              <div className="astat"><strong>2+</strong><span>Years Industry</span></div>
              <div className="astat"><strong>4+</strong><span>Live Projects</span></div>
              <div className="astat"><strong>MSc</strong><span>Leeds Uni</span></div>
              <div className="astat"><strong>1M+</strong><span>Records Managed</span></div>
            </div>
          </div>
          <div className="about-right">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              I turn complex AI research into systems that actually ship — reliably, at scale.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              At Accenture I managed enterprise-grade financial infrastructure — 1M+ records, near-zero downtime,
              97% SLA compliance. That background informs how I build AI: I care deeply about production reliability,
              not just demo accuracy. My MSc at the University of Leeds gave me a strong ML theory foundation,
              from neural network optimisation to distributed systems.
            </motion.p>
            <motion.div className="about-links" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer" className="about-link"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" className="about-link"><Linkedin size={16} /> LinkedIn</a>
              <a href="mailto:mrshibji@gmail.com" className="about-link"><Mail size={16} /> Email</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="work">
        <div className="section-header">
          <span className="section-tag">Work</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="pcard"
              style={{ '--card-bg': p.color, '--card-accent': p.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pcard-top">
                <div className="pcard-meta">
                  <span className="pcard-num">{p.num}</span>
                  <span className="pcard-year">{p.year}</span>
                </div>
                <ArrowUpRight size={22} className="pcard-arrow" />
              </div>
              <div className="pcard-body">
                <p className="pcard-role">{p.role}</p>
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-desc">{p.desc}</p>
              </div>
              <div className="pcard-tags">
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>
        <div className="exp-list">
          {experiences.map((e, i) => (
            <motion.div
              key={e.company}
              className="exp-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="exp-head">
                <div className="exp-icon-wrap">{e.icon}</div>
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <div className="exp-sub">
                    <span className="exp-company">{e.company}</span>
                    <span className="exp-sep">·</span>
                    <span className="exp-period">{e.period}</span>
                    <span className="exp-sep">·</span>
                    <span className="exp-loc">{e.location}</span>
                  </div>
                </div>
              </div>
              <ul className="exp-points">
                {e.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technical Stack</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              className="skill-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="skill-head">
                <span className="skill-icon-wrap">{g.icon}</span>
                <span className="skill-title">{g.title}</span>
              </div>
              <div className="skill-chips">
                {g.items.map(item => <span key={item} className="chip">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Contact</span>
          <h2>Ready to build something<br />extraordinary?</h2>
          <p>Open to AI Engineer roles, freelance projects, and research collaborations. I reply within 24 hours.</p>
          <div className="contact-btns">
            <a href="mailto:mrshibji@gmail.com" className="pill-btn pill-btn-lg"><Mail size={17} /> mrshibji@gmail.com</a>
            <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" className="ghost-btn ghost-btn-lg"><Linkedin size={17} /> LinkedIn</a>
            <a href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer" className="ghost-btn ghost-btn-lg"><FileText size={17} /> Resume</a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="logo footer-logo">Shibji<span>.</span></a>
          <p>© 2025 · AI Engineer · Leeds, UK</p>
          <div className="footer-icons">
            <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
            <a href="mailto:mrshibji@gmail.com"><Mail size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
