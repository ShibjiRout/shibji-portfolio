import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Phone,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Project = {
  title: string
  category: string
  does: string
  architecture: string
  deployment: string
  guardrails: string
  evaluation: string
  observability: string
  stack: string[]
  href: string
  proof: string
  /** Small logo marks, not screenshots. Drop files in public/projects/ and list them here. */
  images: string[]
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
  phone: 'tel:+447554829925',
  phoneDisplay: '+44 7554 829925',
  resume: 'https://drive.google.com/file/d/13DwtwN-T5MA9-D1fMuAvJlTmFxNgiOBA/view?usp=drive_link',
}

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const metrics = [
  { value: '3 yrs', label: 'enterprise delivery at Accenture' },
  { value: '6+', label: 'clients as technical contact' },
  { value: '88%', label: 'Recall@5 on agentic RAG retrieval' },
  { value: '4+', label: 'cloud platforms deployed to' },
]

const capabilities: Capability[] = [
  {
    title: 'Generative & Agentic AI',
    icon: <Brain size={20} />,
    summary: 'Model selection, fine-tuning, and multi-step agents that decide what to do next, not fixed pipelines.',
    items: ['OpenAI SDK', 'Anthropic SDK', 'Hugging Face', 'LoRA', 'Fine-tuning', 'Prompt Engineering', 'Copilot Studio', 'LangGraph', 'LangChain', 'RAG', 'MCP'],
  },
  {
    title: 'Retrieval & Vector Search',
    icon: <Database size={20} />,
    summary: 'Hybrid search, rank fusion and re-ranking, tuned against measured recall rather than guesswork.',
    items: ['Qdrant', 'Azure AI Search', 'ChromaDB', 'Neo4j', 'Embeddings', 'BM25', 'Re-ranking'],
  },
  {
    title: 'Backend & APIs',
    icon: <Server size={20} />,
    summary: 'Async Python services and background jobs that stay responsive while a model takes its time.',
    items: ['FastAPI', 'Flask', 'Asyncio', 'Pydantic', 'REST', 'SQL', 'Celery', 'RQ'],
  },
  {
    title: 'Cloud & Deployment',
    icon: <Cloud size={20} />,
    summary: 'Containers, CI that gates on tests, and releases that can be put back the way they were.',
    items: ['Docker', 'GitHub Actions', 'Azure AI Foundry', 'Container Apps', 'AWS', 'Linode', 'DigitalOcean', 'Nginx', 'Caddy', 'CI/CD'],
  },
  {
    title: 'Evaluation & Observability',
    icon: <Layers3 size={20} />,
    summary: 'Measuring answer quality and cost before tuning anything, and tracing what the graph actually did.',
    items: ['RAGAS', 'LangSmith', 'Application Insights', 'Prompt evaluation', 'Model validation'],
  },
  {
    title: 'Data & Messaging',
    icon: <ShieldCheck size={20} />,
    summary: 'The storage and queues sitting behind the AI layer, and the isolation rules on top of them.',
    items: ['Postgres', 'MongoDB', 'Redis', 'Valkey', 'SQLite', 'Upstash', 'Multi-tenancy'],
  },
]

