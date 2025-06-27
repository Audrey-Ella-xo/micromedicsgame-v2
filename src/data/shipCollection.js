// Enhanced ship customization system with detailed specifications
export const shipCollection = {
  '🚀': {
    id: 'nano_rocket',
    name: 'Nano Rocket',
    emoji: '🚀',
    cost: 0,
    rarity: 'starter',
    category: 'classic',
    description: 'The classic medical nano-ship. Reliable, efficient, and perfect for new surgeons learning the ropes.',
    specifications: {
      speed: 1.0,
      maneuverability: 1.0,
      efficiency: 1.0,
      comfort: 0.8
    },
    trail: {
      color: '#60a5fa',
      pattern: 'standard',
      intensity: 0.7,
      particleCount: 5
    },
    unlockCondition: {
      type: 'default',
      requirement: 'Available from start'
    },
    lore: "The standard-issue nano-vessel used by medical academies worldwide. This ship has trained more surgeons than any other model in history. Its balanced design makes it perfect for learning fundamental surgical techniques.",
    manufacturer: "NanoMed Industries",
    yearDesigned: 2024,
    maxSpeed: "15 nanometers/second",
    powerSource: "Bio-electric cell",
    specialFeatures: [
      "Reliable autopilot system",
      "Standard medical toolkit compatibility",
      "Beginner-friendly control interface",
      "Emergency safety protocols",
      "Universal docking capability"
    ],
    stats: {
      reliability: 95,
      learningCurve: 10,
      versatility: 80,
      repairCost: 'Low'
    }
  },

  '🛸': {
    id: 'ufo_healer',
    name: 'UFO Healer',
    emoji: '🛸',
    cost: 50,
    rarity: 'uncommon',
    category: 'alien',
    description: 'Advanced alien technology provides superior maneuverability and mysterious healing properties that seem to defy conventional physics.',
    specifications: {
      speed: 1.2,
      maneuverability: 1.4,
      efficiency: 1.1,
      comfort: 1.0
    },
    trail: {
      color: '#10b981',
      pattern: 'spiral',
      intensity: 0.9,
      particleCount: 8
    },
    unlockCondition: {
      type: 'coins',
      requirement: '50 coins earned through medical practice'
    },
    lore: "Discovered in a crashed meteorite near the medical academy, this vessel's technology is beyond current human understanding. Its healing capabilities seem almost magical, resonating with the body's natural frequencies.",
    manufacturer: "Unknown (Alien Origin)",
    yearDesigned: "Unknown",
    maxSpeed: "22 nanometers/second",
    powerSource: "Quantum field generator",
    specialFeatures: [
      "Anti-gravity navigation system",
      "Enhanced healing resonance field",
      "Telepathic interface option",
      "Self-repairing crystalline hull",
      "Bioharmonic frequency adjustment"
    ],
    stats: {
      reliability: 85,
      learningCurve: 30,
      versatility: 90,
      repairCost: 'High'
    }
  },

  '🚁': {
    id: 'med_helicopter',
    name: 'Med Helicopter',
    emoji: '🚁',
    cost: 75,
    rarity: 'uncommon',
    category: 'emergency',
    description: 'Emergency response design with rapid deployment capabilities and integrated medical equipment for critical situations.',
    specifications: {
      speed: 1.3,
      maneuverability: 1.1,
      efficiency: 1.2,
      comfort: 0.9
    },
    trail: {
      color: '#f59e0b',
      pattern: 'rotor',
      intensity: 0.8,
      particleCount: 6
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Speed Surgeon" achievement'
    },
    lore: "Designed for emergency medical situations where every second counts. The rotor system provides unmatched stability in turbulent neural environments, making it ideal for trauma response scenarios.",
    manufacturer: "Emergency Medical Corp",
    yearDesigned: 2025,
    maxSpeed: "28 nanometers/second",
    powerSource: "High-output medical battery",
    specialFeatures: [
      "Emergency response protocols",
      "Advanced stabilization system",
      "Rapid deployment mode",
      "Emergency medical kit integration",
      "Crisis communication array"
    ],
    stats: {
      reliability: 92,
      learningCurve: 20,
      versatility: 75,
      repairCost: 'Medium'
    }
  },

  '🏥': {
    id: 'hospital_ship',
    name: 'Hospital Ship',
    emoji: '🏥',
    cost: 100,
    rarity: 'rare',
    category: 'medical',
    description: 'A mobile medical center with comprehensive treatment facilities and advanced patient monitoring systems.',
    specifications: {
      speed: 0.9,
      maneuverability: 0.8,
      efficiency: 1.5,
      comfort: 1.4
    },
    trail: {
      color: '#ef4444',
      pattern: 'medical_cross',
      intensity: 1.0,
      particleCount: 4
    },
    unlockCondition: {
      type: 'patients_saved',
      requirement: 'Save 10 patients successfully'
    },
    lore: "The ultimate in mobile medical care. This ship can perform complex procedures while providing comprehensive patient monitoring and life support. It's like having an entire hospital at your fingertips.",
    manufacturer: "Global Health Innovations",
    yearDesigned: 2026,
    maxSpeed: "18 nanometers/second",
    powerSource: "Medical fusion reactor",
    specialFeatures: [
      "Complete medical facility suite",
      "Advanced patient monitoring systems",
      "Surgical suite integration",
      "Extended mission capability",
      "Medical research laboratory"
    ],
    stats: {
      reliability: 98,
      learningCurve: 40,
      versatility: 95,
      repairCost: 'High'
    }
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
      intensity: 1.2,
      particleCount: 10
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Combo Master" achievement'
    },
    lore: "Engineered for surgeons who operate at the speed of thought. The electrical enhancement systems provide unparalleled responsiveness and precision, allowing for procedures that border on the superhuman.",
    manufacturer: "Velocity Medical Systems",
    yearDesigned: 2027,
    maxSpeed: "45 nanometers/second",
    powerSource: "Lightning capacitor array",
    specialFeatures: [
      "Electrical enhancement systems",
      "Ultra-responsive neural interface",
      "Speed boost capability",
      "Time dilation field generator",
      "Instant reaction protocols"
    ],
    stats: {
      reliability: 80,
      learningCurve: 50,
      versatility: 70,
      repairCost: 'Medium'
    }
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
      intensity: 1.1,
      particleCount: 6
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Gentle Healer" achievement'
    },
    lore: "Created from crystallized empathy and powered by the surgeon's desire to heal. This ship seems to pulse with life itself, bringing comfort to patients and enhancing the natural healing process.",
    manufacturer: "Compassionate Care Technologies",
    yearDesigned: 2025,
    maxSpeed: "20 nanometers/second",
    powerSource: "Empathy resonance engine",
    specialFeatures: [
      "Healing amplification field",
      "Patient comfort enhancement",
      "Empathy resonance technology",
      "Emotional stability systems",
      "Love energy projection"
    ],
    stats: {
      reliability: 96,
      learningCurve: 15,
      versatility: 85,
      repairCost: 'Low'
    }
  },

  '💎': {
    id: 'crystal_ship',
    name: 'Crystal Ship',
    emoji: '💎',
    cost: 200,
    rarity: 'epic',
    category: 'luxury',
    description: 'A rare crystalline vessel that refracts healing energy through its prismatic structure, creating rainbow healing effects.',
    specifications: {
      speed: 1.1,
      maneuverability: 1.3,
      efficiency: 1.3,
      comfort: 1.5
    },
    trail: {
      color: '#a855f7',
      pattern: 'prismatic',
      intensity: 1.3,
      particleCount: 12
    },
    unlockCondition: {
      type: 'level',
      requirement: 'Reach surgeon level 5'
    },
    lore: "Grown in zero-gravity crystal farms orbiting distant stars, this vessel's prismatic structure can split healing energy into its component frequencies for maximum effectiveness. Each facet holds ancient healing wisdom.",
    manufacturer: "Prismatic Medical Crystals Ltd",
    yearDesigned: 2028,
    maxSpeed: "25 nanometers/second",
    powerSource: "Crystalline energy matrix",
    specialFeatures: [
      "Prismatic energy refraction",
      "Crystal resonance healing",
      "Luxury comfort systems",
      "Self-maintaining crystal structure",
      "Frequency spectrum analysis"
    ],
    stats: {
      reliability: 90,
      learningCurve: 35,
      versatility: 88,
      repairCost: 'Very High'
    }
  },

  '🌟': {
    id: 'star_healer',
    name: 'Star Healer',
    emoji: '🌟',
    cost: 300,
    rarity: 'legendary',
    category: 'cosmic',
    description: 'The legendary cosmic vessel that channels the healing power of distant stars and cosmic energy.',
    specifications: {
      speed: 1.4,
      maneuverability: 1.5,
      efficiency: 1.6,
      comfort: 1.8
    },
    trail: {
      color: '#06d6a0',
      pattern: 'stellar',
      intensity: 1.5,
      particleCount: 15
    },
    unlockCondition: {
      type: 'achievement',
      requirement: 'Unlock "Brain Surgeon" achievement'
    },
    lore: "Forged in the heart of a dying star and blessed by cosmic healers from across the galaxy, this vessel represents the pinnacle of medical technology and spiritual healing. It is said that only the most worthy surgeons can unlock its true potential.",
    manufacturer: "Cosmic Healers Consortium",
    yearDesigned: "Timeless",
    maxSpeed: "50 nanometers/second",
    powerSource: "Stellar energy core",
    specialFeatures: [
      "Cosmic healing energy channeling",
      "Star-blessed enhancement systems",
      "Interdimensional stability field",
      "Perfect harmony resonance",
      "Universal healing frequency"
    ],
    stats: {
      reliability: 100,
      learningCurve: 60,
      versatility: 100,
      repairCost: 'Legendary'
    }
  }
};

