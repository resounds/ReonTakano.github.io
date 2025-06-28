import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Top from './pages/Top';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Portfolio />} />
        <Route path="/top" element={<Top />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* 他のルートを追加することもできます */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
