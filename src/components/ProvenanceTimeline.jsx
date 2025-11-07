import { motion } from 'framer-motion';
import { Clock, FileCheck2, Medal, GitBranch } from 'lucide-react';

export default function ProvenanceTimeline({ events = [] }) {
  const sample = events.length
    ? events
    : [
        { title: 'Work registered on-chain', time: '2h ago', icon: FileCheck2 },
        { title: 'License added - CC BY 4.0', time: '1h ago', icon: Medal },
        { title: 'Derivative registered', time: '25m ago', icon: GitBranch },
      ];

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-cyan-300" />
        <h3 className="text-lg font-semibold text-slate-100">Provenance</h3>
      </div>
      <ol className="relative border-l border-white/10 pl-5">
        {sample.map((e, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="mb-6"
          >
            <div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500" />
            <div className="flex items-start gap-3">
              <e.icon className="mt-0.5 h-5 w-5 text-cyan-300" />
              <div>
                <div className="text-slate-100">{e.title}</div>
                <div className="text-xs text-slate-400">{e.time}</div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
