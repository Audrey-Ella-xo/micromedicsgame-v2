// Enhanced medical tools with efficiency ratings
export const medicalTools = {
  basic: { 
    name: "Basic Nano-Probe", 
    icon: "🔧", 
    description: "Standard repair tool for general medical procedures", 
    efficiency: 1.0, 
    color: "#60a5fa",
    cost: 0,
    unlockLevel: 1
  },
  precision: { 
    name: "Precision Laser", 
    icon: "⚡", 
    description: "High-precision repairs with surgical accuracy", 
    efficiency: 1.3, 
    color: "#fbbf24",
    cost: 50,
    unlockLevel: 2
  },
  stemcell: { 
    name: "Stem Cell Injector", 
    icon: "🧬", 
    description: "Regenerative healing with biological enhancement", 
    efficiency: 1.1, 
    color: "#10b981",
    cost: 75,
    unlockLevel: 3
  },
  ultrasonic: { 
    name: "Ultrasonic Probe", 
    icon: "🌊", 
    description: "Gentle vibration therapy for delicate procedures", 
    efficiency: 1.2, 
    color: "#8b5cf6",
    cost: 100,
    unlockLevel: 4
  },
  quantum: {
    name: "Quantum Healer",
    icon: "🔮",
    description: "Advanced quantum-level cellular repair",
    efficiency: 1.5,
    color: "#ec4899",
    cost: 200,
    unlockLevel: 5
  }
};

// Enhanced virus types with collection mechanics and weaknesses
export const virusTypes = {
  inflammation: { 
    name: "Inflammation Virus", 
    icon: "🦠", 
    rarity: "Common", 
    description: "Causes localized tissue swelling and irritation", 
    weakness: "precision",
    color: "#ef4444",
    speed: 1.0,
    health: 1,
    points: 10
  },
  toxin: { 
    name: "Neurotoxin", 
    icon: "☣️", 
    rarity: "Common", 
    description: "Damages neural pathways and disrupts signals", 
    weakness: "basic",
    color: "#f59e0b",
    speed: 0.8,
    health: 1,
    points: 15
  },
  necrosis: { 
    name: "Necrosis Agent", 
    icon: "💀", 
    rarity: "Rare", 
    description: "Causes rapid cell death and tissue breakdown", 
    weakness: "stemcell",
    color: "#7c2d12",
    speed: 0.6,
    health: 2,
    points: 25
  },
  oxidative: { 
    name: "Oxidative Stress", 
    icon: "🔥", 
    rarity: "Uncommon", 
    description: "Free radical damage to cellular structures", 
    weakness: "ultrasonic",
    color: "#ea580c",
    speed: 1.2,
    health: 1,
    points: 20
  },
  prion: {
    name: "Misfolded Protein",
    icon: "🧬",
    rarity: "Rare", 
    description: "Corrupts healthy proteins through misfolding",
    weakness: "quantum",
    color: "#7c3aed",
    speed: 0.4,
    health: 3,
    points: 40
  },
  autoimmune: {
    name: "Autoimmune Agent",
    icon: "⚔️",
    rarity: "Epic",
    description: "Tricks immune system to attack healthy tissue",
    weakness: "stemcell",
    color: "#dc2626",
    speed: 1.0,
    health: 2,
    points: 35
  },
  genetic: {
    name: "Genetic Disruptor",
    icon: "🧪",
    rarity: "Epic",
    description: "Alters DNA sequences and genetic expression",
    weakness: "quantum",
    color: "#6366f1",
    speed: 0.3,
    health: 4,
    points: 50
  },
  nanomachine: {
    name: "Rogue Nanomachine",
    icon: "🤖",
    rarity: "Legendary",
    description: "Malfunctioning medical nanobots causing havoc",
    weakness: "precision",
    color: "#1f2937",
    speed: 1.5,
    health: 3,
    points: 60
  }
};

