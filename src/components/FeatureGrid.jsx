import { motion } from 'framer-motion';
import { CheckCircle2, Image, Music, Code, PenTool } from 'lucide-react';

const features = [
  {
    title: 'Register Works',
    desc: 'Create on-chain records for art, music, code, and writing via Story Protocol.',
    icon: CheckCircle2,
  },
  {
    title: 'IPFS Media',
    desc: 'Upload media to IPFS and reference immutable CIDs in your portfolio.',
    icon: Image,
  },
  {
    title: 'Provenance',
    desc: 'Automatic timestamps and verifiable history of edits and licensing.',
    icon: PenTool,
  },
  {
    title: 'Multi-format',
    desc: 'Support for audio, images, code snippets, and written pieces.',
    icon: Music,
  },
  {
    title: 'Dev-first',
    desc: 'Showcase repositories and code licenses friendly to builders.',
    icon: Code,
  },
];

export default function FeatureGrid() {
  return (
    <section id="explore" className="relative mx-auto max-w-7xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
      >
        Everything you need to go on-chain
      </motion.h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-md hover:border-cyan-400/30"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
