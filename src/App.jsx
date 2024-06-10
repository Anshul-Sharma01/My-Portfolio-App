
import "./App.css";
import About from "./componenets/About/About";
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
    </>
  )
}

export default App
