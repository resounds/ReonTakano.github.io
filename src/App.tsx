import { useState } from 'react';
import './styles/App.css';
import { VisualBackground } from './components/VisualBackground/VisualBackground';
import { ContentLayer } from './components/ContentLayer/ContentLayer';

function App() {
  const [activeScene, setActiveScene] = useState(0);

  return (
    <div className="app">
      <VisualBackground sceneIndex={activeScene} />
      <ContentLayer onSceneChange={setActiveScene} />
    </div>
  );
}

export default App;
