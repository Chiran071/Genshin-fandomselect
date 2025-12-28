import React from "react";

type StartScreenProps = {
  onStart: () => void;
};

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a12] p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Main Card */}
        <div className="bg-gradient-to-b from-[#1a1a2e]/90 to-[#16162a]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Header with glow effect */}
          <div className="relative px-8 pt-10 pb-6 text-center">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <span className="text-3xl">⚔️</span>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Genshin Select
            </h1>
            <p className="text-amber-400/80 text-sm font-medium">Discover Your Teyvat Soul</p>
          </div>

          {/* Content */}
          <div className="px-8 pb-8">
            <p className="text-gray-400 text-center mb-8 leading-relaxed">
              Answer personality questions to find which Genshin Impact character truly matches your soul.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="text-2xl mb-2">📝</div>
                <p className="text-xs text-gray-400">12 Questions</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="text-2xl mb-2">👥</div>
                <p className="text-xs text-gray-400">60+ Characters</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-xs text-gray-400">Perfect Match</p>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={onStart}
              className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-6">
          A fan-made quiz • Not affiliated with HoYoverse
        </p>
      </div>
    </div>
  );
};
