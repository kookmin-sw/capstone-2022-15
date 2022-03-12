import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import PreInterview from './pages/PreInterviewPage/PreInterview';
import Interview from './pages/InterviewPage/Interview';
import Mypage from './pages/MyPage/Mypage';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preinterview" element={<PreInterview />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
