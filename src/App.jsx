import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from './Projects';
import Main from './main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