// Ship rarity classifications
export const shipRarity = {
  starter: {
    name: 'Starter',
    color: '#9ca3af',
    description: 'Basic ships available to all surgeons',
    unlockRequirement: 'None',
    trailEffect: 'Basic'
  },
  uncommon: {
    name: 'Uncommon',
    color: '#10b981',
    description: 'Ships with enhanced capabilities',
    unlockRequirement: 'Achievement or coins',
    trailEffect: 'Enhanced'
  },
  rare: {
    name: 'Rare',
    color: '#3b82f6',
    description: 'Specialized ships with unique features',
    unlockRequirement: 'Significant achievement',
    trailEffect: 'Special'
  },
  epic: {
    name: 'Epic',
    color: '#8b5cf6',
    description: 'Exceptional ships with advanced technology',
    unlockRequirement: 'Major milestone',
    trailEffect: 'Advanced'
  },
  legendary: {
    name: 'Legendary',
    color: '#f59e0b',
    description: 'The finest ships in existence',
    unlockRequirement: 'Legendary achievement',
    trailEffect: 'Legendary'
  }
};

// Ship categories with detailed descriptions
export const shipCategories = {
  classic: {
    name: 'Classic',
    icon: '🚀',
    description: 'Traditional and reliable medical vessels',
    philosophy: 'Time-tested designs that prioritize reliability and ease of use'
  },
  alien: {
    name: 'Alien Technology',
    icon: '🛸',
    description: 'Advanced extraterrestrial medical technology',
    philosophy: 'Mysterious technologies that push the boundaries of medical science'
  },
  emergency: {
    name: 'Emergency Response',
    icon: '🚁',
    description: 'Ships designed for rapid medical response',
    philosophy: 'Speed and efficiency for critical medical situations'
  },
  medical: {
    name: 'Medical Specialist',
    icon: '🏥',
    description: 'Ships with comprehensive medical facilities',
    philosophy: 'Complete medical capabilities in a mobile platform'
  },
  speed: {
    name: 'High Speed',
    icon: '⚡',
    description: 'Ultra-fast ships for quick procedures',
    philosophy: 'Maximum speed and responsiveness for time-critical operations'
  },
  healing: {
    name: 'Healing Focused',
    icon: '❤️',
    description: 'Ships that amplify natural healing abilities',
    philosophy: 'Enhancing the surgeon\'s natural empathy and healing touch'
  },
  luxury: {
    name: 'Luxury',
    icon: '💎',
    description: 'Premium ships with enhanced comfort features',
    philosophy: 'The finest materials and technology for discerning surgeons'
  },
  cosmic: {
    name: 'Cosmic',
    icon: '🌟',
    description: 'Ships that channel universal healing energy',
    philosophy: 'Connecting with cosmic forces for transcendent healing'
  }
};

