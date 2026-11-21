import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/site";
import { isLive, SiteMock } from "./ui";
import CTABand from "./CTABand";

const filters = ["All", "Business Websites", "E-commerce", "Web Apps & AI", "Other"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const list = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active]);
  const liveCount = projects.filter((p) => isLive(p.link)).length;

  return (
    <main>
      <section className="relative overflow-hidden pb-10 pt-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="container-x relative">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Work I&apos;ve designed, built &amp; shipped
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            {projects.length} projects across business websites, e-commerce, real-time apps and AI — {liveCount} of them live
            right now. Click any project to explore it.
          </p>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active === f ? "bg-accent text-ink-950" : "border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <motion.div layout className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.a
                layout
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="card group flex min-w-0 flex-col p-4 transition-colors hover:border-white/20"
              >
                <div className="transition-transform duration-500 group-hover:-translate-y-1">
                  <SiteMock project={p} compact />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                      <p className="mt-0.5 text-sm text-zinc-500">{p.subtitle}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        isLive(p.link) ? "bg-accent/15 text-accent" : "bg-white/[0.06] text-zinc-400"
                      }`}
                    >
                      {isLive(p.link) ? "● LIVE" : "CODE"}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip !text-[11px]">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-accent">
                    {isLive(p.link) ? (
                      <>Visit site <FiArrowUpRight /></>
                    ) : (
                      <><FiGithub /> View code</>
                    )}
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTABand />
    </main>
  );
};

export default Projects;
