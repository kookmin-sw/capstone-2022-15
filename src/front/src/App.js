import { Route, Routes } from 'react-router-dom';
import PreInterview from './pages/PreInterview';
import Interview from './pages/Interview';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreInterview />} />
      <Route path="/interview" element={<Interview />} />

    </Routes>
  );
}

export default App;
