import ProfileImage from "../assets/prateek2.jpg";
import { contact } from "../data/site";

/*
  The profile photo, colour-graded to match the site's dark + lime theme:
  a toned monochrome base, a lime wash in the highlights, and dark ink vignetting.
  Hovering reveals the original colours.

  `crop` = { size, position } controls the background crop (zoom + focus point).
*/
const ThemedPortrait = ({ className = "", crop = { size: "205% auto", position: "39% 62%" } }) => {
  const layer = {
    backgroundImage: `url(${ProfileImage})`,
    backgroundSize: crop.size,
    backgroundPosition: crop.position,
  };

  return (
    <div role="img" aria-label={contact.name} className={`group/portrait overflow-hidden bg-ink-900 ${className}`}>
      {/* graded version */}
      <div
        className="absolute inset-0 transition-opacity duration-700 group-hover/portrait:opacity-0"
        style={{ ...layer, filter: "grayscale(1) contrast(1.18) brightness(0.92)" }}
      />
      {/* lime tint in the highlights */}
      <div className="absolute inset-0 bg-[#D9F59A] mix-blend-multiply transition-opacity duration-700 group-hover/portrait:opacity-0" />
      {/* original colours, shown on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/portrait:opacity-100" style={layer} />
      {/* ink vignette + lime glow to blend into the page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_45%,rgba(11,13,18,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_10%,rgba(198,243,94,0.28),transparent_70%)] mix-blend-screen" />
    </div>
  );
};

export default ThemedPortrait;
