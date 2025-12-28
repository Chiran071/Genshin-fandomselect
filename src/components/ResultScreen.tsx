import React, { useState } from 'react';
import type { Character } from '../types';

type ResultScreenProps = {
  character: Character;
  onPlayAgain: () => void;
};

export const ResultScreen: React.FC<ResultScreenProps> = ({
  character,
  onPlayAgain,
}) => {
  const [imageError, setImageError] = useState(false);

  const elementStyles: Record<string, { bg: string; glow: string; text: string }> = {
    Pyro: { bg: 'from-red-500 to-orange-500', glow: 'shadow-red-500/30', text: 'text-red-400' },
    Hydro: { bg: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/30', text: 'text-blue-400' },
    Electro: { bg: 'from-purple-500 to-violet-500', glow: 'shadow-purple-500/30', text: 'text-purple-400' },
    Cryo: { bg: 'from-cyan-400 to-blue-400', glow: 'shadow-cyan-400/30', text: 'text-cyan-400' },
    Anemo: { bg: 'from-teal-400 to-emerald-400', glow: 'shadow-teal-400/30', text: 'text-teal-400' },
    Geo: { bg: 'from-amber-500 to-yellow-500', glow: 'shadow-amber-500/30', text: 'text-amber-400' },
    Dendro: { bg: 'from-green-500 to-emerald-500', glow: 'shadow-green-500/30', text: 'text-green-400' },
  };

  const style = elementStyles[character.element] || elementStyles.Geo;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a12] p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r ${style.bg} opacity-10 rounded-full blur-3xl`} />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Result Card */}
        <div className="bg-gradient-to-b from-[#1a1a2e]/90 to-[#16162a]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Character Image */}
          <div className="relative h-72 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-4">
            {!imageError ? (
              <img
                src={character.image}
                alt={character.name}
                className="h-full w-auto object-contain drop-shadow-2xl"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-center">
                <div className="text-8xl mb-4">✨</div>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16162a] to-transparent" />
          </div>

          {/* Content */}
          <div className="px-6 pb-6 -mt-6 relative">
            {/* Match label */}
            <div className="text-center mb-2">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full">
                ✨ Your Match
              </span>
            </div>

            {/* Character Name */}
            <h1 className="text-3xl font-bold text-white text-center mb-4">
              {character.name}
            </h1>

            {/* Element & Info Badges */}
            <div className="flex justify-center gap-2 mb-5 flex-wrap">
              <span className={`bg-gradient-to-r ${style.bg} text-white px-7 py-2 rounded-full text-xs font-bold shadow-lg ${style.glow} whitespace-nowrap`}>
                {character.element}
              </span>
              <span className="bg-white/10 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
                {character.region}
              </span>
              <span className="bg-white/5 text-gray-400 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
                {character.weapon}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
              {character.description}
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={onPlayAgain}
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Take Quiz Again
              </button>
              
              <p className="text-center text-gray-600 text-xs">
                Answer differently for a new result!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
