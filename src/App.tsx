import './styles/App.css';
import { VisualBackground } from './components/VisualBackground/VisualBackground';
import { ContentLayer } from './components/ContentLayer/ContentLayer';

function App() {
  return (
    <div className="app">
      <VisualBackground />
      <ContentLayer />
    </div>
  );
}

export default App;
