import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cloud, Code2, Database, ExternalLink, Github, Layers3, Menu, X } from 'lucide-react'
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
    title: 'AI Engineering',
    icon: <Brain size={20} />,
    items: ['LLM Applications', 'RAG Pipelines', 'Prompt Engineering', 'AI System Development'],
  },
  {
    title: 'ML & Data',
    icon: <Layers3 size={20} />,
    items: ['Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Retrieval & Memory',
    icon: <Database size={20} />,
    items: ['Vector Databases', 'Semantic Search', 'Graph Memory', 'Memory-Based Workflows'],
  },
  {
    title: 'Frameworks & Backend',
    icon: <Code2 size={20} />,
    items: ['LangChain', 'LangGraph', 'FastAPI', 'Flask', 'REST API Development'],
  },
  {
    title: 'Cloud & Deployment',
    icon: <Cloud size={20} />,
    items: ['Azure Web Apps', 'Azure Container Registry', 'Docker', 'CI/CD Pipelines', 'GitHub Actions'],
  },
]

const projects: Project[] = [
  {
    title: 'DocLense Finance',
    description:
      'A production-style RAG application for financial document querying, built for practical retrieval, clean UX, and cloud deployment.',
    tag: 'RAG + Azure',
    link: 'https://doclensefinance.azurewebsites.net/',
  },
  {
    title: 'Student Performance Predictor',
    description:
      'An ML-powered web app that predicts student outcomes using structured academic and socioeconomic inputs.',
    tag: 'ML + Deployment',
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
      { label: 'Focus', value: 'AI + ML' },
      { label: 'Deployment', value: 'Azure' },
      { label: 'Style', value: 'Production-ready' },
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
          <span>Shibji Rout</span>
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
        </motion.div>
      )}

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              AI Engineer • ML • RAG • Azure
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
              Building intelligent products with modern AI and scalable engineering.
            </motion.h1>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              I’m Shibji Rout, focused on machine learning, LLM workflows, retrieval systems, and deployment-ready
              applications that solve practical problems.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <a className="primary-button" href="#projects">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="https://github.com/ShibjiRout" target="_blank" rel="noreferrer">
                <Github size={18} /> View GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="hero-card-top">
              <span className="live-dot" />
              <span>Portfolio Snapshot</span>
            </div>
            <div className="hero-card-body">
              <p>Focused on practical AI systems, clean backend design, and cloud deployment workflows.</p>
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
            <h2>A builder of AI-first applications</h2>
          </div>
          <div className="about-grid">
            <div className="glass-card">
              <h3>What I do</h3>
              <p>
                I work on applied AI projects across machine learning, retrieval-augmented generation, API development,
                and deployment. I enjoy turning complex ideas into polished, usable products.
              </p>
            </div>
            <div className="glass-card emphasis-card">
              <h3>Core strengths</h3>
              <ul>
                <li>Production-minded AI application design</li>
                <li>Backend systems with clean cloud deployment</li>
                <li>Practical ML and retrieval workflows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I work with</h2>
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
            <h2>Selected work</h2>
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
                <span className="project-link">Open project</span>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
