// Comprehensive achievement system for enhanced gameplay motivation
export const achievements = {
  // Beginner Achievements
  first_repair: {
    id: 'first_repair',
    name: 'First Steps',
    description: 'Complete your first neural repair',
    icon: '🌱',
    rarity: 'common',
    reward: {
      coins: 25,
      researchPoints: 10,
      xp: 50
    },
    category: 'learning',
    unlockCondition: {
      type: 'repair_count',
      value: 1
    },
    hidden: false,
    celebrationMessage: "Welcome to the world of nano-surgery! Your first step towards becoming a master healer!"
  },

  gentle_touch: {
    id: 'gentle_touch',
    name: 'Gentle Touch',
    description: 'Complete tutorial without taking any damage',
    icon: '🕊️',
    rarity: 'common',
    reward: {
      coins: 30,
      researchPoints: 15,
      xp: 75
    },
    category: 'learning',
    unlockCondition: {
      type: 'tutorial_no_damage',
      value: true
    },
    hidden: false,
    celebrationMessage: "Your careful approach shows true medical wisdom!"
  },

  quick_learner: {
    id: 'quick_learner',
    name: 'Quick Learner',
    description: 'Complete tutorial in under 5 minutes',
    icon: '🚀',
    rarity: 'uncommon',
    reward: {
      coins: 40,
      researchPoints: 20,
      xp: 100
    },
    category: 'learning',
    unlockCondition: {
      type: 'tutorial_time',
      value: 300 // seconds
    },
    hidden: false,
    celebrationMessage: "You're a natural! Fast learning with perfect execution!"
  },

  // Skill-Based Achievements
  combo_starter: {
    id: 'combo_starter',
    name: 'Combo Starter',
    description: 'Achieve a 3x repair combo',
    icon: '🔥',
    rarity: 'common',
    reward: {
      coins: 35,
      researchPoints: 15,
      xp: 80
    },
    category: 'skill',
    unlockCondition: {
      type: 'combo_count',
      value: 3
    },
    hidden: false,
    celebrationMessage: "Excellent rhythm! You're developing surgical precision!"
  },

  combo_master: {
    id: 'combo_master',
    name: 'Combo Master',
    description: 'Achieve a 5x repair combo',
    icon: '🔥',
    rarity: 'uncommon',
    reward: {
      coins: 50,
      researchPoints: 25,
      xp: 125
    },
    category: 'skill',
    unlockCondition: {
      type: 'combo_count',
      value: 5
    },
    hidden: false,
    celebrationMessage: "Incredible surgical flow! You're operating with machine-like precision!"
  },

  combo_legend: {
    id: 'combo_legend',
    name: 'Combo Legend',
    description: 'Achieve a 10x repair combo',
    icon: '⚡',
    rarity: 'epic',
    reward: {
      coins: 100,
      researchPoints: 50,
      xp: 250
    },
    category: 'skill',
    unlockCondition: {
      type: 'combo_count',
      value: 10
    },
    hidden: false,
    celebrationMessage: "LEGENDARY! You've achieved the impossible - perfect surgical rhythm!"
  },

  precision_surgeon: {
    id: 'precision_surgeon',
    name: 'Precision Surgeon',
    description: 'Use optimal tools for 10 consecutive repairs',
    icon: '🎯',
    rarity: 'uncommon',
    reward: {
      coins: 60,
      researchPoints: 30,
      xp: 150
    },
    category: 'skill',
    unlockCondition: {
      type: 'optimal_tool_streak',
      value: 10
    },
    hidden: false,
    celebrationMessage: "Perfect tool selection! You understand the science of healing!"
  },

  speed_demon: {
    id: 'speed_demon',
    name: 'Speed Surgeon',
    description: 'Complete a stage in under 60 seconds',
    icon: '⚡',
    rarity: 'rare',
    reward: {
      coins: 75,
      researchPoints: 35,
      xp: 175
    },
    category: 'skill',
    unlockCondition: {
      type: 'stage_time',
      value: 60
    },
    hidden: false,
    celebrationMessage: "Lightning fast! Emergency surgery skills unlocked!"
  },

  // Discovery Achievements
  virus_spotter: {
    id: 'virus_spotter',
    name: 'Virus Spotter',
    description: 'Discover your first virus type',
    icon: '🔬',
    rarity: 'common',
    reward: {
      coins: 30,
      researchPoints: 20,
      xp: 75
    },
    category: 'discovery',
    unlockCondition: {
      type: 'virus_types_discovered',
      value: 1
    },
    hidden: false,
    celebrationMessage: "First pathogen identified! You're becoming a medical detective!"
  },

  virus_hunter: {
    id: 'virus_hunter',
    name: 'Virus Hunter',
    description: 'Discover 5 different virus types',
    icon: '🦠',
    rarity: 'uncommon',
    reward: {
      coins: 75,
      researchPoints: 40,
      xp: 150
    },
    category: 'discovery',
    unlockCondition: {
      type: 'virus_types_discovered',
      value: 5
    },
    hidden: false,
    celebrationMessage: "Excellent pathogen research! Your virus catalog is growing!"
  },

  virus_encyclopedia: {
    id: 'virus_encyclopedia',
    name: 'Virus Encyclopedia',
    description: 'Discover all virus types',
    icon: '📚',
    rarity: 'legendary',
    reward: {
      coins: 200,
      researchPoints: 100,
      xp: 500
    },
    category: 'discovery',
    unlockCondition: {
      type: 'virus_types_discovered',
      value: 8 // Total virus types in game
    },
    hidden: false,
    celebrationMessage: "LEGENDARY RESEARCH! You've cataloged every known pathogen!"
  },

  // Health & Safety Achievements
  perfectionist: {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Complete a stage with 100% health',
    icon: '💯',
    rarity: 'uncommon',
    reward: {
      coins: 60,
      researchPoints: 30,
      xp: 125
    },
    category: 'safety',
    unlockCondition: {
      type: 'perfect_health_stage',
      value: true
    },
    hidden: false,
    celebrationMessage: "Flawless performance! Not a single scratch on the patient!"
  },

  gentle_healer: {
    id: 'gentle_healer',
    name: 'Gentle Healer',
    description: 'Complete 3 stages without taking damage',
    icon: '🕊️',
    rarity: 'rare',
    reward: {
      coins: 100,
      researchPoints: 50,
      xp: 200
    },
    category: 'safety',
    unlockCondition: {
      type: 'stages_no_damage',
      value: 3
    },
    hidden: false,
    celebrationMessage: "Incredible care! You embody the spirit of 'do no harm'!"
  },

  // Collection Achievements
  ship_collector: {
    id: 'ship_collector',
    name: 'Ship Collector',
    description: 'Unlock 5 different ships',
    icon: '🚀',
    rarity: 'rare',
    reward: {
      coins: 100,
      researchPoints: 50,
      xp: 200
    },
    category: 'collection',
    unlockCondition: {
      type: 'ships_unlocked',
      value: 5
    },
    hidden: false,
    celebrationMessage: "Impressive fleet! You have excellent taste in nano-vessels!"
  },

  fleet_admiral: {
    id: 'fleet_admiral',
    name: 'Fleet Admiral',
    description: 'Unlock all ships',
    icon: '👑',
    rarity: 'legendary',
    reward: {
      coins: 300,
      researchPoints: 150,
      xp: 750
    },
    category: 'collection',
    unlockCondition: {
      type: 'ships_unlocked',
      value: 8 // Total ships in game
    },
    hidden: false,
    celebrationMessage: "LEGENDARY COLLECTION! You command the most advanced nano-fleet!"
  },

  // Progression Achievements
  life_saver: {
    id: 'life_saver',
    name: 'Life Saver',
    description: 'Save 10 patients successfully',
    icon: '🏆',
    rarity: 'uncommon',
    reward: {
      coins: 75,
      researchPoints: 40,
      xp: 175
    },
    category: 'progression',
    unlockCondition: {
      type: 'patients_saved',
      value: 10
    },
    hidden: false,
    celebrationMessage: "Ten lives saved! You're making a real difference!"
  },

  miracle_worker: {
    id: 'miracle_worker',
    name: 'Miracle Worker',
    description: 'Save 50 patients successfully',
    icon: '✨',
    rarity: 'epic',
    reward: {
      coins: 200,
      researchPoints: 100,
      xp: 400
    },
    category: 'progression',
    unlockCondition: {
      type: 'patients_saved',
      value: 50
    },
    hidden: false,
    celebrationMessage: "MIRACLE WORKER! Your healing touch has saved 50 lives!"
  },

  brain_surgeon: {
    id: 'brain_surgeon',
    name: 'Brain Surgeon',
    description: 'Complete all story stages',
    icon: '🧠',
    rarity: 'epic',
    reward: {
      coins: 250,
      researchPoints: 125,
      xp: 500
    },
    category: 'progression',
    unlockCondition: {
      type: 'story_complete',
      value: true
    },
    hidden: false,
    celebrationMessage: "EXPERT SURGEON! You've mastered every aspect of nano-surgery!"
  },

  legendary_surgeon: {
    id: 'legendary_surgeon',
    name: 'Legendary Surgeon',
    description: 'Reach level 10',
    icon: '👑',
    rarity: 'legendary',
    reward: {
      coins: 500,
      researchPoints: 250,
      xp: 1000
    },
    category: 'progression',
    unlockCondition: {
      type: 'level_reached',
      value: 10
    },
    hidden: false,
    celebrationMessage: "LEGENDARY STATUS! You are now among the greatest healers of all time!"
  },

  // Hidden/Special Achievements
  easter_egg_hunter: {
    id: 'easter_egg_hunter',
    name: 'Easter Egg Hunter',
    description: 'Find the hidden secret in the game',
    icon: '🥚',
    rarity: 'rare',
    reward: {
      coins: 150,
      researchPoints: 75,
      xp: 300
    },
    category: 'special',
    unlockCondition: {
      type: 'easter_egg_found',
      value: true
    },
    hidden: true,
    celebrationMessage: "SECRET DISCOVERED! You found something special hidden in the game!"
  },

  night_owl: {
    id: 'night_owl',
    name: 'Night Owl Surgeon',
    description: 'Play between midnight and 6 AM',
    icon: '🦉',
    rarity: 'uncommon',
    reward: {
      coins: 50,
      researchPoints: 25,
      xp: 100
    },
    category: 'special',
    unlockCondition: {
      type: 'night_play',
      value: true
    },
    hidden: true,
    celebrationMessage: "Dedicated healer! Even at night, you're saving lives!"
  },

  streak_master: {
    id: 'streak_master',
    name: 'Streak Master',
    description: 'Play for 7 consecutive days',
    icon: '🔥',
    rarity: 'rare',
    reward: {
      coins: 100,
      researchPoints: 50,
      xp: 200
    },
    category: 'special',
    unlockCondition: {
      type: 'daily_streak',
      value: 7
    },
    hidden: false,
    celebrationMessage: "Amazing dedication! Your commitment to healing knows no bounds!"
  }
};

