import { experience } from "../data/site";
import { Reveal, SectionHeading } from "./ui";

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="container-x">
      <SectionHeading eyebrow="Experience" title="Where I've sharpened my skills" />
      <div className="relative space-y-6 border-l border-fg/10 pl-6 md:pl-10">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-ink-900 md:-left-[47px]" />
              <div className="card p-6 md:p-8">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">{e.title}</h3>
                    <p className="mt-1 font-medium text-accent">{e.company}</p>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-muted-500">
                    {e.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Current
                      </span>
                    )}
                    {e.duration}
                  </p>
                </div>
                <p className="mt-4 leading-relaxed text-muted-400">{e.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
