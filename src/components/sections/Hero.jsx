import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SimpleIconsLeetcode } from "../icons";
import ThemedPortrait from "../ThemedPortrait";
import { contact, stats, techMarquee } from "../../data/site";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* backdrop */}
    <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
    <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
    <div className="pointer-events-none absolute left-[-15%] top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />

    <div className="container-x relative grid items-center gap-12 py-12 md:py-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.2fr_0.8fr] lg:py-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-sm text-zinc-300"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
          Open to opportunities &amp; freelance work
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-6 text-lg text-zinc-400"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-1 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl"
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
          <span className="text-zinc-500">· MERN &amp; AI</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
        >
          Programmer Analyst at <span className="text-white">Cognizant</span> and Information Science graduate from CMR
          Institute of Technology, {contact.location.split(",")[0]}. I build responsive web apps, backend services and
          AI-powered products — and I take on freelance website projects too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link to="/projects" className="btn-primary group">
            View my projects
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
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
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-lg text-zinc-300 transition hover:border-accent hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* visual: circular portrait with a rotating accent ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="relative mx-auto w-[min(290px,70vw)] lg:w-[min(340px,42svh)]"
      >
        <div className="relative aspect-square">
          {/* soft glow */}
          <div className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl" />
          {/* rotating gradient ring */}
          <div className="absolute -inset-[6px] rounded-full bg-[conic-gradient(from_0deg,#C6F35E,transparent_30%,transparent_55%,#C6F35E_75%,#E3FBA8_85%,#C6F35E)] [animation:spin_10s_linear_infinite]" />
          {/* dashed orbit */}
          <div className="absolute -inset-5 rounded-full border border-dashed border-white/15 [animation:spin_40s_linear_infinite_reverse]">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_#C6F35E]" />
          </div>
          {/* portrait, colour-graded to the theme */}
          <ThemedPortrait className="absolute inset-0 rounded-full border-[5px] border-ink-900" />
        </div>

      </motion.div>
    </div>

    {/* stats */}
    <div className="container-x relative">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-6 md:p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i === 1 ? "md:border-r" : ""
            } border-white/[0.07]`}
          >
            <p className="font-display text-3xl font-bold text-white md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* tech marquee */}
    <div className="mt-16 border-y border-white/[0.06] bg-ink-950/50 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-10">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-zinc-500">
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
