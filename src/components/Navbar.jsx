import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-rose-500/80" />
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-3 transition-colors duration-300 ${
          scrolled
            ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200/70'
            : 'bg-transparent'
        }`}
      >
        <a href="#home" className="font-semibold tracking-tight text-zinc-800">Creative Studio</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#work" className="text-zinc-700 hover:text-zinc-900 transition-colors">Work</a>
          <a href="#about" className="text-zinc-700 hover:text-zinc-900 transition-colors">About</a>
          <a href="#contact" className="text-zinc-700 hover:text-zinc-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
