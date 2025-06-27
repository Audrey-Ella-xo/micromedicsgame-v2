// Enhanced utility functions for Version 2.0 gameplay mechanics

// Haptic feedback with enhanced patterns for different actions
export const triggerHaptic = (type = 'default') => {
  if (!navigator.vibrate) return;
  
  const patterns = {
    repair: [30, 10, 30], // Quick double pulse for repairs
    combo: [50, 20, 50, 20, 50], // Triple pulse for combos
    achievement: [80, 30, 80, 30, 80], // Celebration pattern
    levelup: [100, 50, 100, 50, 100, 50, 100], // Big celebration
    damage: [100], // Single strong pulse for damage
    virus_eliminated: [40, 20, 40, 20, 60], // Success pattern
    patient_saved: [60, 30, 60, 30, 60, 30, 100], // Major success
    ship_unlock: [70, 20, 70, 20, 70], // New ship celebration
    tool_optimal: [25, 15, 25], // Gentle success for optimal tool
    navigation: [20], // Subtle feedback for movement
    error: [150], // Strong pulse for errors
    warning: [80, 40, 80], // Warning pattern
    default: [50] // Standard feedback
  };
  
  navigator.vibrate(patterns[type] || patterns.default);
};

// Enhanced distance calculation with performance optimization
export const calculateDistance = (pos1, pos2) => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

// Fast distance calculation without square root (for comparison only)
export const calculateDistanceSquared = (pos1, pos2) => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return dx * dx + dy * dy;
};

// Enhanced boundary checking with configurable margins
export const clampPosition = (position, minMargin = 8, maxMargin = 92) => {
  return {
    x: Math.max(minMargin, Math.min(maxMargin, position.x)),
    y: Math.max(minMargin, Math.min(maxMargin, position.y))
  };
};

// Random position generation with exclusion zones
export const generateRandomPosition = (exclusionZones = [], minDistance = 30, bounds = { x: 100, y: 100 }) => {
  let attempts = 0;
  const maxAttempts = 50;
  
  while (attempts < maxAttempts) {
    const position = {
      x: Math.random() * (bounds.x - 20) + 10,
      y: Math.random() * (bounds.y - 20) + 10
    };
    
    const isClear = exclusionZones.every(zone => 
      calculateDistance(position, zone) >= minDistance
    );
    
    if (isClear) return position;
    attempts++;
  }
  
  // Fallback to safe position
  return { x: 50, y: 50 };
};

// Enhanced angle calculation with degree/radian conversion
export const calculateAngle = (from, to, inDegrees = true) => {
  const angleRad = Math.atan2(to.y - from.y, to.x - from.x);
  return inDegrees ? angleRad * 180 / Math.PI : angleRad;
};

// Normalize diagonal movement to prevent speed advantage
export const normalizeDiagonalMovement = (deltaX, deltaY) => {
  if (deltaX !== 0 && deltaY !== 0) {
    const normalizer = Math.sqrt(2) / 2;
    return {
      deltaX: deltaX * normalizer,
      deltaY: deltaY * normalizer
    };
  }
  return { deltaX, deltaY };
};

// Enhanced collision detection with different shapes
export const checkCollision = (obj1, obj2, type = 'circle') => {
  switch (type) {
    case 'circle':
      return calculateDistance(obj1, obj2) < (obj1.radius + obj2.radius);
    case 'rectangle':
      return (obj1.x < obj2.x + obj2.width &&
              obj1.x + obj1.width > obj2.x &&
              obj1.y < obj2.y + obj2.height &&
              obj1.y + obj1.height > obj2.y);
    default:
      return calculateDistance(obj1, obj2) < 15; // Default radius
  }
};

// Time formatting utilities
export const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const formatTimeDetailed = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

// Number formatting utilities
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatScore = (score) => {
  return score.toLocaleString();
};

// Random utilities
export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Enhanced ID generation
export const generateId = (prefix = '') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const generateUniqueId = () => {
  return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Color utilities
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const interpolateColor = (color1, color2, factor) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return color1;
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  
  return rgbToHex(r, g, b);
};

// Performance monitoring utilities
export const createPerformanceMonitor = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  let fps = 60;
  
  return {
    update: () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      return fps;
    },
    getFPS: () => fps
  };
};

// Local storage utilities with error handling
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
    return false;
  }
};

export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
    return defaultValue;
  }
};

export const clearLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
    return false;
  }
};

