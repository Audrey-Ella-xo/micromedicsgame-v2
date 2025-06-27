/* eslint-disable no-unused-vars */
/* eslint-disable default-case, react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';

const MicroMedicsGame = () => {
  // Core game state
  const [gameState, setGameState] = useState('intro');
  const [currentStage, setCurrentStage] = useState(1);
  const [shipPosition, setShipPosition] = useState({ x: 50, y: 60 });
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [repairedNeurons, setRepairedNeurons] = useState(new Set());
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(240); // More generous time
  const [knowledgePoints, setKnowledgePoints] = useState(0);
  
  // Tutorial system
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [safeMode, setSafeMode] = useState(true);
  const [highlightedNeuron, setHighlightedNeuron] = useState(null);
  const [showLearningIntro, setShowLearningIntro] = useState(false);
  
  // Enhanced medical realism
  const [currentTool, setCurrentTool] = useState('basic');
  const [patientVitals, setPatientVitals] = useState({
    heartRate: 72,
    brainActivity: 85,
    oxygenLevel: 98,
    stress: 30
  });
  const [caseStory, setCaseStory] = useState(null);
  const [showCaseBriefing, setShowCaseBriefing] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  // Mobile game hooks
  const [dailyChallenge, setDailyChallenge] = useState({
    id: 1,
    title: "Steady Surgeon",
    description: "Complete Stage 1 without rushing",
    progress: 0,
    target: 1,
    reward: "🏆 50 Research Points",
    completed: false
  });
  const [consecutiveDays, setConsecutiveDays] = useState(3);
  const [researchPoints, setResearchPoints] = useState(120);
  const [unlockedTools, setUnlockedTools] = useState(['basic', 'precision']);
  const [virusCollection, setVirusCollection] = useState(new Set(['inflammation', 'toxin']));
  const [totalVirusTypes, setTotalVirusTypes] = useState(8);
  
  // Enhanced gameplay elements
  const [viruses, setViruses] = useState([]);
  const [powerUps, setPowerUps] = useState([]);
  const [particles, setParticles] = useState([]);
  const [activePowerUp, setActivePowerUp] = useState(null);
  const [showFact, setShowFact] = useState(null);
  const [virusSpawnTimer, setVirusSpawnTimer] = useState(60); // Much longer spawn time
  const [invulnerable, setInvulnerable] = useState(false);
  const [bloodFlow, setBloodFlow] = useState([]);
  const [oxygenBubbles, setOxygenBubbles] = useState([]);
  const [immuneCells, setImmuneCells] = useState([]);
  
  // Enhanced progression with ship customization and endless mode
  const [shipTrail, setShipTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(3);
  const [coins, setCoins] = useState(75);
  const [achievements, setAchievements] = useState(['first_repair', 'combo_starter']);
  const [missions, setMissions] = useState([
    { id: 1, text: "Repair 3 neurons", progress: 0, target: 3, reward: "🎯 Precision Badge", completed: false },
    { id: 2, text: "Discover 2 virus types", progress: 2, target: 2, reward: "🔬 Research Points", completed: true },
    { id: 3, text: "Maintain 3-day streak", progress: 3, target: 3, reward: "🔥 Streak Master", completed: true }
  ]);
  const [visualFeedback, setVisualFeedback] = useState([]);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showReward, setShowReward] = useState(null);
  const [screenShake, setScreenShake] = useState(0);
  const [currentHint, setCurrentHint] = useState('');
  const [showStageComplete, setShowStageComplete] = useState(false);
  const [celebrationTimer, setCelebrationTimer] = useState(0);
  
  // Ship customization system
  const [currentShip, setCurrentShip] = useState('🚀');
  const [unlockedShips, setUnlockedShips] = useState(['🚀']);
  const [showShipSelector, setShowShipSelector] = useState(false);
  
  // Achievement system
  const [earnedAchievements, setEarnedAchievements] = useState(new Set());
  const [showAchievement, setShowAchievement] = useState(null);
  
  // Patient feedback system
  const [showPatientMessage, setShowPatientMessage] = useState(null);
  
  // Endless mode
  const [endlessLevel, setEndlessLevel] = useState(1);
  const [totalPatientsHealed, setTotalPatientsHealed] = useState(0);
  const [totalVirusesEliminated, setTotalVirusesEliminated] = useState(0);
  const [totalNeuronsRepaired, setTotalNeuronsRepaired] = useState(0);
  
  const gameAreaRef = useRef(null);
  const gameLoopRef = useRef(null);
  const movementRef = useRef(null);
  
  // Keyboard navigation state
  const [keysPressed, setKeysPressed] = useState(new Set());
  const [keyboardMovementSpeed, setKeyboardMovementSpeed] = useState(2.5);
  const keyboardMoveRef = useRef(null);

  // Enhanced medical tools
  const medicalTools = {
    basic: { name: "Basic Nano-Probe", icon: "🔧", description: "Standard repair tool", efficiency: 1.0, color: "#60a5fa" },
    precision: { name: "Precision Laser", icon: "⚡", description: "High-precision repairs", efficiency: 1.3, color: "#fbbf24" },
    stemcell: { name: "Stem Cell Injector", icon: "🧬", description: "Regenerative healing", efficiency: 1.1, color: "#10b981" },
    ultrasonic: { name: "Ultrasonic Probe", icon: "🌊", description: "Gentle vibration therapy", efficiency: 1.2, color: "#8b5cf6" }
  };

  // Ship customization options
  const availableShips = {
    '🚀': { name: 'Nano Rocket', cost: 0, trail: '#60a5fa', description: 'Classic medical ship' },
    '🛸': { name: 'UFO Healer', cost: 50, trail: '#10b981', description: 'Advanced alien tech' },
    '🚁': { name: 'Med Helicopter', cost: 75, trail: '#f59e0b', description: 'Emergency response' },
    '🏥': { name: 'Hospital Ship', cost: 100, trail: '#ef4444', description: 'Mobile medical center' },
    '⚡': { name: 'Lightning Bolt', cost: 125, trail: '#fbbf24', description: 'Speed of light healing' },
    '💎': { name: 'Crystal Ship', cost: 200, trail: '#a855f7', description: 'Rare crystalline vessel' },
    '🌟': { name: 'Star Healer', cost: 300, trail: '#06d6a0', description: 'Legendary cosmic ship' },
    '❤️': { name: 'Heart Ship', cost: 150, trail: '#f472b6', description: 'Pure healing energy' }
  };

  // Achievement definitions
  const gameAchievements = {
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

  // Patient thank you messages
  const patientMessages = [
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

  // Medical case stories
  const medicalCases = {
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
  const virusTypes = {
    inflammation: { name: "Inflammation Virus", icon: "🦠", rarity: "Common", description: "Causes tissue swelling", weakness: "precision" },
    toxin: { name: "Neurotoxin", icon: "☣️", rarity: "Common", description: "Damages neural pathways", weakness: "basic" },
    necrosis: { name: "Necrosis Agent", icon: "💀", rarity: "Rare", description: "Causes cell death", weakness: "stemcell" },
    oxidative: { name: "Oxidative Stress", icon: "🔥", rarity: "Uncommon", description: "Free radical damage", weakness: "ultrasonic" }
  };

  // Enhanced game data
  const medicalFacts = [
    { fact: "Your brain uses 20% of your body's energy - that's about 400 calories daily!", category: "Brain Energy", points: 15, xp: 25 },
    { fact: "Neurons can fire up to 200 times per second - faster than a hummingbird's wings!", category: "Neural Speed", points: 20, xp: 30 },
    { fact: "You have 86 billion neurons - more than stars in the Milky Way!", category: "Brain Structure", points: 25, xp: 35 },
    { fact: "Neuroplasticity allows your brain to rewire itself throughout your entire life!", category: "Brain Development", points: 35, xp: 45 },
    { fact: "The blood-brain barrier protects your brain from 99% of potential toxins!", category: "Brain Protection", points: 30, xp: 40 }
  ];

  const stages = {
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

  // Tutorial steps - more encouraging
  const tutorialSteps = [
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

  // Helper functions
  const addVisualFeedback = (text, x, y, color = '#00ff00', size = 'text-lg', duration = 90) => {
    const feedback = {
      id: Date.now() + Math.random(),
      text, x, y, color, size,
      life: duration, vy: -1, scale: 1.0
    };
    setVisualFeedback(prev => [...prev, feedback]);
  };

  const addXP = (amount) => {
    const newXp = xp + amount;
    setXp(newXp);
    const newLevel = Math.floor(newXp / 500) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setShowLevelUp(true);
      setCoins(prev => prev + newLevel * 5);
      setResearchPoints(prev => prev + newLevel * 10);
      
      // Check for ship unlocks
      checkShipUnlocks();
      
      setTimeout(() => setShowLevelUp(false), 4000);
      triggerHaptic('levelup');
    }
  };

  const triggerHaptic = (type = 'default') => {
    if (navigator.vibrate) {
      switch(type) {
        case 'repair':
          navigator.vibrate([30, 10, 30]); // Quick double pulse
          break;
        case 'combo':
          navigator.vibrate([50, 20, 50, 20, 50]); // Triple pulse
          break;
        case 'levelup':
          navigator.vibrate([100, 50, 100, 50, 100]); // Big celebration
          break;
        case 'achievement':
          navigator.vibrate([80, 30, 80]); // Achievement pulse
          break;
        case 'complete':
          navigator.vibrate([200]); // Long celebration
          break;
        default:
          navigator.vibrate(50);
      }
    }
  };

  const checkAchievements = (type, value = 1) => {
    // Check for various achievement conditions
    switch(type) {
      case 'first_repair':
        if (!earnedAchievements.has('first_repair')) {
          unlockAchievement('first_repair');
        }
        break;
      case 'combo':
        if (value >= 5 && !earnedAchievements.has('combo_master')) {
          unlockAchievement('combo_master');
        }
        break;
      case 'perfect_health':
        if (health === 100 && !earnedAchievements.has('perfectionist')) {
          unlockAchievement('perfectionist');
        }
        break;
      case 'virus_discovery':
        if (virusCollection.size >= 5 && !earnedAchievements.has('virus_hunter')) {
          unlockAchievement('virus_hunter');
        }
        break;
      case 'ship_collection':
        if (unlockedShips.length >= 5 && !earnedAchievements.has('collector')) {
          unlockAchievement('collector');
        }
        break;
    }
  };

  const unlockAchievement = (achievementId) => {
    const achievement = gameAchievements[achievementId];
    if (!achievement || earnedAchievements.has(achievementId)) return;
    
    setEarnedAchievements(prev => new Set([...prev, achievementId]));
    setCoins(prev => prev + achievement.reward);
    setShowAchievement(achievement);
    triggerHaptic('achievement');
    
    setTimeout(() => setShowAchievement(null), 4000);
  };

  const checkShipUnlocks = () => {
    Object.entries(availableShips).forEach(([shipEmoji, shipData]) => {
      if (!unlockedShips.includes(shipEmoji) && coins >= shipData.cost && shipData.cost > 0) {
        // Auto-unlock ships when player has enough coins and reaches certain levels
        if ((shipData.cost <= 100 && level >= 2) || 
            (shipData.cost <= 200 && level >= 4) || 
            (shipData.cost <= 300 && level >= 6)) {
          // Don't auto-unlock, but show notification that ships are available
          showHintMessage(`🚀 New ship available! Check the ship selector!`, 3000);
        }
      }
    });
  };

  const purchaseShip = (shipEmoji) => {
    const shipData = availableShips[shipEmoji];
    if (!shipData) return;
    
    if (shipData.cost === 0 || coins >= shipData.cost) {
      if (shipData.cost > 0) {
        setCoins(prev => prev - shipData.cost);
      }
      
      if (!unlockedShips.includes(shipEmoji)) {
        setUnlockedShips(prev => [...prev, shipEmoji]);
        triggerHaptic('achievement');
        showHintMessage(`🚀 ${shipData.name} unlocked! Looking great, doctor!`, 4000);
        
        // Check ship collection achievement
        setTimeout(() => checkAchievements('ship_collection'), 100);
      }
      
      // Select the ship
      setCurrentShip(shipEmoji);
      setShowShipSelector(false);
    } else {
      showHintMessage(`Need ${shipData.cost - coins} more coins to unlock ${shipData.name}!`, 3000);
    }
  };

  const selectShip = (shipEmoji) => {
    if (unlockedShips.includes(shipEmoji)) {
      setCurrentShip(shipEmoji);
      setShowShipSelector(false);
      triggerHaptic('default');
      showHintMessage(`${availableShips[shipEmoji].name} selected! 🚀`, 2000);
    } else {
      purchaseShip(shipEmoji);
    }
  };

  const showPatientThankYou = () => {
    if (!caseStory) return;
    
    const randomMessage = patientMessages[Math.floor(Math.random() * patientMessages.length)];
    const personalizedMessage = `${caseStory.patientName}: "${randomMessage}"`;
    
    setShowPatientMessage(personalizedMessage);
    setTimeout(() => setShowPatientMessage(null), 6000);
  };

  const updatePatientVitals = (type) => {
    setPatientVitals(prev => {
      const newVitals = { ...prev };
      switch(type) {
        case 'repair':
          newVitals.brainActivity = Math.min(100, newVitals.brainActivity + 4);
          newVitals.stress = Math.max(0, newVitals.stress - 5);
          newVitals.heartRate = Math.max(60, newVitals.heartRate - 1);
          break;
        case 'damage':
          newVitals.brainActivity = Math.max(0, newVitals.brainActivity - 2);
          newVitals.stress = Math.min(100, newVitals.stress + 3);
          newVitals.heartRate = Math.min(100, newVitals.heartRate + 2);
          break;
        case 'heal':
          newVitals.oxygenLevel = Math.min(100, newVitals.oxygenLevel + 3);
          newVitals.heartRate = Math.max(60, newVitals.heartRate - 1);
          break;
      }
      return newVitals;
    });
  };

  const updateMissions = (type, amount = 1) => {
    setMissions(prev => prev.map(mission => {
      if (mission.completed) return mission;
      
      let shouldUpdate = false;
      if (type === 'repair' && mission.text.includes('neurons')) shouldUpdate = true;
      if (type === 'virus' && mission.text.includes('virus')) shouldUpdate = true;
      if (type === 'streak' && mission.text.includes('streak')) shouldUpdate = true;
      
      if (shouldUpdate) {
        const newProgress = Math.min(mission.progress + amount, mission.target);
        if (newProgress >= mission.target && !mission.completed) {
          setShowReward({ title: "MISSION ACCOMPLISHED!", description: mission.reward, icon: '🏆' });
          setTimeout(() => setShowReward(null), 4000);
          setCoins(prev => prev + 25);
          setResearchPoints(prev => prev + 20);
          addXP(75);
          triggerHaptic();
          return { ...mission, progress: newProgress, completed: true };
        }
        return { ...mission, progress: newProgress };
      }
      return mission;
    }));
  };

  const discoverVirus = (virusType) => {
    if (!virusCollection.has(virusType)) {
      setVirusCollection(prev => {
        const newCollection = new Set([...prev, virusType]);
        // Check virus discovery achievement after state update
        setTimeout(() => checkAchievements('virus_discovery'), 100);
        return newCollection;
      });
      
      const virus = virusTypes[virusType];
      setShowReward({ 
        title: "NEW PATHOGEN DISCOVERED!", 
        description: `${virus.name} - ${virus.rarity}`, 
        icon: virus.icon 
      });
      setTimeout(() => setShowReward(null), 4000);
      setResearchPoints(prev => prev + (virus.rarity === 'Legendary' ? 30 : virus.rarity === 'Epic' ? 20 : virus.rarity === 'Rare' ? 15 : 10));
      updateMissions('virus');
    }
  };

  const createVirus = (index) => {
    const virusTypeKeys = Object.keys(virusTypes);
    const randomType = virusTypeKeys[Math.floor(Math.random() * virusTypeKeys.length)];
    const virusData = virusTypes[randomType];
    
    return {
      id: `virus_${Date.now()}_${index}`,
      x: Math.random() * 60 + 20, // Spawn away from edges
      y: Math.random() * 60 + 20,
      speed: 0.3 + Math.random() * 0.4, // Faster base speed
      direction: Math.random() * 360,
      type: randomType,
      data: virusData,
      isHunting: false,
      lifespan: 180 + Math.random() * 120, // Longer lifespan
      huntCooldown: 0,
      health: virusData.rarity === 'Legendary' ? 3 : virusData.rarity === 'Epic' ? 2 : 1,
      huntDistance: 30 + Math.random() * 20, // Variable hunt range
      aggressiveness: Math.random() * 0.5 + 0.5 // How aggressive this virus is
    };
  };

  const createEnvironmentalEffects = (environment) => {
    // Create gentle blood flow currents
    const newBloodFlow = [];
    for (let i = 0; i < 2; i++) {
      newBloodFlow.push({
        id: `flow_${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        direction: Math.random() * 360,
        strength: 0.1 + Math.random() * 0.1, // Much gentler
        size: 20 + Math.random() * 15
      });
    }
    setBloodFlow(newBloodFlow);

    // Create helpful oxygen bubbles
    const newBubbles = [];
    for (let i = 0; i < 3; i++) {
      newBubbles.push({
        id: `bubble_${i}`,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        collected: false,
        pulse: true
      });
    }
    setOxygenBubbles(newBubbles);

    // Create friendly immune cells
    if (environment !== 'motor_cortex') {
      const newImmuneCells = [];
      for (let i = 0; i < 1; i++) {
        newImmuneCells.push({
          id: `immune_${i}`,
          x: Math.random() * 60 + 20,
          y: Math.random() * 60 + 20,
          direction: Math.random() * 360,
          speed: 0.2,
          helpful: true
        });
      }
      setImmuneCells(newImmuneCells);
    }
  };

  const createExplosion = (x, y, color, intensity = 12) => {
    const newParticles = [];
    for (let i = 0; i < intensity; i++) {
      newParticles.push({
        id: Math.random(),
        x, y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        life: 40,
        color,
        size: Math.random() * 4 + 2
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  const createCelebrationExplosion = (x, y, intensity = 25) => {
    const colors = ['#4ade80', '#fbbf24', '#f472b6', '#60a5fa', '#a855f7'];
    const newParticles = [];
    
    for (let i = 0; i < intensity; i++) {
      newParticles.push({
        id: Math.random(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
    
    // Screen flash effect
    setScreenShake(1);
    setTimeout(() => setScreenShake(0), 200);
  };

  const showMedicalFact = () => {
    const fact = medicalFacts[Math.floor(Math.random() * medicalFacts.length)];
    setShowFact(fact);
    setTimeout(() => setShowFact(null), 6000);
  };

  const showAlert = (message, duration = 4000) => {
    setShowFact({ fact: message, category: "SYSTEM", points: 0, xp: 0 });
    setTimeout(() => setShowFact(null), duration);
  };

  const showHintMessage = (message, duration = 5000) => {
    setCurrentHint(message);
    setTimeout(() => setCurrentHint(''), duration);
  };

  const moveShipSmoothly = (targetX, targetY) => {
    setTargetPosition({ x: targetX, y: targetY });
    setIsMoving(true);
    
    // Create colorful trail based on current ship
    const shipData = availableShips[currentShip];
    setShipTrail(prev => [...prev.slice(-6), { 
      x: shipPosition.x, 
      y: shipPosition.y, 
      opacity: 1,
      color: shipData.trail 
    }]);
  };

  // Improved movement animation - more reliable
  useEffect(() => {
    if (!targetPosition || !isMoving) return;

    const animateMovement = () => {
      setShipPosition(current => {
        let dx = targetPosition.x - current.x;
        let dy = targetPosition.y - current.y;
        
        // Apply gentle blood flow effects only if close
        bloodFlow.forEach(flow => {
          const flowDistance = Math.sqrt(
            Math.pow(current.x - flow.x, 2) + Math.pow(current.y - flow.y, 2)
          );
          if (flowDistance < flow.size) {
            const flowInfluence = (flow.size - flowDistance) / flow.size * flow.strength * 0.3; // Reduced influence
            dx += Math.cos(flow.direction * Math.PI / 180) * flowInfluence;
            dy += Math.sin(flow.direction * Math.PI / 180) * flowInfluence;
          }
        });
        
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 2) { // Slightly larger threshold
          setIsMoving(false);
          setTargetPosition(null);
          return targetPosition;
        }
        
        const speed = Math.min(distance * 0.18, 3.5); // Slightly faster
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;
        
        return {
          x: current.x + moveX,
          y: current.y + moveY
        };
      });
    };

    movementRef.current = setInterval(animateMovement, 16); // Standard 60fps
    
    return () => {
      if (movementRef.current) clearInterval(movementRef.current);
    };
  }, [targetPosition, isMoving, bloodFlow]);

  // Update ship trail
  useEffect(() => {
    const updateTrail = setInterval(() => {
      setShipTrail(prev => prev
        .map(point => ({ ...point, opacity: point.opacity * 0.85 }))
        .filter(point => point.opacity > 0.1)
      );
    }, 150);
    
    return () => clearInterval(updateTrail);
  }, []);

  // Keyboard navigation event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted) return;
      
      const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'];
      
      if (validKeys.includes(e.code)) {
        e.preventDefault();
        setKeysPressed(prev => new Set([...prev, e.code]));
      }
      
      // Space bar for repairing nearby neurons
      if (e.code === 'Space') {
        e.preventDefault();
        checkNearbyNeurons();
      }
    };

    const handleKeyUp = (e) => {
      setKeysPressed(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(e.code);
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted, shipPosition, currentStage, repairedNeurons]);

  // Check for nearby neurons to repair (keyboard interaction)
  const checkNearbyNeurons = () => {
    const stage = stages[currentStage];
    stage.neurons.forEach(neuron => {
      if (repairedNeurons.has(neuron.id)) return;
      
      const distance = Math.sqrt(
        Math.pow(shipPosition.x - neuron.x, 2) + 
        Math.pow(shipPosition.y - neuron.y, 2)
      );
      
      if (distance < 25) { // Slightly larger range for keyboard repair
        repairNeuron(neuron);
      }
    });
  };

  // Keyboard movement logic
  useEffect(() => {
    // Pause keyboard movement when modals are open
    const modalsOpen = showLearningIntro || showCaseBriefing || showShipSelector || showStageComplete;
    
    if (keysPressed.size === 0 || !gameStarted || modalsOpen) {
      if (keyboardMoveRef.current) {
        clearInterval(keyboardMoveRef.current);
        keyboardMoveRef.current = null;
      }
      return;
    }

    keyboardMoveRef.current = setInterval(() => {
      setShipPosition(current => {
        let deltaX = 0;
        let deltaY = 0;
        
        // Calculate movement based on pressed keys
        if (keysPressed.has('ArrowLeft') || keysPressed.has('KeyA')) deltaX -= keyboardMovementSpeed;
        if (keysPressed.has('ArrowRight') || keysPressed.has('KeyD')) deltaX += keyboardMovementSpeed;
        if (keysPressed.has('ArrowUp') || keysPressed.has('KeyW')) deltaY -= keyboardMovementSpeed;
        if (keysPressed.has('ArrowDown') || keysPressed.has('KeyS')) deltaY += keyboardMovementSpeed;
        
        // Normalize diagonal movement (prevent faster diagonal movement)
        if (deltaX !== 0 && deltaY !== 0) {
          const normalizer = Math.sqrt(2) / 2;
          deltaX *= normalizer;
          deltaY *= normalizer;
        }
        
        // Apply speed boost if active
        if (activePowerUp === 'speed') {
          deltaX *= 1.5;
          deltaY *= 1.5;
        }
        
        // Apply gentle blood flow effects
        bloodFlow.forEach(flow => {
          const flowDistance = Math.sqrt(
            Math.pow(current.x - flow.x, 2) + Math.pow(current.y - flow.y, 2)
          );
          if (flowDistance < flow.size) {
            const flowInfluence = (flow.size - flowDistance) / flow.size * flow.strength * 0.2;
            deltaX += Math.cos(flow.direction * Math.PI / 180) * flowInfluence;
            deltaY += Math.sin(flow.direction * Math.PI / 180) * flowInfluence;
          }
        });
        
        // Calculate new position with boundary checking
        const newX = Math.max(8, Math.min(92, current.x + deltaX));
        const newY = Math.max(8, Math.min(92, current.y + deltaY));
        
        // Create trail if position actually changed
        if (newX !== current.x || newY !== current.y) {
          const shipData = availableShips[currentShip];
          setShipTrail(prev => [...prev.slice(-4), { 
            x: current.x, 
            y: current.y, 
            opacity: 1,
            color: shipData.trail 
          }]);
          setIsMoving(true);
        } else {
          setIsMoving(false);
        }
        
        return { x: newX, y: newY };
      });
    }, 16); // 60fps

    return () => {
      if (keyboardMoveRef.current) {
        clearInterval(keyboardMoveRef.current);
        keyboardMoveRef.current = null;
      }
    };
  }, [keysPressed, keyboardMovementSpeed, activePowerUp, bloodFlow, currentShip, gameStarted, showLearningIntro, showCaseBriefing, showShipSelector, showStageComplete]);

  // Game initialization with better pacing
  useEffect(() => {
    if (gameState === 'playing') {
      const stage = stages[currentStage];
      const medicalCase = medicalCases[currentStage];
      
      setTimeLeft(stage.timeLimit);
      setVirusSpawnTimer(stage.spawnRate);
      setHealth(100);
      setInvulnerable(false);
      setCaseStory(medicalCase);
      setPatientVitals(medicalCase.vitals);
      setGameStarted(false);
      
      // Show learning intro FIRST for tutorial
      if (currentStage === 1 && isFirstTime) {
        setShowLearningIntro(true);
        showHintMessage("🎓 Welcome to Medical Training! Let's learn the basics first.", 6000);
      } else {
        // Go straight to case briefing for experienced players
        setShowCaseBriefing(true);
      }
    }
  }, [gameState, currentStage]);

  // Start learning mode
  const startLearning = () => {
    setShowLearningIntro(false);
    setShowTutorial(true);
    setTutorialStep(0);
    setSafeMode(true); // Keep safe mode for tutorial
    setIsFirstTime(false);
    
    // Start gameplay immediately for tutorial
    setGameStarted(true);
    createEnvironmentalEffects(stages[currentStage].environment);
    
    showHintMessage("🎯 Tutorial mode: Learn the basics with gentle guidance!", 8000);
  };

  // Skip learning and go to case briefing
  const skipLearning = () => {
    setShowLearningIntro(false);
    setIsFirstTime(false);
    setSafeMode(false);
    setShowTutorial(false);
    setShowCaseBriefing(true);
  };

  // Function to start gameplay after briefing
  const startGameplay = () => {
    setShowCaseBriefing(false);
    setGameStarted(true);
    
    const stage = stages[currentStage];
    
    // Set up non-tutorial mode
    setSafeMode(false);
    setShowTutorial(false);
    setInvulnerable(false);
    
    // Create environmental effects
    createEnvironmentalEffects(stage.environment);
    
    // Always create viruses for challenge (even in stage 1 now)
    if (stage.maxViruses > 0) {
      setTimeout(() => {
        const initialViruses = [];
        const virusCount = Math.min(1, stage.maxViruses);
        for (let i = 0; i < virusCount; i++) {
          initialViruses.push(createVirus(i));
        }
        setViruses(initialViruses);
        showAlert("🦠 Pathogens detected! Stay alert while treating the patient!");
      }, 8000); // Reduced from 15 seconds to 8 seconds
    }
    
    showHintMessage(`${stage.objective} - Stay focused and avoid the pathogens! 🌟`, 6000);
    
    // Generate helpful power-ups
    setTimeout(() => {
      const newPowerUps = [];
      for (let i = 0; i < 2; i++) {
        newPowerUps.push({
          id: `powerup_${i}`,
          x: Math.random() * 60 + 20,
          y: Math.random() * 60 + 20,
          type: ['speed', 'shield', 'repair'][Math.floor(Math.random() * 3)],
          collected: false,
          pulse: true
        });
      }
      setPowerUps(newPowerUps);
    }, 5000);
  };

  // Skip briefing and start immediately
  const skipBriefing = () => {
    setShowCaseBriefing(false);
    startGameplay();
  };

  // Enhanced click handling - more reliable
  const handleGameAreaClick = (e) => {
    if (!gameAreaRef.current || !gameStarted) return;
    
    // Prevent clicks when modals are open
    if (showLearningIntro || showCaseBriefing || showShipSelector || showStageComplete) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Ensure coordinates are within bounds
    const boundedX = Math.max(8, Math.min(92, x));
    const boundedY = Math.max(8, Math.min(92, y));
    
    // Check for virus elimination first (if using right tool)
    let virusEliminated = false;
    viruses.forEach(virus => {
      const distance = Math.sqrt(
        Math.pow(boundedX - virus.x, 2) + 
        Math.pow(boundedY - virus.y, 2)
      );
      
      if (distance < 12 && currentTool === virus.data.weakness) {
        // Eliminate virus with correct tool!
        setViruses(prev => prev.filter(v => v.id !== virus.id));
        createCelebrationExplosion(virus.x, virus.y, 15);
        addVisualFeedback('VIRUS ELIMINATED!', virus.x, virus.y, '#4ade80', 'text-lg');
        addXP(30);
        setCoins(prev => prev + 8);
        triggerHaptic('achievement');
        showHintMessage(`🎉 Perfect! ${virus.data.name} eliminated with ${medicalTools[currentTool].name}!`);
        virusEliminated = true;
      }
    });
    
    if (!virusEliminated) {
      // Stop keyboard movement and move to clicked position
      setKeysPressed(new Set());
      moveShipSmoothly(boundedX, boundedY);
      addVisualFeedback('→', boundedX, boundedY, '#60a5fa', 'text-sm', 40);
    }
    
    if (showTutorial && tutorialStep === 0) {
      setTutorialStep(1);
      setHighlightedNeuron(1);
      showHintMessage("Perfect! You can move with clicks OR arrow keys/WASD. Now move close to the glowing yellow neuron to begin your first repair", 8000);
    }
    
    // Enhanced neuron repair detection - more generous
    const stage = stages[currentStage];
    stage.neurons.forEach(neuron => {
      if (repairedNeurons.has(neuron.id)) return;
      
      const distance = Math.sqrt(
        Math.pow(boundedX - neuron.x, 2) + 
        Math.pow(boundedY - neuron.y, 2)
      );
      
      if (distance < 20) { // Increased from 18 to 20 for easier interaction
        repairNeuron(neuron);
      }
    });
  };

  // Enhanced neuron repair with celebration
  const repairNeuron = (neuron) => {
    setRepairedNeurons(prev => new Set([...prev, neuron.id]));
    
    const tool = medicalTools[currentTool];
    const isOptimalTool = neuron.repairType === currentTool;
    const effectiveness = isOptimalTool ? tool.efficiency * 1.4 : tool.efficiency;
    
    updatePatientVitals('repair');
    
    // Tutorial progression
    if (showTutorial && tutorialStep === 1 && neuron.id === highlightedNeuron) {
      setTutorialStep(2);
      setHighlightedNeuron(null);
      showHintMessage("Absolutely fantastic! 🎉 Look how the neuron turned green and the patient's vitals improved! You're a natural healer!", 8000);
    }
    
    if (showTutorial && tutorialStep === 2) {
      const stage = stages[currentStage];
      const allRepaired = stage.neurons.every(n => repairedNeurons.has(n.id) || n.id === neuron.id);
      if (allRepaired) {
        setTutorialStep(3);
        showHintMessage("Outstanding work, Doctor! 🌟 You've mastered the basics and you're ready to save real lives!", 10000);
        
        // Complete tutorial after a short delay
        setTimeout(() => {
          setSafeMode(false);
          setShowTutorial(false);
          showHintMessage("Tutorial complete! You're now ready for real medical emergencies! 🚀", 5000);
        }, 3000);
      }
    }
    
    const newCombo = combo + 1;
    setCombo(newCombo);
    const basePoints = 150 * effectiveness;
    const points = Math.floor(basePoints * Math.min(newCombo, 4));
    
    setScore(prev => prev + points);
    setKnowledgePoints(prev => prev + 25);
    
    addXP(Math.floor(30 * effectiveness + (newCombo * 10)));
    setCoins(prev => prev + Math.floor(newCombo * 4 + 2));
    
    if (isOptimalTool) {
      setResearchPoints(prev => prev + 8);
      addVisualFeedback('PERFECT TOOL! +8 RP', neuron.x, neuron.y - 15, '#fbbf24', 'text-sm');
    }
    
    // Enhanced visual effects based on combo
    if (newCombo >= 3) {
      createCelebrationExplosion(neuron.x, neuron.y, 20 + newCombo * 5);
      triggerHaptic('combo');
    } else {
      createExplosion(neuron.x, neuron.y, tool.color, 20);
      triggerHaptic('repair');
    }
    
    addVisualFeedback(`+${points}`, neuron.x, neuron.y - 5, '#4ade80', 'text-xl');
    if (newCombo > 1) {
      addVisualFeedback(`${newCombo}x HEALING STREAK! ✨`, neuron.x, neuron.y - 12, '#fbbf24', 'text-lg');
    }
    
    updateMissions('repair');
    
    // Check achievements
    checkAchievements('first_repair');
    checkAchievements('combo', newCombo);
    
    setShowFact({
      fact: `✅ ${neuron.type} successfully healed! ${neuron.info} | Tool: ${tool.name}`,
      category: "NEURAL RESTORATION",
      points: points,
      xp: Math.floor(30 * effectiveness + (newCombo * 10))
    });
    setTimeout(() => setShowFact(null), 5000);
    
    setTimeout(() => setCombo(0), 6000); // Longer combo window
    
    // Encouraging feedback
    if (newCombo === 1) showHintMessage("Neural pathway restored! The patient is responding well! ⚡");
    else if (newCombo === 2) showHintMessage("Amazing healing streak! You're becoming an expert! 🔥");
    else if (newCombo >= 3) showHintMessage("Incredible medical precision! You're saving lives with style! 🚀");
  };

  const switchTool = (toolName) => {
    if (unlockedTools.includes(toolName)) {
      setCurrentTool(toolName);
      const tool = medicalTools[toolName];
      showHintMessage(`${tool.name} selected - ${tool.description}`);
    }
  };

  const isStageComplete = () => {
    const stage = stages[currentStage];
    return stage.neurons.every(neuron => repairedNeurons.has(neuron.id));
  };

  // Check for stage completion with celebration
  useEffect(() => {
    if (isStageComplete() && !showStageComplete && gameStarted) {
      setShowStageComplete(true);
      setCelebrationTimer(0);
      showHintMessage("🎉 Incredible work! Take a moment to celebrate your success before continuing!", 8000);
    }
  }, [repairedNeurons, gameStarted]);

  // Celebration timer
  useEffect(() => {
    if (showStageComplete) {
      const timer = setInterval(() => {
        setCelebrationTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showStageComplete]);

  const nextStage = () => {
    const stage = stages[currentStage];
    addXP(stage.xpReward);
    setCoins(prev => prev + stage.coinReward);
    setResearchPoints(prev => prev + stage.researchReward);
    
    // Check for perfect health achievement
    checkAchievements('perfect_health');
    
    // Show patient thank you message
    showPatientThankYou();
    
    setShowStageComplete(false);
    setCelebrationTimer(0);
    
    triggerHaptic('complete');
    
    if (currentStage < Object.keys(stages).length) {
      setCurrentStage(currentStage + 1);
      setRepairedNeurons(new Set());
      setCombo(0);
      setGameStarted(false);
      showMedicalFact();
      showHintMessage("Excellent work! The next patient is ready when you are. Take your time to prepare! 🌟", 6000);
    } else {
      // After completing all stages, offer endless mode
      setGameState('complete');
    }
  };

  const resetGame = () => {
    setGameState('intro');
    setCurrentStage(1);
    setShipPosition({ x: 50, y: 60 });
    setScore(0);
    setHealth(100);
    setRepairedNeurons(new Set());
    setCombo(0);
    setKnowledgePoints(0);
    setViruses([]);
    setPowerUps([]);
    setParticles([]);
    setActivePowerUp(null);
    setShowTutorial(false);
    setTutorialStep(0);
    setSafeMode(true);
    setHighlightedNeuron(null);
    setVisualFeedback([]);
    setInvulnerable(false);
    setCurrentHint('');
    setShipTrail([]);
    setTargetPosition(null);
    setIsMoving(false);
    setBloodFlow([]);
    setOxygenBubbles([]);
    setImmuneCells([]);
    setCaseStory(null);
    setCurrentTool('basic');
    setShowCaseBriefing(false);
    setGameStarted(false);
    setShowStageComplete(false);
    setCelebrationTimer(0);
    setShowShipSelector(false);
    setShowAchievement(null);
    setShowPatientMessage(null);
    setShowLearningIntro(false);
    setKeysPressed(new Set()); // Clear keyboard state
  };

  // Enhanced render functions
  const renderNeurons = () => {
    const stage = stages[currentStage];
    return stage.neurons.map(neuron => {
      const isRepaired = repairedNeurons.has(neuron.id);
      const isHighlighted = highlightedNeuron === neuron.id;
      const isOptimalTool = neuron.repairType === currentTool;
      
      return (
        <div
          key={neuron.id}
          className={`absolute px-4 py-3 rounded-full border-2 text-center cursor-pointer transition-all duration-700 transform hover:scale-110 ${
            isRepaired 
              ? 'bg-green-500 border-green-300 text-white shadow-lg shadow-green-400/50 animate-pulse' 
              : isHighlighted
              ? 'bg-yellow-400 border-yellow-300 text-black shadow-xl shadow-yellow-400/60 ring-4 ring-yellow-300 ring-opacity-75'
              : isOptimalTool
              ? 'bg-orange-500 border-orange-300 text-white shadow-lg shadow-orange-400/50 ring-2 ring-orange-300'
              : 'bg-red-500 border-red-300 text-white hover:bg-red-400 shadow-lg shadow-red-400/50'
          }`}
          style={{
            left: `${neuron.x}%`,
            top: `${neuron.y}%`,
            transform: 'translate(-50%, -50%)',
            minWidth: '100px',
            zIndex: 20,
          }}
          onClick={(e) => { e.stopPropagation(); repairNeuron(neuron); }}
          title={`${neuron.info} | Optimal tool: ${medicalTools[neuron.repairType].name}`}
        >
          <div className="text-xl mb-1">
            {isRepaired ? '✨' : isHighlighted ? '🎯' : isOptimalTool ? '⚡' : '🔴'}
          </div>
          <div className="text-xs font-bold">{neuron.type}</div>
          {isHighlighted && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              TAP WHEN READY! ☝️
            </div>
          )}
          {isOptimalTool && !isRepaired && !isHighlighted && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-400 text-black px-2 py-1 rounded text-xs font-bold">
              PERFECT MATCH
            </div>
          )}
        </div>
      );
    });
  };

  const renderViruses = () => {
    return viruses.map(virus => (
      <div
        key={virus.id}
        className={`absolute w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all duration-300 ${
          virus.isHunting ? 'animate-pulse bg-red-600 border-red-400 scale-125 shadow-lg shadow-red-500/50' : 
          'animate-spin bg-orange-500 border-orange-300 hover:scale-110'
        }`}
        style={{
          left: `${virus.x}%`,
          top: `${virus.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 15,
        }}
        title={`${virus.data.name} (${virus.data.rarity}) - Weakness: ${medicalTools[virus.data.weakness].name}`}
      >
        {virus.data.icon}
        {virus.isHunting && (
          <>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-bounce">
              HUNTING!
            </div>
          </>
        )}
        {virus.health > 1 && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-1 rounded">
            ❤️{virus.health}
          </div>
        )}
        {/* Threat indicator */}
        <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full ${
          virus.aggressiveness > 0.7 ? 'bg-red-500' :
          virus.aggressiveness > 0.4 ? 'bg-yellow-500' :
          'bg-green-500'
        }`}></div>
      </div>
    ));
  };

  const renderEnvironmentalEffects = () => {
    return (
      <>
        {/* Blood flow currents */}
        {bloodFlow.map(flow => (
          <div
            key={flow.id}
            className="absolute rounded-full bg-red-400 opacity-20 animate-pulse"
            style={{
              left: `${flow.x}%`,
              top: `${flow.y}%`,
              width: `${flow.size}px`,
              height: `${flow.size}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
            }}
            title="Gentle blood flow current"
          />
        ))}
        
        {/* Oxygen bubbles */}
        {oxygenBubbles.filter(b => !b.collected).map(bubble => (
          <div
            key={bubble.id}
            className="absolute w-8 h-8 rounded-full bg-cyan-400 border-2 border-cyan-200 flex items-center justify-center animate-bounce cursor-pointer hover:scale-125 transition-transform"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 25,
            }}
            title="Oxygen bubble - collect for health boost!"
          >
            <span className="text-sm font-bold">O₂</span>
          </div>
        ))}
        
        {/* Immune cells */}
        {immuneCells.map(cell => (
          <div
            key={cell.id}
            className="absolute w-8 h-8 rounded-full bg-blue-400 border-2 border-blue-200 flex items-center justify-center animate-pulse"
            style={{
              left: `${cell.x}%`,
              top: `${cell.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
            title="Friendly immune cell - protecting the brain"
          >
            <span className="text-sm">🛡️</span>
          </div>
        ))}
      </>
    );
  };

  const renderPowerUps = () => {
    const icons = { speed: '⚡', shield: '🛡️', repair: '❤️' };
    return powerUps.filter(p => !p.collected).map(powerUp => (
      <div
        key={powerUp.id}
        className="absolute w-10 h-10 rounded-full bg-yellow-400 border-2 border-yellow-200 flex items-center justify-center animate-bounce cursor-pointer hover:scale-125 transition-all duration-300 shadow-lg shadow-yellow-400/50"
        style={{
          left: `${powerUp.x}%`,
          top: `${powerUp.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 25,
        }}
        title={`${powerUp.type} enhancement - helpful boost!`}
      >
        <span className="text-lg">{icons[powerUp.type]}</span>
      </div>
    ));
  };

  const renderParticles = () => {
    return particles.map(particle => (
      <div
        key={particle.id}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          backgroundColor: particle.color,
          opacity: particle.life / 40,
          transform: 'translate(-50%, -50%)',
          zIndex: 30,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        }}
      />
    ));
  };

  const renderVisualFeedback = () => {
    return visualFeedback.map(feedback => (
      <div
        key={feedback.id}
        className={`absolute font-bold pointer-events-none ${feedback.size}`}
        style={{
          left: `${feedback.x}%`,
          top: `${feedback.y}%`,
          color: feedback.color,
          opacity: feedback.life / 90,
          transform: `translate(-50%, -50%) scale(${feedback.scale})`,
          zIndex: 50,
        }}
      >
        {feedback.text}
      </div>
    ));
  };

  const renderShipTrail = () => {
    return shipTrail.map((point, index) => (
      <div
        key={index}
        className="absolute w-3 h-3 rounded-full pointer-events-none"
        style={{
          left: `${point.x}%`,
          top: `${point.y}%`,
          backgroundColor: point.color || '#60a5fa',
          opacity: point.opacity * 0.4,
          transform: 'translate(-50%, -50%)',
          zIndex: 35,
        }}
      />
    ));
  };

  // Game screens
  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 flex items-center justify-center p-5">
        <div className="text-center max-w-5xl">
          <div className="flex items-center justify-center mb-8">
            <span className="text-8xl mr-4 animate-pulse">🧠</span>
            <h1 className="text-6xl font-bold text-cyan-400 font-mono">Micro Medics</h1>
          </div>
          
          {/* Enhanced Stats Dashboard */}
          <div className="bg-black bg-opacity-40 p-6 rounded-xl mb-8 border border-cyan-500/30">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                <div className="text-cyan-300 text-sm">Level</div>
                <div className="text-white text-2xl font-bold">{level}</div>
                <div className="text-cyan-200 text-xs">{xp} XP</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg">
                <div className="text-purple-300 text-sm">Research Points</div>
                <div className="text-white text-2xl font-bold">{researchPoints}</div>
                <div className="text-purple-200 text-xs">🔬 Earned</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-lg">
                <div className="text-green-300 text-sm">Coins</div>
                <div className="text-white text-2xl font-bold">{coins}</div>
                <div className="text-green-200 text-xs">💰 Earned</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-3 rounded-lg">
                <div className="text-yellow-300 text-sm">Streak</div>
                <div className="text-white text-2xl font-bold">{consecutiveDays}</div>
                <div className="text-yellow-200 text-xs">🔥 Days</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((xp % 500) / 500) * 100}%` }}
              />
            </div>
            <div className="text-cyan-300 text-sm">XP Progress to Level {level + 1}</div>
          </div>

          {/* Daily Challenge */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg mb-6 border border-green-400">
            <h3 className="text-2xl font-bold text-white mb-2">🌟 Today's Challenge</h3>
            <div className="bg-black bg-opacity-30 p-3 rounded">
              <div className="text-green-200 font-bold">{dailyChallenge.title}</div>
              <div className="text-white text-sm mb-2">{dailyChallenge.description}</div>
              <div className="text-yellow-300 text-xs">{dailyChallenge.reward}</div>
              {dailyChallenge.completed && (
                <div className="text-green-400 font-bold mt-1">✅ COMPLETED!</div>
              )}
            </div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-6 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-4">🏥 Relaxed Medical Training</h2>
            <p className="text-gray-300 text-xl mb-6">
              Learn at your own pace! Use keyboard controls OR touch - no rushing, no pressure. 
              Every patient matters, and you have all the time you need to succeed! 🌟
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg border border-green-400">
              <div className="text-2xl mb-2">⌨️</div>
              <div className="font-bold text-green-300">Keyboard Controls</div>
              <div className="text-sm text-gray-400">Arrow keys/WASD + Space!</div>
            </div>
            
            <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg border border-blue-400">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-bold text-blue-300">Ship Collection</div>
              <div className="text-sm text-gray-400">Unlock & customize your nano-ship!</div>
            </div>
            
            <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg border border-purple-400">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-bold text-purple-300">Achievements</div>
              <div className="text-sm text-gray-400">Unlock badges & earn rewards!</div>
            </div>
            
            <div className="bg-yellow-900 bg-opacity-50 p-4 rounded-lg border border-yellow-400">
              <div className="text-2xl mb-2">💖</div>
              <div className="font-bold text-yellow-300">Patient Stories</div>
              <div className="text-sm text-gray-400">Heartwarming thank you messages!</div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mb-6">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setGameState('playing')}
            >
              🌟 Begin Your Medical Journey
            </button>
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setShowShipSelector(true)}
            >
              🚀 Customize Ship
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-800 to-purple-900 flex items-center justify-center p-5">
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg border border-green-500 max-w-lg">
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-5xl font-bold text-green-400 mb-4">MEDICAL HERO!</h1>
          
          <div className="bg-gradient-to-r from-green-800 to-blue-800 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">🎊 CELEBRATION TIME! 🎊</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black bg-opacity-40 p-3 rounded">
                <div className="text-cyan-400 text-lg">Total Score</div>
                <div className="text-white text-2xl font-bold">{score}</div>
              </div>
              <div className="bg-black bg-opacity-40 p-3 rounded">
                <div className="text-purple-400 text-lg">Research Points</div>
                <div className="text-white text-2xl font-bold">{researchPoints}</div>
              </div>
              <div className="bg-black bg-opacity-40 p-3 rounded">
                <div className="text-green-400 text-lg">Total Coins</div>
                <div className="text-white text-2xl font-bold">{coins}</div>
              </div>
              <div className="bg-black bg-opacity-40 p-3 rounded">
                <div className="text-yellow-400 text-lg">Knowledge</div>
                <div className="text-white text-2xl font-bold">{knowledgePoints}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <p className="text-cyan-400 text-xl">You've saved every patient! 🎉</p>
            <p className="text-green-300 text-lg">Master nano-physician unlocked! 🧠⚡</p>
            <p className="text-purple-300 text-sm">Your gentle care and expertise have made all the difference!</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={resetGame}
            >
              🌟 NEW PATIENTS
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setGameState('intro')}
            >
              📈 MEDICAL CENTER
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Enhanced main game screen
  const stage = stages[currentStage];
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 p-3"
      style={{ 
        transform: screenShake ? `translate(${(Math.random() - 0.5) * screenShake}px, ${(Math.random() - 0.5) * screenShake}px)` : 'none',
        transition: screenShake ? 'none' : 'transform 0.1s'
      }}
    >
      {/* Clean, uncluttered UI */}
      <div className="flex justify-between items-center bg-black bg-opacity-30 p-3 rounded-lg mb-3 border border-cyan-500/30">
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span className="text-white font-bold">{score}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🧠</span>
            <span className="text-yellow-400 font-bold">{knowledgePoints}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>❤️</span>
            <div className="w-16 h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${
                  invulnerable ? 'bg-blue-500 animate-pulse' :
                  health > 70 ? 'bg-green-500' : health > 30 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${health}%` }}
              />
            </div>
            <span className="text-white text-xs">{health}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⏰</span>
            <span className="text-white font-bold">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
          {combo > 1 && (
            <div className="flex items-center gap-1">
              <span>✨</span>
              <span className="text-yellow-400 font-bold">x{combo}</span>
            </div>
          )}
          {/* Keyboard movement indicator */}
          {keysPressed.size > 0 && (
            <div className="flex items-center gap-1">
              <span>⌨️</span>
              <span className="text-cyan-400 font-bold text-xs">KEYS</span>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <div className={`text-lg font-bold ${
            stage.emergencyLevel === 'LEARNING' ? 'text-green-400' :
            stage.emergencyLevel === 'ROUTINE' ? 'text-blue-400' :
            stage.emergencyLevel === 'FOCUSED' ? 'text-yellow-400' :
            'text-cyan-400'
          }`}>
            {stage.emergencyLevel}
          </div>
          <div className="text-gray-300 text-sm">{stage.title}</div>
        </div>
        
        <div className="flex gap-2 text-xs">
          <div className="bg-cyan-600 px-2 py-1 rounded">
            <div className="text-white font-bold">Lv.{level}</div>
          </div>
          <div className="bg-yellow-600 px-2 py-1 rounded">
            <div className="text-white font-bold">💰{coins}</div>
          </div>
          <div className="bg-purple-600 px-2 py-1 rounded">
            <div className="text-white font-bold">🔬{researchPoints}</div>
          </div>
          {/* Ship selector button */}
          <button
            onClick={() => setShowShipSelector(true)}
            className="bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded transition-colors"
            title="Choose your ship"
          >
            <div className="text-white font-bold">{currentShip}</div>
          </button>
          {/* Simple tool selector */}
          <div className="bg-gray-600 px-2 py-1 rounded flex gap-1">
            {Object.entries(medicalTools).map(([key, tool]) => (
              <button
                key={key}
                onClick={() => switchTool(key)}
                disabled={!unlockedTools.includes(key)}
                className={`w-6 h-6 rounded text-xs transition-all duration-200 ${
                  currentTool === key 
                    ? 'bg-cyan-400 text-black' 
                    : unlockedTools.includes(key)
                    ? 'bg-gray-500 text-white hover:bg-gray-400'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
                title={tool.name}
              >
                {tool.icon}
              </button>
            ))}
          </div>
          {activePowerUp && (
            <div className="bg-yellow-500 px-2 py-1 rounded font-bold text-black">
              {activePowerUp.toUpperCase()}
            </div>
          )}
          <button 
            className="bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded transition-colors"
            onClick={resetGame}
          >
            🔄
          </button>
        </div>
      </div>

      {/* Tutorial - only show when no other modals are active */}
      {showTutorial && !showLearningIntro && !showCaseBriefing && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-xl border-2 border-green-400 z-[80] max-w-lg text-center">
          <div className="text-lg font-bold mb-2">🎓 Medical Training - Step {tutorialStep + 1}/4</div>
          <div className="text-white text-sm mb-2">{tutorialSteps[tutorialStep].description}</div>
          <div className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
            💫 {tutorialSteps[tutorialStep].objective}
          </div>
          {tutorialStep === 3 && (
            <button
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                setShowTutorial(false);
                setSafeMode(false);
                showHintMessage("🎉 Congratulations! You're now a qualified nano-surgeon! Ready for real patients!", 6000);
              }}
            >
              🌟 Ready to Help Real Patients!
            </button>
          )}
        </div>
      )}

      {/* Gentle hint messages */}
      {currentHint && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 p-3 rounded-lg border border-cyan-400 z-40 max-w-lg text-center">
          <div className="text-cyan-400 text-sm">{currentHint}</div>
        </div>
      )}

      {/* Learning Mode Introduction - Comes FIRST */}
      {showLearningIntro && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]">
          <div className="bg-gradient-to-br from-green-800 to-blue-800 p-8 rounded-xl border-2 border-green-400 text-center max-w-md mx-4 relative z-[110]">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-3xl font-bold text-green-300 mb-4">Medical Training</h2>
            
            <div className="bg-black bg-opacity-30 p-4 rounded-lg mb-6 text-left">
              <div className="text-white text-sm mb-3">
                Welcome to Micro Medics! This is your first time, so let's learn the basics:
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Tap to move your nano-ship OR use arrow keys/WASD</li>
                <li>• Get close to neurons to repair them</li>
                <li>• Use the right tools to eliminate viruses</li>
                <li>• Watch patient vitals improve</li>
                <li>• Collect power-ups for advantages</li>
              </ul>
            </div>
            
            <div className="text-yellow-300 text-sm mb-6">
              Ready to learn? You can skip if you prefer to jump right in!
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={startLearning}
              >
                🎯 Start Learning
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                onClick={skipLearning}
              >
                🚀 Skip to Cases
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ship Selector Modal */}
      {showShipSelector && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]"
          onClick={() => setShowShipSelector(false)}
        >
          <div 
            className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-xl border-2 border-purple-400 text-center max-w-lg mx-4 relative z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">Choose Your Nano-Ship</h2>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {Object.entries(availableShips).map(([shipEmoji, shipData]) => {
                const isUnlocked = unlockedShips.includes(shipEmoji);
                const canAfford = coins >= shipData.cost;
                const isCurrent = currentShip === shipEmoji;
                
                return (
                  <div
                    key={shipEmoji}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      isCurrent ? 'border-yellow-400 bg-yellow-400 bg-opacity-20' :
                      isUnlocked ? 'border-green-400 bg-green-400 bg-opacity-10 hover:bg-opacity-20' :
                      canAfford ? 'border-blue-400 bg-blue-400 bg-opacity-10 hover:bg-opacity-20' :
                      'border-gray-600 bg-gray-600 bg-opacity-10 opacity-75'
                    }`}
                    onClick={() => selectShip(shipEmoji)}
                  >
                    <div className="text-3xl mb-1">{shipEmoji}</div>
                    <div className="text-white text-xs font-bold">{shipData.name}</div>
                    <div className="text-gray-300 text-xs">{shipData.description}</div>
                    
                    {isCurrent && (
                      <div className="text-yellow-400 text-xs mt-1 font-bold">✨ SELECTED</div>
                    )}
                    
                    {!isUnlocked && shipData.cost > 0 && (
                      <div className={`text-xs mt-1 font-bold ${canAfford ? 'text-yellow-400' : 'text-red-400'}`}>
                        💰 {shipData.cost} coins
                      </div>
                    )}
                    
                    {isUnlocked && !isCurrent && (
                      <div className="text-green-400 text-xs mt-1">✅ OWNED</div>
                    )}
                    
                    {shipData.cost === 0 && (
                      <div className="text-green-400 text-xs mt-1">🆓 FREE</div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="text-yellow-400 text-sm mb-4">
              💰 Your Coins: {coins} | Ships Unlocked: {unlockedShips.length}/{Object.keys(availableShips).length}
            </div>
            
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
              onClick={() => setShowShipSelector(false)}
            >
              Close Hangar
            </button>
          </div>
        </div>
      )}

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-lg border-2 border-yellow-300 z-[90] animate-bounce max-w-xs">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{showAchievement.icon}</div>
            <div>
              <div className="text-white font-bold text-sm">🏆 ACHIEVEMENT UNLOCKED!</div>
              <div className="text-yellow-100 text-xs font-bold">{showAchievement.name}</div>
              <div className="text-yellow-200 text-xs">{showAchievement.description}</div>
              <div className="text-yellow-300 text-xs">+{showAchievement.reward} coins!</div>
            </div>
          </div>
        </div>
      )}

      {/* Patient Thank You Message */}
      {showPatientMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg border-2 border-green-400 z-[90] max-w-md">
          <div className="text-center">
            <div className="text-2xl mb-2">💕</div>
            <div className="text-white text-sm italic">{showPatientMessage}</div>
          </div>
        </div>
      )}

      {/* Simple Case Briefing Modal - Only show when not in learning mode */}
      {showCaseBriefing && !showLearningIntro && !showTutorial && caseStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]"
          onClick={skipBriefing}
        >
          <div 
            className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-xl border-2 border-blue-400 text-center max-w-md mx-4 relative z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-3">🏥</div>
            <h2 className="text-2xl font-bold text-blue-300 mb-4">New Patient</h2>
            
            <div className="bg-black bg-opacity-30 p-4 rounded-lg mb-4 text-left">
              <div className="text-white font-bold mb-2">{caseStory.patientName}, {caseStory.age}</div>
              <div className="text-blue-300 text-sm mb-2">{caseStory.condition}</div>
              <div className="text-gray-300 text-sm">{caseStory.story}</div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={startGameplay}
              >
                🚀 Start Treatment
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                onClick={skipBriefing}
              >
                📋 Skip Briefing
              </button>
            </div>
            
            <div className="text-xs text-gray-400 mt-3">
              Click outside or press Skip to start immediately
            </div>
          </div>
        </div>
      )}

      {/* Medical Facts - encouraging */}
      {showFact && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 border-2 rounded-lg p-4 z-50 max-w-md ${
          showFact.category === "SYSTEM" ? 'bg-blue-900 border-blue-400' :
          showFact.category === "NEURAL RESTORATION" ? 'bg-green-900 border-green-400' :
          'bg-black bg-opacity-90 border-cyan-400'
        }`}>
          <div className={`font-bold text-sm mb-2 ${
            showFact.category === "SYSTEM" ? 'text-blue-300' :
            showFact.category === "NEURAL RESTORATION" ? 'text-green-300' :
            'text-cyan-300'
          }`}>
            {showFact.category}
          </div>
          <div className="text-white text-sm mb-2">{showFact.fact}</div>
          <div className="flex justify-between">
            {showFact.points > 0 && (
              <div className="text-yellow-400 text-xs">+{showFact.points} points!</div>
            )}
            {showFact.xp > 0 && (
              <div className="text-cyan-400 text-xs">+{showFact.xp} XP!</div>
            )}
          </div>
        </div>
      )}

      {/* Level Up - celebration */}
      {showLevelUp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-center border-4 border-yellow-300 relative z-[110]">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold text-white mb-2">LEVEL UP!</h2>
            <div className="text-2xl text-yellow-100">Level {level} Achieved!</div>
            <div className="text-lg text-yellow-200 mt-2">+{level * 5} Coins & +{level * 10} Research Points!</div>
            <div className="text-sm text-yellow-300 mt-1">New medical capabilities unlocked! You're becoming an expert!</div>
          </div>
        </div>
      )}

      {/* Reward Notification */}
      {showReward && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg border-2 border-purple-400 z-[90] max-w-xs">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{showReward.icon}</div>
            <div>
              <div className="text-white font-bold text-sm">{showReward.title}</div>
              <div className="text-purple-200 text-xs">{showReward.description}</div>
            </div>
          </div>
        </div>
      )}

      {/* Clean Game Area */}
      <div 
        ref={gameAreaRef}
        className={`relative bg-black bg-opacity-20 border-2 rounded-2xl cursor-crosshair overflow-hidden transition-all duration-300 ${
          'border-cyan-400 border-opacity-40'
        } ${activePowerUp === 'shield' ? 'ring-4 ring-blue-400 ring-opacity-30' : ''}
        ${invulnerable ? 'ring-4 ring-blue-300 ring-opacity-30' : ''}`}
        style={{ height: '70vh' }}
        onClick={handleGameAreaClick}
      >
        {/* Minimal background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#06b6d4" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Game elements */}
        {renderShipTrail()}
        {renderEnvironmentalEffects()}
        {renderVisualFeedback()}
        {renderParticles()}
        {renderNeurons()}
        {renderViruses()}
        {renderPowerUps()}

        {/* Nano Ship */}
        <div
          className="absolute z-40 transition-all duration-300 ease-out"
          style={{
            left: `${shipPosition.x}%`,
            top: `${shipPosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className={`text-4xl drop-shadow-lg ${
            isMoving ? 'animate-pulse' :
            activePowerUp === 'speed' ? 'animate-ping' : ''
          } ${invulnerable ? 'text-blue-400' : ''}`}>
            {currentShip}
          </span>
          
          {/* Keyboard movement indicators */}
          {keysPressed.size > 0 && (
            <>
              {(keysPressed.has('ArrowUp') || keysPressed.has('KeyW')) && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xs animate-bounce">▲</div>
              )}
              {(keysPressed.has('ArrowDown') || keysPressed.has('KeyS')) && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xs animate-bounce">▼</div>
              )}
              {(keysPressed.has('ArrowLeft') || keysPressed.has('KeyA')) && (
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xs animate-bounce">◀</div>
              )}
              {(keysPressed.has('ArrowRight') || keysPressed.has('KeyD')) && (
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xs animate-bounce">▶</div>
              )}
            </>
          )}
          
          {activePowerUp && (
            <div className={`absolute rounded-full border-2 opacity-40 animate-pulse ${
              activePowerUp === 'shield' ? 'border-blue-400' :
              activePowerUp === 'speed' ? 'border-yellow-400' :
              'border-green-400'
            }`} 
                 style={{ width: '70px', height: '70px', left: '-18px', top: '-18px' }}>
            </div>
          )}
          
          {invulnerable && (
            <div className="absolute rounded-full border-2 border-blue-300 opacity-30 animate-ping"
                 style={{ width: '80px', height: '80px', left: '-23px', top: '-23px' }}>
            </div>
          )}
        </div>

        {/* Gentle mode indicator - only show during active tutorial */}
        {safeMode && showTutorial && gameStarted && (
          <div className="absolute top-2 left-2 bg-green-600 rounded px-3 py-1 text-sm text-white z-30">
            🎓 Tutorial Mode
          </div>
        )}
      </div>

      {/* NON-BOUNCING Stage Complete Modal */}
      {showStageComplete && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]">
          <div className="bg-gradient-to-br from-green-800 to-blue-800 p-8 rounded-2xl border-2 border-green-400 text-center max-w-md relative z-[110]">
            <h2 className="text-4xl font-bold text-green-400 mb-4">🎉 PATIENT SAVED! 🎉</h2>
            
            <div className="bg-black bg-opacity-40 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🏥 Medical Report</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-cyan-400">Score</div>
                  <div className="text-white font-bold">+{score}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-purple-400">Research</div>
                  <div className="text-white font-bold">+{stage.researchReward}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-yellow-400">XP</div>
                  <div className="text-white font-bold">+{stage.xpReward}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-green-400">Coins</div>
                  <div className="text-white font-bold">+{stage.coinReward}</div>
                </div>
              </div>
            </div>
            
            {caseStory && (
              <div className="text-sm text-gray-300 mb-4">
                ✅ {caseStory.patientName} has been successfully treated and is making a full recovery!
              </div>
            )}
            
            <div className="text-sm text-green-300 mb-4">
              🏆 {stage.objective} - Outstanding medical work!
            </div>
            
            <div className="text-yellow-300 text-sm mb-6">
              🌟 Celebration time: {Math.floor(celebrationTimer / 60)}:{(celebrationTimer % 60).toString().padStart(2, '0')} - Take your time to enjoy this moment!
            </div>
            
            {currentStage < Object.keys(stages).length ? (
              <button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={nextStage}
              >
                🚑 Help Next Patient
              </button>
            ) : (
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setGameState('complete')}
              >
                🏆 MISSION COMPLETE
              </button>
            )}
          </div>
        </div>
      )}

      {/* Controls Guide - always visible during gameplay */}
      {gameStarted && !showLearningIntro && !showCaseBriefing && !showStageComplete && (
        <div className="bg-black bg-opacity-30 p-2 rounded-lg mt-3 border border-cyan-500/30">
          <div className="flex justify-center items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">MOVE:</span>
              <div className="flex gap-1">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">↑↓←→</kbd>
                <span className="text-gray-400">or</span>
                <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">WASD</kbd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold">REPAIR:</span>
              <div className="flex gap-1">
                <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">SPACE</kbd>
                <span className="text-gray-400">or</span>
                <span className="text-xs">CLICK</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold">TARGET:</span>
              <span className="text-xs">CLICK anywhere</span>
            </div>
            {keysPressed.size > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-cyan-400">⌨️</span>
                <span className="text-green-400 font-bold text-xs animate-pulse">ACTIVE</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Patient vitals display */}
      <div className="bg-black bg-opacity-30 p-3 rounded-lg mt-3 border border-cyan-500/30">
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <div className="text-cyan-400 font-bold">Patient Status</div>
            <div className="text-white">{caseStory ? caseStory.patientName : 'Ready'}</div>
          </div>
          <div className="text-center">
            <div className="text-red-400 font-bold">Heart Rate</div>
            <div className={`text-white ${patientVitals.heartRate > 90 ? 'text-yellow-400' : ''}`}>
              {Math.round(patientVitals.heartRate)} BPM
            </div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-bold">Brain Activity</div>
            <div className={`text-white ${patientVitals.brainActivity < 70 ? 'text-yellow-400' : ''}`}>
              {Math.round(patientVitals.brainActivity)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-bold">Oxygen Level</div>
            <div className={`text-white ${patientVitals.oxygenLevel < 95 ? 'text-yellow-400' : ''}`}>
              {Math.round(patientVitals.oxygenLevel)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-orange-400 font-bold">Stress Level</div>
            <div className={`text-white ${patientVitals.stress > 60 ? 'text-yellow-400' : ''}`}>
              {Math.round(patientVitals.stress)}%
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 mt-2">
          🦠 Viruses: {viruses.length} active | 💡 Use correct tools to eliminate them!
        </div>
      </div>

      {/* Encouraging progress bar */}
      <div className="bg-black bg-opacity-30 p-3 rounded-lg mt-2 border border-cyan-500/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-cyan-400 text-sm font-bold">Medical Progress - Level {level}</span>
          <span className="text-cyan-300 text-xs">{xp % 500}/500 XP</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((xp % 500) / 500) * 100}%` }}
          />
        </div>
        <div className="text-center text-xs text-gray-300 mt-1">
          🌟 Every repair makes you a better doctor! Keep going!
        </div>
      </div>
    </div>
  );
};

export default MicroMedicsGame;