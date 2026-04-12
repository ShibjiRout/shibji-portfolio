import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cloud, Code2, Database, ExternalLink, FileText, Github, Layers3, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'

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
    items: ['ChromaDB', 'Milvus', 'Graph Memory', 'PostgreSQL', 'Neo4j', 'Semantic Search'],
  },
  {
    title: 'Backend & Frameworks',
    icon: <Code2 size={20} />,
    items: ['FastAPI', 'Flask', 'Python (Asyncio)', 'SQL', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Cloud & Deployment',
    icon: <Cloud size={20} />,
    items: ['Azure (ACR/Web App)', 'Docker', 'GitHub Actions (CI/CD)', 'HTML/CSS', 'System Design'],
  },
]

const projects: Project[] = [
  {
    title: 'Insider Edge',
    description:
      'A stateful multi-agent system monitoring UK insider trading filings. Uses LangGraph for signal scoring and MCPs for news enrichment and autonomous alerting.',
    tag: 'Agentic AI • LangGraph',
    link: 'https://github.com/ShibjiRout/InsiderEdge_Langraph_MPC'
  },
  {
    title: 'DocLense Finance',
    description:
      'A production RAG system for financial document querying with semantic search, achieving a 45% improvement in retrieval accuracy.',
    tag: 'RAG • Azure • LangChain',
    link: 'https://doclensefinance.azurewebsites.net/',
  },
  {
    title: 'Student Performance Predictor',
    description:
      'ML-powered application predicting exam scores using 9 regression models (88.06% R2). Deployed via Docker and CI/CD with 70% reduced latency.',
    tag: 'ML • Docker • Azure',
    link: 'https://shibji-student-per.azurewebsites.net/',
  },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const heroStats = useMemo(
    () => [
      { label: 'Latency Reduction', value: '70%' },
      { label: 'Retrieval Accuracy', value: '+45%' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'SLA Maintained', value: '97%' },
    ],
    [],
  )

  return (
    <div className="app-shell">
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-badge">SR</span>
          <span>Shibji Shekhar Rout</span>
        </a>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-button" href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-button" href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shibji-shekhar-rout" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            LinkedIn
          </a>
        </motion.div>
      )}

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              AI Engineer • Agentic Systems
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
              Architecting Stateful Multi-Agent Systems & Advanced RAG with Long-Term Memory.
            </motion.h1>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              I’m Shibji Shekhar Rout, an AI Engineer specializing in LangGraph, RAG pipelines, and ML production systems. 
              I focus on delivering intelligence that is fast, secure, and production-ready.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <a className="primary-button" href="#projects">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="mailto:mrshibji@gmail.com">
                <Mail size={18} /> Email
              </a>
              <a className="secondary-button" href="/Shibji_Rout.pdf" target="_blank" rel="noreferrer">
                <FileText size={18} /> Resume
              </a>
              <a className="nav-button" href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="hero-card-top">
              <span className="live-dot" />
              <span>Performance Metrics</span>
            </div>
            <div className="hero-card-body">
              <p>Specializing in building and deploying end-to-end agentic AI systems.</p>
              <div className="stat-grid">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Proven expertise in high-impact AI</h2>
          </div>
          <div className="about-grid">
            <div className="glass-card">
              <h3>What I do</h3>
              <p>
                I specialize in building retrieval-augmented generation (RAG) and autonomous multi-agent systems. 
                With a background in managing 1M+ financial records, I focus on system reliability and low-latency performance.
              </p>
            </div>
            <div className="glass-card emphasis-card">
              <h3>Professional Summary</h3>
              <ul>
                <li>MSc in Advanced Computer Science (Merit) from University of Leeds </li>
                <li>Ex-Accenture Analyst managing high-consequence financial modules </li>
                <li>Expertise in Azure-based cloud deployment and CI/CD workflows </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technical Stack</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="glass-card skill-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="skill-card-title">
                  <span className="icon-wrap">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected AI/ML Work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                className="project-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="project-top">
                  <span className="project-tag">{project.tag}</span>
                  <ExternalLink size={18} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-link">View Details</span>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App