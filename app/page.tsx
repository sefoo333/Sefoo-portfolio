import Image from "next/image";
import Home2 from "./_componants/primary/Home";
import About from "./_componants/primary/About";
import Skills from "./_componants/primary/Skills";
import Projects from "./_componants/primary/Projects";
import Thanks from "./_componants/primary/Thanks";
import Contact from "./_componants/primary/Contact";
import Footer from "./_componants/primary/Footer";

export default function Home() {
  return (
    <div className="home">
      <Home2 />
      <About />
      <Skills />
      <Projects />
      <Thanks />
      <Contact />
      <Footer />
    </div>
  );
}
