import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section id="home" className="relative h-[85vh] min-h-[560px] w-full">
      <div className="absolute inset-0" ref={containerRef}>
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* non-blocking soft gradients for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl"
        >
          Design made clear.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-xl text-zinc-600 md:text-lg"
        >
          A portfolio of modern brand, product, and web visuals with a focus on clarity and subtle motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Explore work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
