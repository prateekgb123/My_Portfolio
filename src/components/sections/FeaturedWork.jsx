import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { projects } from "../../data/site";
import { ProjectLink, Reveal, SectionHeading, SiteMock } from "../ui";

const FeaturedWork = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative border-t border-white/[0.06] bg-ink-950/40 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Featured projects"
            subtitle="A selection of things I've designed, built and deployed — AI-powered apps, client websites and full-stack platforms."
          />
          <Reveal className="mb-12 md:mb-16">
            <Link to="/projects" className="btn-ghost group whitespace-nowrap">
              All projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-6 md:space-y-8">
          {featured.map((p, i) => (
            <Reveal key={p.title}>
              <article className="card grid items-center gap-8 [&>*]:min-w-0 p-5 sm:p-7 md:p-10 lg:grid-cols-2 lg:gap-12">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-0.5deg] ${i % 2 ? "lg:order-2" : ""}`}
                  aria-label={`Open ${p.title}`}
                >
                  <SiteMock project={p} />
                </a>
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: p.color }}>
                    <span className="h-px w-8" style={{ background: p.color }} />
                    {p.category}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-zinc-400">{p.subtitle}</p>
                  <p className="mt-5 leading-relaxed text-zinc-300">{p.desc}</p>
                  {p.highlights && (
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-zinc-300">
                          <FiCheck className="mt-0.5 shrink-0 text-accent" /> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <ProjectLink link={p.link} className="mt-8" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