const projects: Project[] = [
  {
    title: 'Vouch',
    category: 'Financial document analysis',
    does: 'Vouch is a document analysis platform for financial teams. Users upload annual reports, trading updates, and contracts, then ask questions in natural language. Every answer includes the source page it was drawn from. When the uploaded documents do not contain an answer, the system states that rather than generating one.',
    architecture:
      'Each query runs two retrieval methods in parallel: a dense vector search and a BM25 keyword search. Their results are combined using Reciprocal Rank Fusion, then a cross-encoder reranker narrows the top 30 candidates to the 5 most relevant. An agent determines whether retrieval is required for a given message, so conversational input does not trigger a database query.',
    deployment:
      'The backend runs on AWS EC2 behind an Nginx reverse proxy. The frontend is a separate static build, deployed and hosted independently on a self-managed Coolify instance.',
    guardrails:
      'Access is enforced entirely from the authentication token. Tenant ID, thread ID, and user ID are never accepted from the request body. Requesting a resource that belongs to someone else, including a colleague within the same company, returns a 404 rather than a 403, so the response itself does not confirm whether the resource exists. These isolation checks are the first tests to run in the suite; if one fails, the build stops before any other test executes.',
    evaluation:
      'Retrieval and answer quality are measured with a dedicated evaluation pipeline: one script runs retrieval alone, a second generates answers, and a third scores them against four RAGAS metrics. Every run and every rejected experiment is logged, not just the ones that improved results. The published numbers (88% Recall@5, 84% accuracy when a relevant passage was retrieved, $0.32 for a 233-question run) come from a substring-matching scorer, which the evaluation log records as an upper bound rather than a final figure.',
    observability:
      'Every agent run is traced with LangSmith, giving visibility into each retrieval and generation step, not just the final response. A health endpoint separately reports whether Postgres and Qdrant are reachable, used for deployment and uptime checks.',
    stack: ['FastAPI', 'LangGraph', 'Qdrant', 'Postgres', 'LangMem', 'Valkey + RQ', 'LangSmith', 'AWS EC2', 'Nginx', 'Coolify'],
    href: 'https://vouch.voidgeek.space',
    proof: 'Live app',
    images: ['/vouch-logo.png'],
  },
  {
    title: 'Brand Guardian AI',
    category: 'Advertising compliance',
    does: 'Brand Guardian audits video advertising for regulatory compliance. It accepts a YouTube URL or an uploaded video file and returns a pass or fail verdict against an indexed rulebook, such as CAP Code, FTC guidance, or an internal brand policy. Every flagged violation must include a verbatim quote from the video’s transcript or on-screen text; a violation with no quote is not reported.',
    architecture:
      'The system runs as a two-node LangGraph state graph. The first node retrieves the video, submits it to Azure Video Indexer, and extracts both a speech transcript and OCR text from on-screen graphics. The second node embeds that combined text, retrieves the three most relevant clauses from the indexed rulebook in Azure AI Search, and passes transcript, OCR text, and retrieved clauses to GPT-4o at temperature 0. The model returns structured JSON containing the verdict, each violation with its severity, and a plain-language summary.',
    deployment:
      'The API runs in Docker behind a Caddy reverse proxy on a self-managed Linux server, with HTTPS issued automatically. The frontend is served as static files by the same Caddy instance on the root domain, while the API is proxied on a separate subdomain. Releases go through a three-stage GitHub Actions pipeline: a pytest gate, a build-and-push step that tags each image with both latest and its commit SHA, and an SSH deployment step using a dedicated deploy key.',
    guardrails:
      'The citation requirement is the primary guardrail: a flagged violation without a matching quote from the transcript or OCR text is discarded before the response is returned. This rule was tuned against real false positives to prevent ordinary marketing language from being flagged as a violation. Because video indexing takes several minutes, audits run as background jobs that the client polls for status, avoiding a synchronous connection that would time out at the gateway. Azure access uses a service principal scoped to the Video Indexer Account Contributor role on a single resource, rather than a broad subscription-level role, and the CI/CD pipeline uses its own deploy key, separate from any personal credentials. CORS is currently open to all origins; this is accepted for a public demo with no user authentication and would be restricted if user accounts were added.',
    evaluation:
      'The test suite uses pytest with FastAPI’s TestClient to smoke-test the API surface, and this suite gates every deployment: a failing test stops the build before it reaches production. Model cost runs to approximately $0.002 per 30-second advert audited.',
    observability:
      'LangGraph execution is traced end-to-end in LangSmith, giving node-level visibility into each run. Azure Application Insights is wired in via OpenTelemetry for HTTP request logs, error tracking, and performance metrics, and is optional; it no-ops cleanly when not configured.',
    stack: ['LangGraph', 'GPT-4o', 'Azure Video Indexer', 'Azure AI Search', 'FastAPI', 'Docker', 'Caddy', 'GitHub Actions', 'LangSmith', 'OpenTelemetry'],
    href: 'https://brandgurdian.lol',
    proof: 'Live app',
    images: ['/brand-guardian-logo.png'],
  },
  {
    title: 'Merchant Management System',
    category: 'Client platform',
    does: 'The client is a UK card-payments reseller that signs merchants up to card providers and earns a monthly residual on their turnover, a portion of which is paid out as commission to the agents who introduced them. Before this system, that reconciliation ran across separate provider report files, spreadsheets, and a CRM, with no single view and no reliable way to answer basic questions about revenue or commission owed. The platform replaces that with one merchant-centred database, a live dashboard, and a natural-language chatbot, run alongside the CRM the client already uses rather than replacing it.',
    architecture:
      'The system has three layers: a 19-table SQLite database as the single source of truth, a FastAPI backend exposing it as a read-only, parameterised JSON API, and two clients (a dashboard and a chatbot) that consume that API and never query the database directly. The dashboard is a static HTML/JS frontend with five linked tabs (Overview, Merchants, Agents, Providers, Products), each with drill-down views and a KPI summary covering residual income, commission payable, and company retained margin. The chatbot, built on LangGraph with GPT-4o-mini, answers questions by retrieving the relevant table schema, generating a SQL query through structured output, and executing it against the database before returning a plain-language answer.',
    deployment: 'Run for internal use by the client alongside their existing tools; not publicly hosted.',
    guardrails:
      'Residual lines are matched to merchants using the provider’s own identifier rather than merchant name, removing the ambiguity that made manual matching error-prone. No stored data is ever overwritten: corrections are recorded as a void followed by a new insert, and equipment history is append-only. Commission is frozen at the point it is calculated, and retained income is always derived from underlying figures rather than stored as its own value, so it cannot drift out of sync. On the chatbot side, every generated query is restricted to SELECT statements, capped at 100 rows, and the model is instructed not to answer with figures it did not retrieve.',
    evaluation:
      'The database was validated against a fully seeded dataset modelling realistic provider reports, merchants, and commission structures, confirming the reconciliation logic before use on real data.',
    observability: 'Not applicable in the current deployment. The system runs as an internal tool without a separate monitoring layer.',
    stack: ['Python', 'FastAPI', 'SQLite', 'LangGraph', 'GPT-4o-mini', 'Pydantic'],
    href: '',
    proof: 'Client project',
    images: ['/projects/mms-1.png', '/projects/mms-2.png'],
  },
  {
    title: 'MSc Dissertation',
    category: 'Machine learning research',
    does: 'The Lottery Ticket Hypothesis says a trained network hides a much smaller one that could have reached the same accuracy alone. It is well established for feed-forward networks; this tested whether it survives the move to recurrent ones.',
    architecture:
      'Iterative magnitude pruning in PyTorch on Fashion-MNIST: train, drop the lowest-magnitude 20%, rewind the survivors to their initial values, and repeat. Gradient descent and exponentiated gradient were run under identical schedules to compare which optimiser produced networks that retained accuracy at higher sparsity.',
    deployment: 'Not applicable. A research project run and evaluated locally, not deployed as a service.',
    guardrails:
      'Not applicable in the production sense; the experimental design controls for confounds by running both optimisers under identical pruning schedules and initialisation.',
    evaluation:
      'Accuracy was tracked across successive pruning rounds for both optimisers on Fashion-MNIST, comparing which produced networks that retained accuracy at higher levels of sparsity.',
    observability: 'Not applicable. Training runs were logged locally for the dissertation write-up rather than monitored as a live system.',
    stack: ['PyTorch', 'RNNs', 'Magnitude pruning'],
    href: 'https://github.com/ShibjiRout/Msc_project',
    proof: 'GitHub repo',
    images: ['/projects/msc-1.png', '/projects/msc-2.png'],
  },
]