// Validation utilities
export const validatePosition = (position) => {
  return (
    typeof position === 'object' &&
    position !== null &&
    typeof position.x === 'number' &&
    typeof position.y === 'number' &&
    !isNaN(position.x) &&
    !isNaN(position.y)
  );
};

export const validateGameState = (state) => {
  const requiredFields = ['score', 'health', 'level', 'xp'];
  return requiredFields.every(field => 
    typeof state[field] === 'number' && !isNaN(state[field])
  );
};

// Animation utilities
export const easeInOut = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const easeIn = (t) => {
  return t * t;
};

export const easeOut = (t) => {
  return t * (2 - t);
};

export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

// Device detection utilities
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const getDevicePixelRatio = () => {
  return window.devicePixelRatio || 1;
};

// Enhanced debugging utilities
export const debugLog = (message, data = null, level = 'info') => {
  if (process.env.NODE_ENV === 'development') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    
    switch (level) {
      case 'error':
        console.error(logMessage, data);
        break;
      case 'warn':
        console.warn(logMessage, data);
        break;
      case 'debug':
        console.debug(logMessage, data);
        break;
      default:
        console.log(logMessage, data);
    }
  }
};

// Achievement checking utilities
export const checkAchievementCondition = (condition, gameState) => {
  switch (condition.type) {
    case 'repair_count':
      return gameState.totalRepairs >= condition.value;
    case 'combo_count':
      return gameState.maxCombo >= condition.value;
    case 'patients_saved':
      return gameState.patientsSaved >= condition.value;
    case 'level_reached':
      return gameState.level >= condition.value;
    case 'ships_unlocked':
      return gameState.unlockedShips.length >= condition.value;
    case 'virus_types_discovered':
      return gameState.virusCollection.size >= condition.value;
    case 'perfect_health_stage':
      return gameState.lastStageHealth === 100;
    case 'stage_time':
      return gameState.lastStageTime <= condition.value;
    case 'tutorial_no_damage':
      return gameState.tutorialNoDamage === true;
    case 'tutorial_time':
      return gameState.tutorialTime <= condition.value;
    case 'optimal_tool_streak':
      return gameState.optimalToolStreak >= condition.value;
    case 'stages_no_damage':
      return gameState.stagesNoDamage >= condition.value;
    case 'facts_learned':
      return gameState.factsLearned >= condition.value;
    case 'tools_unlocked':
      return gameState.toolsUnlocked.length >= condition.value;
    case 'daily_streak':
      return gameState.consecutiveDays >= condition.value;
    case 'night_play':
      const hour = new Date().getHours();
      return hour >= 0 && hour < 6;
    case 'story_complete':
      return gameState.storyComplete === true;
    case 'critical_save':
      return gameState.criticalSaves > 0;
    case 'perfect_efficiency':
      return gameState.lastStageEfficiency >= condition.value;
    case 'easter_egg_found':
      return gameState.easterEggsFound > 0;
    case 'no_powerups':
      return gameState.lastStageNoPowerUps === true;
    case 'total_time':
      return gameState.totalGameTime <= condition.value;
    default:
      return false;
  }
};

// Enhanced particle system utilities
export const createParticle = (x, y, color, velocity = null, life = 60, size = null) => {
  return {
    id: generateId('particle'),
    x,
    y,
    vx: velocity?.x || (Math.random() - 0.5) * 4,
    vy: velocity?.y || (Math.random() - 0.5) * 4,
    life,
    maxLife: life,
    color,
    size: size || Math.random() * 4 + 2,
    alpha: 1.0,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10
  };
};

export const updateParticles = (particles) => {
  return particles
    .map(particle => ({
      ...particle,
      x: particle.x + particle.vx,
      y: particle.y + particle.vy,
      life: particle.life - 1,
      vx: particle.vx * 0.98,
      vy: particle.vy * 0.98,
      alpha: particle.life / particle.maxLife,
      rotation: particle.rotation + particle.rotationSpeed
    }))
    .filter(particle => particle.life > 0);
};

// Enhanced visual feedback utilities
export const createVisualFeedback = (x, y, text, color = '#10b981', type = 'standard') => {
  const feedbackTypes = {
    standard: { size: 16, duration: 120, movement: { x: 0, y: -1 } },
    large: { size: 24, duration: 180, movement: { x: 0, y: -1.5 } },
    combo: { size: 20, duration: 150, movement: { x: (Math.random() - 0.5) * 2, y: -2 } },
    achievement: { size: 28, duration: 240, movement: { x: 0, y: -0.5 } }
  };

  const config = feedbackTypes[type] || feedbackTypes.standard;
  
  return {
    id: generateId('feedback'),
    x,
    y,
    text,
    color,
    size: config.size,
    life: config.duration,
    maxLife: config.duration,
    vx: config.movement.x,
    vy: config.movement.y,
    alpha: 1.0
  };
};

