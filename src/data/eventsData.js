export const CATEGORIES = [
  { id: 'all', label: 'All Events', icon: 'Layers' },
  { id: 'coding', label: 'Coding Events', icon: 'Code2' },
  { id: 'esports', label: 'eSports Events', icon: 'Gamepad2' },
  { id: 'general', label: 'General Events', icon: 'Sparkles' },
];

export const EVENTS = [
  // --- CODING EVENTS (1 - 6) ---
  {
    id: 'c-challenge',
    number: 1,
    title: 'C CHALLENGE',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'Coding',
    status: 'Register Now',
    description: 'Test your foundational C programming and problem-solving prowess under time constraints.',
    date: '7/10/2025',
    time: '10:00 AM - 12:30 PM',
    venue: 'BC Lab / MM Lab',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },
  {
    id: 'single-prompt',
    number: 2,
    title: 'SINGLE PROMPT',
    subtitle: 'Prompt Engineering / AI Coding Challenge',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'AI Prompting',
    status: 'Register Now',
    description: 'Craft the ultimate single prompt to guide AI models to solve intricate programming challenges without edits.',
    date: '7/10/2025',
    time: '11:00 AM - 01:00 PM',
    venue: 'IP Lab',
    prizePool: '2500',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'blind-coding',
    number: 3,
    title: 'BLIND CODING',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'Coding',
    status: 'Register Now',
    description: 'Code with monitors turned off! Trust your muscle memory, syntax mastery, and algorithmic thinking.',
    date: '7/10/2025',
    time: '01:30 PM - 03:30 PM',
    venue: 'Computing Hub 1',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'web-development',
    number: 4,
    title: 'WEB DEVELOPMENT',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'Development',
    status: 'Register Now',
    description: 'Design and build stunning, responsive, and functional web applications within the time limit.',
    date: '7/10/2025',
    time: '10:30 AM - 01:30 PM',
    venue: 'Web Lab / CSLH4',
    prizePool: '3000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'code-relay',
    number: 5,
    title: 'CODE RELAY',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'Coding',
    status: 'Register Now',
    description: 'A relay race for programmers! Pass the keyboard to your teammate every few minutes without verbal communication.',
    date: '7/10/2025',
    time: '11:30 AM - 01:00 PM',
    venue: 'BC Lab',
    prizePool: '2500',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'python-debugging',
    number: 6,
    title: 'PYTHON DEBUGGING',
    category: 'coding',
    categoryLabel: 'Coding Events',
    type: 'Debugging',
    status: 'Register Now',
    description: 'Hunt down syntax errors, subtle logic flaws, and runtime bugs hidden in complex Python code snippets.',
    date: '7/10/2025',
    time: '02:00 PM - 04:00 PM',
    venue: 'Computing Hub 2',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },

  // --- ESPORTS EVENTS (7 - 9) ---
  {
    id: 'efootball',
    number: 7,
    title: 'EFOOTBALL',
    category: 'esports',
    categoryLabel: 'eSports Events',
    type: 'Gaming',
    status: 'Register Now',
    description: 'Dominate the virtual pitch in 1v1 tactical football showdowns. Prove your squad management and stick skills.',
    date: '7/10/2025',
    time: '10:00 AM - 02:00 PM',
    venue: 'Gaming Arena / Seminar Hall',
    prizePool: '3000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'mini-militia',
    number: 8,
    title: 'MINI MILITIA',
    category: 'esports',
    categoryLabel: 'eSports Events',
    type: 'Gaming',
    status: 'Register Now',
    description: 'Intense multiplayer 2D shooter combat. Equip jetpacks, grab power-ups, and blast through your opponents.',
    date: '7/10/2025',
    time: '11:00 AM - 01:30 PM',
    venue: 'Student Lounge / Arena 2',
    prizePool: '2500',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'valorant',
    number: 9,
    title: 'VALORANT',
    category: 'esports',
    categoryLabel: 'eSports Events',
    type: 'Gaming',
    status: 'Register Now',
    description: '5v5 character-based tactical FPS. Precise gunplay meets game-changing agent abilities in high-stakes matches.',
    date: '7/10/2025',
    time: '10:00 AM - 04:00 PM',
    venue: 'Main Esports Arena',
    prizePool: '5000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },

  // --- GENERAL EVENTS (10 - 22) ---
  {
    id: 'speed-typing',
    number: 10,
    title: 'SPEED TYPING',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Typing',
    status: 'Register Now',
    description: 'Test your words-per-minute speed and accuracy in high-pressure rapid keyboard typing duels.',
    date: '7/10/2025',
    time: '09:45 AM - 11:30 AM',
    venue: 'IP Lab',
    prizePool: '1500',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'treasure-hunt',
    number: 11,
    title: 'TREASURE HUNT',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Mystery',
    status: 'Register Now',
    description: 'Crack riddles, decrypt clues, and explore the campus to locate the elusive final treasure before anyone else.',
    date: '7/10/2025',
    time: '11:00 AM - 02:00 PM',
    venue: 'Campus Grounds',
    prizePool: '3500',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'quiz',
    number: 12,
    title: 'QUIZ',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Knowledge',
    status: 'Register Now',
    description: 'A battle of wits testing technical trivia, science, pop culture, and rapid-fire general awareness.',
    date: '7/10/2025',
    time: '10:30 AM - 12:30 PM',
    venue: 'Auditorium 2',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'grammar-error',
    number: 13,
    title: 'GRAMMATICAL ERROR FINDING',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Literary',
    status: 'Register Now',
    description: 'Spot subtle syntax, spelling, punctuation, and grammatical blunders in tricky written passages.',
    date: '7/10/2025',
    time: '11:00 AM - 12:30 PM',
    venue: 'CSLH3',
    prizePool: '1500',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'best-engineer',
    number: 14,
    title: 'BEST ENGINEER',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'General Tech',
    status: 'Register Now',
    description: 'The comprehensive multi-round flagship evaluation testing problem solving, engineering aptitude, and design logic.',
    date: '7/10/2025',
    time: '10:00 AM - 03:00 PM',
    venue: 'Main Stage / Seminar Hall',
    prizePool: '4000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  },
  {
    id: 'crime-scene',
    number: 15,
    title: 'CRIME SCENE INVESTIGATION',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Mystery',
    status: 'Register Now',
    description: 'Analyze forensic evidence, question suspects, piece together chronological timelines, and crack the case.',
    date: '7/10/2025',
    time: '01:00 PM - 03:30 PM',
    venue: 'Investigation Lab (CSLH1)',
    prizePool: '3000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'spot-photography',
    number: 16,
    title: 'SPOT PHOTOGRAPHY',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Creative',
    status: 'Register Now',
    description: 'Capture stunning photographs on campus based on impromptu creative themes and lighting angles.',
    date: '7/10/2025',
    time: '10:00 AM - 02:00 PM',
    venue: 'Open Campus',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'idea-pitching',
    number: 17,
    title: 'IDEA PITCHING',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Ideation',
    status: 'Register Now',
    description: 'Present original startup ideas and novel technological solutions before an esteemed jury panel.',
    date: '7/10/2025',
    time: '01:30 PM - 03:30 PM',
    venue: 'Conference Hall',
    prizePool: '3000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'pitch-product',
    number: 18,
    title: 'PITCH THE PRODUCT',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Ideation',
    status: 'Register Now',
    description: 'Demonstrate charismatic marketing skills, value proposition, and sales pitch for unique challenge products.',
    date: '7/10/2025',
    time: '02:00 PM - 04:00 PM',
    venue: 'Seminar Hall 2',
    prizePool: '2500',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'chess',
    number: 19,
    title: 'CHESS COMPETITION',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Strategy',
    status: 'Register Now',
    description: 'A tournament of grandmaster intellect, spatial vision, and relentless tactical warfare over the 64 squares.',
    date: '7/10/2025',
    time: '10:00 AM - 02:00 PM',
    venue: 'Recreation Hall',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'spot-ppt',
    number: 20,
    title: 'SPOT PPT',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Presentation',
    status: 'Register Now',
    description: 'Craft and deliver an engaging presentation deck on a surprise topic revealed on the spot.',
    date: '7/10/2025',
    time: '11:30 AM - 01:30 PM',
    venue: 'CSLH2',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BOOMIKA', phone: '7034958002' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'poster-design',
    number: 21,
    title: 'POSTER DESIGN',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Creative',
    status: 'Register Now',
    description: 'Unleash graphic design talents and visual storytelling to engineer striking digital posters.',
    date: '7/10/2025',
    time: '01:00 PM - 03:00 PM',
    venue: 'Design Studio / Multimedia Lab',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'COORDINATOR', phone: '9876543210' }
    ]
  },
  {
    id: 'debate',
    number: 22,
    title: 'DEBATE',
    category: 'general',
    categoryLabel: 'General Events',
    type: 'Literary',
    status: 'Register Now',
    description: 'Clash in articulate arguments, persuasive rhetoric, and dynamic rebuttal on contemporary tech and ethics topics.',
    date: '7/10/2025',
    time: '09:45 AM - 12:30 PM',
    venue: 'CSLH5(S7 CSE A), Main Stage',
    prizePool: '2000',
    posterUrl: 'https://paradox25.netlify.app/posters/debate.jpg',
    contacts: [
      { name: 'BHAVYA', phone: '7510695281' },
      { name: 'BOOMIKA', phone: '7034958002' }
    ]
  }
];

export const EVENTS_BY_ID = EVENTS.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, {});
