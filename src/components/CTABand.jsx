import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { whatsappLink } from "../data/site";
import { Reveal } from "./ui";

const CTABand = ({ title = "Like my work? Let's build something together." }) => (
  <section className="py-20 md:py-28">
    <div className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1D4FC0_0%,#2F6FED_45%,#6AA8F7_100%)] p-8 text-white sm:p-12 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight !text-white md:text-5xl">{title}</h2>
            <div className="flex flex-wrap gap-3">
              <a href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-accent-deep transition hover:bg-white/90"
              >
                Get in touch <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold transition hover:bg-white/15"
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
