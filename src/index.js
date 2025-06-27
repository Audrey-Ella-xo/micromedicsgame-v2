import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Enhanced Version 2.0 Entry Point with Performance Monitoring
const root = ReactDOM.createRoot(document.getElementById('root'));

// Enhanced error boundary for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    console.error('Micro Medics Enhanced v2.0 Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'sans-serif'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '600px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔧</div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fbbf24' }}>
              Medical System Error
            </h1>
            <p style={{ marginBottom: '1.5rem', color: '#d1d5db' }}>
              The enhanced medical system encountered an unexpected error. 
              Our nano-engineers are working to fix the issue.
            </p>
            <details style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '1rem',
              textAlign: 'left'
            }}>
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                Technical Details
              </summary>
              <pre style={{ fontSize: '0.8rem', overflow: 'auto' }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
            <button
              style={{
                background: '#06b6d4',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => window.location.reload()}
            >
              🔄 Restart Medical System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced rendering with error boundary and performance monitoring
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Enhanced performance monitoring for v2.0
if (process.env.NODE_ENV === 'development') {
  // Performance monitoring
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        console.log('🚀 Micro Medics v2.0 Load Time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    });
  });
  
  try {
    observer.observe({ entryTypes: ['navigation'] });
  } catch (e) {
    console.log('Performance monitoring not available');
  }
  
  // Memory usage monitoring
  setInterval(() => {
    if (performance.memory) {
      const memory = performance.memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      
      if (memoryUsage > 100) {
        console.warn('🧠 High memory usage detected:', memoryUsage, 'MB');
      }
    }
  }, 30000); // Check every 30 seconds
}

// Enhanced service worker registration for future PWA features
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('🛠️ SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('🛠️ SW registration failed: ', registrationError);
      });
  });
}

// Enhanced global error handling
window.addEventListener('error', (event) => {
  console.error('🚨 Global Error in Micro Medics v2.0:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled Promise Rejection in Micro Medics v2.0:', event.reason);
});

// Enhanced console welcome message
console.log(`
🧠⚡🏆 MICRO MEDICS ENHANCED v2.0 🏆⚡🧠

Welcome to the most advanced medical education gaming experience!

✨ Enhanced Features:
• Patient Case Stories
• Achievement System  
• Ship Customization
• Daily Challenges
• Research Points
• Enhanced Tutorial
• Medical Facts
• Keyboard Controls

🔧 Development Mode: ${process.env.NODE_ENV}
📅 Build Time: ${new Date().toISOString()}

Ready to save lives and learn neuroscience! 🌟
`);

// Enhanced development tools
if (process.env.NODE_ENV === 'development') {
  // Make game state available in console for debugging
  window.MicroMedicsDebug = {
    version: '2.0.0',
    resetLocalStorage: () => {
      localStorage.clear();
      console.log('🔄 Local storage cleared - refresh to reset game');
    },
    getGameData: () => {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('microMedics'));
      const data = {};
      keys.forEach(key => {
        try {
          data[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          data[key] = localStorage.getItem(key);
        }
      });
      return data;
    }
  };
  
  console.log('🔧 Debug tools available: window.MicroMedicsDebug');
}