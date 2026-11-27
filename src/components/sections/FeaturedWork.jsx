import { FiArrowRight, FiCheck, FiBriefcase, FiUser, FiGrid } from "react-icons/fi";
import { SiExpress, SiMongodb, SiReact, SiZoho } from "react-icons/si";
import { projects } from "../../data/site";
import { ProjectLink, Reveal, SiteMock } from "../ui";

const clientWork = projects.filter((p) => p.client);
const personal = projects.filter((p) => p.featured && !p.client);

/* ---------- small building blocks ---------- */

const PartHeading = ({ index, icon: Icon, title, note }) => (
  <Reveal className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 md:mb-10">
    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-sky-400 text-white shadow-[0_10px_24px_-10px_rgba(47,111,237,0.8)]">
      <Icon />
    </span>
    <div>
      <p className="font-mono text-xs font-semibold text-accent">{index}</p>
      <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
    </div>
    <span className="hidden h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent sm:block" />
    <span className="chip !bg-white/70">{note}</span>
  </Reveal>
);

const Highlights = ({ items, cols = true }) => (
  <ul className={`mt-5 grid gap-2.5 ${cols ? "sm:grid-cols-2" : ""}`}>
    {items.map((h) => (
      <li key={h} className="flex items-start gap-2 text-sm text-muted-300">
        <FiCheck className="mt-0.5 shrink-0 text-accent" /> {h}
      </li>
    ))}
  </ul>
);

const Chips = ({ tech }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {tech.map((t) => (
      <span key={t} className={`chip ${t === "Zoho CRM" ? "!border-[#E42527]/25 !bg-[#E42527]/[0.07] !text-[#C21E20]" : ""}`}>
        {t}
      </span>
    ))}
  </div>
);

// Website → API → Database → Zoho CRM, with a dot travelling along the line
const flow = [
  { Icon: SiReact, label: "Website", color: "#149ECA" },
  { Icon: SiExpress, label: "Node API", color: "#0D1E40" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiZoho, label: "Zoho CRM", color: "#E42527" },
];

const LeadFlow = () => (
  <div className="mt-6 rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/[0.06] to-sky-100/40 p-4">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-500">How every enquiry flows</p>
    <div className="relative mt-3 flex items-start justify-between">
      <span className="absolute left-[12%] right-[12%] top-5 border-t-2 border-dashed border-accent/25" />
      <span className="flow-dot absolute left-[12%] top-[15px] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_#2F6FED]" />
      {flow.map(({ Icon, label, color }) => (
        <div key={label} className="relative flex w-1/4 flex-col items-center gap-1.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white bg-white shadow-[0_6px_16px_-8px_rgba(13,40,100,0.35)]">
            <Icon className="text-lg" style={{ color }} />
          </span>
          <span className="text-center text-[11px] font-medium leading-tight text-muted-400">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ---------- cards ---------- */

const ClientCard = ({ p, i }) => (
  <Reveal delay={i * 0.1} className="h-full min-w-0">
    <article className="card group relative flex h-full flex-col overflow-hidden p-5 sm:p-7">
      {/* brand-coloured glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: p.color }}
      />
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${p.title}`}
        className="relative block transition-transform duration-500 group-hover:-translate-y-1"
      >
        <SiteMock project={p} />
      </a>

      <div className="relative mt-6 flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: `${p.color}1a`, color: p.color }}
        >
          <FiBriefcase /> {p.client}
        </span>
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600">● LIVE</span>
      </div>

      <h4 className="relative mt-3 text-2xl font-bold md:text-[1.75rem]">{p.title}</h4>
      <p className="relative mt-1 text-muted-400">{p.subtitle}</p>
      <p className="relative mt-4 leading-relaxed text-muted-300">{p.desc}</p>

      <LeadFlow />
      <Highlights items={p.highlights} />
      <Chips tech={p.tech} />
      <div className="mt-auto pt-7">
        <ProjectLink link={p.link} />
      </div>
    </article>
  </Reveal>
);

const PersonalCard = ({ p, wide }) => (
  <article
    className={`card group relative h-full overflow-hidden p-5 sm:p-7 ${wide ? "grid items-center gap-8 [&>*]:min-w-0 lg:grid-cols-2 lg:gap-10 lg:p-9" : "flex flex-col"}`}
  >
    <div
      className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-35"
      style={{ background: p.color }}
    />
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.title}`}
      className="relative block transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.4deg]"
    >
      <SiteMock project={p} compact={!wide} />
    </a>
    <div className={`relative flex flex-1 flex-col ${wide ? "" : "mt-6"}`}>
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: p.color }}>
        <span className="h-px w-8" style={{ background: p.color }} />
        {p.category}
      </div>
      <h4 className={`mt-3 font-bold ${wide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{p.title}</h4>
      <p className="mt-1 text-muted-400">{p.subtitle}</p>
      <p className="mt-4 leading-relaxed text-muted-300">{p.desc}</p>
      {p.highlights && <Highlights items={p.highlights} cols={wide} />}
      <Chips tech={p.tech} />
      <div className="mt-auto pt-7">
        <ProjectLink link={p.link} />
      </div>
    </div>
  </article>
);

/* ---------- section ---------- */

const FeaturedWork = () => (
  <section id="projects" className="relative border-t border-fg/[0.06] pt-24 md:pt-32">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[120px]" />
    <div className="container-x relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Projects</span>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
          Work for <span className="text-gradient">clients</span> &amp; my own <span className="text-gradient">builds</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-400 md:text-lg">
          Live websites I&apos;ve delivered for real-estate companies, and personal projects where I explore AI and full-stack ideas.
        </p>
      </Reveal>

      {/* jump bar */}
      <Reveal className="mt-10 flex justify-center">
        <div className="glass inline-flex flex-wrap justify-center gap-1 rounded-full p-1.5 text-sm font-semibold">
          {[
            { href: "#client-work", icon: FiBriefcase, label: "For companies", n: clientWork.length },
            { href: "#personal-projects", icon: FiUser, label: "Personal", n: personal.length },
            { href: "#all-projects", icon: FiGrid, label: "All projects", n: projects.length },
          ].map(({ href, icon: Icon, label, n }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-muted-300 transition hover:bg-accent hover:text-white"
            >
              <Icon /> {label}
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] text-accent-deep">{n}</span>
            </a>
          ))}
        </div>
      </Reveal>

      {/* part 1 — client work */}
      <div id="client-work" className="scroll-mt-28 pt-16 md:pt-20">
        <PartHeading index="01" icon={FiBriefcase} title="Built for companies" note="Real estate · MERN + Zoho CRM" />
        <div className="grid gap-6 lg:grid-cols-2">
          {clientWork.map((p, i) => (
            <ClientCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>

      {/* part 2 — personal projects */}
      <div id="personal-projects" className="scroll-mt-28 pt-20 md:pt-24">
        <PartHeading index="02" icon={FiUser} title="Personal projects" note="AI · Full-stack · E-commerce" />
        <div className="grid gap-6 lg:grid-cols-2">
          {personal.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={`min-w-0 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <PersonalCard p={p} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-12 flex justify-center">
        <a href="#all-projects" className="btn-ghost group">
          Browse all {projects.length} projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </div>
  </section>
);

export default FeaturedWork;
