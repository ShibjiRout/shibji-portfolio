import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useCallback, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Project = {
  title: string
  category: string
  problem: string
  impact: string
  stack: string[]
  href: string
  proof: string
}

type Capability = {
  title: string
  icon: ReactNode
  summary: string
  items: string[]
}

type TimelineEntry = {
  title: string
  org: string
  period: string
  location: string
  icon: ReactNode
  bullets: string[]
}

const links = {
  github: 'https://github.com/ShibjiRout',
  linkedin: 'https://www.linkedin.com/in/shibji-shekhar-rout',
  email: 'mailto:mrshibji@gmail.com',
  resume: 'https://drive.google.com/file/d/13PJiM4I_Z0uALk--Sh5pVnswraHQkq6v/view?usp=sharing',
  localResume: '/Shibji_Rout.pdf',
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const metrics = [
  { value: '1M+', label: 'records supported' },
  { value: '80%', label: 'review time reduced' },
  { value: '99.9%', label: 'uptime maintained' },
  { value: '98%', label: 'pipeline success rate' },
]

const stack = [
  'Python',
  'FastAPI',
  'LangGraph',
  'RAG',
  'LLMs',
  'SQL',
  'Azure',
  'Docker',
  'MongoDB',
  'Redis',
  'Qdrant',
  'PyTorch',
]

const capabilities: Capability[] = [
  {
    title: 'LLM and Agent Systems',
    icon: <Brain size={20} />,
    summary: 'Production-focused LLM workflows with retrieval, tool use, and evaluation in mind.',
    items: ['LangGraph', 'LangChain', 'RAG', 'GPT-4o', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    title: 'Backend and APIs',
    icon: <Server size={20} />,
    summary: 'Reliable API surfaces for AI products, async services, and deployment-ready systems.',
    items: ['FastAPI', 'Flask', 'Python Asyncio', 'REST APIs', 'SQL', 'Service Design'],
  },
  {
    title: 'Data and Retrieval',
    icon: <Database size={20} />,
    summary: 'Document ingestion, vector search, persistence, and data access for useful AI apps.',
    items: ['Qdrant', 'ChromaDB', 'MongoDB', 'Redis', 'PostgreSQL', 'Neo4j'],
  },
  {
    title: 'Cloud Delivery',
    icon: <Cloud size={20} />,
    summary: 'Containerized delivery with CI/CD, cloud deployment, and operational discipline.',
    items: ['Azure Container Apps', 'Azure ACR', 'Docker', 'GitHub Actions', 'CI/CD', 'Monitoring'],
  },
  {
    title: 'ML Engineering',
    icon: <Layers3 size={20} />,
    summary: 'Classical ML and deep learning experiments with reproducible comparison.',
    items: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy'],
  },
  {
    title: 'Production Practice',
    icon: <ShieldCheck size={20} />,
    summary: 'Enterprise reliability habits from support ownership and client delivery.',
    items: ['SLA Ownership', 'Incident Reduction', 'Client Delivery', 'Documentation', 'Release Care'],
  },
]

const projects: Project[] = [
  {
    title: 'Brand Guardian AI',
    category: 'Agentic AI Compliance',
    problem: 'Marketing and compliance teams need faster, repeatable review of YouTube ads against brand rules.',
    impact: 'Built a multimodal LangGraph workflow with Azure Video Indexer and GPT-4o, cutting manual review time by roughly 80%.',
    stack: ['LangGraph', 'Azure Video Indexer', 'GPT-4o', 'FastAPI', 'RAG'],
    href: 'https://brandgurdian.azurewebsites.net',
    proof: 'Live deployment',
  },
  {
    title: 'DocLense',
    category: 'Production RAG Platform',
    problem: 'Teams need trustworthy PDF answers without losing context across long document sessions.',
    impact: 'Designed Qdrant retrieval, MongoDB history, adaptive GPT-4o escalation, and Azure Container Apps deployment.',
    stack: ['RAG', 'Qdrant', 'MongoDB', 'Azure', 'FastAPI'],
    href: 'https://doclense-server.victoriousisland-1f528db7.polandcentral.azurecontainerapps.io',
    proof: 'Cloud API',
  },
  {
    title: 'MSc Research',
    category: 'Machine Learning Research',
    problem: 'Sparse neural networks need rigorous experiments to test the Lottery Ticket Hypothesis on sequence-style models.',
    impact: 'Compared GD and EG optimizers on Fashion-MNIST using iterative magnitude pruning in PyTorch.',
    stack: ['PyTorch', 'RNN', 'Research', 'Optimization'],
    href: 'https://github.com/ShibjiRout/Msc_project',
    proof: 'GitHub repo',
  },
  {
    title: 'Student Performance Predictor',
    category: 'ML Pipeline and Deployment',
    problem: 'Education teams need an interpretable way to estimate performance from student profile and behavior data.',
    impact: 'Benchmarked nine regression models, reached 88.06% R2 with Ridge Regression, and deployed through Docker CI/CD on Azure.',
    stack: ['Scikit-Learn', 'Docker', 'Azure', 'CI/CD'],
    href: 'https://shibji-student-per.azurewebsites.net/',
    proof: 'Live app',
  },
]

const experience: TimelineEntry[] = [
  {
    title: 'Application Development Analyst',
    org: 'Accenture',
    period: '2021 - 2023',
    location: 'India',
    icon: <BriefcaseBusiness size={18} />,
    bullets: [
      'Owned financial application modules processing 1M+ records with zero critical failures across assigned releases.',
      'Reduced latency by 70% through pipeline tuning, async processing, and production issue analysis.',
      'Supported 6+ enterprise client relationships while maintaining 99.9% uptime and 97% SLA compliance.',
      'Reduced P1 incidents by 75% through root-cause fixes, operational documentation, and release discipline.',
    ],
  },
]

const education: TimelineEntry[] = [
  {
    title: 'MSc Advanced Computer Science',
    org: 'University of Leeds',
    period: '2023 - 2024',
    location: 'Leeds, UK',
    icon: <GraduationCap size={18} />,
    bullets: [
      'Graduated with Merit, focused on machine learning, intelligent systems, distributed systems, and software engineering.',
      'Completed dissertation on the Lottery Ticket Hypothesis for RNNs with custom optimizer experiments in PyTorch.',
      'Built stronger research-to-engineering practice through reproducible experiments, model comparison, and reporting.',
    ],
  },
]

const credentials = [
  {
    title: 'Production AI Portfolio',
    issuer: 'Live deployments and source projects',
    detail: 'Proof across LangGraph, RAG, Azure, Docker, FastAPI, Qdrant, MongoDB, and CI/CD delivery.',
    href: '#projects',
  },
  {
    title: 'Advanced Computer Science',
    issuer: 'University of Leeds',
    detail: 'MSc-level training in machine learning, distributed systems, and software engineering research.',
    href: links.localResume,
  },
  {
    title: 'Enterprise Delivery Practice',
    issuer: 'Accenture',
    detail: 'Production support, SLA ownership, incident reduction, and client-facing application delivery.',
    href: links.resume,
  },
]

const floatTokens = [
  { label: 'RAG', className: 'tokenOne' },
  { label: 'SQL', className: 'tokenTwo' },
  { label: 'API', className: 'tokenThree' },
  { label: 'LLM', className: 'tokenFour' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function StageBackground() {
  return (
    <div className="stageBackground" aria-hidden="true">
      <div className="gradientField" />
    </div>
  )
}

function StageNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="stageNav">
      <a className="stageBrand" href="#home" aria-label="Shibji Shekhar Rout home">
        <span className="brandHex">
          <Code2 size={18} />
        </span>
        <span className="brandText">
          <strong>Shibji</strong>
          <span>AI Systems</span>
        </span>
      </a>

      <nav className="navLinks" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navActions">
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Github size={18} />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={18} />
        </a>
        <a className="navResume" href={links.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>

      <button className="menuButton" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen ? (
        <motion.nav className="mobileMenu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={links.resume} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Resume
          </a>
        </motion.nav>
      ) : null}
    </header>
  )
}

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return (
    <a className="projectPreview" href={project.href} target="_blank" rel="noreferrer">
      <span className="previewNumber">0{index + 1}</span>
      <span className="previewTitle">{project.title}</span>
      <span className="previewMeta">{project.stack.slice(0, 2).join(' / ')}</span>
      <ArrowUpRight size={16} />
    </a>
  )
}

function HeroStage() {
  return (
    <section className="heroStage" id="home">
      <div className="stageGrid" aria-hidden="true" />
      <div className="stageCursor" aria-hidden="true" />
      <StageNav />

      <div className="heroContent">
        <motion.div
          className="portraitScene"
          initial={{ opacity: 0, scale: 0.96, x: -18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portraitHalo" aria-hidden="true" />
          <div className="portraitFrame">
            <img src="/Shibji.png" alt="Shibji Shekhar Rout" />
          </div>
          {floatTokens.map((token) => (
            <span className={`floatToken ${token.className}`} key={token.label}>
              {token.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="heroCopy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability">
            <span />
            Open to AI Engineering roles
          </div>
          <h1>
            <span className="heroName">Shibji Shekhar Rout</span>
            <span className="heroTitle">AI Engineer</span>
          </h1>
          <p>
            I build production LLM applications, RAG systems, FastAPI services, and data workflows with Python, SQL,
            Azure, Docker, MongoDB, Redis, and a reliability mindset shaped by enterprise delivery.
          </p>
          <div className="heroButtons">
            <a className="primaryButton" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="secondaryButton" href={links.localResume} target="_blank" rel="noreferrer" download>
              <FileText size={18} />
              Download Resume
            </a>
            <a className="ghostButton" href={links.email}>
              <Mail size={18} />
              Contact
            </a>
          </div>
          <div className="heroSocials">
            <a href={links.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a href={links.resume} target="_blank" rel="noreferrer">
              <FileText size={17} />
              Resume link
            </a>
          </div>
        </motion.div>
      </div>

      <div className="stageBottom">
        <div className="previewDock">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectPreview key={project.title} project={project} index={index} />
          ))}
        </div>
        <a className="scrollCue" href="#about" aria-label="Scroll to about section">
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div className="sectionHeader" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
      <span>{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </motion.div>
  )
}

function CapabilityBlock({ capability, index }: { capability: Capability; index: number }) {
  return (
    <motion.article
      className="capabilityBlock"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="capabilityIcon">{capability.icon}</div>
      <h3>{capability.title}</h3>
      <p>{capability.summary}</p>
      <div className="chipRow">
        {capability.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.article>
  )
}

function ShowcaseProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      className="showcaseProject"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
    >
      <div className="projectVisual">
        <span>{project.proof}</span>
        <strong>{String(index + 1).padStart(2, '0')}</strong>
      </div>
      <div className="projectDetails">
        <span className="projectCategory">{project.category}</span>
        <h3>{project.title}</h3>
        <div className="projectCopy">
          <p>
            <strong>Problem</strong>
            {project.problem}
          </p>
          <p>
            <strong>Impact</strong>
            {project.impact}
          </p>
        </div>
        <div className="chipRow">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <span className="projectLinkIcon">
        <ArrowUpRight size={20} />
      </span>
    </motion.a>
  )
}

function TimelinePanel({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timelineStack">
      {entries.map((entry, index) => (
        <motion.article
          className="timelinePanel"
          key={`${entry.org}-${entry.title}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
        >
          <div className="timelineIcon">{entry.icon}</div>
          <div>
            <div className="timelineMeta">
              <span>{entry.period}</span>
              <span>{entry.location}</span>
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.org}</p>
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default function App() {
  const stackLoop = useMemo(() => [...stack, ...stack], [])
  const [flashSection, setFlashSection] = useState<string | null>(null)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = useCallback((e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (!href) return
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      if (flashTimer.current) clearTimeout(flashTimer.current)
      setFlashSection(id)
      flashTimer.current = setTimeout(() => setFlashSection(null), 750)
    }
  }, [])

  const flash = (id: string) => flashSection === id ? 'true' : undefined

  return (
    <div className="appShell" onClick={handleClick}>
      <StageBackground />
      <main className="pageFrame">
        <HeroStage />

        <section className="metricsBand" aria-label="Career metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <div className="techMarquee" aria-label="Core technologies">
          <div>
            {stackLoop.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="contentStage aboutStage" id="about" data-flash={flash('about')}>
          <SectionHeader
            eyebrow="About"
            title="Engineer first. AI specialist by execution."
            text="I turn AI ideas into deployed systems that recruiters can understand quickly: clear problem, production stack, measurable outcome."
          />
          <div className="aboutLayout">
            <motion.div className="aboutLead" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <p>
                I am an AI and software engineer with an MSc in Advanced Computer Science from the University of Leeds
                and three years of enterprise delivery experience at Accenture.
              </p>
              <p>
                My recent work focuses on LangGraph agents, RAG platforms, FastAPI backends, cloud deployment, and
                data systems using Python, SQL, Azure, Docker, MongoDB, Redis, and vector databases.
              </p>
            </motion.div>
            <div className="aboutProof">
              {[
                'Production LLM and RAG engineering',
                'Backend APIs with deployment discipline',
                'Cloud, Docker, CI/CD, and data persistence',
                'Enterprise reliability and client ownership',
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="contentStage" id="skills" data-flash={flash('skills')}>
          <SectionHeader
            eyebrow="Skills"
            title="Capability blocks for applied AI products."
            text="The stack is shaped around useful systems: retrieval quality, API reliability, data storage, cloud delivery, and maintainable workflows."
          />
          <div className="capabilityGrid">
            {capabilities.map((capability, index) => (
              <CapabilityBlock key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </section>

        <section className="contentStage" id="projects" data-flash={flash('projects')}>
          <SectionHeader
            eyebrow="Projects"
            title="Showcase work with problem, stack, and impact."
            text="Each project is written for fast recruiter scanning while still showing engineering depth."
          />
          <div className="projectShowcase">
            {projects.map((project, index) => (
              <ShowcaseProject key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="contentStage" id="experience" data-flash={flash('experience')}>
          <SectionHeader
            eyebrow="Experience"
            title="Enterprise delivery, now applied to AI systems."
            text="My Accenture background gives the AI work a production lens: reliability, measurable improvements, and ownership after launch."
          />
          <TimelinePanel entries={experience} />
        </section>

        <section className="contentStage" id="education" data-flash={flash('education')}>
          <SectionHeader
            eyebrow="Education"
            title="Computer science foundation for modern AI engineering."
            text="Formal advanced computing study paired with research, experiments, and software implementation."
          />
          <TimelinePanel entries={education} />
        </section>

        <section className="contentStage" id="certifications" data-flash={flash('certifications')}>
          <SectionHeader
            eyebrow="Credentials & Proof"
            title="Evidence through deployments, education, and delivery."
            text="This section keeps the claims grounded in verifiable portfolio work, resume links, and academic background."
          />
          <div className="credentialGrid">
            {credentials.map((credential, index) => (
              <motion.a
                className="credentialCard"
                href={credential.href}
                target={credential.href.startsWith('#') ? undefined : '_blank'}
                rel={credential.href.startsWith('#') ? undefined : 'noreferrer'}
                key={credential.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Award size={21} />
                <h3>{credential.title}</h3>
                <span>{credential.issuer}</span>
                <p>{credential.detail}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="contactStage" id="contact" data-flash={flash('contact')}>
          <div>
            <span className="contactEyebrow">Contact</span>
            <h2>Let us build AI software that survives production.</h2>
            <p>
              Open to AI Engineer, Software Engineer, Data Engineer, and applied LLM roles where reliable systems matter.
            </p>
          </div>
          <div className="contactButtons">
            <a className="primaryButton" href={links.email}>
              <Mail size={18} />
              Email me
            </a>
            <a className="secondaryButton" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="secondaryButton" href={links.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <span>
          <MapPin size={15} />
          London, UK
        </span>
        <p>Shibji Shekhar Rout - AI Engineer + Software Engineer</p>
        <a href={links.email}>mrshibji@gmail.com</a>
      </footer>
    </div>
  )
}
