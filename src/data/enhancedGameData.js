// Enhanced medical tools with efficiency ratings
export const medicalTools = {
  basic: { name: "Basic Nano-Probe", icon: "🔧", description: "Standard repair tool", efficiency: 1.0, color: "#60a5fa" },
  precision: { name: "Precision Laser", icon: "⚡", description: "High-precision repairs", efficiency: 1.3, color: "#fbbf24" },
  stemcell: { name: "Stem Cell Injector", icon: "🧬", description: "Regenerative healing", efficiency: 1.1, color: "#10b981" },
  ultrasonic: { name: "Ultrasonic Probe", icon: "🌊", description: "Gentle vibration therapy", efficiency: 1.2, color: "#8b5cf6" }
};

// Expanded ship customization system
export const availableShips = {
  '🚀': { name: 'Nano Rocket', cost: 0, trail: '#60a5fa', description: 'Classic medical ship' },
  '🛸': { name: 'UFO Healer', cost: 50, trail: '#10b981', description: 'Advanced alien tech' },
  '🚁': { name: 'Med Helicopter', cost: 75, trail: '#f59e0b', description: 'Emergency response' },
  '🏥': { name: 'Hospital Ship', cost: 100, trail: '#ef4444', description: 'Mobile medical center' },
  '⚡': { name: 'Lightning Bolt', cost: 125, trail: '#fbbf24', description: 'Speed of light healing' },
  '💎': { name: 'Crystal Ship', cost: 200, trail: '#a855f7', description: 'Rare crystalline vessel' },
  '🌟': { name: 'Star Healer', cost: 300, trail: '#06d6a0', description: 'Legendary cosmic ship' },
  '❤️': { name: 'Heart Ship', cost: 150, trail: '#f472b6', description: 'Pure healing energy' }
};

// Comprehensive achievement system
export const gameAchievements = {
  first_repair: { name: 'First Steps', description: 'Complete your first neural repair', icon: '🌱', reward: 25 },
  combo_master: { name: 'Combo Master', description: 'Achieve a 5x repair combo', icon: '🔥', reward: 50 },
  speed_demon: { name: 'Speed Surgeon', description: 'Complete a stage in under 60 seconds', icon: '⚡', reward: 75 },
  gentle_healer: { name: 'Gentle Healer', description: 'Complete 3 stages without taking damage', icon: '🕊️', reward: 100 },
  virus_hunter: { name: 'Virus Hunter', description: 'Discover 5 different virus types', icon: '🔬', reward: 125 },
  perfectionist: { name: 'Perfectionist', description: 'Complete a stage with 100% health', icon: '💯', reward: 150 },
  collector: { name: 'Ship Collector', description: 'Unlock 5 different ships', icon: '🚀', reward: 200 },
  life_saver: { name: 'Life Saver', description: 'Save 10 patients successfully', icon: '🏆', reward: 250 },
  brain_surgeon: { name: 'Brain Surgeon', description: 'Complete all 8 main stages', icon: '🧠', reward: 500 },
  virus_slayer: { name: 'Virus Slayer', description: 'Eliminate 50 viruses with tools', icon: '⚔️', reward: 300 },
  master_healer: { name: 'Master Healer', description: 'Repair 100 neurons total', icon: '✨', reward: 400 },
  legendary_surgeon: { name: 'Legendary Surgeon', description: 'Reach level 10', icon: '👑', reward: 750 }
};

// Heartwarming patient thank you messages
export const patientMessages = [
  "Thank you for saving my memory! I can remember my family again! 💕",
  "My tremors are completely gone - you're a miracle worker! 🙏",
  "I feel like myself again thanks to your gentle care! ✨",
  "Your precision surgery gave me my life back! 🌟",
  "I can think clearly for the first time in months! 🧠",
  "The headaches are gone - you're my hero! 💪",
  "My coordination is perfect now, thank you! 🎯",
  "You didn't just heal my brain, you healed my hope! 💖",
  "I'm back to my old self thanks to your skill! 😊",
  "Your care was so gentle, I barely felt anything! 🌸",
  "I can see colors properly again! Amazing work! 🌈",
  "My balance is restored - I can dance again! 💃",
  "I can hear my grandchildren's voices clearly now! 👂",
  "Words come easily to me again - thank you! 🗣️",
  "My breathing is steady thanks to your expertise! 🫁",
  "You saved my life when everything was failing! 🚑",
  "I can focus and concentrate again! 🎯",
  "My heart rhythm is perfect now! ❤️",
  "Every brain region feels renewed! 🧠✨",
  "You're not just a doctor, you're a guardian angel! 👼"
];

