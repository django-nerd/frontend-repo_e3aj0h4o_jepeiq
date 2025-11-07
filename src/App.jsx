import { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import LicenseDrawer from './components/LicenseDrawer';
import ProvenanceTimeline from './components/ProvenanceTimeline';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);

  const handleConnect = () => {
    // For demo purposes, open license drawer after connect
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection onConnect={handleConnect} />

      <main className="relative z-10">
        <FeatureGrid />

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">Quick License</h3>
                <p className="text-sm text-slate-300">Choose a license type for a sample work to see the UI.</p>
              </div>
              <button
                onClick={() => setDrawerOpen(true)}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white"
              >
                Select License
              </button>
            </div>
            {selectedLicense ? (
              <div className="text-sm text-slate-300">
                Selected: <span className="font-medium text-cyan-300">{selectedLicense.name}</span>
              </div>
            ) : (
              <div className="text-sm text-slate-400">No license chosen yet.</div>
            )}
          </div>
        </section>

        <ProvenanceTimeline />
      </main>

      <LicenseDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={(l) => setSelectedLicense(l)}
      />

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-slate-400">
        Built for creators — ChainFolio • Story Protocol inspired
      </footer>
    </div>
  );
}

export default App;
