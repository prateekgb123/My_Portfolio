import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SimpleIconsLeetcode } from "../icons";
import HeroVisual from "./HeroVisual";
import { contact, stats, techMarquee } from "../../data/site";

const ease = [0.22, 1, 0.36, 1];

// soft cumulus clouds drawn with blurred white blobs
const Cloud = ({ className = "" }) => (
  <div className={`pointer-events-none absolute ${className}`}>
    <div className="relative h-24 w-72">
      <span className="absolute bottom-0 left-0 h-14 w-full rounded-full bg-white/80 blur-xl" />
      <span className="absolute bottom-4 left-10 h-20 w-28 rounded-full bg-white/80 blur-xl" />
      <span className="absolute bottom-3 left-32 h-24 w-32 rounded-full bg-white/70 blur-xl" />
    </div>
  </div>
);

const Hero = () => (
  <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
    {/* sky backdrop, extends up behind the floating header */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%-110px)] bg-sky" />
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/20 blur-[120px]" />
    <Cloud className="left-[-4%] top-[18%] scale-110 animate-drift opacity-90" />
    <Cloud className="right-[2%] top-[6%] scale-75 animate-drift-slow opacity-80" />
    <Cloud className="left-[30%] top-[58%] scale-150 animate-drift-slow opacity-70" />
    <Cloud className="right-[-6%] top-[52%] scale-125 animate-drift opacity-80" />

    <div className="on-sky container-x relative grid items-center gap-12 py-12 md:py-16 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/15 py-1.5 pl-2 pr-4 text-sm text-white backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" />
          Open to opportunities &amp; freelance work
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-6 text-lg text-muted-400"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-1 text-[2.6rem] font-extrabold leading-[1.02] drop-shadow-[0_4px_24px_rgba(13,40,100,0.25)] sm:text-6xl xl:text-7xl"
        >
          {contact.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-4 font-display text-2xl font-bold sm:text-3xl"
        >
          <span className="text-gradient">Full-Stack Developer</span>{" "}
          <span className="text-muted-500">· MERN &amp; AI</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-400"
        >
          Junior AI Developer at <span className="text-fg">Octopus Estates</span> and Information Science graduate from CMR
          Institute of Technology, {contact.location.split(",")[0]}. I build responsive web apps, backend services and
          AI-powered products — and I take on freelance website projects too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary group">
            View my projects
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href={contact.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FiDownload /> Download CV
          </a>
          <div className="ml-1 flex gap-2">
            {[
              { href: contact.github, icon: <FaGithub />, label: "GitHub" },
              { href: contact.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
              { href: contact.leetcode, icon: <SimpleIconsLeetcode width={17} height={17} />, label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/15 text-lg text-white backdrop-blur-md transition hover:bg-white hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* visual: frosted code window that types out a developer profile */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="relative mx-auto w-full max-w-[440px] sm:px-6 lg:px-0"
      >
        <HeroVisual />
      </motion.div>
    </div>

    {/* stats */}
    <div className="container-x relative">
      <div className="glass grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-6 md:p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i === 1 ? "md:border-r" : ""
            } border-fg/[0.07]`}
          >
            <p className="font-display text-3xl font-bold text-fg md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* tech marquee */}
    <div className="mt-16 border-y border-accent/10 bg-white/50 py-5 backdrop-blur-md">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-10">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-muted-500">
              {t}
              <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
