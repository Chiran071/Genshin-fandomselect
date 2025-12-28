import React, { useState, useMemo } from 'react';
import type { QuizState, Character } from '../types';
import { StartScreen } from './StartScreen';
import { QuestionScreen } from './QuestionScreen';
import { ResultScreen } from './ResultScreen';
import { characters } from '../data/charactersData';
import { questions } from '../data/questionsData';

/**
 * Quiz Component
 * Main component managing the entire quiz flow and scoring logic
 */
export const Quiz: React.FC = () => {
  // Quiz state management
  const [state, setState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [matchedCharacter, setMatchedCharacter] = useState<Character | null>(
    null
  );

  // Randomize question order on each play using useMemo
  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, [state]); // Re-shuffle when state changes (on restart)

  /**
   * Scoring Logic:
   * Calculate character scores based on selected answers
   * Weights from options are summed per character
   * Handle ties by randomly selecting among top scorers
   */
  const calculateMatchedCharacter = (answers: string[]): Character => {
    // Initialize score object for all characters
    const scores: Record<string, number> = {};
    characters.forEach((char) => {
      scores[char.id] = 0;
    });

    // Sum weights from each selected answer
    answers.forEach((answerId, index) => {
      const question = shuffledQuestions[index];
      const selectedOption = question.options.find((opt) => opt.id === answerId);

      if (selectedOption) {
        // Add weights to character scores
        Object.entries(selectedOption.weights).forEach(
          ([characterId, weight]) => {
            if (scores.hasOwnProperty(characterId)) {
              scores[characterId] += weight;
            }
          }
        );
      }
    });

    // Find the maximum score
    const maxScore = Math.max(...Object.values(scores));

    // Get all characters with the max score (handle ties)
    const topCharacters = characters.filter(
      (char) => scores[char.id] === maxScore
    );

    // If there's a tie, randomly select one
    const resultCharacter =
      topCharacters[Math.floor(Math.random() * topCharacters.length)];

    return resultCharacter;
  };

  // Handle start button click
  const handleStart = () => {
    setState('question');
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setMatchedCharacter(null);
  };

  // Handle answer selection
  const handleAnswerSelect = (optionId: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionId;
    setSelectedAnswers(newAnswers);

    // Move to next question or show results
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Quiz complete - calculate result
        const result = calculateMatchedCharacter(newAnswers);
        setMatchedCharacter(result);
        setState('result');
      }
    }, 300);
  };

  // Handle play again
  const handlePlayAgain = () => {
    handleStart();
  };

  // Get current question
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const currentAnswer = selectedAnswers[currentQuestionIndex] || null;

  // Render based on quiz state
  if (state === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (state === 'question' && currentQuestion) {
    return (
      <QuestionScreen
        question={currentQuestion}
        currentIndex={currentQuestionIndex}
        totalQuestions={shuffledQuestions.length}
        onAnswerSelect={handleAnswerSelect}
        selectedOptionId={currentAnswer}
      />
    );
  }

  if (state === 'result' && matchedCharacter) {
    return (
      <ResultScreen
        character={matchedCharacter}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  // Fallback (shouldn't reach here)
  return <StartScreen onStart={handleStart} />;
};
