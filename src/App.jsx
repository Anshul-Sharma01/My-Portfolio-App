import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact-Us/Contact";
import Footer from "./components/Footer/Footer";
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel.jsx";
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
        {/* <Projects /> */}
        <ProjectCarousel/>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </>
  )
}

export default App;