// Ship trail patterns with visual effects
export const trailPatterns = {
  standard: {
    name: 'Standard',
    description: 'Classic particle trail',
    particleCount: 5,
    fadeRate: 0.9,
    spreadAngle: 15,
    visualEffect: 'Simple streaming particles'
  },
  spiral: {
    name: 'Spiral',
    description: 'Spiraling energy pattern',
    particleCount: 8,
    fadeRate: 0.85,
    spreadAngle: 25,
    visualEffect: 'Rotating spiral pattern'
  },
  rotor: {
    name: 'Rotor',
    description: 'Helicopter rotor-style trail',
    particleCount: 6,
    fadeRate: 0.88,
    spreadAngle: 30,
    visualEffect: 'Rotating blade-like pattern'
  },
  medical_cross: {
    name: 'Medical Cross',
    description: 'Cross-shaped healing pattern',
    particleCount: 4,
    fadeRate: 0.92,
    spreadAngle: 0,
    visualEffect: 'Cross-shaped particle formation'
  },
  lightning: {
    name: 'Lightning',
    description: 'Electric bolt pattern',
    particleCount: 10,
    fadeRate: 0.8,
    spreadAngle: 35,
    visualEffect: 'Crackling electrical energy'
  },
  hearts: {
    name: 'Hearts',
    description: 'Heart-shaped love energy',
    particleCount: 6,
    fadeRate: 0.9,
    spreadAngle: 20,
    visualEffect: 'Floating heart particles'
  },
  prismatic: {
    name: 'Prismatic',
    description: 'Rainbow crystal refraction',
    particleCount: 12,
    fadeRate: 0.87,
    spreadAngle: 40,
    visualEffect: 'Shimmering rainbow crystals'
  },
  stellar: {
    name: 'Stellar',
    description: 'Star-powered cosmic trail',
    particleCount: 15,
    fadeRate: 0.85,
    spreadAngle: 45,
    visualEffect: 'Sparkling starlight with cosmic energy'
  }
};