// Enhanced stages with detailed objectives and environments
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
    difficulty: "beginner",
    neurons: [
      { 
        id: 1, 
        x: 35, 
        y: 40, 
        type: 'Motor Cortex', 
        subtype: 'motor', 
        info: 'Controls voluntary movement and muscle coordination', 
        health: 100, 
        repairType: 'precision',
        importance: 'critical'
      },
      { 
        id: 2, 
        x: 65, 
        y: 35, 
        type: 'Premotor Area', 
        subtype: 'motor', 
        info: 'Plans and sequences complex movements', 
        health: 100, 
        repairType: 'basic',
        importance: 'high'
      }
    ],
    objective: "Learn motor neuron repair techniques in a safe environment",
    briefing: "Welcome to motor cortex training! Practice precision movements.",
    virusTypes: ['inflammation'],
    powerUps: ['health_boost'],
    environmentEffects: {
      bloodFlow: true,
      oxygenBubbles: true,
      immuneCells: false
    }
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
    difficulty: "easy",
    neurons: [
      { 
        id: 3, 
        x: 30, 
        y: 30, 
        type: 'Hippocampus', 
        subtype: 'memory', 
        info: 'Critical for memory formation and consolidation', 
        health: 80, 
        repairType: 'stemcell',
        importance: 'critical'
      },
      { 
        id: 4, 
        x: 70, 
        y: 40, 
        type: 'Prefrontal Cortex', 
        subtype: 'executive', 
        info: 'Executive functions and working memory', 
        health: 75, 
        repairType: 'precision',
        importance: 'critical'
      },
      { 
        id: 5, 
        x: 50, 
        y: 65, 
        type: 'Neural Networks', 
        subtype: 'connection', 
        info: 'Information pathways between brain regions', 
        health: 90, 
        repairType: 'ultrasonic',
        importance: 'high'
      }
    ],
    objective: "Restore memory pathways while managing multiple threats",
    briefing: "Memory systems are delicate - use appropriate tools for each repair.",
    virusTypes: ['inflammation', 'toxin'],
    powerUps: ['health_boost', 'speed_boost'],
    environmentEffects: {
      bloodFlow: true,
      oxygenBubbles: true,
      immuneCells: true
    }
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
    difficulty: "medium",
    neurons: [
      { 
        id: 6, 
        x: 25, 
        y: 25, 
        type: 'Dopamine Hub', 
        subtype: 'neurotransmitter', 
        info: 'Reward pathways and motivation systems', 
        health: 70, 
        repairType: 'stemcell',
        importance: 'critical'
      },
      { 
        id: 7, 
        x: 75, 
        y: 30, 
        type: 'Serotonin Center', 
        subtype: 'neurotransmitter', 
        info: 'Mood regulation and emotional balance', 
        health: 65, 
        repairType: 'precision',
        importance: 'critical'
      },
      { 
        id: 8, 
        x: 50, 
        y: 50, 
        type: 'GABA System', 
        subtype: 'inhibitory', 
        info: 'Calming signals and anxiety regulation', 
        health: 80, 
        repairType: 'ultrasonic',
        importance: 'high'
      },
      { 
        id: 9, 
        x: 40, 
        y: 70, 
        type: 'Acetylcholine', 
        subtype: 'neurotransmitter', 
        info: 'Learning enhancement and memory formation', 
        health: 75, 
        repairType: 'stemcell',
        importance: 'high'
      }
    ],
    objective: "Balance complex neurotransmitter systems under pressure",
    briefing: "Multiple neurotransmitter systems need rebalancing - work efficiently!",
    virusTypes: ['inflammation', 'toxin', 'oxidative'],
    powerUps: ['health_boost', 'speed_boost', 'shield'],
    environmentEffects: {
      bloodFlow: true,
      oxygenBubbles: true,
      immuneCells: true
    }
  },
  4: {
    title: "🧠 COGNITIVE ENHANCEMENT",
    timeLimit: 150,
    emergencyLevel: "ELEVATED",
    maxViruses: 4,
    spawnRate: 30,
    xpReward: 250,
    coinReward: 40,
    researchReward: 70,
    environment: "cognitive",
    difficulty: "medium-hard",
    neurons: [
      { 
        id: 10, 
        x: 20, 
        y: 20, 
        type: 'Attention Networks', 
        subtype: 'cognitive', 
        info: 'Focus and selective attention systems', 
        health: 60, 
        repairType: 'precision',
        importance: 'critical'
      },
      { 
        id: 11, 
        x: 80, 
        y: 25, 
        type: 'Language Centers', 
        subtype: 'cognitive', 
        info: 'Speech and language processing areas', 
        health: 55, 
        repairType: 'ultrasonic',
        importance: 'critical'
      },
      { 
        id: 12, 
        x: 30, 
        y: 60, 
        type: 'Visual Processing', 
        subtype: 'sensory', 
        info: 'Visual cortex and image interpretation', 
        health: 70, 
        repairType: 'basic',
        importance: 'high'
      },
      { 
        id: 13, 
        x: 70, 
        y: 65, 
        type: 'Executive Control', 
        subtype: 'executive', 
        info: 'Decision making and impulse control', 
        health: 50, 
        repairType: 'stemcell',
        importance: 'critical'
      },
      { 
        id: 14, 
        x: 50, 
        y: 40, 
        type: 'Integration Hub', 
        subtype: 'connection', 
        info: 'Connects all cognitive systems together', 
        health: 65, 
        repairType: 'quantum',
        importance: 'critical'
      }
    ],
    objective: "Restore advanced cognitive functions under time pressure",
    briefing: "Complex cognitive systems require careful coordination and timing.",
    virusTypes: ['necrosis', 'oxidative', 'prion'],
    powerUps: ['health_boost', 'speed_boost', 'shield', 'repair_boost'],
    environmentEffects: {
      bloodFlow: true,
      oxygenBubbles: true,
      immuneCells: true
    }
  },
  5: {
    title: "🧠 EMERGENCY TRAUMA RESPONSE",
    timeLimit: 120,
    emergencyLevel: "CRITICAL",
    maxViruses: 5,
    spawnRate: 20,
    xpReward: 300,
    coinReward: 50,
    researchReward: 100,
    environment: "trauma",
    difficulty: "hard",
    neurons: [
      { 
        id: 15, 
        x: 15, 
        y: 15, 
        type: 'Brain Stem', 
        subtype: 'vital', 
        info: 'Controls basic life functions - CRITICAL', 
        health: 30, 
        repairType: 'quantum',
        importance: 'life_critical'
      },
      { 
        id: 16, 
        x: 85, 
        y: 20, 
        type: 'Respiratory Center', 
        subtype: 'vital', 
        info: 'Breathing control - immediate attention needed', 
        health: 25, 
        repairType: 'precision',
        importance: 'life_critical'
      },
      { 
        id: 17, 
        x: 50, 
        y: 30, 
        type: 'Cardiac Control', 
        subtype: 'vital', 
        info: 'Heart rhythm regulation - stabilize quickly', 
        health: 35, 
        repairType: 'stemcell',
        importance: 'life_critical'
      },
      { 
        id: 18, 
        x: 25, 
        y: 70, 
        type: 'Spinal Interface', 
        subtype: 'motor', 
        info: 'Connection to spinal cord and reflexes', 
        health: 40, 
        repairType: 'ultrasonic',
        importance: 'critical'
      },
      { 
        id: 19, 
        x: 75, 
        y: 75, 
        type: 'Consciousness Hub', 
        subtype: 'awareness', 
        info: 'Maintains awareness and consciousness', 
        health: 20, 
        repairType: 'quantum',
        importance: 'life_critical'
      },
      { 
        id: 20, 
        x: 50, 
        y: 60, 
        type: 'Emergency Backup', 
        subtype: 'redundancy', 
        info: 'Backup systems for critical functions', 
        health: 45, 
        repairType: 'precision',
        importance: 'critical'
      }
    ],
    objective: "Save life-critical systems in emergency trauma situation",
    briefing: "EMERGENCY: Multiple life-critical systems failing. Prioritize brain stem and vital functions!",
    virusTypes: ['necrosis', 'autoimmune', 'genetic'],
    powerUps: ['health_boost', 'speed_boost', 'shield', 'repair_boost', 'time_extend'],
    environmentEffects: {
      bloodFlow: true,
      oxygenBubbles: true,
      immuneCells: true,
      emergencyMode: true
    }
  }
};

