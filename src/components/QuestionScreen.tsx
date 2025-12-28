import React from 'react';
import type { Question } from '../types';

type QuestionScreenProps = {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswerSelect: (optionId: string) => void;
  selectedOptionId: string | null;
};

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswerSelect,
  selectedOptionId,
}) => {
  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a12] p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-sm font-medium">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-amber-400 text-sm font-bold">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-b from-[#1a1a2e]/90 to-[#16162a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-semibold text-white leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="p-4 space-y-3">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => onAnswerSelect(option.id)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-4 group ${
                  selectedOptionId === option.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5 hover:border-amber-400/30'
                }`}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                  selectedOptionId === option.id
                    ? 'bg-black/20 text-black'
                    : 'bg-white/10 text-amber-400 group-hover:bg-amber-400/20'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 font-medium">{option.label}</span>
                {selectedOptionId === option.id && (
                  <span className="text-black text-lg">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-gray-500 text-sm mt-5">
          {selectedOptionId ? '✨ Great choice!' : 'Tap an answer to continue'}
        </p>
      </div>
    </div>
  );
};
