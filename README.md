# 🎮 Genshin FandomSelect

A personality quiz that matches you with your Genshin Impact character soulmate! Answer 12 questions and discover which of 60+ characters from all 7 regions of Teyvat best matches your personality.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)

## ✨ Features

- **60+ Characters** from all 7 regions (Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, Snezhnaya)
- **12 Personality Questions** with weighted scoring system
- **Dark Genshin-themed UI** with animated background particles
- **Element-colored badges** for character results
- **Randomized questions** for replayability
- **Mobile-responsive** design

## 🖼️ Preview

The quiz features a sleek dark theme (#0a0a12) with amber/gold accents, glassmorphism cards, and smooth animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 How It Works

1. **Start** - Click "Begin Your Journey" on the welcome screen
2. **Answer** - Respond to 12 personality-based questions
3. **Match** - Get matched with a character based on weighted scoring
4. **Replay** - Try again for a different result!

## 👥 Characters by Region

| Region | Characters |
|--------|------------|
| **Mondstadt** | Amber, Barbara, Bennett, Diluc, Fischl, Jean, Kaeya, Lisa, Mona, Noelle, Sucrose, Venti, Razor, Eula, Albedo |
| **Liyue** | Beidou, Chongyun, Ganyu, Hu Tao, Keqing, Ningguang, Xiangling, Xingqiu, Xinyan, Yelan, Zhongli, Shenhe |
| **Inazuma** | Ayaka, Ayato, Kazuha, Raiden Shogun, Yoimiya, Yae Miko, Itto, Kokomi, Sayu, Gorou |
| **Sumeru** | Nahida, Alhaitham, Cyno, Tighnari, Nilou, Collei |
| **Fontaine** | Furina, Neuvillette, Wriothesley, Navia, Clorinde, Lyney, Lynette, Freminet, Charlotte, Chiori |
| **Natlan** | Mavuika, Kinich, Mualani, Kachina, Xilonen, Citlali, Ororon |
| **Snezhnaya** | Tartaglia, Arlecchino |

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Quiz.tsx           # Main quiz logic
│   ├── StartScreen.tsx    # Welcome screen
│   ├── QuestionScreen.tsx # Question display
│   └── ResultScreen.tsx   # Character result
├── data/
│   ├── charactersData.ts  # 60+ character definitions
│   └── questionsData.ts   # 12 weighted questions
└── types.ts               # TypeScript interfaces
```

## 📄 License

This is a fan-made project and is not affiliated with HoYoverse or miHoYo.

---

*Made with ❤️ for the Genshin Impact community*
