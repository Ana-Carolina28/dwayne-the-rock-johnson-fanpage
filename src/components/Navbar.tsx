import React from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { ThemeMode } from '../types';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound
}) => {
  const isDark = theme === 'dark';

  const handleNavClick = (id: string) => {
    sounds.playTactileClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-200 border-b ${
      isDark
        ? 'bg-[#0c0d0f]/90 border-neutral-800 text-neutral-100'
        : 'bg-[#fcfbf9]/95 border-stone-200 text-stone-900'
    }`}>
      {/* Strict 3-zone contract: Brand - Nav Links - Primary Actions */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            sounds.playWrestlingBell();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-condensed text-2xl md:text-3xl font-black tracking-wider uppercase text-amber-500 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>THE ROCK</span>
          <span className="text-xs font-sans-custom font-semibold tracking-normal text-amber-600/80 hidden sm:inline">
            // MANA EXPERIENCE
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => handleNavClick('eras')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}
          >
            Carreira & Eras
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors font-semibold ${
              isDark ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            Fotos Reais 📷
          </button>
          <button
            onClick={() => handleNavClick('eyebrow')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}
          >
            Sobrancelha 🤨
          </button>
          <button
            onClick={() => handleNavClick('cheatmeal')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}
          >
            Cheat Meal 🥞
          </button>
          <button
            onClick={() => handleNavClick('ironparadise')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}
          >
            Iron Paradise 🏋️
          </button>
          <button
            onClick={() => handleNavClick('soundboard')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-500 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}
          >
            Soundboard 🎙️
          </button>
        </nav>

        {/* Zone 3: Primary action & theme switchers */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Silenciar Áudio' : 'Ativar Efeitos Sonoros'}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-800/60 hover:text-amber-400'
                : 'border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-amber-600'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-500" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-semibold tracking-wide transition-all ${
              isDark
                ? 'border-neutral-800 bg-neutral-900/80 text-amber-400 hover:bg-neutral-800 hover:border-amber-500/40'
                : 'border-stone-300 bg-stone-100 text-amber-700 hover:bg-stone-200 hover:border-amber-600/40'
            }`}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap shrink-0 hidden sm:inline">Mana Day</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap shrink-0 hidden sm:inline">Iron Paradise</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
