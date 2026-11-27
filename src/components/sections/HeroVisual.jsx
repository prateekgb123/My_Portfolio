import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import {
  SiExpress, SiFastapi, SiGooglegemini, SiLangchain, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss,
} from "react-icons/si";
import { contact } from "../../data/site";

// inner orbit: the MERN stack · outer orbit: AI + tooling
const inner = [
  { Icon: SiReact, color: "#149ECA", label: "React" },
  { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { Icon: SiExpress, color: "#0D1E40", label: "Express" },
];
const outer = [
  { Icon: SiGooglegemini, color: "#8E75FF", label: "Gemini" },
  { Icon: SiPython, color: "#3776AB", label: "Python" },
  { Icon: SiLangchain, color: "#1C3C3C", label: "LangChain" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { Icon: SiFastapi, color: "#009688", label: "FastAPI" },
  { Icon: SiNextdotjs, color: "#0D1E40", label: "Next.js" },
];

// the little AI chat that loops in the corner
const chat = [
  { q: "What does Prateek build?", a: "Full-stack MERN apps, AI-powered products and websites for real-estate companies." },
  { q: "Is he open to projects?", a: "Yes! Open to freelance work — say hi on WhatsApp or email." },
  { q: "Where is he based?", a: `${contact.location} — working with clients anywhere.` },
];

/* A ring of logo tiles that spins; each tile counter-spins so the logo stays upright. Hovering pauses it. */
const Orbit = ({ items, inset, duration, reverse = false, tile = "h-11 w-11 text-xl" }) => {
  // longhand properties (not the shorthand) so the hover class can still pause them
  const anim = (dir) => ({
    animationName: "spin",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: dir,
  });
  const spin = anim(reverse ? "reverse" : "normal");
  const counter = anim(reverse ? "normal" : "reverse");
  const pause = "orbit-spin group-hover/orbit:[animation-play-state:paused]";
  return (
    <div className="absolute" style={{ inset }}>
      <div className="absolute inset-0 rounded-full border border-dashed border-white/50" />
      <div className={`absolute inset-0 ${pause}`} style={spin}>
        {items.map(({ Icon, color, label }, i) => {
          const angle = (360 / items.length) * i;
          return (
            <div key={label} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
              <div className="absolute left-1/2 top-0" style={{ transform: `translate(-50%,-50%) rotate(${-angle}deg)` }}>
                <div className={pause} style={counter}>
                  <span
                    title={label}
                    className={`grid ${tile} place-items-center rounded-2xl border border-white/90 bg-white/90 shadow-[0_10px_25px_-8px_rgba(13,40,100,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-125`}
                  >
                    <Icon style={{ color }} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* The AI orb at the centre */
const Orb = () => (
  <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2">
    <span className="absolute inset-0 rounded-full border-2 border-white/70 [animation:orbPulse_3.2s_ease-out_infinite]" />
    <span className="absolute inset-0 rounded-full border-2 border-white/70 [animation:orbPulse_3.2s_ease-out_1.6s_infinite]" />
    <div className="absolute -inset-8 rounded-full bg-white/50 blur-2xl" />
    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#1D4FC0,#5B9BFF,#A5F3FC,#ffffff,#8E75FF,#1D4FC0)] blur-[1px] [animation:spin_6s_linear_infinite]" />
    <div className="absolute inset-[7%] flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-white via-white/95 to-sky-100 shadow-[inset_0_-10px_30px_rgba(47,111,237,0.25)]">
      <HiSparkles className="text-[2.6rem] text-accent drop-shadow-[0_4px_12px_rgba(47,111,237,0.5)] sm:text-5xl" />
      <span className="mt-1 font-display text-xs font-bold tracking-wide text-[#0D1E40] sm:text-sm">AI + Web</span>
    </div>
  </div>
);

/* Glass chat card cycling through questions → typing dots → answers */
const ChatCard = () => {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState(reduce ? 2 : 0); // 0 question, 1 typing, 2 answer

  useEffect(() => {
    if (reduce) return;
    const wait = [900, 1300, 3600][phase];
    const t = setTimeout(() => {
      if (phase < 2) setPhase(phase + 1);
      else {
        setPhase(0);
        setI((n) => (n + 1) % chat.length);
      }
    }, wait);
    return () => clearTimeout(t);
  }, [phase, reduce]);

  const { q, a } = chat[i];
  return (
    <div className="w-full rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_-18px_rgba(13,40,100,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-[#0D1E40]/10 pb-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-accent to-sky-400 text-white">
          <HiSparkles className="text-sm" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-[#0D1E40]">Ask about Prateek</p>
          <p className="flex items-center gap-1 text-[11px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> AI assistant · online
          </p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="flex h-[108px] flex-col gap-2 overflow-hidden pt-3"
        >
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3 py-2 text-[13px] text-white">{q}</p>
          {phase === 1 && (
            <p className="flex w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-md bg-[#0D1E40]/[0.06] px-3 py-3">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${d * 0.15}s` }} />
              ))}
            </p>
          )}
          {phase === 2 && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[92%] rounded-2xl rounded-bl-md bg-[#0D1E40]/[0.06] px-3 py-2 text-[13px] leading-snug text-[#0D1E40]"
            >
              {a}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* Hero artwork: AI orb with orbiting tech, a looping AI chat below it, gentle 3D tilt that follows the mouse. */
const HeroVisual = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="relative [perspective:1100px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ rotateX, rotateY }} className="relative [transform-style:preserve-3d]">
        {/* orbit system */}
        <div className="group/orbit relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[380px]">
          <div className="absolute inset-[8%] rounded-full bg-white/15 blur-2xl" />
          <Orbit items={outer} inset="3%" duration={48} reverse tile="h-10 w-10 text-lg sm:h-11 sm:w-11 sm:text-xl" />
          <Orbit items={inner} inset="19%" duration={30} tile="h-10 w-10 text-lg sm:h-12 sm:w-12 sm:text-2xl" />
          <Orb />
        </div>


        {/* AI chat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="relative mx-auto mt-4 w-full max-w-[380px] [transform:translateZ(50px)]"
        >
          <ChatCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
