# Genshin FandomSelect Quiz Application

## ✨ Project Overview

A complete FandomSelect-style personality quiz application for Genshin Impact characters. Users answer 12 personality-based questions and receive a character match based on weighted scoring. Features a dark Genshin-themed UI with 60+ characters from all 7 regions of Teyvat.

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
    ├── charactersData.ts      # 60+ Genshin Impact characters with metadata
    └── questionsData.ts       # 12 personality questions with weighted options
```

## 🎯 Core Features

### 1. **Complete Quiz Flow**
- **Start Screen**: Dark themed welcome with animated background particles
- **Question Screen**: 12 randomized questions with amber progress indicator
- **Result Screen**: Matched character with element-colored badges and description

### 2. **Intelligent Scoring System**
- Each option has weighted points (0-3) toward different characters
- Scores accumulated per character across all questions
- Tie-breaking: Randomly selects among top-scoring characters
- Shuffled question order on each play for variety

### 3. **Character Matching** (60+ Characters from All Regions)

**Mondstadt (15)**
- Amber, Barbara, Bennett, Diluc, Fischl, Jean, Kaeya, Lisa, Mona, Noelle, Sucrose, Venti, Razor, Eula, Albedo

**Liyue (12)**
- Beidou, Chongyun, Ganyu, Hu Tao, Keqing, Ningguang, Xiangling, Xingqiu, Xinyan, Yelan, Zhongli, Shenhe

**Inazuma (10)**
- Kamisato Ayaka, Kamisato Ayato, Kaedehara Kazuha, Raiden Shogun, Yoimiya, Yae Miko, Arataki Itto, Sangonomiya Kokomi, Sayu, Gorou

**Sumeru (6)**
- Nahida, Alhaitham, Cyno, Tighnari, Nilou, Collei

**Fontaine (10)**
- Furina, Neuvillette, Wriothesley, Navia, Clorinde, Lyney, Lynette, Freminet, Charlotte, Chiori

**Natlan (7)**
- Mavuika, Kinich, Mualani, Kachina, Xilonen, Citlali, Ororon

**Snezhnaya (2)**
- Tartaglia, Arlecchino

### 4. **Question Categories**
- Personality traits (passionate, calm, free-spirited)
- Combat preferences (fast, heavy, support, burst)
- Element vibes and affinities
- Decision-making style
- Life philosophy and values

## 🎨 Design & UX

### Visual Design
- **Color Scheme**: Dark theme (#0a0a12) with amber/gold accents inspired by Genshin
- **Typography**: System fonts with modern hierarchy
- **Layout**: Centered glassmorphism cards with backdrop blur effect
- **Animations**: Animated background particles with pulse effects
- **Element Colors**: Dynamic badges colored by character element (Pyro red, Cryo blue, etc.)

### Interactive Elements
- Smooth transitions (300ms) on all interactions
- Amber progress bar showing quiz completion
- Visual highlight on selected answers with amber glow
- Hover effects with scale transforms on buttons
- Letter badges (A, B, C, D) for answer options

### Tailwind CSS Features
- Dark glassmorphism (bg-[#1a1a2e]/90, backdrop-blur-xl)
- Gradient backgrounds with amber accents
- Rounded corners (rounded-2xl, rounded-3xl for cards)
- Border styling with white/10 opacity
- Shadow effects (shadow-amber-500/25)
- Responsive text sizing (text-sm to text-5xl)

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
- [x] Tailwind CSS styling with dark Genshin theme
- [x] useState for state management
- [x] useMemo for question shuffling
- [x] No external UI libraries
- [x] Mobile-first responsive design
- [x] 12 personality-based questions
- [x] 60+ Genshin Impact characters from all 7 regions
- [x] Weighted scoring system with balanced distribution
- [x] Tie-breaking logic with random selection
- [x] Randomized question order
- [x] Smooth transitions and animations
- [x] Animated background particles
- [x] Element-colored character badges
- [x] Progress indicator with amber theme
- [x] Personalized character descriptions
- [x] Character images from gi.yatta.moe CDN
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

1. **Start** → Sees dark themed intro with animated particles, clicks "Begin Your Journey"
2. **Question 1-12** → Answer personality questions, see amber progress bar
3. **Result** → See matched character with element badge, image, and description
4. **Play Again** → Restart quiz with new question order

---

**Status**: ✅ Complete and ready to deploy!
