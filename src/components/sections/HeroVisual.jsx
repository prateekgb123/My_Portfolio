import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiCheckCircle, FiSmartphone } from "react-icons/fi";
import { SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from "react-icons/si";
import { contact, stats } from "../../data/site";

// syntax colours for the code window
const c = {
  kw: "text-pink-300",
  name: "text-sky-300",
  key: "text-blue-200",
  str: "text-emerald-300",
  bool: "text-amber-300",
  punct: "text-slate-400",
};

// the "code" typed into the window: each line is a list of [text, colour] segments
const code = [
  [["const ", c.kw], ["developer", c.name], [" = {", c.punct]],
  [["  name", c.key], [": ", c.punct], [`"${contact.name}"`, c.str], [",", c.punct]],
  [["  role", c.key], [": ", c.punct], ['"Full-Stack Developer"', c.str], [",", c.punct]],
  [["  stack", c.key], [": [", c.punct], ['"React"', c.str], [", ", c.punct], ['"Node"', c.str], [", ", c.punct], ['"MongoDB"', c.str], ["],", c.punct]],
  [["  focus", c.key], [": ", c.punct], ['"Web apps & AI"', c.str], [",", c.punct]],
  [["  location", c.key], [": ", c.punct], [`"${contact.location.split(",")[0]}"`, c.str], [",", c.punct]],
  [["  openToWork", c.key], [": ", c.punct], ["true", c.bool], [",", c.punct]],
  [["};", c.punct]],
];
const total = code.reduce((n, line) => n + line.reduce((m, [t]) => m + t.length, 0) + 1, 0);

const tiles = [
  { Icon: SiReact, color: "#149ECA", pos: "-left-7 -top-6", anim: "animate-float", delay: "0s" },
  { Icon: SiNodedotjs, color: "#5FA04E", pos: "-right-6 top-[16%]", anim: "animate-float-slow", delay: "1s" },
  { Icon: SiMongodb, color: "#47A248", pos: "-right-8 bottom-[22%]", anim: "animate-float", delay: "2s" },
  { Icon: SiJavascript, color: "#E8B90C", pos: "-left-9 top-[44%]", anim: "animate-float-slow", delay: "0.5s" },
  { Icon: SiTailwindcss, color: "#06B6D4", pos: "right-[18%] -bottom-7", anim: "animate-float", delay: "1.5s" },
  { Icon: SiPython, color: "#3776AB", pos: "left-[26%] -top-7", anim: "animate-float-slow", delay: "2.5s" },
];

/* Hero artwork: a frosted code editor that types out a little developer profile, with floating tech tiles. */
const HeroVisual = () => {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) return;
    let id;
    const start = setTimeout(() => {
      id = setInterval(() => {
        setTyped((n) => {
          if (n >= total) {
            clearInterval(id);
            return n;
          }
          return n + 1;
        });
      }, 28);
    }, 600);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [reduce]);

  // render only the first `typed` characters, keeping the colours
  let left = typed;
  const lines = code.map((line) => {
    const segs = [];
    for (const [text, cls] of line) {
      if (left <= 0) break;
      segs.push([text.slice(0, left), cls]);
      left -= text.length;
    }
    left -= 1; // newline
    return segs;
  });
  // blinking cursor sits on the last line that has text
  const cursorLine = lines.reduce((acc, l, i) => (l.length ? i : acc), 0);

  return (
    <div className="relative">
      {/* glow behind the window */}
      <div className="absolute -inset-8 rounded-[3rem] bg-white/40 blur-3xl" />

      {/* editor window */}
      <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-[#0D1E40]/80 shadow-[0_30px_80px_-20px_rgba(13,30,64,0.6)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="rounded-md bg-white/10 px-2.5 py-0.5 font-mono text-[11px] text-slate-300">developer.js</span>
        </div>

        <pre className="overflow-hidden px-4 py-5 font-mono text-[12.5px] leading-[1.75] sm:px-5 sm:text-[13.5px]">
          {lines.map((segs, i) => (
            <div key={i} className="flex min-h-[1.75em] whitespace-pre">
              <span className="mr-4 inline-block w-4 select-none text-right text-slate-500">{i + 1}</span>
              <span>
                {segs.map(([t, cls], j) => (
                  <span key={j} className={cls}>
                    {t}
                  </span>
                ))}
                {i === cursorLine && <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse bg-sky-300" />}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* floating stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="glass absolute -right-4 -top-10 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:flex"
      >
        <FiCheckCircle className="text-emerald-500" />
        <span className="text-sm font-semibold text-[#0D1E40]">
          {stats[1].value} <span className="font-medium text-slate-500">{stats[1].label.toLowerCase()}</span>
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="glass absolute -bottom-12 -left-6 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:flex"
      >
        <FiSmartphone className="text-accent" />
        <span className="text-sm font-semibold text-[#0D1E40]">
          {stats[3].value} <span className="font-medium text-slate-500">{stats[3].label.toLowerCase()}</span>
        </span>
      </motion.div>

      {/* floating tech tiles */}
      {tiles.map(({ Icon, color, pos, anim, delay }) => (
        <span
          key={color}
          className={`absolute z-10 hidden h-11 w-11 place-items-center rounded-2xl border border-white/80 bg-white/90 shadow-[0_10px_25px_-8px_rgba(13,40,100,0.35)] backdrop-blur-md sm:grid ${pos} ${anim}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="text-xl" style={{ color }} />
        </span>
      ))}
    </div>
  );
};

export default HeroVisual;
