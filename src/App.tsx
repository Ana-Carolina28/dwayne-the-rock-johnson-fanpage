import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ErasSection } from './components/ErasSection';
import { RealGallerySection } from './components/RealGallerySection';
import { EyebrowSimulator } from './components/EyebrowSimulator';
import { CheatMealGenerator } from './components/CheatMealGenerator';
import { IronParadiseSection } from './components/IronParadiseSection';
import { SoundboardSection } from './components/SoundboardSection';
import { Footer } from './components/Footer';
import { FannyPackModal } from './components/FannyPackModal';
import { sounds } from './utils/soundEffects';
import { Sparkles, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isFannyPackModalOpen, setIsFannyPackModalOpen] = useState<boolean>(false);
  const [isFannyPackModeActive, setIsFannyPackModeActive] = useState<boolean>(false);

  useEffect(() => {
    // Sync body background and text colors to avoid any flash
    if (theme === 'dark') {
      document.body.classList.remove('bg-[#fcfbf9]', 'text-stone-900');
      document.body.classList.add('bg-[#0c0d0f]', 'text-neutral-100');
    } else {
      document.body.classList.remove('bg-[#0c0d0f]', 'text-neutral-100');
      document.body.classList.add('bg-[#fcfbf9]', 'text-stone-900');
    }
  }, [theme]);

  const toggleTheme = () => {
    sounds.playTactileClick();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    sounds.enabled = next;
    setSoundEnabled(next);
    if (next) {
      sounds.playTactileClick();
    }
  };

  const scrollToEyebrow = () => {
    const elem = document.getElementById('eyebrow');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#0c0d0f] text-neutral-100' : 'bg-[#fcfbf9] text-stone-900'
    }`}>
      
      {/* 90's Fanny Pack Mode Floating Top Banner when unlocked */}
      {isFannyPackModeActive && (
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-neutral-950 px-4 py-2 text-xs font-bold font-condensed tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md sticky top-0 z-[60]">
          <Sparkles className="w-4 h-4 fill-neutral-950" />
          <span>Modo Anos 90 Ativado: Gola Alta Preta, Corrente de Prata & Pochete Lendária Equipadas!</span>
          <button
            type="button"
            onClick={() => setIsFannyPackModeActive(false)}
            className="ml-2 p-0.5 hover:bg-black/10 rounded"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Contract (3 zones) */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      <main>
        {/* Hero Section */}
        <Hero
          theme={theme}
          onOpenFannyPack={() => setIsFannyPackModalOpen(true)}
          onScrollToEyebrow={scrollToEyebrow}
        />

        {/* The 4 Eras of The Rock */}
        <ErasSection theme={theme} />

        {/* Authentic Photographs Gallery */}
        <RealGallerySection theme={theme} />

        {/* The People's Eyebrow Simulator */}
        <EyebrowSimulator theme={theme} />

        {/* Can You Smell What The Rock Is Cooking? Cheat Meal Generator */}
        <CheatMealGenerator theme={theme} />

        {/* Iron Paradise 4:00 AM Workout Selector */}
        <IronParadiseSection theme={theme} />

        {/* The Rock Soundboard & Quotes */}
        <SoundboardSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onOpenFannyPack={() => setIsFannyPackModalOpen(true)}
      />

      {/* Fanny Pack 1996 Easter Egg Modal */}
      <FannyPackModal
        isOpen={isFannyPackModalOpen}
        onClose={() => setIsFannyPackModalOpen(false)}
        theme={theme}
        fannyPackActive={isFannyPackModeActive}
        onToggleFannyPackActive={() => {
          setIsFannyPackModeActive((prev) => !prev);
          setIsFannyPackModalOpen(false);
        }}
      />

    </div>
  );
}
