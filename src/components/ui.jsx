import { motion } from "framer-motion";
import {
  FiBriefcase, FiShoppingBag, FiTarget, FiLayers, FiCpu, FiRefreshCw, FiArrowUpRight,
} from "react-icons/fi";

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, subtitle, center = false }) => (
  <Reveal className={`mb-12 md:mb-16 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">{subtitle}</p>}
  </Reveal>
);

const serviceIcons = {
  business: FiBriefcase,
  shop: FiShoppingBag,
  landing: FiTarget,
  app: FiLayers,
  ai: FiCpu,
  redesign: FiRefreshCw,
};

export const ServiceIcon = ({ name, className }) => {
  const Icon = serviceIcons[name] || FiLayers;
  return <Icon className={className} />;
};

export const hostOf = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname === "github.com") return `github.com${u.pathname.replace(/\.git$/, "")}`;
    return u.hostname;
  } catch {
    return url;
  }
};

export const isLive = (url) => !/github\.com/.test(url);

/* A stylised browser window that previews a project. If `project.image` is set it shows the screenshot. */
export const SiteMock = ({ project, compact = false }) => {
  const c = project.color;
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-white/5 bg-ink-950/60 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
          {isLive(project.link) ? "🔒 " : ""}
          {hostOf(project.link)}
        </div>
      </div>

      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
      ) : (
        <div
          className="relative aspect-[16/10] overflow-hidden p-[6%]"
          style={{
            background: `radial-gradient(120% 80% at 85% 0%, ${c}38 0%, transparent 55%), radial-gradient(80% 70% at 0% 100%, ${c}1f 0%, transparent 60%), #10131a`,
          }}
        >
          {/* mini nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-[4px]" style={{ background: c }} />
              <span className="h-1.5 w-10 rounded-full bg-white/40" />
            </div>
            <div className="flex gap-1.5 overflow-hidden">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1.5 w-6 rounded-full bg-white/20" />
              ))}
              <span className="h-1.5 w-8 rounded-full" style={{ background: c }} />
            </div>
          </div>

          <MockBody kind={project.kind} c={c} title={project.title} compact={compact} />
        </div>
      )}
    </div>
  );
};

const MockBody = ({ kind, c, title, compact }) => {
  const heading = (
    <div className={compact ? "mt-[7%]" : "mt-[8%]"}>
      <p
        className={`font-display font-bold leading-[1.05] text-white ${compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl md:text-3xl"}`}
      >
        {title}
      </p>
      <div className="mt-2 space-y-1.5">
        <span className="block h-1.5 w-3/5 rounded-full bg-white/20" />
        {!compact && <span className="block h-1.5 w-2/5 rounded-full bg-white/15" />}
      </div>
      {!(compact && kind === "shop") && (
        <span className={`inline-block rounded-full ${compact ? "mt-2 h-3 w-12" : "mt-3 h-4 w-16"}`} style={{ background: c }} />
      )}
    </div>
  );

  if (kind === "shop") {
    return (
      <>
        {heading}
        <div className="absolute inset-x-[6%] bottom-[7%] grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white/[0.06] p-1.5">
              <div className="aspect-square rounded-md" style={{ background: `${c}${["55", "33", "44", "22"][i]}` }} />
              <span className="mt-1.5 block h-1 w-3/4 rounded-full bg-white/25" />
              <span className="mt-1 block h-1 w-1/3 rounded-full" style={{ background: c }} />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (kind === "app") {
    return (
      <div className="absolute inset-x-[6%] bottom-[7%] top-[22%] flex gap-2">
        <div className="w-1/5 space-y-1.5 rounded-lg bg-white/[0.05] p-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="block h-1.5 rounded-full" style={{ background: i === 1 ? c : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p className={`font-display font-bold text-white ${compact ? "text-sm" : "text-base sm:text-xl"}`}>{title}</p>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-white/[0.06] p-2">
                <span className="block h-1 w-1/2 rounded-full bg-white/25" />
                <span className="mt-1.5 block h-2 w-3/4 rounded-full" style={{ background: i === 0 ? c : "rgba(255,255,255,0.3)" }} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-white/[0.04] p-2">
            {[40, 65, 35, 80, 55, 90, 70, 60, 85].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 3 === 0 ? c : `${c}55` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "ai") {
    return (
      <>
        {heading}
        <div className="absolute bottom-[7%] right-[6%] w-[46%] space-y-1.5 rounded-xl border border-white/10 bg-ink-950/70 p-2 backdrop-blur">
          <div className="ml-auto w-3/4 rounded-lg rounded-br-sm px-2 py-1.5" style={{ background: `${c}44` }}>
            <span className="block h-1 rounded-full bg-white/60" />
          </div>
          <div className="w-4/5 space-y-1 rounded-lg rounded-bl-sm bg-white/[0.08] px-2 py-1.5">
            <span className="block h-1 rounded-full bg-white/40" />
            <span className="block h-1 w-2/3 rounded-full bg-white/30" />
          </div>
          <div className="flex items-center gap-1 rounded-md bg-white/[0.05] px-2 py-1">
            <span className="h-1 flex-1 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
          </div>
        </div>
      </>
    );
  }

  // business
  return (
    <>
      {heading}
      <div className="absolute inset-x-[6%] bottom-[7%] grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-white/[0.05] p-2">
            <span className="block h-3 w-3 rounded-md" style={{ background: `${c}${i === 0 ? "" : "66"}` }} />
            <span className="mt-2 block h-1 w-3/4 rounded-full bg-white/30" />
            <span className="mt-1 block h-1 w-1/2 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </>
  );
};

export const ProjectLink = ({ link, className = "" }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-accent ${className}`}
  >
    {isLive(link) ? "Visit live site" : "View source code"}
    <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);
