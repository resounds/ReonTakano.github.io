import { useState } from 'react'
import './App.css'
import { VisualBackground } from './components/VisualBackground/VisualBackground'
import { ContentLayer } from './components/ContentLayer/ContentLayer'

function App() {
  const [sceneIndex, setSceneIndex] = useState(0);

  return (
    <div className="app">
      <VisualBackground sceneIndex={sceneIndex} />
      <ContentLayer onSceneChange={setSceneIndex} />
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', color: 'white', zIndex: 10 }}>
        Scene Index: {sceneIndex}
      </div>
    </div>
  )
}

export default App
