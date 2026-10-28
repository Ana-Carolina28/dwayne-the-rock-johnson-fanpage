import React, { useState } from 'react';
import { ArrowDown, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { ThemeMode } from '../types';
import { ROCK_IMAGES } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface HeroProps {
  theme: ThemeMode;
  onOpenFannyPack: () => void;
  onScrollToEyebrow: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onOpenFannyPack,
  onScrollToEyebrow
}) => {
  const [heroPhoto, setHeroPhoto] = useState<string>(ROCK_IMAGES.wweChampion);
  const isDark = theme === 'dark';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed inline kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-4">
              <span>Dwayne Douglas Johnson</span>
              <span aria-hidden="true">·</span>
              <span>The People's Champion</span>
              <span aria-hidden="true">·</span>
              <span>The Brahma Bull</span>
            </div>

            <h1 className="font-condensed text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6">
              The Most Electrifying Man in All of Entertainment
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}>
              De 7 dólares no bolso em 1995 ao maior fenômeno de bilheteria e disciplina do planeta. 
              Mergulhe no universo de ferro fundido da Iron Paradise, descubra os lendários banquetes 
              de domingo e sinta a eletricidade do campeão do povo.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => {
                  sounds.playEyebrowBoom();
                  onScrollToEyebrow();
                }}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-condensed text-lg font-black tracking-wide uppercase rounded-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>Sobrancelha 🤨</span>
                <Flame className="w-5 h-5 fill-neutral-950" />
              </button>

              <button
                type="button"
                onClick={() => {
                  sounds.playWrestlingBell();
                  const elem = document.getElementById('eras');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-3.5 border font-condensed text-lg font-bold tracking-wide uppercase rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600'
                    : 'border-stone-300 bg-stone-100 text-stone-900 hover:bg-stone-200 hover:border-stone-400'
                }`}
              >
                <span>Conhecer as Eras</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  sounds.playTactileClick();
                  onOpenFannyPack();
                }}
                className={`px-4 py-3.5 text-xs font-semibold tracking-wide rounded-lg border transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isDark
                    ? 'border-amber-500/30 text-amber-400 bg-amber-500/5 hover:bg-amber-500/10'
                    : 'border-amber-600/30 text-amber-700 bg-amber-500/10 hover:bg-amber-500/20'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Modo Anos 90 (Pochete)</span>
              </button>
            </div>

            {/* Quote of the day */}
            <div className={`p-4 rounded-xl border text-sm italic relative ${
              isDark ? 'bg-neutral-900/40 border-neutral-800 text-neutral-400' : 'bg-stone-50 border-stone-200 text-stone-600'
            }`}>
              <span className="font-semibold not-italic text-amber-500 block mb-1">Mantra do Dwayne:</span>
              "O sucesso nem sempre tem a ver com grandeza. Tem a ver com consistência. Trabalho duro e consistente gera o sucesso. A grandeza virá em seguida."
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Dwayne Johnson Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group bg-neutral-900 aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
              <img
                src={heroPhoto}
                alt="Fotografia real de Dwayne 'The Rock' Johnson"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Measured Scrim Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Photo Switcher Pill */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 p-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    sounds.playTactileClick();
                    setHeroPhoto(ROCK_IMAGES.wweChampion);
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    heroPhoto === ROCK_IMAGES.wweChampion
                      ? 'bg-amber-500 text-neutral-950 font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  WWE Champ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playTactileClick();
                    setHeroPhoto(ROCK_IMAGES.hercules2014);
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    heroPhoto === ROCK_IMAGES.hercules2014
                      ? 'bg-amber-500 text-neutral-950 font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Hollywood
                </button>
              </div>

              {/* Bottom Caption inside media */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono-custom text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
                      📷 FOTOGRAFIA REAL AUTÊNTICA
                    </span>
                    <p className="font-condensed text-2xl font-bold tracking-wide uppercase text-white">
                      {heroPhoto === ROCK_IMAGES.wweChampion ? 'Campeão Mundial da WWE' : 'Premiere de Hércules'}
                    </p>
                    <p className="text-xs text-neutral-300">
                      {heroPhoto === ROCK_IMAGES.wweChampion
                        ? 'Dwayne Johnson erguendo o cinturão de ouro na arena'
                        : 'Dwayne Johnson na premiere mundial em Sydney'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playWrestlingBell();
                      sounds.speak("IF YA SMELL WHAT THE ROCK IS COOKIN!", "en-US");
                    }}
                    className="p-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-lg transition-transform active:scale-95 shadow-md"
                    title="Tocar Gongo da WWE"
                  >
                    <ShieldAlert className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip below the hero split */}
        <div className={`mt-14 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 ${
          isDark ? 'border-neutral-800/80' : 'border-stone-200'
        }`}>
          <div>
            <span className="font-condensed text-3xl sm:text-4xl font-extrabold text-amber-500 block font-mono-custom tabular-nums">
              $7 ➔ $800M+
            </span>
            <span className={`text-xs font-medium block mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              De falido em 1995 a magnata global
            </span>
          </div>

          <div>
            <span className="font-condensed text-3xl sm:text-4xl font-extrabold text-amber-500 block font-mono-custom tabular-nums">
              10x WWE
            </span>
            <span className={`text-xs font-medium block mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Campeão Mundial peso-pesado
            </span>
          </div>

          <div>
            <span className="font-condensed text-3xl sm:text-4xl font-extrabold text-amber-500 block font-mono-custom tabular-nums">
              04:00 AM
            </span>
            <span className={`text-xs font-medium block mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Despertador diário na Iron Paradise
            </span>
          </div>

          <div>
            <span className="font-condensed text-3xl sm:text-4xl font-extrabold text-amber-500 block font-mono-custom tabular-nums">
              12.000 kcal
            </span>
            <span className={`text-xs font-medium block mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
              Banquete lendário de Cheat Day
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
