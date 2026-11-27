import { FiMail, FiPhone, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { contact, whatsappLink } from "../../data/site";
import { Reveal } from "../ui";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const channels = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      value: "Chat with me",
      note: "Fastest way to reach me",
      href: whatsappLink(),
      external: true,
      icon: <FaWhatsapp className="text-[28px] text-white" />,
      iconBg: "bg-gradient-to-b from-[#5EE07A] to-[#1FAF4B] shadow-[0_8px_24px_-8px_rgba(37,211,102,0.7)]",
      hover: "hover:border-[#25D366]/60",
    },
    {
      key: "email",
      label: "Email",
      value: contact.email,
      note: "For opportunities & project details",
      href: `mailto:${contact.email}?subject=${encodeURIComponent("Hello Prateek")}`,
      icon: <FiMail className="text-2xl text-accent" />,
      iconBg: "bg-accent/10 ring-1 ring-accent/20",
      hover: "hover:border-accent/50",
    },
    {
      key: "phone",
      label: "Phone",
      value: contact.phone,
      note: "Call me directly",
      href: `tel:+${contact.phoneRaw}`,
      icon: <FiPhone className="text-2xl text-accent" />,
      iconBg: "bg-accent/10 ring-1 ring-accent/20",
      hover: "hover:border-accent/50",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-fg/[0.06] py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Let&apos;s <span className="text-gradient">work together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-400">
            Have an opportunity, a collaboration idea, or a website you need built? Reach out on WhatsApp, email or phone.
          </p>
        </Reveal>

        {/* rows on phones/tablets, three cards side by side on desktop */}
        <div className="mx-auto mt-14 grid max-w-2xl gap-4 lg:max-w-none lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08} className="min-w-0">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`card group relative flex h-full items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 sm:gap-5 sm:p-6 lg:flex-col lg:items-start lg:gap-0 lg:p-7 ${c.hover}`}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl sm:h-14 sm:w-14 ${c.iconBg}`}>{c.icon}</span>
                <FiArrowUpRight className="absolute right-5 top-5 text-xl text-muted-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg lg:right-7 lg:top-7" />
                <div className="min-w-0 pr-6 lg:mt-8 lg:pr-0">
                  <p className="text-sm text-muted-500">{c.label}</p>
                  <p className="mt-0.5 font-display text-base font-bold text-fg [overflow-wrap:anywhere] sm:text-xl lg:mt-1">
                    {c.key === "email" ? (
                      <>
                        {c.value.split("@")[0]}
                        <wbr />@{c.value.split("@")[1]}
                      </>
                    ) : (
                      c.value
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted-400 lg:mt-2">{c.note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-500">
          <FiMapPin className="text-accent" /> Based in {contact.location} · Working with clients anywhere
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
