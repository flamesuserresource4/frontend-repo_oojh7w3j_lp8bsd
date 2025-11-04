import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Interfaces',
    description: 'Micro-interactions and neon glass UI kit with motion presets.',
    tags: ['Framer Motion', 'Glassmorphism', 'UI Kit'],
    link: '#',
    repo: '#',
    color: 'from-cyan-500/30 to-fuchsia-500/30',
  },
  {
    title: '3D Web Labs',
    description: 'Playful experiments with 3D scenes, shaders, and lighting.',
    tags: ['Spline', 'Three.js', 'Shader'],
    link: '#',
    repo: '#',
    color: 'from-amber-400/30 to-rose-500/30',
  },
  {
    title: 'Brand Motion',
    description: 'Logo reveals and branded transitions for product sites.',
    tags: ['Motion Design', 'SVG', 'Lottie'],
    link: '#',
    repo: '#',
    color: 'from-sky-400/30 to-violet-500/30',
  },
];

const Card = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none`} />
    <div className="relative z-10">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-white/80">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[11px] text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={item.link} className="inline-flex items-center gap-1 text-sm text-white hover:text-white/80">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
        <a href={item.repo} className="inline-flex items-center gap-1 text-sm text-white hover:text-white/80">
          <Github className="h-4 w-4" /> Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="work" className="relative z-10 bg-gradient-to-b from-black via-black to-black/95 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Selected Work</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Projects</h2>
          </div>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Get a quote</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