// Detailed medical case stories for each stage
export const medicalCases = {
  1: {
    patientName: "Alex Thompson",
    age: 28,
    condition: "Post-Exercise Motor Fatigue",
    story: "Marathon runner experiencing muscle coordination issues after intense training. Motor cortex neurons need gentle repair to restore movement control.",
    urgency: "STABLE",
    background: "Alex is preparing for the Olympics and noticed mild tremors in their hands after yesterday's 20-mile run. No immediate danger - take your time!",
    vitals: { heartRate: 65, brainActivity: 78, oxygenLevel: 96, stress: 25 }
  },
  2: {
    patientName: "Dr. Sarah Chen",
    age: 45,
    condition: "Stress-Induced Memory Disruption",
    story: "Neurosurgeon experiencing memory lapses during high-stress situations. Hippocampus and prefrontal cortex require careful stabilization.",
    urgency: "MODERATE",
    background: "Working long shifts has caused neural fatigue. Memory formation pathways need restoration, but the patient is stable.",
    vitals: { heartRate: 75, brainActivity: 70, oxygenLevel: 95, stress: 45 }
  },
  3: {
    patientName: "Marcus Rodriguez",
    age: 34,
    condition: "Neurotransmitter Imbalance",
    story: "Software engineer with stress-related neurotransmitter fluctuations. Multiple systems need rebalancing with care and precision.",
    urgency: "ELEVATED",
    background: "Chronic stress has affected dopamine, serotonin, and GABA systems. Requires attention but not life-threatening.",
    vitals: { heartRate: 82, brainActivity: 65, oxygenLevel: 94, stress: 60 }
  }
};

// Enhanced virus types with collection mechanics
export const virusTypes = {
  inflammation: { name: "Inflammation Virus", icon: "🦠", rarity: "Common", description: "Causes tissue swelling", weakness: "precision" },
  toxin: { name: "Neurotoxin", icon: "☣️", rarity: "Common", description: "Damages neural pathways", weakness: "basic" },
  necrosis: { name: "Necrosis Agent", icon: "💀", rarity: "Rare", description: "Causes cell death", weakness: "stemcell" },
  oxidative: { name: "Oxidative Stress", icon: "🔥", rarity: "Uncommon", description: "Free radical damage", weakness: "ultrasonic" }
};

// Educational medical facts with XP rewards
export const medicalFacts = [
  { fact: "Your brain uses 20% of your body's energy - that's about 400 calories daily!", category: "Brain Energy", points: 15, xp: 25 },
  { fact: "Neurons can fire up to 200 times per second - faster than a hummingbird's wings!", category: "Neural Speed", points: 20, xp: 30 },
  { fact: "You have 86 billion neurons - more than stars in the Milky Way!", category: "Brain Structure", points: 25, xp: 35 },
  { fact: "Neuroplasticity allows your brain to rewire itself throughout your entire life!", category: "Brain Development", points: 35, xp: 45 },
  { fact: "The blood-brain barrier protects your brain from 99% of potential toxins!", category: "Brain Protection", points: 30, xp: 40 }
];