// Achievement categories for organization
export const achievementCategories = {
  learning: {
    name: 'Learning',
    icon: '🎓',
    color: '#10b981',
    description: 'Master the basics of nano-surgery'
  },
  skill: {
    name: 'Skill',
    icon: '⚡',
    color: '#f59e0b',
    description: 'Demonstrate surgical precision and speed'
  },
  discovery: {
    name: 'Discovery',
    icon: '🔬',
    color: '#8b5cf6',
    description: 'Explore and catalog medical phenomena'
  },
  safety: {
    name: 'Safety',
    icon: '🛡️',
    color: '#06b6d4',
    description: 'Prioritize patient safety and care'
  },
  collection: {
    name: 'Collection',
    icon: '🚀',
    color: '#ef4444',
    description: 'Build your medical equipment collection'
  },
  progression: {
    name: 'Progression',
    icon: '🏆',
    color: '#eab308',
    description: 'Advance your medical career'
  },
  special: {
    name: 'Special',
    icon: '✨',
    color: '#ec4899',
    description: 'Unique and rare accomplishments'
  }
};

// Achievement rarity levels
export const achievementRarity = {
  common: {
    name: 'Common',
    color: '#9ca3af',
    probability: 0.7,
    baseReward: 1.0
  },
  uncommon: {
    name: 'Uncommon',
    color: '#10b981',
    probability: 0.5,
    baseReward: 1.5
  },
  rare: {
    name: 'Rare',
    color: '#3b82f6',
    probability: 0.3,
    baseReward: 2.0
  },
  epic: {
    name: 'Epic',
    color: '#8b5cf6',
    probability: 0.15,
    baseReward: 3.0
  },
  legendary: {
    name: 'Legendary',
    color: '#f59e0b',
    probability: 0.05,
    baseReward: 5.0
  }
};

// Achievement progress tracking
export const achievementProgress = {
  trackRepair: (count) => ({
    first_repair: Math.min(count, 1),
    life_saver: Math.min(count, 10),
    miracle_worker: Math.min(count, 50)
  }),
  
  trackCombo: (maxCombo) => ({
    combo_starter: Math.min(maxCombo >= 3 ? 1 : 0, 1),
    combo_master: Math.min(maxCombo >= 5 ? 1 : 0, 1),
    combo_legend: Math.min(maxCombo >= 10 ? 1 : 0, 1)
  }),
  
  trackVirusDiscovery: (discoveredCount) => ({
    virus_spotter: Math.min(discoveredCount, 1),
    virus_hunter: Math.min(discoveredCount, 5),
    virus_encyclopedia: Math.min(discoveredCount, 8)
  }),
  
  trackShipCollection: (unlockedCount) => ({
    ship_collector: Math.min(unlockedCount >= 5 ? 1 : 0, 1),
    fleet_admiral: Math.min(unlockedCount >= 8 ? 1 : 0, 1)
  })
};

export default {
  achievements,
  achievementCategories,
  achievementRarity,
  achievementProgress
};