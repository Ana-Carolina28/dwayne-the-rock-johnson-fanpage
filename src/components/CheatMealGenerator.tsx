import React, { useState } from 'react';
import { Utensils, Sparkles, Check, Flame, Shuffle, Trophy } from 'lucide-react';
import { ThemeMode } from '../types';
import { CHEAT_MEAL_ITEMS, CHEAT_MEAL_PRESETS, ROCK_IMAGES } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface CheatMealGeneratorProps {
  theme: ThemeMode;
}

export const CheatMealGenerator: React.FC<CheatMealGeneratorProps> = ({ theme }) => {
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([
    'pancakes',
    'french_toast',
    'icecream'
  ]);
  const [justRandomized, setJustRandomized] = useState<boolean>(false);
  const isDark = theme === 'dark';

  const toggleItem = (id: string) => {
    sounds.playTactileClick();
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const applyPreset = (items: string[]) => {
    sounds.playTactileClick();
    setSelectedItemIds(items);
  };

  const handleRandomize = () => {
    sounds.playEyebrowBoom();
    setJustRandomized(true);
    setTimeout(() => setJustRandomized(false), 800);

    // Pick 2 to 4 random items
    const shuffled = [...CHEAT_MEAL_ITEMS].sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 3) + 2;
    const selected = shuffled.slice(0, count).map((item) => item.id);
    setSelectedItemIds(selected);
  };

  // Compute metrics
  const activeItems = CHEAT_MEAL_ITEMS.filter((item) =>
    selectedItemIds.includes(item.id)
  );
  const totalCalories = activeItems.reduce((acc, item) => acc + item.calories, 0);
  const totalProtein = activeItems.reduce((acc, item) => acc + item.proteinGrams, 0);

  const getRockComment = () => {
    if (totalCalories === 0) return 'Você não pode encarar a segunda-feira na Iron Paradise de estômago vazio!';
    if (totalCalories < 3000) return 'Um aperitivo digno, mas precisamos de mais carboidratos para alimentar esse Mana.';
    if (totalCalories < 6500) return 'Excelente! Uma carga colossal de glicogênio pronta para ser incinerada no treino de pernas.';
    if (totalCalories < 9000) return 'NÍVEL TITÃ: As panquecas estão sorrindo para você e os halteres de 60kg já estão tremendo.';
    return 'BANQUETE DOS DEUSES DO OLIMPO: Você acaba de consumir a energia necessária para erguer a Estátua da Liberdade!';
  };

  return (
    <section id="cheatmeal" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
            <span>Can You Smell What The Rock Is Cooking?</span>
            <span aria-hidden="true">·</span>
            <span>Tradição de Domingo</span>
          </div>
          <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Gerador de Cheat Meal Lendário
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Após semanas de disciplina rigorosa na Iron Paradise, Dwayne devora banquetes de proporções 
            bíblicas no domingo. Monte o seu prato dos sonhos ou sorteie uma combinação de proporções titânicas.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual & Nutrition Dashboard */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Feast Image */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group aspect-[4/3]">
              <img
                src={ROCK_IMAGES.cheatMeal}
                alt="Banquete de panquecas e hambúrgueres do The Rock"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-condensed text-xl font-bold uppercase text-amber-400 block">
                  O Domingo Sagrado do Campeão
                </span>
                <span className="text-xs text-neutral-300">
                  Sem culpa, sem moderação: pura recompensa pelo trabalho duro.
                </span>
              </div>
            </div>

            {/* Nutrition Scorecard Box */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#14161a] border-neutral-800' : 'bg-white border-stone-200 shadow-lg'
            } ${justRandomized ? 'scale-102 ring-2 ring-amber-500' : ''}`}>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Totais Nutricionais do Banquete</span>
                </span>
                <span className="text-xs text-neutral-400 font-mono-custom">
                  {activeItems.length} pratos selecionados
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-5 border-b border-neutral-800/60 mb-5">
                <div>
                  <span className="font-condensed text-3xl sm:text-4xl font-black text-amber-500 block font-mono-custom tabular-nums">
                    {totalCalories.toLocaleString('pt-BR')} kcal
                  </span>
                  <span className={`text-xs block mt-0.5 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                    Energia Termogênica Bruta
                  </span>
                </div>
                <div>
                  <span className="font-condensed text-3xl sm:text-4xl font-black text-amber-400 block font-mono-custom tabular-nums">
                    {totalProtein}g
                  </span>
                  <span className={`text-xs block mt-0.5 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                    Proteína para Reconstrução
                  </span>
                </div>
              </div>

              {/* Rock's Verdict */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
                  Veredito do The Rock:
                </span>
                <p className={`text-sm italic leading-relaxed ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                  "{getRockComment()}"
                </p>
              </div>

              {/* Randomizer CTA */}
              <button
                type="button"
                onClick={handleRandomize}
                className="w-full mt-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-condensed text-lg font-black tracking-wide uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                <Shuffle className="w-5 h-5" />
                <span>Sortear Banquete Aleatório</span>
              </button>

            </div>

          </div>

          {/* Right Column: Menu Items & Presets */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Presets Row */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-3">
                Combos Lendários Prontos:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CHEAT_MEAL_PRESETS.map((preset) => {
                  const isPresetActive =
                    preset.items.length === selectedItemIds.length &&
                    preset.items.every((id) => selectedItemIds.includes(id));

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => applyPreset(preset.items)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isPresetActive
                          ? 'border-amber-500 bg-amber-500/15 shadow-md'
                          : isDark
                            ? 'border-neutral-800 bg-[#14161a] hover:bg-neutral-800/80'
                            : 'border-stone-200 bg-white hover:bg-stone-50 shadow-sm'
                      }`}
                    >
                      <span className="font-condensed text-base font-bold uppercase tracking-wide text-amber-500 block">
                        {preset.title}
                      </span>
                      <span className={`text-xs mt-1 line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                        {preset.description}
                      </span>
                      <span className="font-mono-custom text-xs font-bold mt-2 text-amber-400 block tabular-nums">
                        ~{preset.totalCalories.toLocaleString('pt-BR')} kcal
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Individual Dishes Checklist */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-3">
                Selecione os Pratos Individuais:
              </span>

              <div className="space-y-3">
                {CHEAT_MEAL_ITEMS.map((item) => {
                  const isSelected = selectedItemIds.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${
                        isSelected
                          ? isDark
                            ? 'border-amber-500/80 bg-neutral-900/90 shadow-md ring-1 ring-amber-500/40'
                            : 'border-amber-600 bg-amber-50/60 shadow-md ring-1 ring-amber-600/30'
                          : isDark
                            ? 'border-neutral-800 bg-[#14161a] hover:bg-neutral-800/60'
                            : 'border-stone-200 bg-white hover:bg-stone-50'
                      }`}
                    >
                      {/* Checkbox box */}
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                          isSelected
                            ? 'bg-amber-500 border-amber-500 text-neutral-950'
                            : isDark
                              ? 'border-neutral-700 bg-neutral-800'
                              : 'border-stone-300 bg-stone-100'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h4 className="font-condensed text-lg font-bold tracking-wide uppercase">
                            {item.name}
                          </h4>
                          <span className="font-mono-custom text-xs font-bold text-amber-500 tabular-nums">
                            +{item.calories} kcal · {item.proteinGrams}g prot
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                          {item.funFact}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
