import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Brand System — Nova',
    description: 'A modular identity and UI kit for a SaaS platform.',
    href: '#',
    code: '#',
    // Generated thumbnail via CSS gradients
    thumb: {
      from: 'from-zinc-100',
      to: 'to-zinc-50',
      accent: 'ring-rose-300/40',
    },
  },
  {
    title: 'E‑commerce Visuals',
    description: 'Product renders and micro-animations for launch.',
    href: '#',
    code: '#',
    thumb: {
      from: 'from-zinc-100',
      to: 'to-white',
      accent: 'ring-sky-300/40',
    },
  },
  {
    title: 'Portfolio Template',
    description: 'A responsive, minimalist portfolio starter.',
    href: '#',
    code: '#',
    thumb: {
      from: 'from-zinc-100',
      to: 'to-zinc-50',
      accent: 'ring-emerald-300/40',
    },
  },
  {
    title: 'Motion Study',
    description: 'Clean interaction patterns with subtle physics.',
    href: '#',
    code: '#',
    thumb: {
      from: 'from-zinc-100',
      to: 'to-white',
      accent: 'ring-indigo-300/40',
    },
  },
];

function Thumbnail({ accent, from, to }) {
  return (
    <div className={`relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-gradient-to-br ${from} ${to} ring-1 ring-inset ring-zinc-200 shadow-sm`}> 
      {/* Accent ring on hover */}
      <div className={`pointer-events-none absolute inset-0 rounded-xl ring-0 transition-[box-shadow] duration-500`} />
      {/* Pattern grid */}
      <div className="absolute inset-0 opacity-[0.45]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      {/* Interactive media simulation */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="absolute inset-0"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${from} ${to}`} />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(244,63,94,0.12),transparent_30%,rgba(14,165,233,0.12),transparent_60%,rgba(16,185,129,0.12),transparent_90%)] mix-blend-multiply" />
      </motion.div>
      {/* Focus outline accent on hover */}
      <div className={`pointer-events-none absolute inset-0 rounded-xl ring-0 transition duration-300 group-hover:ring-4 ${accent}`} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Selected work</h2>
            <p className="mt-2 text-zinc-600">A mix of brand, product, and motion studies.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0% -10% 0%' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <a href={p.href} className="block overflow-hidden rounded-xl">
                <Thumbnail {...p.thumb} />
              </a>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{p.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={p.href}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50"
                    aria-label="Open project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50"
                    aria-label="View code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