const experience: TimelineEntry[] = [
  {
    title: 'Application Development Analyst',
    org: 'Accenture',
    period: 'Jul 2021 – Jul 2024',
    location: 'Gurgaon, India',
    icon: <BriefcaseBusiness size={18} />,
    bullets: [
      'Technical point of contact for 6+ enterprise clients in finance and tech, explaining root causes to people who were not engineers, and owning incident communication and delivery coordination.',
      'Designed a RAG-based incident resolution system with PDF ingestion, similarity search and an LLM chat, so analysts could find validated fixes instead of rediscovering them. Recurring incidents fell around 30%.',
      'Supported the JDE 9.1 to 9.2 upgrade from the application engineering and production stabilisation side: analysed logs, validated workflows, found recurring failure patterns. P1 incidents fell 75%.',
      'Built SQL data solutions over 1M+ financial records, improving reporting accuracy and data reliability.',
      'Mentored 2 associates on root-cause analysis and client communication until they delivered independently, within 3 months.',
    ],
  },
]

const education: TimelineEntry[] = [
  {
    title: 'MSc Advanced Computer Science',
    org: 'University of Leeds',
    period: 'Sep 2024 – Nov 2025',
    location: 'Leeds, UK',
    icon: <GraduationCap size={18} />,
    bullets: [
      'Graded Merit. Modules: Machine Learning, Deep Learning, Cloud Computing, Advanced Software Engineering, Algorithms.',
      'Dissertation on the Lottery Ticket Hypothesis for recurrent networks, comparing gradient descent against exponentiated gradient with iterative magnitude pruning in PyTorch.',
    ],
  },
]


