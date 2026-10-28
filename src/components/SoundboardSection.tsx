import React, { useState } from 'react';
import { Volume2, Copy, Check, Sparkles, Bell, Zap, Flame } from 'lucide-react';
import { ThemeMode } from '../types';
import { ROCK_QUOTES } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface SoundboardSectionProps {
  theme: ThemeMode;
}

export const SoundboardSection: React.FC<SoundboardSectionProps> = ({ theme }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const handlePlayQuote = (quote: typeof ROCK_QUOTES[0]) => {
    setActiveSpeechId(quote.id);
    sounds.playEyebrowBoom();
    sounds.speak(quote.en, 'en-US');
    setTimeout(() => setActiveSpeechId(null), 2500);
  };

  const handleCopyQuote = (quote: typeof ROCK_QUOTES[0]) => {
    sounds.playTactileClick();
    navigator.clipboard.writeText(`"${quote.en}" (${quote.pt}) — Dwayne "The Rock" Johnson`);
    setCopiedId(quote.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="soundboard" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
            <span>Voz do Campeão</span>
            <span aria-hidden="true">·</span>
            <span>Efeitos Sonoros Web Audio</span>
          </div>
          <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            The Rock Soundboard & Frases
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Clique em qualquer frase para ouvir o rugido e sintetizar a voz do campeão no seu navegador, 
            ou acione os efeitos sonoros instantâneos da arena.
          </p>
        </div>

        {/* Quick SFX Arena Row */}
        <div className="max-w-4xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block text-center mb-3">
            Efeitos Sonoros Imediatos:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => sounds.playWrestlingBell()}
              className={`p-4 rounded-xl border transition-all flex items-center justify-center gap-3 active:scale-95 ${
                isDark
                  ? 'border-neutral-800 bg-[#14161a] hover:bg-neutral-800 text-neutral-200'
                  : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800 shadow-sm'
              }`}
            >
              <Bell className="w-5 h-5 text-amber-500" />
              <span className="font-condensed text-lg font-bold uppercase tracking-wider">
                Gongo do Ringue 🔔
              </span>
            </button>

            <button
              type="button"
              onClick={() => sounds.playEyebrowBoom()}
              className={`p-4 rounded-xl border transition-all flex items-center justify-center gap-3 active:scale-95 ${
                isDark
                  ? 'border-neutral-800 bg-[#14161a] hover:bg-neutral-800 text-neutral-200'
                  : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800 shadow-sm'
              }`}
            >
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="font-condensed text-lg font-bold uppercase tracking-wider">
                Estrondo de Sobrancelha ⚡
              </span>
            </button>

            <button
              type="button"
              onClick={() => sounds.playIronClang()}
              className={`p-4 rounded-xl border transition-all flex items-center justify-center gap-3 active:scale-95 ${
                isDark
                  ? 'border-neutral-800 bg-[#14161a] hover:bg-neutral-800 text-neutral-200'
                  : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800 shadow-sm'
              }`}
            >
              <Flame className="w-5 h-5 text-amber-500" />
              <span className="font-condensed text-lg font-bold uppercase tracking-wider">
                Batida de Anilhas 🏋️
              </span>
            </button>
          </div>
        </div>

        {/* Quotes Soundboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ROCK_QUOTES.map((quote) => {
            const isPlaying = activeSpeechId === quote.id;
            const isCopied = copiedId === quote.id;

            return (
              <div
                key={quote.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isPlaying
                    ? 'border-amber-500 bg-amber-500/10 shadow-lg ring-1 ring-amber-500/40'
                    : isDark
                      ? 'border-neutral-800 bg-[#14161a] hover:border-neutral-700'
                      : 'border-stone-200 bg-white hover:border-stone-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-custom text-xs font-semibold text-amber-500">
                      // BORDÃO CLÁSSICO
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyQuote(quote)}
                      title="Copiar citação"
                      className={`p-1.5 rounded-md text-xs transition-colors ${
                        isCopied
                          ? 'text-emerald-500 bg-emerald-500/10'
                          : isDark
                            ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                            : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <h4 className="font-condensed text-xl font-bold uppercase tracking-wide mb-1 leading-snug">
                    "{quote.en}"
                  </h4>
                  
                  <p className={`text-xs italic mb-4 ${isDark ? 'text-neutral-300' : 'text-stone-600'}`}>
                    "{quote.pt}"
                  </p>

                  <p className={`text-xs line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                    {quote.context}
                  </p>
                </div>

                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => handlePlayQuote(quote)}
                  className={`mt-6 w-full py-2.5 px-4 rounded-xl font-condensed text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isPlaying
                      ? 'bg-amber-400 text-neutral-950 scale-98 shadow-inner'
                      : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isPlaying ? 'Reproduzindo...' : 'Falar Frase 🎙️'}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