export const updateVisualFeedback = (feedback) => {
  return feedback
    .map(item => ({
      ...item,
      x: item.x + item.vx,
      y: item.y + item.vy,
      life: item.life - 1,
      alpha: item.life / item.maxLife,
      size: item.size * (1 + (item.maxLife - item.life) / item.maxLife * 0.2)
    }))
    .filter(item => item.life > 0);
};

// Enhanced combo system utilities
export const calculateComboMultiplier = (comboCount) => {
  if (comboCount < 3) return 1.0;
  if (comboCount < 5) return 1.2;
  if (comboCount < 8) return 1.5;
  if (comboCount < 12) return 2.0;
  return 2.5; // Max multiplier
};

export const getComboMessage = (comboCount) => {
  const messages = {
    3: 'Nice Combo!',
    5: 'Great Combo!',
    7: 'Amazing Combo!',
    10: 'INCREDIBLE COMBO!',
    15: 'LEGENDARY COMBO!'
  };
  
  for (let count = 15; count >= 3; count--) {
    if (comboCount >= count && messages[count]) {
      return messages[count];
    }
  }
  return 'Combo!';
};

// Enhanced tool optimization utilities
export const getOptimalTool = (neuronType, virusType = null) => {
  const neuronToolMap = {
    motor: 'precision',
    memory: 'stemcell',
    neurotransmitter: 'stemcell',
    executive: 'precision',
    connection: 'ultrasonic',
    vital: 'quantum',
    cognitive: 'precision',
    sensory: 'basic',
    inhibitory: 'ultrasonic',
    awareness: 'quantum'
  };

  const virusWeaknessMap = {
    inflammation: 'precision',
    toxin: 'basic',
    necrosis: 'stemcell',
    oxidative: 'ultrasonic',
    prion: 'quantum',
    autoimmune: 'stemcell',
    genetic: 'quantum',
    nanomachine: 'precision'
  };

  if (virusType && virusWeaknessMap[virusType]) {
    return virusWeaknessMap[virusType];
  }

  return neuronToolMap[neuronType] || 'basic';
};

export const calculateToolEfficiency = (selectedTool, optimalTool) => {
  if (selectedTool === optimalTool) return 1.0;
  
  const toolCompatibility = {
    basic: { precision: 0.8, stemcell: 0.7, ultrasonic: 0.6, quantum: 0.5 },
    precision: { basic: 0.8, stemcell: 0.6, ultrasonic: 0.7, quantum: 0.6 },
    stemcell: { basic: 0.7, precision: 0.6, ultrasonic: 0.8, quantum: 0.7 },
    ultrasonic: { basic: 0.6, precision: 0.7, stemcell: 0.8, quantum: 0.6 },
    quantum: { basic: 0.5, precision: 0.6, stemcell: 0.7, ultrasonic: 0.6 }
  };

  return toolCompatibility[selectedTool]?.[optimalTool] || 0.5;
};

// Enhanced level progression utilities
export const calculateXPNeeded = (level) => {
  return 500 * level; // 500 XP per level
};

export const calculateLevel = (totalXP) => {
  return Math.floor(totalXP / 500) + 1;
};

export const getPlayerTitle = (level, achievements = []) => {
  if (achievements.includes('legendary_surgeon')) return 'Legendary Surgeon';
  if (achievements.includes('brain_surgeon')) return 'Brain Surgeon';
  if (achievements.includes('master_surgeon')) return 'Master Surgeon';
  if (level >= 10) return 'Expert Surgeon';
  if (level >= 7) return 'Senior Surgeon';
  if (level >= 5) return 'Surgeon';
  if (level >= 3) return 'Junior Surgeon';
  return 'Medical Student';
};

// Enhanced difficulty scaling utilities
export const getDifficultyMultiplier = (stage, playerLevel) => {
  const baseDifficulty = {
    1: 0.8,
    2: 1.0,
    3: 1.2,
    4: 1.5,
    5: 2.0
  };

  const levelAdjustment = Math.max(0.5, 1 - (playerLevel - stage) * 0.1);
  return (baseDifficulty[stage] || 1.0) * levelAdjustment;
};