// Tutorial steps for new players with enhanced guidance
export const tutorialSteps = [
  { 
    title: "Welcome to Advanced Medical Training! 🎯", 
    description: "You're about to become a nano-surgeon! Move your ship using touch/click OR keyboard controls (WASD/Arrow keys)", 
    objective: "Practice movement - get comfortable with ship navigation",
    hint: "Try both touch controls and keyboard - use whatever feels best!",
    allowedControls: ['movement'],
    safeMode: true,
    timeLimit: null
  },
  { 
    title: "Your First Medical Procedure! ⚡", 
    description: "See that highlighted neuron? It needs repair! Move close and interact to begin treatment", 
    objective: "Repair the highlighted neuron - take your time to learn",
    hint: "Get close to the glowing neuron and click/tap it, or press SPACE when nearby",
    allowedControls: ['movement', 'repair'],
    safeMode: true,
    timeLimit: null
  },
  { 
    title: "Excellent Surgical Technique! 🌟", 
    description: "Perfect! See how the neuron turned healthy and the patient's vitals improved? You're a natural healer!", 
    objective: "Continue with the next repair - you're doing great!",
    hint: "Each repair helps the patient - look for neurons that need attention",
    allowedControls: ['movement', 'repair'],
    safeMode: true,
    timeLimit: null
  },
  { 
    title: "Medical Training Complete! 🏆", 
    description: "Outstanding work! You're now certified for medical emergencies. Every patient you save makes a real difference!", 
    objective: "Ready to help real patients? Let's begin your medical career!",
    hint: "You're fully trained and ready to save lives!",
    allowedControls: ['all'],
    safeMode: false,
    timeLimit: null
  }
];

