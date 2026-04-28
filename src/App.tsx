import { motion } from 'framer-motion'
import { ArrowRight, Brain, Briefcase, Cloud, Code2, Database, ExternalLink, FileText, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'
import { useState } from 'react'

type SkillGroup = {
  title: string
  icon: React.ReactNode
  items: string[]
}

type Project = {
  title: string
  description: string
  tag: string
  link: string
  number: string
}

type Experience = {
  role: string
  company: string
  period: string
  location: string
  icon: React.ReactNode
  points: string[]
  type: 'work' | 'education'
}

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Agentic Systems',
    icon: <Brain size={20} />,
    items: ['LangChain', 'LangGraph', 'RAG Systems', 'MCP (Brave/Gmail)', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    title: 'ML & Data Science',
    icon: <Layers3 size={20} />,
    items: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy'],
  },
  {
    title: 'Retrieval & Memory',
    icon: <Database size={20} />,
    items: ['Qdrant', 'ChromaDB', 'Milvus', 'PostgreSQL', 'Neo4j', 'Semantic Search'],
  },
  {
    title: 'Backend & Frameworks',
    icon: <Code2 size={20} />,
    items: ['FastAPI', 'Flask', 'Python (Asyncio)', 'SQL', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Cloud & Deployment',
    icon: <Cloud size={20} />,
    items: ['Azure Container Apps', 'Azure ACR', 'Docker', 'GitHub Actions', 'CI/CD', 'System Design'],
  },
]

const projects: Project[] = [
  {
    number: '01',
    title: 'Brand Guardian AI',
    description:
      'Multi-modal YouTube ad compliance auditing engine. Orchestrated via LangGraph across Azure Video Indexer (OCR + speech-to-text), RAG retrieval from Azure AI Search, and GPT-4o auditing against real FTC disclosure rules — cutting review time by ~80%.',
    tag: 'Agentic AI • LangGraph • Azure • GPT-4o',
    link: 'https://brandgurdian.azurewebsites.net',
  },
  {
    number: '02',
    title: 'DocLense',
    description:
      'AI document intelligence platform for PDF-native Q&A. LangGraph RAG pipeline adaptively escalates from GPT-4o-mini to GPT-4o based on quality evaluation. Retrieves top-15 chunks from Qdrant; conversation history in MongoDB. Deployed to Azure Container Apps.',
    tag: 'RAG • LangGraph • Qdrant • Azure',
    link: 'https://doclense-server.victoriousisland-1f528db7.polandcentral.azurecontainerapps.io',
  },
  {
    number: '03',
    title: 'MSc Research: Lottery Ticket Hypothesis',
    description:
      'Research comparing Gradient Descent and Exponential Gradient optimisers on Fashion-MNIST with a recurrent neural network. Applies Lottery Ticket Hypothesis with iterative magnitude pruning and weight rewinding. Includes network topology analysis and automated learning-rate sweeps.',
    tag: 'PyTorch • RNN • Pruning • Research',
    link: 'https://github.com/ShibjiRout/Msc_project',
  },
  {
    number: '04',
    title: 'Student Performance Predictor',
    description:
      'End-to-end ML pipeline benchmarking 9 regression models via GridSearchCV across 1,000 student records. Selected Ridge Regression at 88.06% R², exposing Decision Tree overfitting. Modular architecture deployed via Docker and CI/CD to Azure.',
    tag: 'ML • Scikit-Learn • Docker • Azure',
    link: 'https://shibji-student-per.azurewebsites.net/',
  },
]

const experiences: Experience[] = [
  {
    role: 'Application Development Analyst',
    company: 'Accenture',
    period: '2021 – 2023',
    location: 'India',
    icon: <Briefcase size={18} />,
    type: 'work',
    points: [
      'Managed high-consequence financial modules processing 1M+ records with zero critical failures',
      'Reduced system latency by 70% through pipeline optimisation and async processing improvements',
      'Maintained 99.9% system uptime across production environments with 97% SLA compliance',
      'Collaborated across cross-functional teams to deliver enterprise-grade software on tight deadlines',
    ],
  },
  {
    role: 'MSc Advanced Computer Science',
    company: 'University of Leeds',
    period: '2023 – 2024',
    location: 'Leeds, UK',
    icon: <GraduationCap size={18} />,
    type: 'education',
    points: [
      'Graduated with Merit — specialising in machine learning and intelligent systems',
      'Dissertation: Lottery Ticket Hypothesis on RNNs with custom EG optimiser implementation',
      'Deep coursework in neural networks, distributed systems, and software engineering',
    ],
  },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-orb bg-orb-three" />

      {/* ── NAV ── */}
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-badge">SR</span>
          <span className="brand-name">Shibji Shekhar Rout</span>
        </a>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-pill" href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a className="nav-pill nav-pill-outline" href="mailto:mrshibji@gmail.com">
            <Mail size={16} /> Contact
          </a>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>GitHub</a>
          <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>LinkedIn</a>
        </motion.div>
      )}

      <main>
        {/* ── HERO ── */}
        <section className="hero-section" id="home">
          <div className="hero-inner">
            <motion.div className="hero-left" initial="hidden" animate="show">
              <motion.p className="eyebrow" custom={0} variants={fadeUp}>
                AI Engineer &nbsp;·&nbsp; Agentic Systems &nbsp;·&nbsp; Leeds, UK
              </motion.p>
              <motion.h1 className="hero-headline" custom={1} variants={fadeUp}>
                Building AI<br />that actually<br /><span className="headline-accent">ships.</span>
              </motion.h1>
              <motion.p className="hero-sub" custom={2} variants={fadeUp}>
                I design and deploy end-to-end agentic AI systems — RAG pipelines, LangGraph orchestration, and ML
                production systems that are fast, secure, and built to last.
              </motion.p>
              <motion.div className="hero-ctas" custom={3} variants={fadeUp}>
                <a className="btn-primary" href="#projects">
                  View Projects <ArrowRight size={16} />
                </a>
                <a className="btn-ghost" href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer">
                  <FileText size={16} /> Resume
                </a>
                <a className="btn-icon" href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="hero-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <div className="hero-card">
                <div className="hero-card-header">
                  <span className="live-dot" />
                  <span>System Status — Live</span>
                </div>
                <p className="hero-card-desc">
                  Specialising in agentic AI systems with Azure cloud infrastructure and LangGraph orchestration.
                </p>
                <div className="metrics-grid">
                  <div className="metric">
                    <strong>70%</strong>
                    <span>Latency Cut</span>
                  </div>
                  <div className="metric">
                    <strong>+45%</strong>
                    <span>Retrieval Accuracy</span>
                  </div>
                  <div className="metric">
                    <strong>99.9%</strong>
                    <span>Uptime</span>
                  </div>
                  <div className="metric">
                    <strong>1M+</strong>
                    <span>Records Managed</span>
                  </div>
                </div>
              </div>

              <div className="hero-tags">
                {['LangGraph', 'RAG', 'Azure', 'PyTorch', 'FastAPI', 'Docker'].map((t) => (
                  <span key={t} className="hero-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            className="stats-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <div className="stat-item">
              <strong>4+</strong>
              <span>Production Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>2+</strong>
              <span>Years Industry Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>MSc</strong>
              <span>University of Leeds</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>Azure</strong>
              <span>Cloud Deployed</span>
            </div>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section" id="about">
          <div className="section-label">About</div>
          <div className="about-layout">
            <motion.div
              className="about-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>
                I turn complex AI research<br />into production-ready systems.
              </h2>
            </motion.div>
            <div className="about-cards">
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3>What I Build</h3>
                <p>
                  Retrieval-augmented generation (RAG) systems, autonomous multi-agent pipelines,
                  and end-to-end ML solutions. I care deeply about reliability, latency, and
                  shipping AI that actually works under real-world constraints.
                </p>
              </motion.div>
              <motion.div
                className="glass-card about-highlight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
              >
                <h3>Background</h3>
                <ul className="about-list">
                  <li>
                    <GraduationCap size={16} />
                    MSc Advanced Computer Science — University of Leeds (Merit)
                  </li>
                  <li>
                    <Briefcase size={16} />
                    Ex-Accenture Analyst — high-consequence financial systems, 1M+ records
                  </li>
                  <li>
                    <MapPin size={16} />
                    Based in UK — open to remote &amp; hybrid roles globally
                  </li>
                  <li>
                    <Cloud size={16} />
                    Azure-certified cloud architecture &amp; CI/CD workflows
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section" id="experience">
          <div className="section-label">Experience</div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Where I've worked &amp; studied
          </motion.h2>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className={`exp-card ${exp.type === 'education' ? 'exp-education' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="exp-meta">
                  <div className="exp-icon">{exp.icon}</div>
                  <div>
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-location">
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>
                </div>
                <div className="exp-body">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <ul className="exp-points">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section" id="projects">
          <div className="section-label">Projects</div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected AI/ML Work
          </motion.h2>
          <div className="project-list">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                className="project-row"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="project-num">{project.number}</span>
                <div className="project-info">
                  <div className="project-row-top">
                    <h3>{project.title}</h3>
                    <span className="project-badge">{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
                <ExternalLink size={20} className="project-arrow" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="section-label">Skills</div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Stack
          </motion.h2>
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="skill-header">
                  <span className="icon-wrap">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">Get In Touch</p>
            <h2>Let's build something<br />remarkable together.</h2>
            <p className="contact-sub">
              Open to AI Engineer roles, freelance ML projects, and research collaborations.
              Drop me an email and I'll get back to you within 24 hours.
            </p>
            <div className="contact-actions">
              <a className="btn-primary btn-lg" href="mailto:mrshibji@gmail.com">
                <Mail size={18} /> mrshibji@gmail.com
              </a>
              <a className="btn-ghost btn-lg" href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="btn-ghost btn-lg" href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer">
                <FileText size={18} /> Resume
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="#home">
            <span className="brand-badge brand-badge-sm">SR</span>
            <span>Shibji Shekhar Rout</span>
          </a>
          <p className="footer-copy">© 2025 · AI Engineer · Leeds, UK</p>
          <div className="footer-links">
            <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href="mailto:mrshibji@gmail.com"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
