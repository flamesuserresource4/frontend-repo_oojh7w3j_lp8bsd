import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-white">flames.blue</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300"
        style={{ scaleX }}
      />
    </header>
  );
};

export default Navbar;
