import React, { useState } from 'react';
import { Dumbbell, Clock, Flame, Volume2, Shield, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types';
import { WORKOUT_PLANS, ROCK_IMAGES } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface IronParadiseSectionProps {
  theme: ThemeMode;
}

export const IronParadiseSection: React.FC<IronParadiseSectionProps> = ({ theme }) => {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string>('chest');
  const isDark = theme === 'dark';

  const currentPlan = WORKOUT_PLANS.find((w) => w.id === selectedWorkoutId) || WORKOUT_PLANS[0];

  const handleSelectWorkout = (id: string) => {
    sounds.playIronClang();
    setSelectedWorkoutId(id);
  };

  const playWorkoutAudio = () => {
    sounds.playIronClang();
    sounds.speak(`Atenção Iron Paradise! ${currentPlan.quote}`, 'pt-BR');
  };

  return (
    <section id="ironparadise" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
              <span>Santuário de Treinamento</span>
              <span aria-hidden="true">·</span>
              <span>18 Toneladas de Ferro Fundido</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Iron Paradise • Rotinas das 4h da Manhã
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            A academia pessoal itinerante de Dwayne Johnson viaja com ele em carretas por todo o mundo. 
            Sem desculpas, sem celular: apenas ferro, suor e respeito.
          </p>
        </div>

        {/* 2-Column Workout Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Visual and Motivation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            {/* Gym Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group aspect-[4/3] mb-6">
              <img
                src={ROCK_IMAGES.gym}
                alt="Iron Paradise Academia às 4 da manhã"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-mono-custom text-xs font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
                  04:00 AM PROTOCOL
                </span>
                <span className="font-condensed text-2xl font-bold uppercase block">
                  O Santuário de Ferro
                </span>
                <span className="text-xs text-neutral-300">
                  "O ferro nunca mente para você. Ele sempre pesa exatamente a mesma coisa."
                </span>
              </div>
            </div>

            {/* Motivational Speech Box */}
            <div className={`p-6 rounded-2xl border transition-colors flex-1 flex flex-col justify-between ${
              isDark ? 'bg-[#14161a] border-neutral-800' : 'bg-white border-stone-200 shadow-md'
            }`}>
              <div>
                <div className="flex items-center gap-2 mb-2 text-amber-500">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Código de Honra da Iron Paradise</span>
                </div>
                <h4 className="font-condensed text-xl font-bold uppercase mb-2">
                  "Seja o Mais Trabalhador da Sala"
                </h4>
                <p className={`text-sm italic leading-relaxed mb-4 ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                  "{currentPlan.quote}"
                </p>
              </div>

              <button
                type="button"
                onClick={playWorkoutAudio}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-condensed text-base font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow"
              >
                <Volume2 className="w-5 h-5" />
                <span>Ouvir Grito de Guerra</span>
              </button>
            </div>

          </div>

          {/* Right Column: Workout Plans Selector & Exercises */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Workout Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {WORKOUT_PLANS.map((plan) => {
                const isSelected = plan.id === selectedWorkoutId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => handleSelectWorkout(plan.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/15 text-amber-400 font-bold shadow-md'
                        : isDark
                          ? 'border-neutral-800 bg-[#14161a] text-neutral-400 hover:bg-neutral-800/80'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span className="font-condensed text-base font-bold uppercase tracking-wide block truncate">
                      {plan.title.split('&')[0]}
                    </span>
                    <span className="text-xs opacity-75 block truncate">
                      {plan.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Plan Details Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all flex-1 ${
              isDark ? 'bg-[#14161a] border-neutral-800 shadow-xl' : 'bg-white border-stone-200 shadow-lg'
            }`}>
              
              {/* Plan Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800/60 mb-6">
                <div>
                  <h3 className="font-condensed text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-amber-500">
                    {currentPlan.title}
                  </h3>
                  <span className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                    Foco: {currentPlan.targetGroup}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono-custom text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{currentPlan.duration}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>{currentPlan.intensity}</span>
                  </span>
                </div>
              </div>

              {/* Exercises List */}
              <div className="space-y-4">
                {currentPlan.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-xl border flex items-start justify-between gap-4 transition-colors ${
                      isDark
                        ? 'border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/80'
                        : 'border-stone-200/80 bg-stone-50 hover:bg-stone-100/60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono-custom text-xs font-bold text-amber-500 mt-1">
                        0{index + 1}.
                      </span>
                      <div>
                        <h4 className="font-condensed text-lg font-bold uppercase tracking-wide">
                          {exercise.name}
                        </h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                          💡 Dica de execução: {exercise.tip}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono-custom text-xs font-bold text-amber-500 block tabular-nums">
                        {exercise.sets}
                      </span>
                      <span className={`text-xs block tabular-nums ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                        {exercise.reps}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