// Daily challenges system with rotating objectives
export const dailyChallenges = [
  {
    id: 1,
    title: "Steady Surgeon",
    description: "Complete a stage without rushing - take time for precision",
    target: 1,
    reward: "🏆 50 Research Points",
    type: "patience",
    condition: { type: 'complete_stage_time', min: 120 }
  },
  {
    id: 2,
    title: "Perfect Precision",
    description: "Use optimal tools for all repairs in a single stage",
    target: 5,
    reward: "⚡ Precision Badge + 30 Coins",
    type: "tool_mastery",
    condition: { type: 'optimal_tool_usage', count: 5 }
  },
  {
    id: 3,
    title: "Virus Hunter",
    description: "Eliminate viruses using correct weakness tools",
    target: 3,
    reward: "🔬 Research Boost + 25 XP",
    type: "virus_elimination", 
    condition: { type: 'eliminate_virus_weakness', count: 3 }
  },
  {
    id: 4,
    title: "Gentle Healer",
    description: "Complete any stage without taking damage",
    target: 1,
    reward: "🕊️ Healer Badge + Shield Upgrade",
    type: "no_damage",
    condition: { type: 'complete_stage_no_damage', count: 1 }
  },
  {
    id: 5,
    title: "Speed Surgeon", 
    description: "Complete Stage 1 in under 2 minutes",
    target: 1,
    reward: "⚡ Speed Badge + Ship Upgrade",
    type: "speed",
    condition: { type: 'complete_stage_time', stage: 1, max: 120 }
  },
  {
    id: 6,
    title: "Combo Master",
    description: "Achieve a 5x repair combo in any stage",
    target: 1,
    reward: "🔥 Combo Badge + 40 Coins",
    type: "combo",
    condition: { type: 'achieve_combo', count: 5 }
  },
  {
    id: 7,
    title: "Knowledge Seeker",
    description: "Discover 3 new medical facts during gameplay",
    target: 3,
    reward: "📚 Scholar Badge + Knowledge Points",
    type: "learning",
    condition: { type: 'discover_facts', count: 3 }
  }
];

