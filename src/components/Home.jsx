import Hero from "./sections/Hero";
import About from "./sections/About";
import FeaturedWork from "./sections/FeaturedWork";
import AllProjects from "./sections/AllProjects";
import CTABand from "./CTABand";
import Experience from "./Experience";
import Skills from "./sections/Skills";
import Freelance from "./sections/Freelance";
import Contact from "./sections/Contact";

// The whole site is this one page; the navbar scrolls between these sections.
const Home = () => (
  <main id="top">
    <Hero />
    <About />
    <FeaturedWork />
    <AllProjects />
    <CTABand />
    <Experience />
    <Skills />
    <Freelance />
    <Contact />
  </main>
);

export default Home;
