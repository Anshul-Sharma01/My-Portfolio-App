
import "./App.css";
import About from "./componenets/About/About";
import Contact from "./componenets/Contact-Us/Contact";
import Hero from './componenets/hero/Hero';
import Navbar from './componenets/navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import Projects from "./componenets/ProjectsSection/Projects";
import TechStack from "./componenets/TechStack/TechStack";


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
