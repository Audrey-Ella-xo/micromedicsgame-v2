import React from 'react';

const EnhancedIntroScreen = ({
  level,
  xp,
  coins,
  researchPoints,
  consecutiveDays,
  dailyChallenge,
  currentShip,
  onStartGame,
  onOpenShipSelector,
  onOpenAchievements,
  onOpenStats
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 flex items-center justify-center p-5">
      <div className="text-center max-w-6xl w-full">
        {/* Enhanced Header */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-8xl mr-4 animate-pulse">🧠</span>
          <div>
            <h1 className="text-6xl font-bold text-cyan-400 font-mono title-enhanced">
              Micro Medics
            </h1>
            <div className="text-2xl text-yellow-400 font-bold mt-2">
              Enhanced v2.0
            </div>
            <div className="text-sm text-gray-300 mt-1">
              Professional Medical Education Platform
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats Dashboard */}
        <div className="card mb-8">
          <div className="card-header">
            <h2 className="card-title">Medical Progress Dashboard</h2>
            <p className="card-subtitle">Your journey to becoming a legendary surgeon</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value text-cyan-400">{level}</div>
              <div className="stat-label">Surgeon Level</div>
              <div className="progress-container mt-2">
                <div 
                  className="progress-bar" 
                  style={{ width: `${((xp % 500) / 500) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-300 mt-1">{xp % 500}/500 XP</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value text-purple-400">{researchPoints}</div>
              <div className="stat-label">Research Points</div>
              <div className="text-xs text-purple-300 mt-1">🔬 Scientific Currency</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value text-green-400">{coins}</div>
              <div className="stat-label">Medical Coins</div>
              <div className="text-xs text-green-300 mt-1">💰 Equipment Fund</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value text-orange-400">{consecutiveDays}</div>
              <div className="stat-label">Study Streak</div>
              <div className="text-xs text-orange-300 mt-1">🔥 Consecutive Days</div>
            </div>
          </div>
        </div>

        {/* Daily Challenge Panel */}
        <div className="card mb-8">
          <div className="card-header">
            <h3 className="text-2xl font-bold text-white mb-2">🌟 Today's Medical Challenge</h3>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg border border-green-400">
            <div className="text-green-200 font-bold text-lg mb-1">{dailyChallenge.title}</div>
            <div className="text-white text-sm mb-2">{dailyChallenge.description}</div>
            <div className="text-yellow-300 text-sm font-medium">{dailyChallenge.reward}</div>
            
            {dailyChallenge.completed ? (
              <div className="text-green-400 font-bold mt-2 text-sm">
                ✅ CHALLENGE COMPLETED! Excellent work, Doctor!
              </div>
            ) : (
              <div className="mt-2">
                <div className="progress-container">
                  <div 
                    className="progress-bar bg-gradient-to-r from-green-400 to-blue-400" 
                    style={{ width: `${(dailyChallenge.progress / dailyChallenge.target) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-green-200 mt-1">
                  Progress: {dailyChallenge.progress}/{dailyChallenge.target}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Enhanced Description */}
        <div className="card mb-8">
          <div className="card-header">
            <h2 className="card-title">🏥 Advanced Medical Training Simulation</h2>
          </div>
          <div className="card-body">
            <p className="text-xl mb-6">
              Experience authentic patient cases, master surgical techniques, and learn real neuroscience 
              in the most comprehensive medical education game ever created! 🌟
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg border border-green-400">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-bold text-green-300 text-sm">Patient Stories</div>
                <div className="text-xs text-gray-400">Real medical cases</div>
              </div>
              
              <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg border border-blue-400">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-bold text-blue-300 text-sm">Achievements</div>
                <div className="text-xs text-gray-400">20+ unlockable badges</div>
              </div>
              
              <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg border border-purple-400">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-bold text-purple-300 text-sm">Ship Collection</div>
                <div className="text-xs text-gray-400">8 customizable vessels</div>
              </div>
              
              <div className="bg-yellow-900 bg-opacity-50 p-4 rounded-lg border border-yellow-400">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-bold text-yellow-300 text-sm">Brain Science</div>
                <div className="text-xs text-gray-400">50+ educational facts</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button
            className="btn-primary text-2xl px-8 py-4 enhanced-button"
            onClick={onStartGame}
          >
            🌟 Begin Medical Mission
          </button>
          
          <button
            className="btn-secondary text-xl px-6 py-4 enhanced-button"
            onClick={onOpenShipSelector}
          >
            🚀 Ship Hangar ({currentShip})
          </button>
          
          <button
            className="btn-success text-xl px-6 py-4 enhanced-button"
            onClick={onOpenAchievements}
          >
            🏆 Achievements
          </button>
          
          <button
            className="btn-warning text-xl px-6 py-4 enhanced-button"
            onClick={onOpenStats}
          >
            📊 Medical Records
          </button>
        </div>

        {/* Enhanced Features Showcase */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl font-bold text-cyan-400">🎮 Enhanced v2.0 Features</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Patient Case Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Achievement System</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Ship Customization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Daily Challenges</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Research Points</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Enhanced Tutorial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Medical Facts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Keyboard Controls</span>
            </div>
          </div>
        </div>

        {/* Version Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white font-bold text-sm">
            <span>🚀</span>
            <span>Enhanced v2.0</span>
            <span>🏥</span>
          </div>
          <div className="text-xs text-gray-400 mt-2">
            The most advanced medical education gaming experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedIntroScreen;