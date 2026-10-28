import React from 'react';
import { X, Sparkles, Shirt, Award, Check } from 'lucide-react';
import { ThemeMode } from '../types';
import { sounds } from '../utils/soundEffects';

interface FannyPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  fannyPackActive: boolean;
  onToggleFannyPackActive: () => void;
}

export const FannyPackModal: React.FC<FannyPackModalProps> = ({
  isOpen,
  onClose,
  theme,
  fannyPackActive,
  onToggleFannyPackActive
}) => {
  if (!isOpen) return null;

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 transition-all overflow-hidden ${
        isDark ? 'bg-[#14161a] border-neutral-800 text-neutral-100 shadow-2xl' : 'bg-white border-stone-200 text-stone-900 shadow-2xl'
      }`}>
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            sounds.playTactileClick();
            onClose();
          }}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
            isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-stone-500 hover:text-black hover:bg-stone-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Easter Egg Histórico • 1996</span>
        </div>

        <h3 className="font-condensed text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
          O Santo Graal dos Memes: A Pochete de Couro
        </h3>

        <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
          Em 1996, um jovem Dwayne Johnson posou para uma sessão de fotos usando uma gola alta preta, 
          calça jeans folgada, corrente de prata por fora e uma <strong>pochete de couro marrom</strong>. 
          O detalhe mais épico? Um guardanapo de papel sob o cotovelo para não sujar a gola na madeira!
        </p>

        {/* The 4 Commandments of the 90s Rock Fit */}
        <div className={`p-4 rounded-xl border mb-6 space-y-2.5 ${
          isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300' : 'bg-stone-50 border-stone-200 text-stone-700'
        }`}>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block">
            Os Quatro Pilares do Estilo Supremo de 1996:
          </span>
          <div className="flex items-start gap-2.5 text-xs">
            <Shirt className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span><strong>Gola alta preta:</strong> Justa nos bíceps, sem dobras desnecessárias.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs">
            <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span><strong>Corrente de prata:</strong> Sempre por cima do tecido para máximo brilho.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span><strong>A Pochete (Fanny Pack):</strong> Posicionada na cintura com atitude inabalável.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs">
            <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span><strong>Guardanapo no cotovelo:</strong> Proteção têxtil avançada para superfícies duvidosas.</span>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/40">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            {fannyPackActive ? (
              <span className="text-amber-400 font-semibold">✨ Modo 1996 Ativado no topo da página!</span>
            ) : (
              <span>Ative a aura dos anos 90 nesta sessão.</span>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              sounds.playEyebrowBoom();
              onToggleFannyPackActive();
            }}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-condensed text-base font-black tracking-wide uppercase transition-all flex items-center justify-center gap-2 ${
              fannyPackActive
                ? 'bg-amber-400 text-neutral-950 shadow-md'
                : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{fannyPackActive ? 'Desativar Pochete' : 'Equipar Pochete Virtual 🕶️'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
