import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { whatsappLink } from "../data/site";
import { Reveal } from "./ui";

const CTABand = ({ title = "Like my work? Let's build something together." }) => (
  <section className="py-20 md:py-28">
    <div className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-8 text-ink-950 sm:p-12 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight !text-ink-950 md:text-5xl">{title}</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 font-semibold text-white transition hover:bg-ink-800"
              >
                Get in touch <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-950/25 px-6 py-3 font-semibold transition hover:bg-ink-950/10"
              >
                <FaWhatsapp /> WhatsApp me
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTABand;
