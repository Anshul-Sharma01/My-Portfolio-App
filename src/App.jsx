
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact-Us/Contact";
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import Projects from "./components/ProjectsSection/Projects";
import TechStack from "./components/TechStack/TechStack";


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
