import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stacks />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
