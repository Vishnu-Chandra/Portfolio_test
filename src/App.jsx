import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CodingProfiles from "./components/CodingProfiles";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <CodingProfiles />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