// Power-up system with enhanced effects
export const powerUpTypes = {
  health_boost: {
    name: "Medical Regeneration",
    icon: "❤️",
    description: "Restores 25 health points instantly",
    duration: 0, // Instant effect
    effect: { type: 'heal', value: 25 },
    rarity: "common",
    spawnRate: 0.3
  },
  speed_boost: {
    name: "Adrenaline Rush", 
    icon: "⚡",
    description: "Increases movement speed by 50% for 15 seconds",
    duration: 15000,
    effect: { type: 'speed_multiplier', value: 1.5 },
    rarity: "uncommon",
    spawnRate: 0.2
  },
  shield: {
    name: "Emergency Shield",
    icon: "🛡️",
    description: "Temporary invulnerability for 10 seconds",
    duration: 10000,
    effect: { type: 'invulnerability', value: true },
    rarity: "rare",
    spawnRate: 0.15
  },
  repair_boost: {
    name: "Surgical Enhancement",
    icon: "🔧",
    description: "Double repair effectiveness for 20 seconds",
    duration: 20000,
    effect: { type: 'repair_multiplier', value: 2.0 },
    rarity: "rare",
    spawnRate: 0.1
  },
  time_extend: {
    name: "Emergency Extension",
    icon: "⏰",
    description: "Adds 30 seconds to the timer",
    duration: 0, // Instant effect
    effect: { type: 'add_time', value: 30 },
    rarity: "epic",
    spawnRate: 0.05
  },
  precision_mode: {
    name: "Surgical Precision",
    icon: "🎯",
    description: "All tools become optimal for 25 seconds",
    duration: 25000,
    effect: { type: 'optimal_tools', value: true },
    rarity: "epic",
    spawnRate: 0.08
  }
};

// Environmental effects system
export const environmentEffects = {
  bloodFlow: {
    name: "Blood Flow Currents",
    description: "Gentle currents that can help or hinder movement",
    particles: {
      count: 15,
      color: "#dc2626",
      speed: 0.5,
      size: 2
    },
    effect: {
      type: "movement_influence",
      strength: 0.3
    }
  },
  oxygenBubbles: {
    name: "Oxygen Bubbles",
    description: "Health-restoring oxygen pockets",
    particles: {
      count: 8,
      color: "#06b6d4",
      speed: -0.8,
      size: 8
    },
    effect: {
      type: "health_restore",
      value: 5,
      radius: 15
    }
  },
  immuneCells: {
    name: "Friendly Immune Cells",
    description: "Helpful white blood cells that eliminate threats",
    particles: {
      count: 5,
      color: "#10b981",
      speed: 1.2,
      size: 12
    },
    effect: {
      type: "virus_elimination",
      radius: 20,
      rate: 0.1
    }
  },
  neuralSparks: {
    name: "Neural Activity",
    description: "Electrical signals showing brain activity",
    particles: {
      count: 20,
      color: "#fbbf24",
      speed: 2.0,
      size: 1
    },
    effect: {
      type: "visual_only"
    }
  }
};

// Game constants for enhanced gameplay balance
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
  CELEBRATION_TIME: 180,
  HEALTH_REGENERATION_RATE: 0.1,
  VIRUS_SPAWN_VARIANCE: 0.3,
  POWER_UP_SPAWN_RATE: 0.1,
  COMBO_SCORE_MULTIPLIER: 1.5,
  PERFECT_REPAIR_BONUS: 10,
  SPEED_REPAIR_BONUS: 5,
  NO_DAMAGE_BONUS: 25
};

