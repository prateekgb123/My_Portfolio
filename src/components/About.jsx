import { FiDownload, FiAward, FiBriefcase, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemedPortrait from "./ThemedPortrait";
import { contact } from "../data/site";
import { Reveal } from "./ui";
import Skills from "./sections/Skills";
import Experience from "./Experience";
import CTABand from "./CTABand";
import { SimpleIconsLeetcode } from "./icons";

const facts = [
  { icon: FiBriefcase, label: "Currently", value: "Programmer Analyst Trainee, Cognizant" },
  { icon: FiAward, label: "Education", value: "B.E. Information Science, CMRIT Bengaluru (2026)" },
  { icon: FiMapPin, label: "Location", value: `${contact.location} · Remote-friendly` },
];

const About = () => (
  <main>
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="relative mx-auto w-full max-w-[280px] sm:max-w-sm">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.2rem] border border-white/10 bg-gradient-to-tr from-accent/20 to-transparent" />
          <ThemedPortrait
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10"
            crop={{ size: "150% auto", position: "42% 70%" }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">About me</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Building things for <span className="text-gradient">the web</span>
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              I&apos;m <span className="font-semibold text-white">{contact.name}</span>, a full-stack developer specialising in the{" "}
              <span className="text-white">MERN stack</span>. I&apos;ve built business websites, an e-commerce store with online
              payments, real-time apps and AI-powered platforms — and deployed them live.
            </p>
            <p>
              My industry experience at <span className="text-white">Cognizant</span> and two web-development internships taught me
              how to build things properly: clean code, solid APIs, and interfaces people actually enjoy using. I also take on freelance projects,
              building websites and web apps for businesses.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="card p-4">
                <f.icon className="text-accent" />
                <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">{f.label}</p>
                <p className="mt-1 text-sm font-medium text-white">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={contact.cv} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FiDownload /> Download CV
            </a>
            {[
              { href: contact.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
              { href: contact.github, icon: <FaGithub />, label: "GitHub" },
              { href: contact.leetcode, icon: <SimpleIconsLeetcode width={18} height={18} />, label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-lg text-zinc-300 transition hover:border-accent hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <Skills />
    <Experience />
    <CTABand title="Want to work together? Let's talk." />
  </main>
);

export default About;