// Enhanced reward calculation utilities
export const calculateStageRewards = (stage, performance, difficulty = 1.0) => {
  const baseRewards = {
    coins: 15 + (stage * 5),
    xp: 100 + (stage * 25),
    researchPoints: 20 + (stage * 10)
  };

  const performanceMultiplier = Math.max(0.5, performance / 100);
  const difficultyMultiplier = difficulty;

  return {
    coins: Math.round(baseRewards.coins * performanceMultiplier * difficultyMultiplier),
    xp: Math.round(baseRewards.xp * performanceMultiplier * difficultyMultiplier),
    researchPoints: Math.round(baseRewards.researchPoints * performanceMultiplier * difficultyMultiplier)
  };
};

// Enhanced daily challenge utilities
export const generateDailyChallenge = (date = new Date()) => {
  const challenges = [
    'steady_surgeon',
    'perfect_precision',
    'virus_hunter',
    'gentle_healer',
    'speed_surgeon',
    'combo_master',
    'knowledge_seeker'
  ];

  // Use date as seed for consistent daily challenges
  const seed = date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate();
  const challengeIndex = seed % challenges.length;
  
  return challenges[challengeIndex];
};

export const checkDailyChallengeProgress = (challengeType, gameState, actionData) => {
  switch (challengeType) {
    case 'steady_surgeon':
      return actionData.stageTime >= 120 ? 1 : 0;
    case 'perfect_precision':
      return actionData.optimalToolUse ? gameState.perfectPrecisionCount + 1 : gameState.perfectPrecisionCount;
    case 'virus_hunter':
      return actionData.virusEliminatedWithWeakness ? gameState.virusHunterCount + 1 : gameState.virusHunterCount;
    case 'gentle_healer':
      return actionData.stageCompletedNoDamage ? 1 : 0;
    case 'speed_surgeon':
      return actionData.stageTime <= 120 ? 1 : 0;
    case 'combo_master':
      return actionData.comboAchieved >= 5 ? 1 : 0;
    case 'knowledge_seeker':
      return actionData.factLearned ? gameState.knowledgeSeekerCount + 1 : gameState.knowledgeSeekerCount;
    default:
      return 0;
  }
};

// Enhanced game state utilities
export const createInitialGameState = () => {
  return {
    version: '2.0.0',
    level: 1,
    xp: 0,
    coins: 0,
    researchPoints: 0,
    knowledgePoints: 0,
    consecutiveDays: 0,
    totalRepairs: 0,
    totalPatientsHealed: 0,
    totalVirusesEliminated: 0,
    maxCombo: 0,
    earnedAchievements: new Set(),
    unlockedShips: ['🚀'],
    currentShip: '🚀',
    unlockedTools: ['basic'],
    virusCollection: new Set(),
    factsLearned: 0,
    stagesCompleted: [],
    perfectStages: 0,
    lastStageHealth: 100,
    lastStageTime: 0,
    lastStageEfficiency: 0,
    tutorialCompleted: false,
    tutorialNoDamage: false,
    tutorialTime: 0,
    optimalToolStreak: 0,
    stagesNoDamage: 0,
    criticalSaves: 0,
    storyComplete: false,
    easterEggsFound: 0,
    totalGameTime: 0,
    lastPlayDate: null,
    dailyChallengeProgress: {},
    missionProgress: []
  };
};

export const enhancedGameUtils = {
  triggerHaptic,
  calculateDistance,
  calculateDistanceSquared,
  clampPosition,
  generateRandomPosition,
  calculateAngle,
  normalizeDiagonalMovement,
  checkCollision,
  formatTime,
  formatTimeDetailed,
  formatNumber,
  formatScore,
  getRandomElement,
  getRandomFloat,
  getRandomInt,
  generateId,
  generateUniqueId,
  hexToRgb,
  rgbToHex,
  interpolateColor,
  createPerformanceMonitor,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
  validatePosition,
  validateGameState,
  easeInOut,
  easeIn,
  easeOut,
  lerp,
  isMobile,
  isTouchDevice,
  getDevicePixelRatio,
  debugLog,
  checkAchievementCondition,
  createParticle,
  updateParticles,
  createVisualFeedback,
  updateVisualFeedback,
  calculateComboMultiplier,
  getComboMessage,
  getOptimalTool,
  calculateToolEfficiency,
  calculateXPNeeded,
  calculateLevel,
  getPlayerTitle,
  getDifficultyMultiplier,
  calculateStageRewards,
  generateDailyChallenge,
  checkDailyChallengeProgress,
  createInitialGameState
};

export default enhancedGameUtils;