// Achievement progression tracking
export const progressionMilestones = {
  beginner: {
    level: 1,
    requirements: {
      neurons_repaired: 5,
      stages_completed: 1,
      tools_unlocked: 2
    },
    rewards: {
      title: "Medical Student",
      coins: 25,
      xp: 100
    }
  },
  intermediate: {
    level: 3,
    requirements: {
      neurons_repaired: 25,
      stages_completed: 3,
      achievements_unlocked: 5,
      ships_unlocked: 3
    },
    rewards: {
      title: "Junior Surgeon",
      coins: 75,
      xp: 300,
      special_ship: "🏥"
    }
  },
  advanced: {
    level: 5,
    requirements: {
      neurons_repaired: 100,
      stages_completed: 5,
      achievements_unlocked: 10,
      perfect_stages: 3
    },
    rewards: {
      title: "Senior Surgeon",
      coins: 150,
      xp: 500,
      special_tool: "quantum"
    }
  },
  expert: {
    level: 7,
    requirements: {
      neurons_repaired: 250,
      patients_saved: 25,
      achievements_unlocked: 15,
      virus_types_discovered: 6
    },
    rewards: {
      title: "Medical Expert",
      coins: 250,
      xp: 750,
      special_ship: "💎"
    }
  },
  master: {
    level: 10,
    requirements: {
      neurons_repaired: 500,
      patients_saved: 50,
      achievements_unlocked: 20,
      all_ships_unlocked: true
    },
    rewards: {
      title: "Master Surgeon",
      coins: 500,
      xp: 1000,
      special_ship: "🌟",
      hall_of_fame: true
    }
  }
};

// Difficulty scaling system
export const difficultyScaling = {
  beginner: {
    virusSpeed: 0.7,
    spawnRate: 1.5,
    healthDrain: 0.5,
    timeMultiplier: 1.3,
    hintSystem: true
  },
  easy: {
    virusSpeed: 0.8,
    spawnRate: 1.2,
    healthDrain: 0.7,
    timeMultiplier: 1.1,
    hintSystem: true
  },
  normal: {
    virusSpeed: 1.0,
    spawnRate: 1.0,
    healthDrain: 1.0,
    timeMultiplier: 1.0,
    hintSystem: false
  },
  hard: {
    virusSpeed: 1.2,
    spawnRate: 0.8,
    healthDrain: 1.3,
    timeMultiplier: 0.9,
    hintSystem: false
  },
  expert: {
    virusSpeed: 1.5,
    spawnRate: 0.6,
    healthDrain: 1.5,
    timeMultiplier: 0.8,
    hintSystem: false
  }
};

// Save data structure template
export const defaultSaveData = {
  version: "2.0.0",
  player: {
    level: 1,
    xp: 0,
    coins: 0,
    researchPoints: 0,
    knowledgePoints: 0,
    consecutiveDays: 0,
    totalPlayTime: 0,
    lastPlayDate: null
  },
  progress: {
    stagesCompleted: [],
    achievementsUnlocked: [],
    shipsUnlocked: ["🚀"],
    toolsUnlocked: ["basic"],
    virusTypesDiscovered: [],
    medicalFactsLearned: []
  },
  statistics: {
    totalNeuronsRepaired: 0,
    totalPatientsHealed: 0,
    totalVirusesEliminated: 0,
    totalTimeSpent: 0,
    perfectStages: 0,
    highestCombo: 0,
    fastestCompletion: null
  },
  settings: {
    currentShip: "🚀",
    difficulty: "normal",
    soundEnabled: true,
    hapticsEnabled: true,
    tutorialCompleted: false,
    keyboardControls: true
  },
  dailyData: {
    currentChallenge: null,
    challengesCompleted: [],
    lastChallengeDate: null,
    streakCount: 0
  }
};

export default {
  medicalTools,
  virusTypes,
  stages,
  tutorialSteps,
  dailyChallenges,
  powerUpTypes,
  environmentEffects,
  gameConstants,
  progressionMilestones,
  difficultyScaling,
  defaultSaveData
};