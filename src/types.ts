/**
 * Type definitions for the Genshin FandomSelect Quiz
 */

// Represents a single answer option in a question
export interface Option {
  id: string;
  label: string;
  // weights map character IDs to numeric scores
  weights: Record<string, number>;
}

// Represents a single question
export interface Question {
  id: string;
  question: string;
  options: Option[];
}

// Represents a Genshin Impact character
export interface Character {
  id: string;
  name: string;
  element: string;
  region: string;
  weapon: string;
  description: string;
  image: string;
}

// Quiz state type
export type QuizState = 'start' | 'question' | 'result';

// Result description type for personalized character match
export interface ResultDescription {
  match: string;
  reason: string;
}
