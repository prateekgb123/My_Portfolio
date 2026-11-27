import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { contact, whatsappLink } from "../data/site";

const Footer = () => (
  <footer className="border-t border-fg/[0.06] bg-ink-950">
    <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-lg font-extrabold text-ink-950">P</span>
          <span className="font-display text-lg font-bold text-fg">
            Prateek<span className="text-accent">.</span>
          </span>
        </a>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-400">
          Full-stack developer in {contact.location} — building web apps, AI products and websites for clients.
        </p>
        <div className="mt-6 flex gap-3">
          {[
            { href: whatsappLink(), icon: FaWhatsapp, label: "WhatsApp" },
            { href: `mailto:${contact.email}`, icon: FiMail, label: "Email" },
            { href: contact.linkedin, icon: FaLinkedin, label: "LinkedIn" },
            { href: contact.github, icon: FaGithub, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-fg/10 text-muted-300 transition hover:border-accent hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-fg">Explore</p>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-400">
          <li><a className="hover:text-fg" href="#about">About</a></li>
          <li><a className="hover:text-fg" href="#projects">Projects</a></li>
          <li><a className="hover:text-fg" href="#experience">Experience</a></li>
          <li><a className="hover:text-fg" href="#freelance">Freelance</a></li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-fg">Get in touch</p>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-400">
          <li><a className="hover:text-fg" href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><a className="hover:text-fg" href={`tel:+${contact.phoneRaw}`}>{contact.phone}</a></li>
          <li>{contact.location}</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-fg/[0.06]">
      <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
        <p>Designed & built by me.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
