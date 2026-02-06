import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/about";
import Certificates from "./components/Certificates";
import FloatingToy from "./components/FloatingToy";

function App() {
  const stars = Array.from({ length: 30 });

  return (
    
    <>
    <FloatingToy />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    
    </>
  );
}

export default App;
