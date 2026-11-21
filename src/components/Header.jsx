import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/#experience", label: "Experience" },
  { to: "/#skills", label: "Skills" },
  { to: "/#freelance", label: "Freelance" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  const isActive = (to) =>
    to.startsWith("/#") ? location.pathname === "/" && location.hash === to.slice(1) : location.pathname === to;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-lg font-extrabold text-ink-950 transition-transform group-hover:rotate-6">
            P
          </span>
          <span className="font-display text-lg font-bold text-white">
            Prateek<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(l.to) ? "bg-white/[0.08] text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Contact me
          </Link>
        </div>

        <div className="-mr-2 lg:hidden">
          <Hamburger toggled={open} toggle={setOpen} size={22} color="#fff" label="Toggle menu" />
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
            <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block rounded-xl px-4 py-3 text-lg font-medium text-zinc-200 hover:bg-white/5">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link to="/#contact" className="btn-primary w-full">
                  Contact me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
