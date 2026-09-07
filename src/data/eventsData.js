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
    guidelines: [
      'Individual participation only.',
      'Standard GCC / Turbo C compilers will be provided on lab PCs.',
      'Participants will solve algorithmic problems and output-prediction questions.',
      'Time limit: 2 hours 30 minutes.',
      'External devices, mobile phones, and internet access are strictly prohibited.'
    ],
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
    guidelines: [
      'Participants must craft a single master prompt to achieve the required output.',
      'Only 1 submission allowed per problem statement; no follow-up iterative prompting.',
      'Specified LLM platform will be provided at the venue.',
      'Evaluation is based on accuracy, token efficiency, and correctness.'
    ],
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
    guidelines: [
      'Individual event with monitors switched off or covered during coding.',
      'Participants are given problem statements on paper or screen for 5 minutes to read.',
      'No looking at screen or keyboard backlights while typing.',
      'Judging criteria: Least compilation errors, syntax accuracy, and logical execution.'
    ],
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
    guidelines: [
      'Team size: 1 to 2 members.',
      'Theme and assets will be revealed at the commencement of the event.',
      'Allowed technologies: HTML, CSS, JavaScript, React, TailwindCSS.',
      'Submissions evaluated on UI/UX responsiveness, innovation, and code cleanliness.'
    ],
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
    guidelines: [
      'Team of 2 members.',
      'Each teammate codes in alternating 10-minute relay intervals.',
      'Zero verbal or written communication between teammates during the handoff.',
      'Language choices: C, C++, Java, or Python.'
    ],
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
    guidelines: [
      'Individual competition.',
      'Code snippets with logical, semantic, and syntax bugs will be provided.',
      'Participants must fix bugs within the allotted time without rewriting the entire logic.',
      'Fastest correct bug-free executions win.'
    ],
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
    guidelines: [
      'Platform: Mobile device (participants must bring their own phones with eFootball updated).',
      'Tournament format: Single elimination knockout rounds.',
      'Match duration: 10 minutes regular time (extra time and penalties enabled).',
      'Custom team ratings must adhere to tournament guidelines set by coordinators.'
    ],
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
    guidelines: [
      'Squad size: 4 players per squad.',
      'Standard official maps will be selected randomly or by toss.',
      'No modified APKs, unlimited ammo, or third-party boosters allowed.',
      'Highest total kill count across rounds determines progression.'
    ],
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
    guidelines: [
      'Team size: 5 players + 1 optional sub.',
      'Format: Standard Competitive 5v5 custom lobby, Tournament mode enabled.',
      'Map pool: Standard active competitive map pool with map vetoes.',
      'Any form of third-party scripting, macros, or toxicity leads to instant disqualification.'
    ],
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
    guidelines: [
      'Individual speed testing on official typing test software.',
      'Multiple rounds: 60-second burst test and 3-minute sustained paragraph typing.',
      'Scoring: Adjusted WPM = Raw WPM × Accuracy percentage.',
      'Mechanical keyboards allowed if brought by the participant.'
    ],
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
    guidelines: [
      'Team size: 3 to 4 members.',
      'All team members must stay together throughout the hunt.',
      'Damaging college property or entering restricted zones is strictly forbidden.',
      'The first team to decode all clues and bring the final token to the finish line wins.'
    ],
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
    guidelines: [
      'Team size: 2 members.',
      'Preliminary written elimination round followed by on-stage finals.',
      'Rounds include: Tech Trivia, Audio-Visual round, and Rapid Fire.',
      'Quizmaster decision is indisputable.'
    ],
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
    guidelines: [
      'Individual event.',
      'Passages containing punctuation, tense, subject-verb agreement, and spelling blunders will be provided.',
      'Participants must identify and write the exact corrections within 45 minutes.',
      'No electronic dictionaries or internet allowed.'
    ],
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
    guidelines: [
      'Flagship multi-stage event evaluating overall engineering aptitude.',
      'Round 1: Engineering Aptitude & Logic Quiz.',
      'Round 2: Rapid Prototyping / Troubleshooting challenge.',
      'Round 3: Stress interview & technical defense before the faculty panel.'
    ],
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
    guidelines: [
      'Team of 2 to 3 members.',
      'Crime scene inspection duration: 10 minutes strictly.',
      'Teams must examine clues, forensic evidence, and witness testimonies.',
      'Final submission requires submitting a coherent crime report identifying the culprit and motive.'
    ],
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
    guidelines: [
      'Theme will be announced on the spot.',
      'All photographs must be captured within campus boundaries during event hours.',
      'DSLR cameras and mobile phones permitted.',
      'Basic color grading allowed; heavy manipulation/AI generation leads to disqualification.'
    ],
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
    guidelines: [
      'Team size: 1 to 3 members.',
      'Pitch duration: 5 minutes presentation + 3 minutes Q&A with the jury.',
      'Focus areas: Feasibility, market relevance, technology innovation, and business scalability.',
      'Presentation slides must be submitted prior to the start of the round.'
    ],
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
    guidelines: [
      'Surprise everyday product assigned by the judges on the spot.',
      'Preparation time: 10 minutes.',
      'Pitch time: 3 minutes to sell the product with innovative marketing angles.',
      'Humor, persuasion, creativity, and objection handling will be evaluated.'
    ],
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
    guidelines: [
      'Format: Swiss-system or knockout rapid tournament.',
      'Time control: 10 minutes + 5 seconds increment per player.',
      'FIDE rapid rules apply; touch-move strictly enforced.',
      'Arbiter decisions are final and binding.'
    ],
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
    guidelines: [
      'Topics revealed on the spot from technology, society, or modern trends.',
      'Preparation time: 45 minutes to design up to 6 slides.',
      'Presentation time: 4 minutes followed by 2 minutes Q&A.',
      'Evaluation criteria: Clarity, deck aesthetics, confidence, and answering capability.'
    ],
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
    guidelines: [
      'Individual event.',
      'Software allowed: Photoshop, Illustrator, Figma, or Canva.',
      'Theme announced at the start of the competition.',
      'Original artwork required; source files must be presented upon request.'
    ],
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
    guidelines: [
      'Parliamentary / Oxford style debate format.',
      'Stance (For or Against) decided by coin toss 15 minutes before the debate.',
      'Time allocation: 3 minutes constructive speech, 2 minutes rebuttal, 1 minute conclusion.',
      'Unparliamentary language or personal attacks lead to immediate disqualification.'
    ],
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

