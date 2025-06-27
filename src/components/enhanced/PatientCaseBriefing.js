import React from 'react';

const PatientCaseBriefing = ({ 
  caseData, 
  onStartTreatment, 
  onSkipBriefing, 
  onClose 
}) => {
  if (!caseData) return null;

  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case 'stable': return 'text-green-400 border-green-400';
      case 'moderate': return 'text-yellow-400 border-yellow-400';
      case 'elevated': return 'text-orange-400 border-orange-400';
      case 'critical': return 'text-red-400 border-red-400';
      default: return 'text-blue-400 border-blue-400';
    }
  };

  const getVitalStatus = (value, type) => {
    switch (type) {
      case 'heartRate':
        if (value < 60 || value > 100) return 'vitals-warning';
        return 'vitals-normal';
      case 'brainActivity':
        if (value < 70) return 'vitals-warning';
        if (value < 50) return 'vitals-critical';
        return 'vitals-normal';
      case 'oxygenLevel':
        if (value < 95) return 'vitals-warning';
        if (value < 90) return 'vitals-critical';
        return 'vitals-normal';
      case 'stress':
        if (value > 60) return 'vitals-warning';
        if (value > 80) return 'vitals-critical';
        return 'vitals-normal';
      default:
        return 'vitals-normal';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-4xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🏥</div>
          <h1 className="text-3xl font-bold text-blue-300 mb-2">Medical Case Briefing</h1>
          <div className="text-gray-300 text-sm">
            Review patient information before beginning treatment
          </div>
        </div>

        {/* Patient Overview */}
        <div className="card mb-6">
          <div className="card-header">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="card-title text-2xl">{caseData.patientName}</h2>
                <div className="text-gray-300 text-sm mt-1">
                  {caseData.age} years old • {caseData.gender} • {caseData.occupation}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full border-2 font-bold text-sm ${getUrgencyColor(caseData.severity)}`}>
                {caseData.severity}
              </div>
            </div>
          </div>
          
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">📋 Medical Condition</h3>
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                  <div className="font-bold text-white mb-2">{caseData.condition}</div>
                  <div className="text-gray-300 text-sm">{caseData.story}</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">🔍 Patient Background</h3>
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                  <div className="text-gray-300 text-sm">{caseData.background}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Information Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Symptoms & History */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-xl font-bold text-green-400">🩺 Clinical Information</h3>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h4 className="font-bold text-white mb-2">Current Symptoms:</h4>
                <ul className="space-y-1">
                  {caseData.symptoms?.map((symptom, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-red-400 text-xs mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Medical History:</h4>
                <div className="text-sm text-gray-300 bg-black bg-opacity-30 p-3 rounded">
                  {caseData.medicalHistory}
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Goals & Prognosis */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-xl font-bold text-yellow-400">🎯 Treatment Plan</h3>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h4 className="font-bold text-white mb-2">Treatment Goals:</h4>
                <ul className="space-y-1">
                  {caseData.treatmentGoals?.map((goal, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 text-xs mt-1">✓</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm">Urgency Level:</h4>
                  <div className="text-xs text-gray-300">{caseData.urgency}</div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm">Prognosis:</h4>
                  <div className="text-xs text-gray-300">{caseData.prognosis}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Vital Signs */}
        <div className="card mb-6">
          <div className="card-header">
            <h3 className="text-xl font-bold text-red-400">❤️ Current Vital Signs</h3>
          </div>
          <div className="card-body">
            <div className="vitals-monitor p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-bold text-sm mb-1">HEART RATE</div>
                  <div className={`vitals-value text-2xl ${getVitalStatus(caseData.vitals.heartRate, 'heartRate')}`}>
                    {caseData.vitals.heartRate}
                  </div>
                  <div className="text-xs text-gray-400">BPM</div>
                </div>
                
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-sm mb-1">BRAIN ACTIVITY</div>
                  <div className={`vitals-value text-2xl ${getVitalStatus(caseData.vitals.brainActivity, 'brainActivity')}`}>
                    {caseData.vitals.brainActivity}%
                  </div>
                  <div className="text-xs text-gray-400">FUNCTION</div>
                </div>
                
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-sm mb-1">OXYGEN LEVEL</div>
                  <div className={`vitals-value text-2xl ${getVitalStatus(caseData.vitals.oxygenLevel, 'oxygenLevel')}`}>
                    {caseData.vitals.oxygenLevel}%
                  </div>
                  <div className="text-xs text-gray-400">SAT</div>
                </div>
                
                <div className="text-center">
                  <div className="text-orange-400 font-bold text-sm mb-1">STRESS LEVEL</div>
                  <div className={`vitals-value text-2xl ${getVitalStatus(caseData.vitals.stress, 'stress')}`}>
                    {caseData.vitals.stress}%
                  </div>
                  <div className="text-xs text-gray-400">ANXIETY</div>
                </div>
              </div>
              
              {caseData.vitals.temperature && caseData.vitals.bloodPressure && (
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-green-400 font-bold text-sm mb-1">TEMPERATURE</div>
                      <div className="vitals-value text-lg text-white">{caseData.vitals.temperature}°F</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-bold text-sm mb-1">BLOOD PRESSURE</div>
                      <div className="vitals-value text-lg text-white">{caseData.vitals.bloodPressure}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Case Information */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-black bg-opacity-30 p-4 rounded-lg">
            <h4 className="font-bold text-cyan-400 mb-2 text-sm">⏰ Timeline</h4>
            <div className="text-xs text-gray-300">{caseData.timeline}</div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded-lg">
            <h4 className="font-bold text-green-400 mb-2 text-sm">👨‍⚕️ Referring Physician</h4>
            <div className="text-xs text-gray-300">{caseData.referringPhysician}</div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-400 mb-2 text-sm">📞 Emergency Contact</h4>
            <div className="text-xs text-gray-300">{caseData.emergencyContact}</div>
          </div>
        </div>

        {/* Special Notes */}
        {caseData.specialNotes && (
          <div className="card mb-6">
            <div className="card-header">
              <h3 className="text-lg font-bold text-orange-400">⚠️ Special Considerations</h3>
            </div>
            <div className="card-body">
              <div className="bg-orange-900 bg-opacity-20 border border-orange-400 p-4 rounded-lg">
                <div className="text-orange-200 text-sm">{caseData.specialNotes}</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="btn-success text-xl px-8 py-4 enhanced-button"
            onClick={onStartTreatment}
          >
            🚀 Begin Treatment
          </button>
          
          <button
            className="btn-primary text-lg px-6 py-3 enhanced-button"
            onClick={onSkipBriefing}
          >
            📋 Skip Briefing
          </button>
          
          <button
            className="btn-secondary text-lg px-6 py-3 enhanced-button"
            onClick={onClose}
          >
            📖 Review Again
          </button>
        </div>

        {/* Professional Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-600">
          <div className="text-xs text-gray-400">
            ⚕️ Medical Education Simulation • Always prioritize patient safety and care
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCaseBriefing;