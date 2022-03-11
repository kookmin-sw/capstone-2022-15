import { Route, Routes } from 'react-router-dom';
import PreInterview from './pages/PreInterview';
import Interview from './pages/Interview';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreInterview />} />
      <Route path="/interview" element={<Interview />} />

    </Routes>
  );
}

export default App;
