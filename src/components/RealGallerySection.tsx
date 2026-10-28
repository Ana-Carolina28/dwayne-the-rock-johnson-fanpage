import React, { useState } from 'react';
import { Camera, Maximize2, X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { ThemeMode, RealRockPhoto } from '../types';
import { REAL_ROCK_PHOTOS } from '../data/rockData';
import { sounds } from '../utils/soundEffects';

interface RealGallerySectionProps {
  theme: ThemeMode;
}

export const RealGallerySection: React.FC<RealGallerySectionProps> = ({ theme }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<RealRockPhoto | null>(null);
  const isDark = theme === 'dark';

  const handleOpenPhoto = (photo: RealRockPhoto) => {
    sounds.playTactileClick();
    setSelectedPhoto(photo);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 border-b transition-colors duration-200 border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-500 mb-2">
              <Camera className="w-4 h-4 text-amber-500" />
              <span>Acervo Histórico Autêntico</span>
              <span aria-hidden="true">·</span>
              <span>100% Fotos Reais de Dwayne Johnson</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Galeria de Fotografias Reais
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Registros fotográficos autênticos e não gerados por IA, capturados por grandes 
            fotógrafos e jornalistas nos ringues da WWE, tapetes vermelhos e estreias mundiais.
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_ROCK_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#14161a] border-neutral-800 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10'
                  : 'bg-white border-stone-200 hover:border-amber-600/50 hover:shadow-lg'
              }`}
            >
              {/* Photo Container */}
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Real Photo Verified */}
                <div className="absolute top-3 left-3 bg-neutral-950/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Foto Real
                  </span>
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>

                {/* Bottom Photo Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-3 text-[11px] font-mono-custom text-amber-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.year}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                    </span>
                  </div>

                  <h3 className="font-condensed text-xl font-bold uppercase tracking-wide mb-1 text-white group-hover:text-amber-400 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-4xl w-full rounded-2xl overflow-hidden border ${
              isDark ? 'bg-[#14161a] border-neutral-800 text-white' : 'bg-white border-stone-200 text-stone-900'
            }`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                sounds.playTactileClick();
                setSelectedPhoto(null);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              
              {/* Image in Modal */}
              <div className="md:col-span-7 bg-neutral-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>

              {/* Information in Modal */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-amber-500">
                      Fotografia Histórica Verificada
                    </span>
                  </div>

                  <h3 className="font-condensed text-3xl font-black uppercase tracking-tight mb-2">
                    {selectedPhoto.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs font-mono-custom text-amber-600 dark:text-amber-400 mb-5">
                    <span>Ano: {selectedPhoto.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>Local: {selectedPhoto.location}</span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border text-xs ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400' : 'bg-stone-50 border-stone-200 text-stone-600'
                }`}>
                  <span className="font-bold block mb-1 text-amber-500 uppercase">
                    Autenticidade Garantida
                  </span>
                  Esta foto faz parte do acervo documental de eventos públicos e coberturas jornalísticas oficiais de Dwayne Johnson.
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
