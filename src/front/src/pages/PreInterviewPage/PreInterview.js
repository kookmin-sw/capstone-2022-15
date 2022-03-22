// import Button from ''
import './PreInterview.css';
import { PageDescription } from '../../components/PageDescription';
// import { CamRecorder } from '../../components/CamRecorder';
import React, { Component } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
// import Footer from '../components/Footer';


class PreInterview extends Component {
    render() {
        return (
            <div className="PreInterviewApp">
                <Navbar/>
                <PageDescription></PageDescription>
                <CamSetting></CamSetting>
                {/* <Footer/> */}
            </div>
        );
    }
}

class CamSetting extends Component { 
    render() {
        return (
            <div className="cam-setting-layout">
                <span className="cam-setting-title">
                    WEBCAM 연결 · · ·
                </span>
                <div className="cam-show-layout">
                    <div className="cam-show">
                        {/* <CamRecorder></CamRecorder> */}
                    </div>
                </div>
                <Link to="/interview" className="link-to-interviewpage">
                {/* <button onClick={() => window.open('/interview', '_blank')}>/interview</button> */}
                    <button className="start-button">
                        START
                    </button>
                </Link>
            </div>
        );
    }

}


export default PreInterview;
