// App.tsx
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
