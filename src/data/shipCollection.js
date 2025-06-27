// Enhanced ship customization system with detailed specifications
export const shipCollection = {
  '🚀': {
    id: 'nano_rocket',
    name: 'Nano Rocket',
    emoji: '🚀',
    cost: 0,
    rarity: 'starter',
    category: 'classic',
    description: 'The classic medical nano-ship. Reliable, efficient, and perfect for new surgeons.',
    specifications: {
      speed: 1.0,
      maneuverability: 1.0,
      efficiency: 1.0,
      comfort: 0.8
    },
    trail: {
      color: '#60a5fa',
      pattern: 'standard',
      intensity: 0.7
    },
    unlockCondition: {
      type: 'default',
      requirement: 'Available from start'
    },
    lore: "The standard-issue nano-vessel used by medical academies worldwide. This ship has trained more surgeons than any other model in history.",
    manufacturer: "NanoMed Industries",
    yearDesigned: 2024,
    maxSpeed: "15 nanometers/second",
    powerSource: "Bio-electric cell",
    specialFeatures: [
      "Reliable autopilot",
      "Standard medical toolkit compatibility",
      "Beginner-friendly controls",
      "Emergency safety protocols"
    ]
  },

  '🛸': {
    id: 'ufo_healer',
    name: 'UFO Healer',
    emoji: '🛸',
    cost: 50,
    rarity: 'uncommon',
    category: 'alien',
    description: 'Advanced alien technology provides superior maneuverability and mysterious healing properties.',
    specifications: {
      speed: 1.2,
      maneuverability: 1.4,
      efficiency: 1.1,
      comfort: 1.0
    },
    trail: {
      color: '#10b981',
      pattern: 'spiral',
      intensity: 0.9
    },
    unlockCondition: {
      type: 'coins',
      requirement: '50 coins earned'
    },
    lore: "Discovered in a crashed meteorite, this vessel's technology is beyond current human understanding. Its healing capabilities seem almost magical.",
    manufacturer: "Unknown (Alien Origin)",
    yearDesigned: "Unknown",
    maxSpeed: "22 nanometers/second",
    powerSource: "Quantum field generator",
    specialFeatures: [
      "Anti-gravity navigation",
      "Enhanced healing resonance",
      "Telepathic interface option",
      "Self-repairing hull"
    ]
  },

  '🚁': {
    id: 'med_helicopter',
    name: 'Med Helicopter',
    emoji: '🚁',
    cost: 75,
    rarity: 'uncommon',
    category: 'emergency',
    description: 'Emergency response design with rapid deployment capabilities and medical equipment integration.',
    specifications: {
      speed: 1.3,
      maneuverability: 1.1,
      efficiency: 1.2,
      comfort: 0.9
    },
    trail: {
      color: '#f59e0b',
      pattern: 'rotor',
      intensity: 0.8
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Speed Surgeon" achievement'
    },
    lore: "Designed for emergency medical situations where every second counts. The rotor system provides unmatched stability in turbulent neural environments.",
    manufacturer: "Emergency Medical Corp",
    yearDesigned: 2025,
    maxSpeed: "28 nanometers/second",
    powerSource: "High-output medical battery",
    specialFeatures: [
      "Emergency response protocols",
      "Advanced stabilization system",
      "Rapid deployment mode",
      "Emergency medical kit integration"
    ]
  },

  '🏥': {
    id: 'hospital_ship',
    name: 'Hospital Ship',
    emoji: '🏥',
    cost: 100,
    rarity: 'rare',
    category: 'medical',
    description: 'A mobile medical center with comprehensive treatment facilities and patient monitoring systems.',
    specifications: {
      speed: 0.9,
      maneuverability: 0.8,
      efficiency: 1.5,
      comfort: 1.4
    },
    trail: {
      color: '#ef4444',
      pattern: 'medical_cross',
      intensity: 1.0
    },
    unlockCondition: {
      type: 'patients_saved',
      requirement: 'Save 10 patients'
    },
    lore: "The ultimate in mobile medical care. This ship can perform complex procedures while providing comprehensive patient monitoring and life support.",
    manufacturer: "Global Health Innovations",
    yearDesigned: 2026,
    maxSpeed: "18 nanometers/second",
    powerSource: "Medical fusion reactor",
    specialFeatures: [
      "Complete medical facility",
      "Patient monitoring systems",
      "Surgical suite integration",
      "Extended mission capability"
    ]
  },

  '⚡': {
    id: 'lightning_bolt',
    name: 'Lightning Bolt',
    emoji: '⚡',
    cost: 125,
    rarity: 'rare',
    category: 'speed',
    description: 'The fastest nano-ship available, with electrical enhancement systems for lightning-quick procedures.',
    specifications: {
      speed: 1.8,
      maneuverability: 1.6,
      efficiency: 1.0,
      comfort: 0.7
    },
    trail: {
      color: '#fbbf24',
      pattern: 'lightning',
      intensity: 1.2
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Combo Master" achievement'
    },
    lore: "Engineered for surgeons who operate at the speed of thought. The electrical enhancement systems provide unparalleled responsiveness and precision.",
    manufacturer: "Velocity Medical Systems",
    yearDesigned: 2027,
    maxSpeed: "45 nanometers/second",
    powerSource: "Lightning capacitor array",
    specialFeatures: [
      "Electrical enhancement systems",
      "Ultra-responsive controls",
      "Speed boost capability",
      "Neural interface compatibility"
    ]
  },

  '❤️': {
    id: 'heart_ship',
    name: 'Heart Ship',
    emoji: '❤️',
    cost: 150,
    rarity: 'rare',
    category: 'healing',
    description: 'Powered by pure healing energy, this ship amplifies the surgeon\'s natural empathy and care.',
    specifications: {
      speed: 1.0,
      maneuverability: 1.2,
      efficiency: 1.4,
      comfort: 1.6
    },
    trail: {
      color: '#f472b6',
      pattern: 'hearts',
      intensity: 1.1
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Gentle Healer" achievement'
    },
    lore: "Created from crystallized empathy and powered by the surgeon's desire to heal. This ship seems to pulse with life itself, bringing comfort to patients.",
    manufacturer: "Compassionate Care Technologies",
    yearDesigned: 2025,
    maxSpeed: "20 nanometers/second",
    powerSource: "Empathy resonance engine",
    specialFeatures: [
      "Healing amplification field",
      "Patient comfort enhancement",
      "Empathy resonance technology",
      "Emotional stability systems"
    ]
  },

  '💎': {
    id: 'crystal_ship',
    name: 'Crystal Ship',
    emoji: '💎',
    cost: 200,
    rarity: 'epic',
    category: 'luxury',
    description: 'A rare crystalline vessel that refracts healing energy through its prismatic structure.',
    specifications: {
      speed: 1.1,
      maneuverability: 1.3,
      efficiency: 1.3,
      comfort: 1.5
    },
    trail: {
      color: '#a855f7',
      pattern: 'prismatic',
      intensity: 1.3
    },
    unlockCondition: {
      type: 'level',
      requirement: 'Reach level 5'
    },
    lore: "Grown in zero-gravity crystal farms, this vessel's prismatic structure can split healing energy into its component frequencies for maximum effectiveness.",
    manufacturer: "Prismatic Medical Crystals Ltd",
    yearDesigned: 2028,
    maxSpeed: "25 nanometers/second",
    powerSource: "Crystalline energy matrix",
    specialFeatures: [
      "Prismatic energy refraction",
      "Crystal resonance healing",
      "Luxury comfort systems",
      "Self-maintaining crystal structure"
    ]
  },

  '🌟': {
    id: 'star_healer',
    name: 'Star Healer',
    emoji: '🌟',
    cost: 300,
    rarity: 'legendary',
    category: 'cosmic',
    description: 'The legendary cosmic vessel that channels the healing power of distant stars.',
    specifications: {
      speed: 1.4,
      maneuverability: 1.5,
      efficiency: 1.6,
      comfort: 1.8
    },
    trail: {
      color: '#06d6a0',
      pattern: 'stellar',
      intensity: 1.5
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Brain Surgeon" achievement'
    },
    lore: "Forged in the heart of a dying star and blessed by cosmic healers, this vessel represents the pinnacle of medical technology and spiritual healing.",
    manufacturer: "Cosmic Healers Consortium",
    yearDesigned: "Timeless",
    maxSpeed: "50 nanometers/second",
    powerSource: "Stellar energy core",
    specialFeatures: [
      "Cosmic healing energy channeling",
      "Star-blessed enhancement systems",
      "Interdimensional stability",
      "Perfect harmony systems"
    ]
  }
};

