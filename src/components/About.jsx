import { motion } from 'framer-motion';
import { Rocket, Sparkles, Layers } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast & Focused',
    desc: 'Designs that move quickly and speak clearly, without clutter.',
  },
  {
    icon: Sparkles,
    title: 'Thoughtful Motion',
    desc: 'Subtle animations add clarity and delight to every interaction.',
  },
  {
    icon: Layers,
    title: 'Systematic',
    desc: 'Reusable systems that scale from brand to product and web.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">About</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">I craft clean, modern visuals and interfaces that feel effortless to use. The work is minimal, but never cold.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
