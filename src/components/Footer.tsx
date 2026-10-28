import React from 'react';
import { Github, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { ThemeMode } from '../types';
import { sounds } from '../utils/soundEffects';

interface FooterProps {
  theme: ThemeMode;
  onOpenFannyPack: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenFannyPack }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 border-t transition-colors duration-200 ${
      isDark ? 'bg-[#0a0b0d] border-neutral-800 text-neutral-400' : 'bg-stone-100 border-stone-200 text-stone-600'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-neutral-800/40">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-condensed text-2xl font-black uppercase text-amber-500 tracking-wider block">
              THE ROCK • THE ELECTRIFYING FAN EXPERIENCE
            </span>
            <p className="text-xs leading-relaxed max-w-sm">
              Tributo de alta octanagem a Dwayne "The Rock" Johnson. Criado como um projeto 
              acadêmico descontraído e bem-humorado para testar o <strong>Google AI Studio</strong> no 
              curso de <strong>Engenharia de Software com Inteligência Artificial</strong>.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500/90 font-mono-custom">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mana Level: 100% · 04:00 AM Club</span>
            </div>
          </div>

          {/* Navigation Mirrors */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block">
              Navegação Rápida
            </span>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a
                href="#eras"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors"
              >
                As 4 Eras de Dwayne Johnson
              </a>
              <a
                href="#gallery"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors font-medium text-amber-500"
              >
                Galeria de Fotos Reais 📷
              </a>
              <a
                href="#eyebrow"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors"
              >
                Simulador da People's Eyebrow
              </a>
              <a
                href="#cheatmeal"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors"
              >
                Gerador de Cheat Meal de Domingo
              </a>
              <a
                href="#ironparadise"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors"
              >
                Rotinas da Iron Paradise
              </a>
              <a
                href="#soundboard"
                onClick={() => sounds.playTactileClick()}
                className="hover:text-amber-500 transition-colors"
              >
                Soundboard & Citações Clássicas
              </a>
            </div>
          </div>

          {/* Academic & GitHub Notice */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block">
              Pronto para o GitHub
            </span>
            <p className="text-xs leading-relaxed">
              Consulte o arquivo <code className="px-1.5 py-0.5 rounded bg-neutral-800/60 text-amber-400 font-mono">README.md</code> na raiz do projeto com badges, dados nutricionais do código e documentação completa.
            </p>
            <button
              type="button"
              onClick={() => {
                sounds.playTactileClick();
                onOpenFannyPack();
              }}
              className="text-xs text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Easter egg da pochete de 1996 🕶️</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal & Mantra */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span>© {new Date().getFullYear()} Fan Page Não-Oficial • Feito com </span>
            <Heart className="w-3.5 h-3.5 inline text-rose-500 fill-rose-500 mx-0.5" />
            <span> para fins educacionais.</span>
          </div>

          <div className="italic text-neutral-400">
            "Blood, sweat and respect. First two you give, last one you earn."
          </div>
        </div>

      </div>
    </footer>
  );
};
