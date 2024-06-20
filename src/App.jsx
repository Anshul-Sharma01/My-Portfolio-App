import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact-Us/Contact";
import Footer from "./components/Footer/Footer";
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from "./components/ProjectsSection/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App;
