import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import blissBg from "@/assets/bliss-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raoua Ben Hamed — Software Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Raoua Ben Hamed, a software engineering student at ISSATSO. Projects, skills, and contact.",
      },
      { property: "og:title", content: "Raoua Ben Hamed — Portfolio" },
      {
        property: "og:description",
        content:
          "A software engineering student on a constant journey of learning, growth, and self-improvement.",
      },
    ],
  }),
  component: Portfolio,
});

type Tab = "about" | "projects" | "skills" | "contact";

function Portfolio() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${blissBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* soft white wash to lift contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/40 pointer-events-none" />

      {/* Floating pixel decorations (no emojis) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="absolute drift rounded-[3px]"
            style={{
              top: `${(i * 53) % 92}%`,
              left: `${(i * 41) % 95}%`,
              width: `${10 + (i % 3) * 4}px`,
              height: `${10 + (i % 3) * 4}px`,
              background: i % 2 ? "rgba(47,120,255,0.85)" : "rgba(28,71,168,0.85)",
              border: "2px solid rgba(255,255,255,0.85)",
              boxShadow: "0 4px 12px -4px rgba(13,37,102,0.4)",
              animationDelay: `${(i % 5) * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-10">
        {/* Top label */}
        <div className="flex items-center justify-between mb-5 fade-in">
          <div className="mono text-xs sm:text-sm text-[color:var(--ink-deep)] bg-white/70 px-3 py-1.5 rounded-full border border-[color:var(--ink)]/20">
            raoua.dev — v2.0
          </div>
          <div className="crt text-2xl text-[color:var(--ink-deep)] bg-white/70 px-3 rounded-full">
            tunis · tunisia
          </div>
        </div>

        {/* Mac window */}
        <div className="mac-window fade-up">
          <div className="mac-titlebar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="ml-3 mono">~/raoua-ben-hamed/portfolio</span>
            <span className="ml-auto mono opacity-60">⌘ N</span>
          </div>

          {/* Tab bar */}
          <div className="px-4 sm:px-6 pt-4 pb-3 flex flex-wrap gap-2 border-b border-[color:var(--ink)]/15 dot-paper">
            {(
              [
                ["about", "about"],
                ["projects", "projects"],
                ["skills", "skills"],
                ["contact", "contact"],
              ] as const
            ).map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`mac-tab ${tab === k ? "active" : ""}`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Content */}
          <div key={tab} className="p-5 sm:p-8 tab-enter">
            {tab === "about" && <About />}
            {tab === "projects" && <Projects />}
            {tab === "skills" && <Skills />}
            {tab === "contact" && <Contact />}
          </div>
        </div>

        <div className="text-center mt-6 mono text-xs text-[color:var(--ink-deep)] fade-in">
          made by raoua · {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

/* =================== ABOUT =================== */
function About() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2 space-y-5">
        <div className="mono text-sm text-[color:var(--ink-bright)]">
          // hello world
        </div>
        <h1 className="text-3xl sm:text-4xl glitch leading-tight">
          I'm Raoua Ben Hamed
        </h1>
        <p className="crt text-2xl leading-snug text-[color:var(--ink-deep)]">
          A second-year Software Engineering student at ISSATSO on a constant
          journey of learning, growth, and self-improvement.
        </p>
        <p className="text-base leading-relaxed text-[color:var(--ink-deep)]/85">
          I love turning fuzzy ideas into real, working software — whether
          that's a small Java mini-game, a full PHP event-booking platform, or
          a polished frontend. Collaborative, curious, detail-driven, and the
          kind of teammate who actually enjoys code review.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "collaborative",
            "always learning",
            "detail-driven",
            "problem solver",
            "3 languages",
            "ships fast",
          ].map((b) => (
            <span key={b} className="chip">
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="https://github.com/raoua123"
            target="_blank"
            rel="noreferrer"
            className="pill-btn pill-btn-solid"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/raoua-ben-hamed-835626368/"
            target="_blank"
            rel="noreferrer"
            className="pill-btn"
          >
            linkedin
          </a>
          <a href="mailto:raouabenhamed@gmail.com" className="pill-btn">
            get in touch
          </a>
        </div>
      </div>

      {/* Vintage info card (no avatar) */}
      <div className="glass-card p-5 float-slow">
        <div className="mono text-[11px] text-[color:var(--ink-bright)] mb-3">
          [ status.dat ]
        </div>
        <pre className="crt text-xl leading-tight whitespace-pre text-[color:var(--ink-deep)]">
{`+----------------+
| name   raoua   |
| role   dev     |
| year   2 / SE  |
| loc    tunis   |
| state  online  |
+----------------+`}
        </pre>
        <div className="mt-4 mono text-xs text-[color:var(--ink-bright)]">
          &gt; open to work_<span className="caret">&nbsp;</span>
        </div>
      </div>
    </div>
  );
}

/* =================== PROJECTS =================== */
type Project = {
  name: string;
  desc: string;
  long: string;
  lang: string;
  url: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    name: "EventSphere",
    desc: "Plateforme de Réservation d'Événements",
    long: "A full event-booking platform — browse events, book tickets, manage attendees. End-to-end PHP project with a clean, responsive UI.",
    lang: "PHP",
    url: "https://github.com/raoua123/EventSphere",
    tags: ["PHP", "MySQL", "Full-stack"],
  },
  {
    name: "KnightVsDragons",
    desc: "A Knight vs Dragons mini-game",
    long: "An OOP Java mini-game where a knight battles dragons. Built to practice clean class hierarchies, game loops, and input handling.",
    lang: "Java",
    url: "https://github.com/raoua123/KnightVsDragons",
    tags: ["Java", "OOP", "Game"],
  },
  {
    name: "MiniProjet",
    desc: "JavaScript mini-project",
    long: "A focused JavaScript build sharpening DOM manipulation, state, and clean component patterns from scratch — no frameworks.",
    lang: "JavaScript",
    url: "https://github.com/raoua123/MiniProjet",
    tags: ["JavaScript", "DOM", "Vanilla"],
  },
];

