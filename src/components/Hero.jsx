import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = overlayRef.current;
    if (!el) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 8; // subtle parallax
    const y = (e.clientY / innerHeight - 0.5) * 8;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black text-white" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients for glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Overlay content */}
      <div ref={overlayRef} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70">Creative Technology × Visual Design</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Designing sleek, interactive experiences
          <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">for modern brands</span>
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          A portfolio of experimental interfaces, motion, and 3D web crafted with care.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm backdrop-blur-md transition hover:bg-white/20">
            View Work
            <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium transition hover:bg-neutral-200">Get in touch</a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70">
          <span className="animate-bounce">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
