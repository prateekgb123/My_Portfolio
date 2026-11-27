import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "freelance", label: "Freelance" },
];
// every section the scroll-spy tracks (projects grid counts as "projects", the CTA band too)
const spy = ["about", "projects", "experience", "skills", "freelance", "contact"];

const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/*
  At the top of the page the navbar is a full-width glass bar over the sky (white text).
  Once you scroll it shrinks into a floating frosted pill (navy text).
  A sliding highlight follows the section in view, and a thin bar shows scroll progress.
*/
const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // the active section is the last one whose top has passed under the navbar
      const line = 140;
      let current = "";
      for (const id of spy) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const compact = scrolled || open;

  return (
    <header className={`sticky top-0 z-50 h-[76px] transition-[padding] duration-700 ${ease} ${compact ? "pt-3" : "pt-0"}`}>
      <div
        className={`relative mx-auto overflow-hidden border backdrop-blur-xl transition-all duration-700 ${ease} ${
          compact
            ? "max-w-[min(72rem,calc(100%-1.5rem))] rounded-[1.75rem] border-white/80 bg-white/75 shadow-[0_10px_40px_-12px_rgba(13,40,100,0.3)]"
            : "on-sky max-w-full rounded-none border-transparent border-b-white/25 bg-white/[0.08] shadow-none"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-700 ${ease} ${
            compact ? "h-[60px] pl-3 pr-2 sm:pl-4" : "h-[76px] px-5 sm:px-8"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 rounded-xl" onClick={() => setOpen(false)}>
            <span
              className={`grid place-items-center rounded-xl font-display font-extrabold transition-all duration-700 ${ease} group-hover:rotate-6 ${
                compact
                  ? "h-9 w-9 bg-accent text-lg text-white"
                  : "h-11 w-11 bg-white text-xl text-accent-deep shadow-[0_8px_24px_-8px_rgba(13,40,100,0.45)]"
              }`}
            >
              P
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-fg">
                Prateek<span className={compact ? "text-accent" : "text-sky-200"}>.</span>
              </span>
              <span
                className={`block overflow-hidden text-xs font-medium text-muted-400 transition-all duration-500 ${
                  compact ? "max-h-0 opacity-0" : "max-h-5 opacity-100"
                }`}
              >
                Full-Stack Developer
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className={`absolute inset-0 rounded-full ${compact ? "bg-accent/10" : "bg-white/20 ring-1 ring-white/30"}`}
                    />
                  )}
                  <a
                    href={`#${l.id}`}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? (compact ? "text-accent-deep" : "text-white") : "text-muted-400 hover:text-fg"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact" className={`btn-primary text-sm transition-all duration-700 ${compact ? "!px-5 !py-2.5" : "!px-6 !py-3"}`}>
              Contact me
            </a>
          </div>

          <div className="lg:hidden">
            <Hamburger toggled={open} toggle={setOpen} size={22} color={compact ? "#0D1E40" : "#FFFFFF"} label="Toggle menu" />
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-3 pb-5 pt-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-lg font-medium hover:bg-fg/5 ${
                        active === l.id ? "bg-accent/10 text-accent-deep" : "text-muted-200"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                    Contact me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* scroll progress */}
        <motion.span
          style={{ scaleX: progress }}
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left ${
            compact ? "bg-gradient-to-r from-accent-deep via-accent to-sky-400" : "bg-white/80"
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
