# Genshin FandomSelect Quiz Application

## ✨ Project Overview

A complete FandomSelect-style personality quiz application for Genshin Impact characters. Users answer 10 personality-based questions and receive a character match based on weighted scoring.

## 🏗️ Project Structure

```
src/
├── types.ts                    # TypeScript interfaces for Character, Question, Option
├── App.tsx                     # Main App component
├── index.css                   # Tailwind CSS setup
├── components/
│   ├── Quiz.tsx               # Main quiz controller with scoring logic
│   ├── StartScreen.tsx        # Introduction and start button
│   ├── QuestionScreen.tsx     # Question display and answer selection
│   └── ResultScreen.tsx       # Character result display
└── data/
    ├── charactersData.ts      # 10 Genshin Impact characters with metadata
    └── questionsData.ts       # 10 personality questions with weighted options
```

## 🎯 Core Features

### 1. **Complete Quiz Flow**
- **Start Screen**: Welcoming introduction with quiz info
- **Question Screen**: 10 randomized questions with progress indicator
- **Result Screen**: Matched character with personalized description

### 2. **Intelligent Scoring System**
- Each option has weighted points (0-3) toward different characters
- Scores accumulated per character across all questions
- Tie-breaking: Randomly selects among top-scoring characters
- Shuffled question order on each play for variety

### 3. **Character Matching** (10 Characters)
- Hu Tao (Pyro, Liyue, Polearm)
- Zhongli (Geo, Liyue, Polearm)
- Ganyu (Cryo, Liyue, Bow)
- Fischl (Electro, Mondstadt, Bow)
- Venti (Anemo, Mondstadt, Bow)
- Sucrose (Anemo, Mondstadt, Catalyst)
- Diluc (Pyro, Mondstadt, Claymore)
- Raiden Shogun (Electro, Inazuma, Polearm)
- Kaedehara Kazuha (Anemo, Inazuma, Sword)
- Yelan (Hydro, Liyue, Bow)

### 4. **Question Categories**
- Personality traits (passionate, calm, free-spirited)
- Combat preferences (fast, heavy, support, burst)
- Element vibes and affinities
- Decision-making style
- Life philosophy and values

## 🎨 Design & UX

### Visual Design
- **Color Scheme**: Purple, blue, and indigo gradients inspired by Teyvat
- **Typography**: System fonts with modern hierarchy
- **Layout**: Centered card design with backdrop blur effect
- **Responsiveness**: Mobile-first approach with breakpoints at 768px (md)

### Interactive Elements
- Smooth transitions (300ms) on all interactions
- Progress bar showing quiz completion
- Visual highlight on selected answers
- Hover effects on buttons and options
- Smooth scale animations on button press

### Tailwind CSS Features
- Gradient backgrounds (from-purple to indigo)
- Rounded corners (rounded-2xl for cards)
- Glassmorphism effect (backdrop-blur, bg-opacity)
- Responsive text sizing (text-sm to text-5xl)
- Transition utilities for smooth animations

## 🔧 Technical Stack

### Framework & Language
- **React**: Functional components with hooks
- **TypeScript**: Strict typing (no `any`), type-only imports
- **Vite**: Fast build tool and dev server

### State Management
- `useState`: Quiz state, current question, selected answers
- `useMemo`: Randomize questions on each play
- Local state within components

### Styling
- **Tailwind CSS v4**: Utility-first approach
- **CSS Animations**: Custom keyframes for fade-in and slide-up

## 📊 Scoring Logic

```typescript
// 1. Initialize scores for all characters
scores = { hutao: 0, zhongli: 0, ... }

// 2. For each answer, add weights to character scores
if (selectedOption.weights.hutao = 3)
  scores.hutao += 3

// 3. Find maximum score
maxScore = Math.max(...scores)

// 4. Get all characters with max score (ties)
topCharacters = [hutao, fischl] // both have score 25

// 5. Randomly select one from ties
result = topCharacters[Math.random() * length]
```

## 🚀 Running the Application

### Development
```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

## ✅ Features Implemented

- [x] Functional React components (no class components)
- [x] Strict TypeScript typing throughout
- [x] Tailwind CSS styling with responsive design
- [x] useState for state management
- [x] useMemo for question shuffling
- [x] No external UI libraries
- [x] Mobile-first responsive design
- [x] 10 personality-based questions
- [x] 10 Genshin Impact characters
- [x] Weighted scoring system
- [x] Tie-breaking logic
- [x] Randomized question order
- [x] Smooth transitions and animations
- [x] Progress indicator
- [x] Personalized character descriptions
- [x] Play again functionality

## 🎪 Question Design

Questions focus on:
- **Personality**: calm vs chaotic, leader vs lone wolf
- **Combat**: fast vs heavy, support vs burst
- **Elements**: vibes and affinities
- **Values**: what matters in life
- **Motivation**: purpose and direction

Questions avoid explicit power scaling and maintain a fun, casual, fandom-friendly tone.

## 📱 Responsive Design

- **Mobile (< 768px)**: Single column, optimized spacing
- **Tablet/Desktop (≥ 768px)**: Better spacing, larger text sizes
- **Full viewport**: Min-height 100vh, centered content
- **Touch-friendly**: Larger buttons and clickable areas

## 🎯 User Flow

1. **Start** → Reads intro, clicks "Begin Your Journey"
2. **Question 1-10** → Answer personality questions, see progress
3. **Result** → See matched character with image and description
4. **Play Again** → Restart quiz with new question order

---

**Status**: ✅ Complete and ready to deploy!