// Ship upgrade paths and enhancements
export const shipUpgrades = {
  speed: {
    name: 'Speed Enhancement',
    description: 'Increases ship movement speed',
    cost: 50,
    maxLevel: 5,
    effect: (level) => 1 + (level * 0.1),
    visualEffect: 'Enhanced engine glow'
  },
  efficiency: {
    name: 'Medical Efficiency',
    description: 'Improves healing effectiveness',
    cost: 75,
    maxLevel: 3,
    effect: (level) => 1 + (level * 0.05),
    visualEffect: 'Healing aura enhancement'
  },
  trail: {
    name: 'Trail Enhancement',
    description: 'Makes ship trail more visible and beautiful',
    cost: 25,
    maxLevel: 3,
    effect: (level) => 1 + (level * 0.2),
    visualEffect: 'Enhanced particle effects'
  },
  comfort: {
    name: 'Comfort Systems',
    description: 'Reduces surgeon fatigue during long procedures',
    cost: 60,
    maxLevel: 4,
    effect: (level) => 1 + (level * 0.08),
    visualEffect: 'Soothing ambient lighting'
  },
  maneuverability: {
    name: 'Enhanced Controls',
    description: 'Improves ship responsiveness and precision',
    cost: 80,
    maxLevel: 3,
    effect: (level) => 1 + (level * 0.12),
    visualEffect: 'Precision control indicators'
  }
};

