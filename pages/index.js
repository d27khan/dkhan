import Head from "next/head";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { BsFillPinMapFill } from "react-icons/bs";
import { TfiLightBulb } from "react-icons/tfi";
import { useState, useEffect, useRef } from "react";

// ─── Fade-in on scroll hook ────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Section wrapper with fade ────────────────────────────────────────────
function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-section ${className}`}>
      {children}
    </div>
  );
}

// ─── Experience data ───────────────────────────────────────────────────────
const experiences = [
  {
    role: "Senior Product Analyst, Supply Chain Automation",
    company: "Loblaw Companies Limited",
    location: "Brampton, ON",
    period: "Nov 2025 – Present",
    bullets: [
      "Work In Progress..."],
  },
  {
    role: "Product Analyst, Supply Chain Automation",
    company: "Loblaw Companies Limited",
    location: "Brampton, ON",
    period: "Oct 2023 – Nov 2025",
    bullets: [
      "Work In Progress..."],
  },
  {
    role: "Product Engineering Intern",
    company: "Diversio Inc.",
    location: "Toronto, ON",
    period: "May 2022 – Sept 2023",
    bullets: [
      "Embedded an ETL pipeline into the Django backend automating data collection from multiple sources, reducing manual processes by over 90%.",
      "Implemented an email notification and scheduling system delivering real-time alerts to over 500 users.",
    ],
  },
  {
    role: "Automation Developer Intern",
    company: "Loblaw Companies Limited",
    location: "Brampton, ON",
    period: "May – Dec 2021",
    bullets: [
      "Developed a Python monitoring script on AIX for hourly disk storage threshold checks, auto-clearing cached data and alerting admins to prevent capacity incidents.",
    ],
  },
];

// ─── Projects data ────────────────────────────────────────────────────────
const projects = [
  {
    title: "Distributed System Reliability & Observability Platform",
    stack: ["Python", "Docker", "Kubernetes", "Prometheus", "Grafana", "k6"],
    description:
      "Containerized microservice system with a full observability stack — metrics collection, structured logging, real-time alerting. Implemented production failure simulations (latency injection, crash loops, resource exhaustion) with RCA documentation. Built CI/CD pipelines and load testing via k6.",
    link: "https://github.com/d27khan",
  },
  {
    title: "Log Monitoring & Alerting System",
    stack: ["Python", "Linux", "Bash"],
    description:
      "Log processing pipeline to parse system events, detect anomalies, and trigger severity-based alerts. Designed monitoring logic to surface failure patterns and accelerate incident debugging.",
    link: "https://github.com/d27khan",
  },
  {
    title: "Manhattan WMS AI Agents",
    stack: ["GCP", "Python", "CI/CD"],
    description:
      "Designed and deployed AI agents on Google Cloud Platform to support day-to-day warehouse operations, including a monitoring and alerting agent for production deployments reducing manual effort by ~83%.",
    link: null,
  },
];

// ─── Education data ───────────────────────────────────────────────────────
const education = [
  {
    degree: "M.Sc. Electrical & Computer Engineering",
    school: "University of Colorado Boulder",
    detail: "Focus: Computer Architecture & Systems · Part-Time",
    period: "2026 – 2028",
  },
  {
    degree: "B.Eng. Computer Engineering",
    school: "Toronto Metropolitan University",
    detail: "",
    period: "2018 – 2023",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────
const skills = {
  Languages: ["Python", "Bash", "SQL", "C", "Java", "JavaScript", "Go", "Git"],
  "Infrastructure & Observability": [
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitLab CI",
    "Prometheus",
    "Grafana",
    "Sentry",
    "Linux/Unix",
  ],
  "Networking & Security": [
    "AlgoSec / FireFlow",
    "DC Network Architecture",
    "Connectivity Testing",
    "DigiCert",
  ],
  Tools: [
    "ServiceNow ITSM & CMDB",
    "Jira & Confluence",
    "Postman",
    "Claude Code CLI",
    "IBM Cognos",
  ],
};

// ─── Main Component ────────────────────────────────────────────────────────
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Daniel Khan</title>
        <meta name="description" content="Daniel Khan – Engineer" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f2f2f2;
          --bg-card: #ffffff;
          --bg-card2: #e8e8e8;
          --text: #111111;
          --text-secondary: #555555;
          --accent: #0060c7;
          --accent-soft: #ddeeff;
          --border: rgba(0,0,0,0.10);
          --nav-bg: rgba(242,242,242,0.80);
          --tag-bg: #e0e0e0;
          --tag-text: #111111;
          --hero-hi: #333333;
        }
        .dark {
          --bg: #111111;
          --bg-card: #1e1e1e;
          --bg-card2: #2a2a2a;
          --text: #f0f0f0;
          --text-secondary: #9a9a9a;
          --accent: #3b9eff;
          --accent-soft: #0a1e38;
          --border: rgba(255,255,255,0.09);
          --nav-bg: rgba(17,17,17,0.80);
          --tag-bg: #2e2e2e;
          --tag-text: #e8e8e8;
          --hero-hi: #cccccc;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s, color 0.3s;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          background: var(--nav-bg);
          border-bottom: 1px solid var(--border);
          transition: all 0.3s;
        }
        .nav-inner {
          max-width: 1000px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px; height: 52px;
        }
        .nav-logo {
          font-size: 16px; font-weight: 600; color: var(--text);
          text-decoration: none; letter-spacing: -0.01em;
        }
        .nav-links {
          display: flex; gap: 32px; list-style: none;
        }
        .nav-links a {
          font-size: 13px; color: var(--text-secondary);
          text-decoration: none; cursor: pointer;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-actions { display: flex; align-items: center; gap: 16px; }
        .dark-toggle {
          background: none; border: none; cursor: pointer;
          color: var(--text-secondary); font-size: 16px;
          display: flex; align-items: center;
          transition: color 0.2s;
        }
        .dark-toggle:hover { color: var(--text); }

        /* ── Fade-in ── */
        .fade-section {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-section.visible { opacity: 1; transform: none; }

        /* ── Hero ── */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          max-width: 1000px; margin: 0 auto;
          padding: 120px 24px 80px;
        }
        .hero-eyebrow {
          font-size: 14px; font-weight: 500;
          color: var(--accent); letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 700; line-height: 1.04;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .hero-hi { color: var(--text-secondary); }
        .hero-name { color: var(--text); }
        .hero-name em { color: var(--accent); font-style: normal; }
        .hero-sub {
          font-size: clamp(18px, 2.5vw, 22px);
          color: var(--text-secondary); font-weight: 300;
          max-width: 560px; line-height: 1.5; margin-bottom: 40px;
        }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--accent); color: #fff;
          border: none; border-radius: 980px;
          padding: 12px 24px; font-size: 15px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          font-family: inherit;
        }
        .btn-primary:hover { opacity: 0.85; transform: scale(0.98); }
        .btn-ghost {
          background: transparent; color: var(--accent);
          border: 1.5px solid var(--accent); border-radius: 980px;
          padding: 12px 24px; font-size: 15px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s;
          font-family: inherit;
        }
        .btn-ghost:hover { background: var(--accent-soft); }

        /* ── Sections ── */
        .section {
          max-width: 1000px; margin: 0 auto;
          padding: 100px 24px;
        }
        .section-label {
          font-size: 13px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 16px;
        }
        .section-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700; letter-spacing: -0.03em;
          color: var(--text); margin-bottom: 56px; line-height: 1.1;
        }

        /* ── About grid ── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: start;
        }
        @media (max-width: 680px) { .about-grid { grid-template-columns: 1fr; } }
        .about-body {
          font-size: 17px; line-height: 1.7;
          color: var(--text-secondary);
        }
        .about-chips { display: flex; flex-direction: column; gap: 10px; }
        .about-chip {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 14px; padding: 14px 20px;
          font-size: 15px; color: var(--text); font-weight: 400;
          display: flex; align-items: center; gap: 12px;
        }
        .about-chip span.icon { font-size: 20px; }

        /* ── Experience ── */
        .exp-list { display: flex; flex-direction: column; gap: 2px; }
        .exp-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 28px 32px;
          transition: background 0.2s;
        }
        .exp-card:hover { background: var(--bg-card2); }
        .exp-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 4px; gap: 16px;
          flex-wrap: wrap;
        }
        .exp-role {
          font-size: 17px; font-weight: 600; color: var(--text);
          letter-spacing: -0.01em;
        }
        .exp-period {
          font-size: 13px; color: var(--text-secondary);
          white-space: nowrap; margin-top: 2px;
        }
        .exp-company {
          font-size: 14px; color: var(--accent); font-weight: 500;
          margin-bottom: 16px;
        }
        .exp-bullets {
          list-style: none; display: flex; flex-direction: column; gap: 8px;
        }
        .exp-bullets li {
          font-size: 14px; color: var(--text-secondary);
          padding-left: 16px; position: relative; line-height: 1.6;
        }
        .exp-bullets li::before {
          content: "–"; position: absolute; left: 0;
          color: var(--accent);
        }

        /* ── Skills grid ── */
        .skills-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 680px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 24px 28px;
        }
        .skill-card-title {
          font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
          text-transform: uppercase; color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
          background: var(--tag-bg); color: var(--tag-text);
          border-radius: 8px; padding: 5px 12px;
          font-size: 13px; font-weight: 400;
        }

        /* ── Projects ── */
        .projects-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 680px) { .projects-grid { grid-template-columns: 1fr; } }
        .project-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 28px 28px 24px;
          display: flex; flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(0,0,0,0.12);
        }
        .project-title {
          font-size: 17px; font-weight: 600; color: var(--text);
          margin-bottom: 10px; letter-spacing: -0.01em; line-height: 1.3;
        }
        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
        .project-tag {
          background: var(--accent-soft); color: var(--accent);
          border-radius: 6px; padding: 3px 10px; font-size: 12px; font-weight: 500;
        }
        .project-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.65; flex: 1; }
        .project-link {
          margin-top: 20px; font-size: 14px; color: var(--accent);
          text-decoration: none; font-weight: 500;
          display: inline-flex; align-items: center; gap: 4px;
        }
        .project-link:hover { text-decoration: underline; }

        /* ── Education ── */
        .edu-list { display: flex; flex-direction: column; gap: 16px; }
        .edu-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 24px 28px;
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 16px; flex-wrap: wrap;
        }
        .edu-degree { font-size: 17px; font-weight: 600; color: var(--text); margin-bottom: 4px; }
        .edu-school { font-size: 14px; color: var(--accent); font-weight: 500; margin-bottom: 4px; }
        .edu-detail { font-size: 14px; color: var(--text-secondary); }
        .edu-period { font-size: 13px; color: var(--text-secondary); white-space: nowrap; margin-top: 4px; }

        /* ── Contact ── */
        .contact-inner {
          text-align: center; max-width: 560px; margin: 0 auto;
        }
        .contact-body {
          font-size: 17px; color: var(--text-secondary);
          margin-bottom: 36px; line-height: 1.65;
        }
        .contact-links { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .contact-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 12px; padding: 12px 20px;
          font-size: 14px; color: var(--text); text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          font-weight: 500;
        }
        .contact-link:hover { background: var(--bg-card2); transform: translateY(-2px); }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid var(--border);
          padding: 32px 24px;
          text-align: center;
        }
        .footer-inner { max-width: 1000px; margin: 0 auto; }
        .footer-text { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; }
        .footer-icons {
          display: flex; justify-content: center; gap: 28px;
          font-size: 18px; color: var(--text-secondary);
        }
        .footer-icons a { color: inherit; transition: color 0.2s; cursor: pointer; }
        .footer-icons a:hover { color: var(--text); }

        /* ── Divider ── */
        .divider {
          height: 1px; background: var(--border);
          max-width: 1000px; margin: 0 auto;
        }

        /* ── Hero animation ── */
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
        .hero-eyebrow { animation: heroFade 0.6s 0.1s both ease-out; }
        .hero-title   { animation: heroFade 0.6s 0.25s both ease-out; }
        .hero-sub     { animation: heroFade 0.6s 0.4s both ease-out; }
        .hero-ctas    { animation: heroFade 0.6s 0.55s both ease-out; }

        @media (max-width: 500px) {
          .nav-links { display: none; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo">Daniel Khan</span>
          <ul className="nav-links">
            {["About", "Experience", "Skills", "Projects", "Education", "Contact"].map((s) => (
              <li key={s}>
                <a onClick={() => scrollTo(s.toLowerCase())}>{s}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
              <TfiLightBulb />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero">
          <p className="hero-eyebrow">Engineer · Toronto, ON</p>
          <h1 className="hero-title">
            <span className="hero-hi">Hi, I&apos;m</span>
            <span className="hero-hi">Daniel Khan.</span>
          </h1>
          <p className="hero-sub">
            Building reliable, scalable systems at the intersection of supply chain automation, cloud infrastructure, and site reliability engineering.
          </p>
          <div className="hero-ctas">
            <a
              href="mailto:d27khan@gmail.com"
              className="btn-primary"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/d27khan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about">
        <FadeSection>
          <div className="section">
            <p className="section-label">About</p>
            <h2 className="section-title">A bit about me</h2>
            <div className="about-grid">
              <p className="about-body">
                I&apos;m an engineer with experience in production systems, automation, and large-scale system integrations across supply chain and warehouse environments. My background spans incident triage, post-mortem analysis, Python and SQL automation, API-driven debugging, and network security coordination.
                <br /><br />
                I&apos;m actively pioneering AI-driven automation across supply chain operations at Loblaw, and building SRE tooling to deepen my work in site reliability engineering.
              </p>
              <div className="about-chips">
                <div className="about-chip"><span className="icon">🏢</span> Senior Product Analyst @ Loblaw</div>
                <div className="about-chip"><span className="icon">🎓</span> M.Sc. ECE @ University of Colorado Boulder</div>
                <div className="about-chip"><span className="icon">📍</span> Toronto, ON</div>
                <div className="about-chip"><span className="icon">🤖</span> AI × Supply Chain Automation</div>
                <div className="about-chip"><span className="icon">🔧</span> SRE Tooling & Observability</div>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <FadeSection>
          <div className="section">
            <p className="section-label">Career</p>
            <h2 className="section-title">Experience</h2>
            <div className="exp-list">
              {experiences.map((e, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-header">
                    <span className="exp-role">{e.role}</span>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <div className="exp-company">{e.company} · {e.location}</div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* ── SKILLS ── */}
      <section id="skills">
        <FadeSection>
          <div className="section">
            <p className="section-label">Toolkit</p>
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([cat, items]) => (
                <div className="skill-card" key={cat}>
                  <div className="skill-card-title">{cat}</div>
                  <div className="skill-tags">
                    {items.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* ── PROJECTS ── */}
      <section id="projects">
        <FadeSection>
          <div className="section">
            <p className="section-label">Work</p>
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-title">{p.title}</div>
                  <div className="project-stack">
                    {p.stack.map((t) => <span className="project-tag" key={t}>{t}</span>)}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  {p.link && (
                    <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View on GitHub →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* ── EDUCATION ── */}
      <section id="education">
        <FadeSection>
          <div className="section">
            <p className="section-label">Academic</p>
            <h2 className="section-title">Education</h2>
            <div className="edu-list">
              {education.map((e, i) => (
                <div className="edu-card" key={i}>
                  <div>
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-school">{e.school}</div>
                    {e.detail && <div className="edu-detail">{e.detail}</div>}
                  </div>
                  <div className="edu-period">{e.period}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact">
        <FadeSection>
          <div className="section">
            <div className="contact-inner">
              <p className="section-label" style={{ textAlign: "center" }}>Contact</p>
              <h2 className="section-title" style={{ textAlign: "center" }}>
                Let&apos;s connect
              </h2>
              <p className="contact-body">
                Whether it&apos;s a collaboration, an opportunity, or just a conversation — I&apos;d love to hear from you.
              </p>
              <div className="contact-links">
                <a href="mailto:d27khan@gmail.com" className="contact-link">
                  <GrMail /> d27khan@gmail.com
                </a>
                <a href="https://linkedin.com/in/danielkhan-" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/d27khan" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <VscGithubInverted /> GitHub
                </a>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">Designed & built by Daniel Khan · Next.js & Tailwind</p>
          <div className="footer-icons">
            <a href="https://github.com/d27khan" target="_blank" rel="noopener noreferrer"><VscGithubInverted /></a>
            <a href="https://linkedin.com/in/danielkhan-" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
            <a href="mailto:d27khan@gmail.com"><GrMail /></a>
            <a href="https://www.google.com/maps/search/toronto"><BsFillPinMapFill /></a>
            <a onClick={() => setDarkMode(!darkMode)} title="Toggle theme"><TfiLightBulb /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}