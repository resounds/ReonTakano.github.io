import './App.css'
import { VisualBackground } from './components/VisualBackground/VisualBackground'

function App() {
  return (
    <div className="app">
      <VisualBackground />
      <div style={{ height: '200vh', color: 'white', padding: '2rem', position: 'relative', zIndex: 1 }}>
        <h1>Takano Reon</h1>
        <p>Scroll down to see the experience.</p>
      </div>
    </div>
  )
}

export default App
