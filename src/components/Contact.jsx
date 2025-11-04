import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-1/3 mx-auto h-64 max-w-3xl rounded-full bg-gradient-to-r from-rose-200 via-sky-200 to-emerald-200 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Let’s collaborate</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">Have a project in mind or want to say hello? I’m open to brand, product, and web work.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
