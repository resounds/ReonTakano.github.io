import { useState, useEffect } from 'react';
import './styles/App.css';
import { VisualBackground } from './components/VisualBackground/VisualBackground';
import { ContentLayer } from './components/ContentLayer/ContentLayer';

function App() {
  const [activeScene, setActiveScene] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && (
        <div className="loading-overlay">
          <p>Loading Story...</p>
        </div>
      )}
      <VisualBackground sceneIndex={activeScene} />
      <ContentLayer onSceneChange={setActiveScene} />
    </div>
  );
}

export default App;
