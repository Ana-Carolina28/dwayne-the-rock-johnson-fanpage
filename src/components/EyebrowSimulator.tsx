import React, { useState, useEffect } from 'react';
import { Volume2, Zap, RotateCcw, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';
import { sounds } from '../utils/soundEffects';

interface EyebrowSimulatorProps {
  theme: ThemeMode;
}

export const EyebrowSimulator: React.FC<EyebrowSimulatorProps> = ({ theme }) => {
  const [level, setLevel] = useState<number>(35);
  const [hasTriggeredPeak, setHasTriggeredPeak] = useState<boolean>(false);
  const isDark = theme === 'dark';

  // Calculate eyebrow Y translation and rotation based on percentage
  const eyebrowLift = (level / 100) * 42; // lifts up to 42px
  const eyebrowRotate = -(level / 100) * 28; // rotates up to -28deg
  const eyeWidening = 1 + (level / 100) * 0.35;
  const wrinkleOpacity = (level / 100) * 0.95;

  useEffect(() => {
    if (level === 100 && !hasTriggeredPeak) {
      sounds.playEyebrowBoom();
      setHasTriggeredPeak(true);
    } else if (level < 95 && hasTriggeredPeak) {
      setHasTriggeredPeak(false);
    }
  }, [level, hasTriggeredPeak]);

  const handleSliderChange = (newVal: number) => {
    setLevel(newVal);
    if (newVal % 25 === 0) {
      sounds.playTactileClick();
    }
  };

  const getIntensityLabel = () => {
    if (level < 20) return { label: 'Sério & Focado', color: 'text-neutral-400', speech: 'Foco total na missão.' };
    if (level < 50) return { label: 'Desconfiado...', color: 'text-amber-400', speech: 'Você tem certeza disso?' };
    if (level < 85) return { label: 'O Cheiro está Subindo...', color: 'text-amber-500', speech: 'Você sente o aroma do que o The Rock está preparando?' };
    return { label: '⚡ THE PEOPLE\'S EYEBROW TOTAL! ⚡', color: 'text-amber-400 font-black animate-pulse', speech: 'IF YA SMELL WHAT THE ROCK IS COOKIN!' };
  };

  const status = getIntensityLabel();

  return (
    <section id="eyebrow" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
            <span>Experiência Interativa</span>
            <span aria-hidden="true">·</span>
            <span>Física Facial do Campeão</span>
          </div>
          <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Simulador da People's Eyebrow
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            A expressão mais famosa e intimidadora da cultura pop. Arraste o controle ou clique nos 
            níveis para erguer a sobrancelha e liberar a eletricidade pura.
          </p>
        </div>

        {/* Simulator Interactive Card */}
        <div className={`max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl border transition-all duration-300 relative ${
          isDark 
            ? 'bg-[#14161a] border-neutral-800 shadow-2xl' 
            : 'bg-white border-stone-200 shadow-xl'
        } ${level >= 95 ? 'ring-2 ring-amber-500/80 shadow-amber-500/20' : ''}`}>

          {/* Golden Electric Aura at 100% */}
          {level >= 95 && (
            <div className="absolute inset-0 rounded-2xl bg-amber-500/5 animate-pulse pointer-events-none" />
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Stylized Avatar Visual with Moving Eyebrow */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 rounded-full flex items-center justify-center overflow-hidden border-4 border-amber-500/40 bg-gradient-to-b from-stone-800 to-neutral-950 shadow-inner">
                
                {/* Stylized Dwayne Johnson Head SVG */}
                <svg viewBox="0 0 200 200" className="w-48 h-48 select-none">
                  <defs>
                    <linearGradient id="headSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d29668" />
                      <stop offset="100%" stopColor="#9a5b32" />
                    </linearGradient>
                    <radialGradient id="highlight" cx="40%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#f3c299" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#9a5b32" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Bald Head / Skull */}
                  <path
                    d="M 50 110 C 45 40, 155 40, 150 110 C 148 150, 128 175, 100 175 C 72 175, 52 150, 50 110 Z"
                    fill="url(#headSkin)"
                  />
                  {/* Head Highlight (Clean Shaven Shine) */}
                  <ellipse cx="90" cy="55" rx="35" ry="18" fill="url(#highlight)" />

                  {/* Forehead Wrinkles appearing as eyebrow arches */}
                  <g style={{ opacity: wrinkleOpacity }} className="transition-opacity duration-150">
                    <path d="M 108 58 Q 132 46, 142 55" stroke="#683416" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M 112 65 Q 130 54, 140 63" stroke="#683416" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Left Normal Eyebrow (Stable, focused) */}
                  <path
                    d="M 62 82 Q 78 78, 92 82"
                    stroke="#1e1815"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Left Eye */}
                  <ellipse cx="78" cy="94" rx="9" ry="5.5" fill="#ffffff" />
                  <ellipse cx="79" cy="94" rx="4" ry="4" fill="#2d1c13" />
                  <circle cx="80.5" cy="92.5" r="1.5" fill="#ffffff" />

                  {/* RIGHT EYEBROW (The People's Eyebrow! Lifts dynamically!) */}
                  <g
                    style={{
                      transform: `translateY(-${eyebrowLift}px) rotate(${eyebrowRotate}deg)`,
                      transformOrigin: '125px 82px',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <path
                      d="M 108 82 Q 124 74, 142 80"
                      stroke="#1a1412"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Right Eye (Widens and narrows with intensity) */}
                  <g
                    style={{
                      transform: `scaleY(${eyeWidening})`,
                      transformOrigin: '122px 94px',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <ellipse cx="122" cy="94" rx="9.5" ry="5.5" fill="#ffffff" />
                    <ellipse cx="121" cy="93.5" rx="4.2" ry="4.2" fill="#2d1c13" />
                    <circle cx="122.5" cy="92" r="1.5" fill="#ffffff" />
                  </g>

                  {/* Strong Jawline / Chiseled Nose */}
                  <path
                    d="M 100 85 L 102 115 L 94 122 L 106 122"
                    stroke="#7a3e1b"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Charismatic Smirk */}
                  <path
                    d="M 78 144 Q 98 145, 126 138"
                    stroke="#431e0f"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Subtle dimple on right side of smirk */}
                  <path
                    d="M 127 136 Q 130 139, 128 143"
                    stroke="#431e0f"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Comic Thunder sparks when maxed out */}
                {level >= 95 && (
                  <div className="absolute top-4 right-4 text-amber-400 animate-bounce">
                    <Zap className="w-7 h-7 fill-amber-400 filter drop-shadow" />
                  </div>
                )}
              </div>

              {/* Status pill under head */}
              <div className="mt-4 text-center">
                <span className={`text-sm font-condensed tracking-wide uppercase ${status.color}`}>
                  {status.label}
                </span>
                <span className="block font-mono-custom text-xs font-bold text-amber-500/90 mt-0.5 tabular-nums">
                  Elevação: {level}%
                </span>
              </div>
            </div>

            {/* Right: Controls & Interactive Buttons */}
            <div className="md:col-span-7 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="eyebrow-slider" className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    Controle de Tensão da Sobrancelha
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playTactileClick();
                      setLevel(0);
                    }}
                    className={`text-xs flex items-center gap-1 hover:text-amber-500 transition-colors ${
                      isDark ? 'text-neutral-400' : 'text-stone-500'
                    }`}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Zerar</span>
                  </button>
                </div>

                {/* Range Slider */}
                <input
                  id="eyebrow-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={level}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full h-3 bg-neutral-700/60 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none mb-6"
                />

                {/* Preset Quick Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { val: 0, label: '0% Neutro' },
                    { val: 35, label: '35% Alerta' },
                    { val: 70, label: '70% Aroma' },
                    { val: 100, label: '100% Electrifying' }
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => {
                        handleSliderChange(preset.val);
                        if (preset.val === 100) sounds.playEyebrowBoom();
                        else sounds.playTactileClick();
                      }}
                      className={`py-2 px-1 text-center rounded-lg border text-xs font-semibold transition-all ${
                        level === preset.val
                          ? 'border-amber-500 bg-amber-500/15 text-amber-400 font-bold'
                          : isDark
                            ? 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                            : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Dynamic Commentary Box */}
                <div className={`p-4 rounded-xl border text-sm transition-colors ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300' : 'bg-stone-50 border-stone-200 text-stone-700'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-xs uppercase tracking-wider text-amber-500">
                      Veredito do Ringue
                    </span>
                  </div>
                  <p className="italic">
                    {level === 100
                      ? '"IF YA SMELLLLLLLL WHAT THE ROCK IS COOKIN\'! A plateia inteira foi ao delírio no Madison Square Garden!"'
                      : level >= 70
                        ? '"A sobrancelha atingiu o ângulo de intimidação. O adversário começou a recuar dois passos."'
                        : level >= 35
                          ? '"O campeão do povo está analisando a situação com cautela e elegância."'
                          : '"Concentração de monge antes de arrebentar no treino das quatro da manhã."'}
                  </p>
                </div>
              </div>

              {/* Sound Action */}
              <div className="mt-6 pt-4 border-t border-neutral-800/40 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Dica: Coloque em 100% para o estrondo sonoro!
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playEyebrowBoom();
                    sounds.speak(status.speech, level === 100 ? 'en-US' : 'pt-BR');
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold font-condensed tracking-wider uppercase rounded-lg transition-all flex items-center gap-1.5 shadow"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Soltar Rugido</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
