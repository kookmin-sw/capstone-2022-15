import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import PreInterview from './pages/PreInterviewPage/PreInterview';
import Interview from './pages/InterviewPage/Interview';
import Mypage from './pages/MyPage/Mypage';
import Login from './pages/LoginPage/Login';
import Signup from './pages/LoginPage/Signup';
import Feedback1 from './pages/MyPage/Feedback';
import Feedback2 from './pages/MyPage/Feedback2';
import Feedback3 from './pages/MyPage/Feedback3';
import Feedback4 from './pages/MyPage/Feedback4';
import Feedback5 from './pages/MyPage/Feedback5';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preinterview" element={<PreInterview />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />

      <Route path="/feedback" element={<Feedback1 />} />
      <Route path="/feedback/2" element={<Feedback2 />} />
      <Route path="/feedback/3" element={<Feedback3 />} />
      <Route path="/feedback/4" element={<Feedback4 />} />
      <Route path="/feedback/5" element={<Feedback5 />} /> 
      
    </Routes>
  );
}

export default App;
