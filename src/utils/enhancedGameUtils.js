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
    default:
      return false;
  }
};

// Enhanced particle system utilities
export const createParticle = (x, y, color, velocity = null, life = 60) => {
  return {
    id: generateId('particle'),
    x,
    y,
    vx: velocity?.x || (Math.random() - 0.5) * 4,
    vy: velocity?.y || (Math.random() - 0.5) * 4,
    life,
    maxLife: life,
    color,
    size: Math.random() * 4 + 2,
    alpha: 1.0
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
      alpha: particle.life / particle.maxLife
    }))
    .filter(particle => particle.life > 0);
};

export default {
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
  updateParticles
};