export const HACKATHON_EVENT = {
  id: 'hackathon',
  number: 0,
  title: 'PARADOX HACKATHON 2026',
  subtitle: '8-Hour Flagship Hackathon',
  category: 'coding',
  categoryLabel: 'Flagship Hackathon',
  type: 'Hackathon',
  status: 'Register Now',
  description: 'An intense 8-hour non-stop hackathon challenging creators, developers, and designers to build transformative prototypes tackling real-world problems.',
  guidelines: [
    'Team size: 2 to 4 members from any recognized institution.',
    'All code, assets, and design work must be crafted during the 8-hour hackathon duration.',
    'Participants must bring their own laptops, chargers, and development kits.',
    'Teams are required to maintain a public GitHub repository with regular commits.',
    'Use of public open-source libraries and APIs is allowed with proper credit.',
    'Evaluation is based on Innovation, Technical Depth, UI/UX Design, Feasibility, and the Final Pitch.'
  ],
  date: 'October 10-11, 2025',
  time: '09:00 AM - 05:30 PM',
  venue: 'College of Engineering Kidangoor',
  prizePool: '10000',
  posterUrl: 'https://paradox25.netlify.app/_next/image?url=%2Fposters%2Fcchallenge.png&w=1920&q=75',
  contacts: [
    { name: 'HACKATHON LEAD', phone: '+91 6238 128 951' },
    { name: 'COORDINATOR', phone: '+91 81389 77809' }
  ],
  customFields: [
    { id: 'teamName', label: 'Team Name', type: 'text', required: true },
    { id: 'teamSize', label: 'Team Size (2-4)', type: 'select', options: '2 Members, 3 Members, 4 Members', required: true },
    { id: 'memberDetails', label: 'Team Members (Names, Emails & Phone Numbers)', type: 'text', required: true },
    { id: 'trackPreference', label: 'Selected Track', type: 'select', options: 'Web & Mobile Apps, AI & Machine Learning, Smart Campus & IoT, Open Innovation', required: true },
    { id: 'githubProfile', label: 'Team Lead GitHub / Portfolio URL', type: 'text', required: false }
  ]
};

export const EVENTS_BY_ID = EVENTS.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, { hackathon: HACKATHON_EVENT });

