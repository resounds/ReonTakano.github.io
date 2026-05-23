import { useState, useEffect } from 'react'
import './App.css'
import { VisualBackground } from './components/VisualBackground/VisualBackground'
import { ContentLayer } from './components/ContentLayer/ContentLayer'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
              background: '#050505', color: 'white', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', zIndex: 1000 
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
            >
              Loading Experience...
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <VisualBackground sceneIndex={sceneIndex} />
          <ContentLayer onSceneChange={setSceneIndex} />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ position: 'fixed', top: '1rem', right: '1rem', color: 'white', zIndex: 10, fontSize: '0.8rem', opacity: 0.5 }}
          >
            SCENE {sceneIndex + 1}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default App
