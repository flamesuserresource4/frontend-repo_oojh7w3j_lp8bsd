import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Let’s build something remarkable
        </motion.h2>
        <p className="mt-4 text-white/80">
          I’m currently available for freelance design and creative coding projects.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="mailto:hello@flames.blue" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium transition hover:bg-neutral-200">
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm backdrop-blur-md transition hover:bg-white/20">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm backdrop-blur-md transition hover:bg-white/20">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
        <p className="mt-6 text-xs text-white/60">Response within 24 hours</p>
      </div>
    </section>
  );
};

export default Contact;
