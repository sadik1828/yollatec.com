import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Hero from "../components/Hero.jsx";
import Partners from "../components/Partners.jsx";
import Solutions from "../components/Solutions.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <Partners />
      <Contact />
    </>
  );
}