const floatTokens = [
  { label: 'RAG', className: 'tokenOne' },
  { label: 'AI', className: 'tokenTwo' },
  { label: 'API', className: 'tokenThree' },
  { label: 'LLM', className: 'tokenFour' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Simple Icons slugs for the tech that has a recognisable mark. Anything not listed
 * renders as a plain label, and a slug that 404s hides its own image via onError.
 */
const logoSlugs: Record<string, string> = {
  Python: 'python',
  FastAPI: 'fastapi',
  Flask: 'flask',
  Docker: 'docker',
  'GitHub Actions': 'githubactions',
  Postgres: 'postgresql',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Redis: 'redis',
  SQLite: 'sqlite',
  PyTorch: 'pytorch',
  'OpenAI SDK': 'openai',
  'GPT-4o': 'openai',
  'GPT-4o-mini': 'openai',
  'Anthropic SDK': 'anthropic',
  LangChain: 'langchain',
  LangGraph: 'langchain',
  'Hugging Face': 'huggingface',
  Qdrant: 'qdrant',
  Neo4j: 'neo4j',
  Celery: 'celery',
  Caddy: 'caddy',
  Pydantic: 'pydantic',
  AWS: 'amazonaws',
  'AWS EC2': 'amazonaws',
  EC2: 'amazonaws',
  Linode: 'linode',
  DigitalOcean: 'digitalocean',
  Nginx: 'nginx',
  Asyncio: 'python',
  Valkey: 'valkey',
  Upstash: 'upstash',
}

function TechChip({ label }: { label: string }) {
  const slug = logoSlugs[label]
  const [failed, setFailed] = useState(false)

  return (
    <span>
      {slug && !failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          width={14}
          height={14}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : null}
      {label}
    </span>
  )
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
          <h1>
            <span className="heroName">Shibji Shekhar Rout</span>
            <span className="heroTitle">AI Specialist</span>
          </h1>
          <p className="heroFocus">Production RAG · LLM Evaluation · LangGraph · Azure</p>
          <p>
            AI Specialist with three years at Accenture as the technical point of contact for 6+ enterprise
            clients, backed by an MSc in Advanced Computer Science from the University of Leeds. Designs,
            builds, and evaluates production LLM systems: retrieval, agent orchestration, and the deployment
            pipeline around them.
          </p>
          <div className="heroButtons">
            <a className="primaryButton" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="secondaryButton" href={links.resume} target="_blank" rel="noreferrer">
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
            <a href={links.phone}>
              <Phone size={17} />
              {links.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="stageBottom">
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
          <TechChip key={item} label={item} />
        ))}
      </div>
    </motion.article>
  )
}

function ShowcaseProject({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const [broken, setBroken] = useState<Record<string, boolean>>({})

  const shots = project.images.filter((src) => !broken[src])

  return (
    <article className="showcaseProject">
      <div className="projectHead">
        <span className="projectNumber">{String(index + 1).padStart(2, '0')}</span>
        <span className="projectCategory">{project.category}</span>
        <span className="projectProof">{project.proof}</span>
      </div>

      <div className="projectTitleRow">
        {shots.length > 0 ? (
          <span className="projectMarks">
            {shots.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                onError={() => setBroken((prev) => ({ ...prev, [src]: true }))}
              />
            ))}
          </span>
        ) : null}
        <h3>{project.title}</h3>
      </div>

      <div className="projectCopy">
        <p>
          <strong>What it does</strong>
          {project.does}
        </p>
        <p>
          <strong>Architecture</strong>
          {project.architecture}
        </p>
      </div>

      {open ? (
        <div className="projectCopy projectExtra">
          <p>
            <strong>Deployment</strong>
            {project.deployment}
          </p>
          <p>
            <strong>Guardrails</strong>
            {project.guardrails}
          </p>
          <p>
            <strong>Evaluation</strong>
            {project.evaluation}
          </p>
          <p>
            <strong>Observability</strong>
            {project.observability}
          </p>
        </div>
      ) : null}

      <div className="projectActions">
        <button type="button" className="detailsToggle" onClick={() => setOpen((v) => !v)}>
          {open ? 'Hide details' : 'Details'}
          <ChevronDown size={15} className={open ? 'flip' : undefined} />
        </button>
        {project.href ? (
          <a className="projectVisit" href={project.href} target="_blank" rel="noreferrer">
            Open
            <ArrowUpRight size={15} />
          </a>
        ) : null}
      </div>

      <div className="chipRow">
        {project.stack.map((item) => (
          <TechChip key={item} label={item} />
        ))}
      </div>
    </article>
  )
}

function ProjectSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const goTo = useCallback((target: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(projects.length - 1, target))
    const card = track.children[clamped] as HTMLElement | undefined
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [])

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    let nearest = 0
    let best = Infinity
    Array.from(track.children).forEach((child, i) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - track.scrollLeft)
      if (distance < best) {
        best = distance
        nearest = i
      }
    })
    setActive(nearest)
  }, [])

  return (
    <div className="projectSlider">
      <div className="projectShowcase" ref={trackRef} onScroll={handleScroll}>
        {projects.map((project, index) => (
          <ShowcaseProject key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="sliderControls">
        <div className="sliderDots">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              aria-current={index === active}
              data-active={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <div className="sliderArrows">
          <button
            type="button"
            aria-label="Previous project"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={active === projects.length - 1}
            onClick={() => goTo(active + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
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

        <section className="contentStage" id="skills" data-flash={flash('skills')}>
          <SectionHeader
            eyebrow="Skills"
            title="Technical stack."
            text="Grouped by where each piece sits in the system."
          />
          <div className="capabilityGrid">
            {capabilities.map((capability, index) => (
              <CapabilityBlock key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </section>

        <section className="contentStage aboutStage" id="about" data-flash={flash('about')}>
          <SectionHeader
            eyebrow="About"
            title="Background."
            text="Enterprise software engineering, then a postgraduate specialisation in AI, now applied to production LLM systems."
          />
          <div className="aboutLayout">
            <motion.div className="aboutLead" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <p>
                Three years at Accenture as the technical point of contact for enterprise clients across finance
                and technology, responsible for explaining root causes to non-technical stakeholders and owning
                incident resolution end to end. Built a RAG-based incident resolution system there to reduce
                repeat lookups by analysts, cutting recurring incidents by roughly 30%.
              </p>
              <p>
                Since completing the MSc at Leeds, focus has shifted to agent orchestration, retrieval
                architecture, and the APIs and evaluation tooling around them, carrying forward the same
                standard: measure a system before describing it, and document what it does not yet handle.
              </p>
            </motion.div>
            <div className="aboutProof">
              {[
                'Systems are measured before they are described',
                'Deployment and release process are treated as part of the build',
                'New systems integrate with what a business already runs',
                'Known limitations are documented, not left implicit',
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="contentStage" id="projects" data-flash={flash('projects')}>
          <SectionHeader
            eyebrow="Projects"
            title="Selected work."
            text="What each system does, how it is built, the constraint that shaped it, and how it was measured."
          />
          <ProjectSlider />
        </section>

        <section className="contentStage" id="experience" data-flash={flash('experience')}>
          <SectionHeader
            eyebrow="Experience"
            title="Enterprise delivery, then AI."
            text="Client-facing engineering at Accenture, including a RAG-based incident resolution system built during that role."
          />
          <TimelinePanel entries={experience} />
        </section>

        <section className="contentStage" id="education" data-flash={flash('education')}>
          <SectionHeader
            eyebrow="Education"
            title="MSc Advanced Computer Science."
            text="University of Leeds, graded Merit."
          />
          <TimelinePanel entries={education} />
        </section>


        <section className="contactStage" id="contact" data-flash={flash('contact')}>
          <div>
            <span className="contactEyebrow">Contact</span>
            <h2>Get in touch.</h2>
            <p>Open to AI Specialist and AI Engineering roles.</p>
          </div>
          <div className="contactButtons">
            <a className="primaryButton" href={links.email}>
              <Mail size={18} />
              Email me
            </a>
            <a className="secondaryButton" href={links.phone}>
              <Phone size={18} />
              {links.phoneDisplay}
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
        <p>Shibji Shekhar Rout - AI Specialist</p>
        <a href={links.email}>mrshibji@gmail.com</a>
        <a href={links.phone}>{links.phoneDisplay}</a>
      </footer>
    </div>
  )
}