function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <div className="mono text-sm text-[color:var(--ink-bright)]">
          $ ls ~/projects
        </div>
        <h2 className="text-2xl sm:text-3xl mt-1">Things I've built</h2>
        <p className="text-sm mt-1 text-[color:var(--ink-deep)]/75">
          Click a card to see the full story · all live on my GitHub.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActive(p)}
            className="glass-card lift text-left p-5 group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="mono text-[11px] text-[color:var(--ink-bright)]">
                / {String(i + 1).padStart(2, "0")}
              </span>
              <span className="chip">{p.lang}</span>
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl">{p.name}</h3>
              <span className="mono text-[color:var(--ink-bright)] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
            <p className="crt text-xl mt-1 text-[color:var(--ink-deep)]">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[color:var(--ink-deep)]/45 fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="mac-window max-w-lg w-full fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mac-titlebar">
              <button
                onClick={() => setActive(null)}
                className="dot dot-r"
                aria-label="close"
              />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="ml-3 mono">{active.name}.md</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{active.name}</h3>
              <p className="crt text-xl text-[color:var(--ink-bright)] mt-1">
                {active.desc}
              </p>
              <p className="text-sm mt-3 leading-relaxed text-[color:var(--ink-deep)]/85">
                {active.long}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {active.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn pill-btn-solid"
                >
                  view on github ↗
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="pill-btn"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =================== SKILLS =================== */
const SKILLS: Record<string, { n: string; lvl: number }[]> = {
  Languages: [
    { n: "Java", lvl: 85 },
    { n: "PHP", lvl: 80 },
    { n: "C", lvl: 70 },
    { n: "JavaScript", lvl: 85 },
    { n: "TypeScript", lvl: 75 },
    { n: "HTML", lvl: 95 },
    { n: "CSS", lvl: 90 },
    { n: "SQL", lvl: 78 },
    { n: "Python", lvl: 65 },
  ],
  "Frameworks": [
    { n: "React", lvl: 80 },
    { n: "Node.js", lvl: 70 },
    { n: "Tailwind", lvl: 88 },
    { n: "Bootstrap", lvl: 80 },
    { n: "Laravel", lvl: 65 },
  ],
  "Tools": [
    { n: "Git / GitHub", lvl: 88 },
    { n: "VS Code", lvl: 95 },
    { n: "MySQL", lvl: 80 },
    { n: "Figma", lvl: 70 },
    { n: "Linux", lvl: 65 },
  ],
  "Security": [
    { n: "Web Security Basics", lvl: 75 },
    { n: "OWASP Top 10", lvl: 70 },
    { n: "Secure Coding", lvl: 72 },
    { n: "Network Fundamentals", lvl: 68 },
    { n: "Linux Hardening", lvl: 60 },
  ],
  "Design": [
    { n: "Photoshop", lvl: 88 },
    { n: "Illustrator", lvl: 80 },
    { n: "Blender", lvl: 72 },
    { n: "Figma", lvl: 75 },
  ],
};

const LANGUAGES = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 90 },
  { name: "French", level: "Intermediate", pct: 60 },
];

