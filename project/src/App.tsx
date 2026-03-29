import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden scroll-smooth">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Process />
      <Contact />
    </div>
  );
}

export default App;
