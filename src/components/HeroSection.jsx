import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Wallet, Sparkles, Shield, ExternalLink } from 'lucide-react';

export default function HeroSection({ onConnect }) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0f1a] to-slate-950 text-slate-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative mx-auto flex h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          On-chain creativity, verified by Story Protocol
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-balance bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          ChainFolio
          <span className="block text-lg font-normal text-slate-300 sm:text-xl">Your portfolio and licensing hub for on-chain creators</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-pretty text-slate-300"
        >
          Register works, prove provenance, and license your creations directly on-chain.
          Built for art, code, music, and writing with a futuristic glass aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onConnect}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition hover:brightness-110"
          >
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-white/10"
          >
            <Shield className="h-4 w-4" />
            Explore Works
            <ExternalLink className="h-4 w-4 opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