function Skills() {
  const [cat, setCat] = useState<keyof typeof SKILLS>("Languages");
  return (
    <div className="space-y-6">
      <div>
        <div className="mono text-sm text-[color:var(--ink-bright)]">
          // my toolkit
        </div>
        <h2 className="text-2xl sm:text-3xl mt-1">Skills &amp; stack</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(SKILLS) as Array<keyof typeof SKILLS>).map((k) => (
          <button
            key={k}
            onClick={() => setCat(k)}
            className={`mac-tab ${cat === k ? "active" : ""}`}
          >
            {k}
          </button>
        ))}
      </div>

      <div key={String(cat)} className="grid sm:grid-cols-2 gap-x-8 gap-y-4 tab-enter">
        {SKILLS[cat].map((s) => (
          <div key={s.n} className="space-y-1.5">
            <div className="flex items-center justify-between mono text-sm text-[color:var(--ink-deep)]">
              <span>{s.n}</span>
              <span className="text-[color:var(--ink-bright)]">{s.lvl}%</span>
            </div>
            <div className="h-2 rounded-full bg-[color:var(--ink)]/10 overflow-hidden">
              <div
                className="bar-fill"
                style={{ ["--w" as string]: `${s.lvl}%`, width: `${s.lvl}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="overflow-hidden rounded-full border border-[color:var(--ink)]/20 bg-white/55 py-2.5">
        <div className="marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-8 px-6 mono text-sm text-[color:var(--ink-deep)] shrink-0"
            >
              {[
                "Java",
                "PHP",
                "C",
                "React",
                "Tailwind",
                "Git",
                "MySQL",
                "JavaScript",
                "TypeScript",
                "Python",
                "Photoshop",
                "Illustrator",
                "Blender",
                "Security",
                "Figma",
              ].map((t) => (
                <span key={`${i}-${t}`}>· {t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl mb-3">Languages I speak</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {LANGUAGES.map((l) => (
            <div key={l.name} className="glass-card p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-lg">{l.name}</span>
                <span className="crt text-xl text-[color:var(--ink-bright)]">
                  {l.level}
                </span>
              </div>
              <div className="h-2 mt-3 rounded-full bg-[color:var(--ink)]/10 overflow-hidden">
                <div
                  className="bar-fill"
                  style={{ ["--w" as string]: `${l.pct}%`, width: `${l.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =================== CONTACT =================== */
function Contact() {
  const items = [
    { k: "GitHub", v: "@raoua123", href: "https://github.com/raoua123" },
    {
      k: "Email",
      v: "raouabenhamed@gmail.com",
      href: "mailto:raouabenhamed@gmail.com",
    },
    {
      k: "LinkedIn",
      v: "in/raoua-ben-hamed",
      href: "https://www.linkedin.com/in/raoua-ben-hamed-835626368/",
    },
    { k: "Location", v: "Tunis, Tunisia", href: "#" },
  ];

  return (
    <div className="space-y-5">
      <div className="mono text-sm text-[color:var(--ink-bright)]">
        // let's talk
      </div>
      <h2 className="text-2xl sm:text-3xl">
        Let's build something together
      </h2>
      <p className="crt text-2xl text-[color:var(--ink-deep)]">
        I'm open to internships, collaborations, and any project where I can
        learn and ship.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((i) => (
          <a
            key={i.k}
            href={i.href}
            target={i.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="glass-card lift p-4 flex items-center justify-between gap-3"
          >
            <div className="min-w-0">
              <div className="mono text-[11px] text-[color:var(--ink-bright)] uppercase tracking-wider">
                {i.k}
              </div>
              <div className="text-base mt-0.5 truncate">{i.v}</div>
            </div>
            <span className="mono text-[color:var(--ink-bright)]">↗</span>
          </a>
        ))}
      </div>

      <a
        href="mailto:raouabenhamed@gmail.com"
        className="pill-btn pill-btn-solid mt-4"
      >
        send me a message
      </a>
    </div>
  );
}