// Ship rarity classifications
export const shipRarity = {
  starter: {
    name: 'Starter',
    color: '#9ca3af',
    description: 'Basic ships available to all surgeons',
    unlockRequirement: 'None'
  },
  uncommon: {
    name: 'Uncommon',
    color: '#10b981',
    description: 'Ships with enhanced capabilities',
    unlockRequirement: 'Achievement or coins'
  },
  rare: {
    name: 'Rare',
    color: '#3b82f6',
    description: 'Specialized ships with unique features',
    unlockRequirement: 'Significant achievement'
  },
  epic: {
    name: 'Epic',
    color: '#8b5cf6',
    description: 'Exceptional ships with advanced technology',
    unlockRequirement: 'Major milestone'
  },
  legendary: {
    name: 'Legendary',
    color: '#f59e0b',
    description: 'The finest ships in existence',
    unlockRequirement: 'Legendary achievement'
  }
};

// Ship categories
export const shipCategories = {
  classic: {
    name: 'Classic',
    icon: '🚀',
    description: 'Traditional and reliable medical vessels'
  },
  alien: {
    name: 'Alien Technology',
    icon: '🛸',
    description: 'Advanced extraterrestrial medical technology'
  },
  emergency: {
    name: 'Emergency Response',
    icon: '🚁',
    description: 'Ships designed for rapid medical response'
  },
  medical: {
    name: 'Medical Specialist',
    icon: '🏥',
    description: 'Ships with comprehensive medical facilities'
  },
  speed: {
    name: 'High Speed',
    icon: '⚡',
    description: 'Ultra-fast ships for quick procedures'
  },
  healing: {
    name: 'Healing Focused',
    icon: '❤️',
    description: 'Ships that amplify natural healing abilities'
  },
  luxury: {
    name: 'Luxury',
    icon: '💎',
    description: 'Premium ships with enhanced comfort features'
  },
  cosmic: {
    name: 'Cosmic',
    icon: '🌟',
    description: 'Ships that channel universal healing energy'
  }
};

