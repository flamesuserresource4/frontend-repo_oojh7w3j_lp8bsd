import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-fuchsia-300/30 selection:text-white">
      {/* Background subtle grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
