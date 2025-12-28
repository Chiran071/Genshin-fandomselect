import type { Question } from '../types';

/**
 * Quiz questions for Genshin FandomSelect
 * 12 questions with balanced weights across all 60 characters
 * Covers: Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, Snezhnaya
 */
export const questions: Question[] = [
  {
    id: 'q1',
    question: 'How do you typically handle a difficult problem?',
    options: [
      {
        id: 'q1-a',
        label: 'Charge in with confidence - figure it out as I go',
        weights: { diluc: 3, itto: 3, xinyan: 3, tartaglia: 3, mavuika: 3, arlecchino: 2, bennett: 2, beidou: 2 },
      },
      {
        id: 'q1-b',
        label: 'Research and plan carefully before acting',
        weights: { alhaitham: 3, albedo: 3, neuvillette: 3, kinich: 3, ganyu: 2, keqing: 2, yelan: 2, tighnari: 2 },
      },
      {
        id: 'q1-c',
        label: 'Ask friends for help and work together',
        weights: { barbara: 3, noelle: 3, collei: 3, mualani: 3, kachina: 3, amber: 2, gorou: 2, freminet: 2 },
      },
      {
        id: 'q1-d',
        label: 'Stay calm, adapt, and go with the flow',
        weights: { kazuha: 3, venti: 3, zhongli: 3, furina: 2, sayu: 2, ayato: 2, kokomi: 2, lynette: 2 },
      },
    ],
  },
  {
    id: 'q2',
    question: 'What sounds like the perfect day off?',
    options: [
      {
        id: 'q2-a',
        label: 'Exploring somewhere new and exciting',
        weights: { venti: 3, kazuha: 3, amber: 3, mualani: 3, tartaglia: 2, bennett: 2, xiangling: 2, collei: 2 },
      },
      {
        id: 'q2-b',
        label: 'Relaxing at home with a good book or hobby',
        weights: { xingqiu: 3, lisa: 3, sayu: 3, freminet: 3, albedo: 2, nahida: 2, ganyu: 2, citlali: 2 },
      },
      {
        id: 'q2-c',
        label: 'Hanging out with friends and having fun',
        weights: { itto: 3, yoimiya: 3, hutao: 3, lyney: 3, xinyan: 2, barbara: 2, navia: 2, mualani: 2 },
      },
      {
        id: 'q2-d',
        label: 'Being productive - there\'s always work to do',
        weights: { ganyu: 3, jean: 3, keqing: 3, chiori: 3, noelle: 2, ayaka: 2, ningguang: 2, clorinde: 2 },
      },
    ],
  },
  {
    id: 'q3',
    question: 'How would your friends describe you?',
    options: [
      {
        id: 'q3-a',
        label: 'The reliable one who\'s always there',
        weights: { noelle: 3, zhongli: 3, jean: 3, navia: 3, clorinde: 2, barbara: 2, ganyu: 2, gorou: 2 },
      },
      {
        id: 'q3-b',
        label: 'The fun one who brings energy to the group',
        weights: { hutao: 3, venti: 3, itto: 3, lyney: 3, furina: 3, yoimiya: 2, fischl: 2, xinyan: 2 },
      },
      {
        id: 'q3-c',
        label: 'The mysterious one nobody fully knows',
        weights: { kaeya: 3, yelan: 3, yae: 3, arlecchino: 3, ororon: 3, ayato: 2, mona: 2, shenhe: 2 },
      },
      {
        id: 'q3-d',
        label: 'The smart one everyone asks for advice',
        weights: { alhaitham: 3, albedo: 3, nahida: 3, neuvillette: 3, citlali: 2, ningguang: 2, kokomi: 2, tighnari: 2 },
      },
    ],
  },
  {
    id: 'q4',
    question: 'What motivates you most in life?',
    options: [
      {
        id: 'q4-a',
        label: 'Protecting the people I care about',
        weights: { diluc: 3, eula: 3, shenhe: 3, arlecchino: 3, navia: 3, wriothesley: 2, razor: 2, jean: 2 },
      },
      {
        id: 'q4-b',
        label: 'Following my passions and dreams',
        weights: { xiangling: 3, nilou: 3, xinyan: 3, lyney: 3, xilonen: 3, yoimiya: 2, fischl: 2, mona: 2 },
      },
      {
        id: 'q4-c',
        label: 'Growing stronger and achieving my goals',
        weights: { keqing: 3, raiden: 3, cyno: 3, mavuika: 3, tartaglia: 3, kachina: 2, beidou: 2, amber: 2 },
      },
      {
        id: 'q4-d',
        label: 'Understanding the world and its mysteries',
        weights: { nahida: 3, albedo: 3, sucrose: 3, charlotte: 3, mona: 2, tighnari: 2, alhaitham: 2, citlali: 2 },
      },
    ],
  },
  {
    id: 'q5',
    question: 'How do you react when things don\'t go as planned?',
    options: [
      {
        id: 'q5-a',
        label: 'Stay positive and keep trying',
        weights: { bennett: 3, amber: 3, collei: 3, kachina: 3, mualani: 3, barbara: 2, noelle: 2, yoimiya: 2 },
      },
      {
        id: 'q5-b',
        label: 'Analyze what went wrong and adapt',
        weights: { yelan: 3, ningguang: 3, kokomi: 3, neuvillette: 3, keqing: 2, ayato: 2, alhaitham: 2, kinich: 2 },
      },
      {
        id: 'q5-c',
        label: 'Get frustrated but push through anyway',
        weights: { eula: 3, diluc: 3, cyno: 3, wriothesley: 3, keqing: 2, xiangling: 2, chongyun: 2, chiori: 2 },
      },
      {
        id: 'q5-d',
        label: 'Accept it calmly - that\'s just how life goes',
        weights: { zhongli: 3, kazuha: 3, sayu: 3, citlali: 3, venti: 2, lisa: 2, shenhe: 2, lynette: 2 },
      },
    ],
  },
  {
    id: 'q6',
    question: 'What role do you play in your friend group?',
    options: [
      {
        id: 'q6-a',
        label: 'The leader who makes plans and decisions',
        weights: { jean: 3, raiden: 3, ningguang: 3, mavuika: 3, neuvillette: 2, beidou: 2, ayato: 2, kokomi: 2 },
      },
      {
        id: 'q6-b',
        label: 'The entertainer who keeps everyone laughing',
        weights: { hutao: 3, venti: 3, itto: 3, lyney: 3, furina: 3, fischl: 2, yoimiya: 2, kaeya: 2 },
      },
      {
        id: 'q6-c',
        label: 'The helper who takes care of everyone',
        weights: { barbara: 3, noelle: 3, ganyu: 3, xilonen: 3, xingqiu: 2, gorou: 2, collei: 2, freminet: 2 },
      },
      {
        id: 'q6-d',
        label: 'The quiet one who observes from the side',
        weights: { albedo: 3, shenhe: 3, alhaitham: 3, lynette: 3, ororon: 3, razor: 2, chongyun: 2, freminet: 2 },
      },
    ],
  },
  {
    id: 'q7',
    question: 'What kind of work environment do you prefer?',
    options: [
      {
        id: 'q7-a',
        label: 'Fast-paced and full of action',
        weights: { beidou: 3, xinyan: 3, cyno: 3, tartaglia: 3, clorinde: 3, amber: 2, itto: 2, mavuika: 2 },
      },
      {
        id: 'q7-b',
        label: 'Structured with clear goals and expectations',
        weights: { ganyu: 3, jean: 3, keqing: 3, neuvillette: 3, ayaka: 2, noelle: 2, gorou: 2, clorinde: 2 },
      },
      {
        id: 'q7-c',
        label: 'Creative and flexible',
        weights: { sucrose: 3, xiangling: 3, nilou: 3, xilonen: 3, chiori: 3, fischl: 2, albedo: 2, yoimiya: 2 },
      },
      {
        id: 'q7-d',
        label: 'Independent where I can work alone',
        weights: { diluc: 3, alhaitham: 3, yelan: 3, kinich: 3, ororon: 2, lisa: 2, shenhe: 2, tighnari: 2 },
      },
    ],
  },
  {
    id: 'q8',
    question: 'How do you express yourself?',
    options: [
      {
        id: 'q8-a',
        label: 'Through art, music, or creative work',
        weights: { kazuha: 3, xinyan: 3, nilou: 3, lyney: 3, furina: 2, venti: 2, yoimiya: 2, xingqiu: 2 },
      },
      {
        id: 'q8-b',
        label: 'Through actions rather than words',
        weights: { diluc: 3, razor: 3, shenhe: 3, clorinde: 3, kinich: 3, chongyun: 2, eula: 2, arlecchino: 2 },
      },
      {
        id: 'q8-c',
        label: 'Through humor and playful banter',
        weights: { hutao: 3, kaeya: 3, yae: 3, tartaglia: 2, furina: 2, itto: 2, fischl: 2, venti: 2 },
      },
      {
        id: 'q8-d',
        label: 'Through thoughtful conversations',
        weights: { zhongli: 3, nahida: 3, xingqiu: 3, neuvillette: 3, citlali: 2, albedo: 2, ayaka: 2, kokomi: 2 },
      },
    ],
  },
  {
    id: 'q9',
    question: 'What\'s your relationship with rules and authority?',
    options: [
      {
        id: 'q9-a',
        label: 'Rules exist for good reason - I follow them',
        weights: { jean: 3, ganyu: 3, ayaka: 3, gorou: 3, noelle: 2, cyno: 2, clorinde: 2, neuvillette: 2 },
      },
      {
        id: 'q9-b',
        label: 'I\'ll bend rules if I think I\'m doing right',
        weights: { diluc: 3, yelan: 3, kaeya: 3, wriothesley: 3, beidou: 2, hutao: 2, navia: 2, arlecchino: 2 },
      },
      {
        id: 'q9-c',
        label: 'Freedom is important - don\'t box me in',
        weights: { venti: 3, kazuha: 3, xinyan: 3, mualani: 3, itto: 2, sayu: 2, amber: 2, tartaglia: 2 },
      },
      {
        id: 'q9-d',
        label: 'I am the authority / I make my own rules',
        weights: { raiden: 3, ningguang: 3, yae: 3, mavuika: 3, arlecchino: 2, zhongli: 2, alhaitham: 2, ayato: 2 },
      },
    ],
  },
  {
    id: 'q10',
    question: 'How do you handle your emotions?',
    options: [
      {
        id: 'q10-a',
        label: 'I feel deeply and express openly',
        weights: { barbara: 3, amber: 3, collei: 3, furina: 3, nilou: 2, bennett: 2, yoimiya: 2, navia: 2 },
      },
      {
        id: 'q10-b',
        label: 'I keep them controlled and private',
        weights: { diluc: 3, shenhe: 3, eula: 3, neuvillette: 3, clorinde: 2, chongyun: 2, ayaka: 2, arlecchino: 2 },
      },
      {
        id: 'q10-c',
        label: 'I mask them with humor or deflection',
        weights: { kaeya: 3, hutao: 3, venti: 3, lyney: 3, furina: 2, fischl: 2, yae: 2, kazuha: 2 },
      },
      {
        id: 'q10-d',
        label: 'I try to be logical about them',
        weights: { alhaitham: 3, keqing: 3, albedo: 3, kinich: 3, nahida: 2, tighnari: 2, kokomi: 2, citlali: 2 },
      },
    ],
  },
  {
    id: 'q11',
    question: 'What kind of stories appeal to you most?',
    options: [
      {
        id: 'q11-a',
        label: 'Epic adventures with brave heroes',
        weights: { bennett: 3, xingqiu: 3, fischl: 3, kachina: 3, amber: 2, collei: 2, gorou: 2, tartaglia: 2 },
      },
      {
        id: 'q11-b',
        label: 'Mysteries and thrillers with twists',
        weights: { yelan: 3, kaeya: 3, yae: 3, charlotte: 3, ororon: 2, ayato: 2, mona: 2, cyno: 2 },
      },
      {
        id: 'q11-c',
        label: 'Heartwarming tales about relationships',
        weights: { barbara: 3, yoimiya: 3, ayaka: 3, lynette: 3, freminet: 2, noelle: 2, nilou: 2, kokomi: 2 },
      },
      {
        id: 'q11-d',
        label: 'Philosophical stories that make you think',
        weights: { zhongli: 3, nahida: 3, albedo: 3, citlali: 3, kazuha: 2, raiden: 2, lisa: 2, neuvillette: 2 },
      },
    ],
  },
  {
    id: 'q12',
    question: 'What\'s your biggest strength?',
    options: [
      {
        id: 'q12-a',
        label: 'My determination and willpower',
        weights: { raiden: 3, diluc: 3, keqing: 3, mavuika: 3, wriothesley: 2, bennett: 2, eula: 2, cyno: 2 },
      },
      {
        id: 'q12-b',
        label: 'My intelligence and problem-solving',
        weights: { alhaitham: 3, ningguang: 3, yelan: 3, neuvillette: 3, kokomi: 2, albedo: 2, mona: 2, kinich: 2 },
      },
      {
        id: 'q12-c',
        label: 'My kindness and empathy',
        weights: { nahida: 3, barbara: 3, noelle: 3, mualani: 3, collei: 2, ganyu: 2, ayaka: 2, xilonen: 2 },
      },
      {
        id: 'q12-d',
        label: 'My creativity and unique perspective',
        weights: { fischl: 3, sucrose: 3, hutao: 3, chiori: 3, furina: 2, xiangling: 2, xinyan: 2, kazuha: 2 },
      },
    ],
  },
];
