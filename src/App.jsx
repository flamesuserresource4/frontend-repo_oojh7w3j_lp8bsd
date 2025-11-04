import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="relative">
        {/* subtle paper texture grid */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_0.5px_0.5px,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative z-10 flex flex-col gap-20">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Creative Studio</footer>
    </div>
  );
}

export default App;
