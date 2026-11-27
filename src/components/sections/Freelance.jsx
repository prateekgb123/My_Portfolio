import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { services, whatsappLink } from "../../data/site";
import { Reveal, ServiceIcon } from "../ui";

// Compact "I also build websites for clients" section.
const Freelance = () => (
  <section id="freelance" className="py-24">
    <div className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/[0.10] via-ink-850 to-ink-850 p-7 sm:p-10 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Freelance</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Need a website for your business?</h2>
              <p className="mt-4 leading-relaxed text-muted-400">
                Alongside my full-time work, I build websites and web apps for clients — designed around your requirements,
                built end to end and deployed live. Royal Infra, Wander Realtors, VB Construction and Unix Aquatech are a few I&apos;ve delivered.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary group">
                  Discuss your project <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <FaWhatsapp className="text-[#25D366]" /> WhatsApp
                </a>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.title} className="flex items-start gap-3 rounded-2xl border border-fg/[0.07] bg-ink-900/60 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span>
                    <span className="block font-semibold text-fg">{s.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted-500">{s.short}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Freelance;
