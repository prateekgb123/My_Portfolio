import { skillGroups } from "../../data/site";
import { Reveal, SectionHeading } from "../ui";

const Skills = () => (
  <section id="skills" className="border-t border-white/[0.06] bg-ink-950/40 py-24">
    <div className="container-x">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.05}>
            <div className="card h-full p-6">
              <p className="font-display text-lg font-bold text-white">{g.name}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip transition hover:border-accent/40 hover:text-accent">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
