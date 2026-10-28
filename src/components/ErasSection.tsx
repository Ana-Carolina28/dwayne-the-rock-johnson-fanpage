import React, { useState } from 'react';
import { Award, ChevronRight, Quote } from 'lucide-react';
import { ThemeMode } from '../types';
import { ROCK_ERAS, ROCK_IMAGES } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface ErasSectionProps {
  theme: ThemeMode;
}

export const ErasSection: React.FC<ErasSectionProps> = ({ theme }) => {
  const [activeEraId, setActiveEraId] = useState<string>('attitude');
  const isDark = theme === 'dark';

  const activeEra = ROCK_ERAS.find((e) => e.id === activeEraId) || ROCK_ERAS[0];

  const handleSelectEra = (id: string) => {
    sounds.playTactileClick();
    setActiveEraId(id);
  };

  return (
    <section id="eras" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
              <span>Cronologia Histórica</span>
              <span aria-hidden="true">·</span>
              <span>De Miami aos Confins do Mundo</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight">
              As Quatro Eras de Dwayne Johnson
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Explore como um jovem com 7 dólares e um sonho forjou o legado mais rentável e carismático 
            do planeta através de quatro capítulos lendários.
          </p>
        </div>

        {/* Interactive Segmented Tabs for Eras */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 rounded-xl border mb-10 ${
          isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-100 border-stone-200'
        }`}>
          {ROCK_ERAS.map((era) => {
            const isSelected = era.id === activeEraId;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => handleSelectEra(era.id)}
                className={`text-left p-3.5 rounded-lg transition-all duration-150 flex flex-col justify-between ${
                  isSelected
                    ? isDark
                      ? 'bg-neutral-800 text-amber-400 shadow-md border border-neutral-700/80'
                      : 'bg-white text-amber-700 shadow-md border border-stone-300'
                    : isDark
                      ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <span className="font-mono-custom text-xs font-bold block mb-1 opacity-80">
                  {era.year}
                </span>
                <span className="font-condensed text-base font-bold uppercase tracking-wide leading-tight">
                  {era.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Era Deep Dive Bento Box */}
        <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isDark ? 'bg-[#14161a] border-neutral-800 shadow-xl' : 'bg-white border-stone-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
                  <span className="font-mono-custom">{activeEra.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeEra.badge}</span>
                </div>

                <h3 className="font-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-2">
                  {activeEra.title}
                </h3>
                
                <h4 className={`text-base font-medium mb-5 ${isDark ? 'text-amber-400/90' : 'text-amber-700'}`}>
                  {activeEra.subtitle}
                </h4>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                  isDark ? 'text-neutral-300' : 'text-stone-700'
                }`}>
                  {activeEra.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-2">
                    Marcos Históricos da Era:
                  </span>
                  {activeEra.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-neutral-300' : 'text-stone-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Era Quote Block */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isDark ? 'bg-neutral-900/60 border-neutral-800/80 text-neutral-300' : 'bg-stone-50 border-stone-200 text-stone-700'
              }`}>
                <Quote className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm italic font-medium">
                  "{activeEra.quote}"
                </p>
              </div>
            </div>

            {/* Right: Authentic Historical Photo for Selected Era */}
            <div className="lg:col-span-5 relative bg-neutral-900 min-h-[360px] lg:min-h-full">
              <img
                src={activeEra.image}
                alt={activeEra.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="font-mono-custom text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                    📷 FOTOGRAFIA HISTÓRICA REAL
                  </span>
                </div>
                <p className="font-condensed text-xl font-bold uppercase mb-1">
                  "{activeEra.title}"
                </p>
                <p className="text-xs text-neutral-300">
                  {activeEra.imageCaption}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