// Ship trail patterns
export const trailPatterns = {
  standard: {
    name: 'Standard',
    description: 'Classic particle trail',
    particleCount: 5,
    fadeRate: 0.9
  },
  spiral: {
    name: 'Spiral',
    description: 'Spiraling energy pattern',
    particleCount: 8,
    fadeRate: 0.85
  },
  rotor: {
    name: 'Rotor',
    description: 'Helicopter rotor-style trail',
    particleCount: 6,
    fadeRate: 0.88
  },
  medical_cross: {
    name: 'Medical Cross',
    description: 'Cross-shaped healing pattern',
    particleCount: 4,
    fadeRate: 0.92
  },
  lightning: {
    name: 'Lightning',
    description: 'Electric bolt pattern',
    particleCount: 10,
    fadeRate: 0.8
  },
  hearts: {
    name: 'Hearts',
    description: 'Heart-shaped love energy',
    particleCount: 6,
    fadeRate: 0.9
  },
  prismatic: {
    name: 'Prismatic',
    description: 'Rainbow crystal refraction',
    particleCount: 12,
    fadeRate: 0.87
  },
  stellar: {
    name: 'Stellar',
    description: 'Star-powered cosmic trail',
    particleCount: 15,
    fadeRate: 0.85
  }
};

// Ship upgrade paths
export const shipUpgrades = {
  speed: {
    name: 'Speed Enhancement',
    description: 'Increases ship movement speed',
    cost: 50,
    maxLevel: 5,
    effect: (level) => 1 + (level * 0.1)
  },
  efficiency: {
    name: 'Medical Efficiency',
    description: 'Improves healing effectiveness',
    cost: 75,
    maxLevel: 3,
    effect: (level) => 1 + (level * 0.05)
  },
  trail: {
    name: 'Trail Enhancement',
    description: 'Makes ship trail more visible and beautiful',
    cost: 25,
    maxLevel: 3,
    effect: (level) => 1 + (level * 0.2)
  }
};

// Ship collection rewards
export const collectionRewards = {
  '2_ships': {
    requirement: 2,
    reward: 'Beginner Collector Badge',
    bonus: '+10% coin earning'
  },
  '4_ships': {
    requirement: 4,
    reward: 'Ship Enthusiast Badge',
    bonus: '+15% XP gain'
  },
  '6_ships': {
    requirement: 6,
    reward: 'Fleet Commander Badge',
    bonus: '+20% research points'
  },
  '8_ships': {
    requirement: 8,
    reward: 'Fleet Admiral Badge',
    bonus: '+25% all rewards'
  }
};

export default {
  shipCollection,
  shipRarity,
  shipCategories,
  trailPatterns,
  shipUpgrades,
  collectionRewards
};