// Ship collection rewards and milestones
export const collectionRewards = {
  '2_ships': {
    requirement: 2,
    reward: 'Beginner Collector Badge',
    bonus: '+10% coin earning from all sources',
    title: 'Ship Enthusiast'
  },
  '4_ships': {
    requirement: 4,
    reward: 'Fleet Builder Badge',
    bonus: '+15% XP gain from all activities',
    title: 'Fleet Commander'
  },
  '6_ships': {
    requirement: 6,
    reward: 'Master Collector Badge',
    bonus: '+20% research points from discoveries',
    title: 'Ship Master'
  },
  '8_ships': {
    requirement: 8,
    reward: 'Fleet Admiral Badge',
    bonus: '+25% all rewards and special hangar access',
    title: 'Fleet Admiral',
    specialAccess: 'Legendary Hangar'
  }
};

// Ship performance statistics
export const shipPerformance = {
  calculateOverallRating: (ship) => {
    const specs = ship.specifications;
    return Math.round((specs.speed + specs.maneuverability + specs.efficiency + specs.comfort) / 4 * 100);
  },
  
  getBestInCategory: (category) => {
    const categoryShips = Object.values(shipCollection).filter(ship => ship.category === category);
    return categoryShips.reduce((best, current) => {
      const currentRating = shipPerformance.calculateOverallRating(current);
      const bestRating = shipPerformance.calculateOverallRating(best);
      return currentRating > bestRating ? current : best;
    });
  },
  
  getRecommendedShip: (playerLevel, playstyle) => {
    const recommendations = {
      beginner: '🚀',
      speed_focused: '⚡',
      healing_focused: '❤️',
      advanced: '🏥',
      expert: '💎',
      master: '🌟'
    };
    
    if (playerLevel < 3) return recommendations.beginner;
    if (playerLevel < 5) return recommendations[playstyle] || recommendations.beginner;
    if (playerLevel < 7) return recommendations.advanced;
    if (playerLevel < 10) return recommendations.expert;
    return recommendations.master;
  }
};

// Ship maintenance and care
export const shipMaintenance = {
  durability: {
    '🚀': { degradationRate: 0.02, repairCost: 'Low' },
    '🛸': { degradationRate: 0.05, repairCost: 'High' },
    '🚁': { degradationRate: 0.03, repairCost: 'Medium' },
    '🏥': { degradationRate: 0.01, repairCost: 'High' },
    '⚡': { degradationRate: 0.04, repairCost: 'Medium' },
    '❤️': { degradationRate: 0.01, repairCost: 'Low' },
    '💎': { degradationRate: 0.02, repairCost: 'Very High' },
    '🌟': { degradationRate: 0.001, repairCost: 'Legendary' }
  },
  
  calculateRepairCost: (ship, damage) => {
    const baseCost = {
      'Low': 10,
      'Medium': 25,
      'High': 50,
      'Very High': 100,
      'Legendary': 200
    };
    
    const shipData = shipMaintenance.durability[ship.emoji];
    return Math.ceil(baseCost[shipData.repairCost] * damage);
  }
};

export default {
  shipCollection,
  shipRarity,
  shipCategories,
  trailPatterns,
  shipUpgrades,
  collectionRewards,
  shipPerformance,
  shipMaintenance
};