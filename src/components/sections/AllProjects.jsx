import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../data/site";
import { isLive, SiteMock } from "../ui";

// filter tabs come from the categories actually in use, so none is ever empty
const filters = ["All", ...new Set(projects.map((p) => p.category))];

// Filterable grid of every project, shown under the featured ones.
const AllProjects = () => {
  const [active, setActive] = useState("All");
  const list = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active]);

  return (
    <div id="all-projects" className="scroll-mt-24">
      <section className="relative pb-10 pt-20 md:pt-28">
        <div className="container-x relative">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Work I&apos;ve designed, built &amp; shipped
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-400">
            {projects.length} live websites and web apps — business sites, e-commerce and AI-powered products, all deployed and
            running right now. Click any project to open it.
          </p>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active === f ? "bg-accent text-ink-950" : "border border-fg/10 text-muted-300 hover:border-fg/30 hover:text-fg"
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
                className="card group flex min-w-0 flex-col p-4 transition-colors hover:border-fg/20"
              >
                <div className="transition-transform duration-500 group-hover:-translate-y-1">
                  <SiteMock project={p} compact />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-500">{p.subtitle}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        isLive(p.link) ? "bg-accent/15 text-accent" : "bg-fg/[0.06] text-muted-400"
                      }`}
                    >
                      {isLive(p.link) ? "● LIVE" : "CODE"}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-400">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip !text-[11px]">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fg group-hover:text-accent">
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
    </div>
  );
};

export default AllProjects;
