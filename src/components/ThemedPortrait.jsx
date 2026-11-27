import ProfileImage from "../assets/prateek2.jpg";
import { contact } from "../data/site";

/*
  The profile photo in its natural colours, with a very light vignette so it blends into the sky theme.

  `crop` = { size, position } controls the background crop (zoom + focus point).
*/
const ThemedPortrait = ({ className = "", crop = { size: "205% auto", position: "39% 62%" } }) => (
  <div role="img" aria-label={contact.name} className={`overflow-hidden bg-ink-900 ${className}`}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${ProfileImage})`,
        backgroundSize: crop.size,
        backgroundPosition: crop.position,
      }}
    />
    {/* soft edge vignette to blend into the page */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_60%,rgba(29,79,192,0.18)_100%)]" />
  </div>
);

export default ThemedPortrait;
