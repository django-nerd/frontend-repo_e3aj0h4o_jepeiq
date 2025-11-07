import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Check } from 'lucide-react';

const LICENSES = [
  { key: 'cc-by', name: 'CC BY 4.0', desc: 'Attribution required. Commercial use allowed.' },
  { key: 'cc-by-nc', name: 'CC BY-NC 4.0', desc: 'Attribution + NonCommercial.' },
  { key: 'mit', name: 'MIT', desc: 'Permissive license for code. Include copyright notice.' },
  { key: 'story-standard', name: 'Story Standard', desc: 'On-chain license within Story Protocol ecosystem.' },
];

export default function LicenseDrawer({ open, onClose, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (l) => {
    setSelected(l.key);
    onSelect?.(l);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-lg rounded-t-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl sm:rounded-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-100">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Choose License</h3>
              </div>
              <button onClick={onClose} className="rounded-lg p-2 text-slate-300 hover:bg-white/5">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {LICENSES.map((l) => (
                <button
                  key={l.key}
                  onClick={() => handleSelect(l)}
                  className={`flex w-full items-start justify-between rounded-xl border p-4 text-left transition hover:border-cyan-400/40 hover:bg-white/5 ${
                    selected === l.key ? 'border-cyan-400/50 bg-cyan-500/10' : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div>
                    <div className="font-medium text-slate-100">{l.name}</div>
                    <div className="text-sm text-slate-300">{l.desc}</div>
                  </div>
                  {selected === l.key && <Check className="mt-1 h-5 w-5 text-cyan-300" />}
                </button>
              ))}
            </div>

            <div className="mt-4 text-right">
              <button onClick={onClose} className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white">
                Done
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
