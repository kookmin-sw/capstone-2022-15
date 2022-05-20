import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import PreInterview from './pages/PreInterviewPage/PreInterview';
import Interview from './pages/InterviewPage/Interview';
import Mypage from './pages/MyPage/Mypage';
import Login from './pages/LoginPage/Login';
import Signup from './pages/LoginPage/Signup';
import Feedback1 from './pages/MyPage/Feedback';
import HomeAfterLogin from './pages/HomePage/HomeAfterLogin';
import Feedback2 from './pages/MyPage/Feedback2';
import Feedback3 from './pages/MyPage/Feedback3';
//import Feedback4 from './pages/MyPage/Feedback4';
//import Feedback5 from './pages/MyPage/Feedback5';
import Notification from './pages/NotificationPage/Notification';
import Step from './pages/StepPage/Step';

function App() {
  return (
    <div className="allPage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeafterlogin" element={<HomeAfterLogin />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/step" element={<Step />} />
        <Route path="/preinterview" element={<PreInterview />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/feedback1/*" element={<Feedback1 />} />
        <Route path="/feedback2/*" element={<Feedback2 />} />
        <Route path="/feedback3/*" element={<Feedback3 />} />
      </Routes>
    </div>
  );
}

export default App;