// Enhanced stages with detailed objectives and rewards
export const stages = {
  1: {
    title: "🧠 MOTOR CORTEX TRAINING",
    timeLimit: 300,
    emergencyLevel: "LEARNING",
    maxViruses: 1,
    spawnRate: 120,
    xpReward: 100,
    coinReward: 15,
    researchReward: 20,
    environment: "motor_cortex",
    neurons: [
      { id: 1, x: 35, y: 40, type: 'Motor Cortex', subtype: 'motor', info: 'Controls voluntary movement', health: 100, repairType: 'precision' },
      { id: 2, x: 65, y: 35, type: 'Premotor Area', subtype: 'motor', info: 'Plans complex movements', health: 100, repairType: 'basic' }
    ],
    objective: "Learn motor neuron repair while avoiding gentle pathogens"
  },
  2: {
    title: "🧠 MEMORY SYSTEM CARE",
    timeLimit: 240,
    emergencyLevel: "ROUTINE", 
    maxViruses: 2,
    spawnRate: 60,
    xpReward: 150,
    coinReward: 20,
    researchReward: 30,
    environment: "hippocampus",
    neurons: [
      { id: 3, x: 30, y: 30, type: 'Hippocampus', subtype: 'memory', info: 'Memory formation center', health: 80, repairType: 'stemcell' },
      { id: 4, x: 70, y: 40, type: 'Prefrontal Cortex', subtype: 'executive', info: 'Executive functions', health: 75, repairType: 'precision' },
      { id: 5, x: 50, y: 65, type: 'Neural Networks', subtype: 'connection', info: 'Information highways', health: 90, repairType: 'ultrasonic' }
    ],
    objective: "Restore memory pathways while managing pathogen threats"
  },
  3: {
    title: "🧠 NEUROTRANSMITTER BALANCE",
    timeLimit: 180,
    emergencyLevel: "FOCUSED",
    maxViruses: 3,
    spawnRate: 40,
    xpReward: 200,
    coinReward: 30,
    researchReward: 50,
    environment: "neurotransmitter",
    neurons: [
      { id: 6, x: 25, y: 25, type: 'Dopamine Hub', subtype: 'neurotransmitter', info: 'Reward and motivation', health: 70, repairType: 'stemcell' },
      { id: 7, x: 75, y: 30, type: 'Serotonin Center', subtype: 'neurotransmitter', info: 'Mood regulation', health: 65, repairType: 'precision' },
      { id: 8, x: 50, y: 50, type: 'GABA System', subtype: 'inhibitory', info: 'Calming signals', health: 80, repairType: 'ultrasonic' },
      { id: 9, x: 40, y: 70, type: 'Acetylcholine', subtype: 'neurotransmitter', info: 'Learning chemical', health: 75, repairType: 'stemcell' }
    ],
    objective: "Balance neurotransmitters while defending against pathogen swarms"
  }
};

// Tutorial steps for new players
export const tutorialSteps = [
  { 
    title: "Welcome to Micro Medics! 🎯", 
    description: "You're about to become a nano-surgeon! You can move your ship by tapping anywhere OR using arrow keys/WASD", 
    objective: "Explore movement - tap or use keys to move around!",
    hint: "Tap anywhere in the game area OR use ↑↓←→ / WASD keys to move your nano-ship"
  },
  { 
    title: "Time for Your First Repair! ⚡", 
    description: "See that glowing yellow neuron? That's your patient! Move close to it when you feel ready", 
    objective: "Repair the highlighted neuron - take your time!",
    hint: "Move close to the yellow neuron and tap it to repair (or just get close with keyboard controls)"
  },
  { 
    title: "Amazing Work, Doctor! 🌟", 
    description: "Look how the neuron turned green and the patient's vitals improved! You're a natural healer!", 
    objective: "One more neuron to go - you've got this!",
    hint: "Find the red neuron and heal it when you're ready"
  },
  { 
    title: "Medical Training Complete! 🏆", 
    description: "Outstanding! You're now ready to help real patients. Remember, every life you save matters!", 
    objective: "Ready to become a hero? Let's save lives!",
    hint: "You're fully trained and ready for medical emergencies!"
  }
];

// Daily challenges system
export const dailyChallenges = [
  {
    id: 1,
    title: "Steady Surgeon",
    description: "Complete Stage 1 without rushing",
    target: 1,
    reward: "🏆 50 Research Points",
    type: "patience"
  },
  {
    id: 2,
    title: "Perfect Precision",
    description: "Use optimal tools for all repairs",
    target: 5,
    reward: "⚡ Precision Badge",
    type: "tool_mastery"
  },
  {
    id: 3,
    title: "Virus Hunter",
    description: "Eliminate 3 viruses with correct tools",
    target: 3,
    reward: "🔬 Research Boost",
    type: "virus_elimination"
  }
];

// Game constants for enhanced gameplay
export const gameConstants = {
  SHIP_SPEED: 2.5,
  KEYBOARD_SPEED: 2.5,
  REPAIR_DISTANCE: 25,
  VIRUS_DETECTION_RANGE: 35,
  INVULNERABILITY_TIME: 2000,
  COMBO_TIMEOUT: 6000,
  ANIMATION_FRAME_RATE: 16,
  GAME_LOOP_RATE: 50,
  MAX_PARTICLES: 40,
  MAX_VISUAL_FEEDBACK: 8,
  SHIP_TRAIL_LENGTH: 6,
  XP_PER_LEVEL: 500,
  CELEBRATION_TIME: 180
};