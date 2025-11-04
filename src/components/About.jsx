import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: '3D & Motion', desc: 'Spline scenes, physics, and expressive transitions.' },
  { title: 'Design Systems', desc: 'Cohesive tokens, components, and patterns.' },
  { title: 'Creative Dev', desc: 'Interfaces that react to scroll, hover, and sound.' },
];

const About = () => {
  return (
    <section id="about" className="relative z-10 bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">About</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Crafting sleek, high-performance visuals</h2>
          <p className="mt-4 text-white/80">
            I blend graphic design with creative coding to build distinctive web experiences — from calm, minimalist layouts to bold, playful interactions.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
