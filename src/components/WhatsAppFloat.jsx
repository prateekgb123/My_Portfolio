import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/site";

// Floating WhatsApp logo with light radiating outwards and a periodic "ringing" shake.
const ripple =
  "pointer-events-none absolute inset-[6px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.7)_0%,rgba(37,211,102,0.25)_60%,transparent_72%)] [animation:ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]";

const WhatsAppFloat = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center sm:bottom-7 sm:right-7"
  >
    {/* steady glow + waves of light shining outwards */}
    <span className="pointer-events-none absolute -inset-2 animate-wa-glow rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.45)_0%,transparent_70%)]" />
    <span className={ripple} />
    <span className={`${ripple} [animation-delay:0.8s]`} />
    <span className={`${ripple} [animation-delay:1.6s]`} />

    {/* the logo: green fill inside the white bubble outline */}
    <span className="relative grid h-11 w-11 animate-wa-shake place-items-center drop-shadow-[0_0_10px_rgba(37,211,102,0.8)] transition-transform duration-300 group-hover:scale-110 group-hover:[animation-play-state:paused]">
      <span className="absolute inset-[12%] rounded-full bg-gradient-to-b from-[#5EE07A] to-[#1FAF4B]" />
      <FaWhatsapp className="relative h-full w-full text-white" />
    </span>

    <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full border border-white/10 bg-ink-850 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
      Chat on WhatsApp
    </span>
  </a>
);

export default WhatsAppFloat;
