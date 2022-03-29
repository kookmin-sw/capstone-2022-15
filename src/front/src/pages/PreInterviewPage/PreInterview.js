// import Button from ''
import './PreInterview.css';
import { PageDescription } from '../../components/PageDescription';
// import { CamRecorder } from '../../components/CamRecorder';
import React, { Component } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';


class PreInterview extends Component {
    render() {
        return (
            <div>
                <div className="PreInterviewApp">
                    <Navbar/>
                    <PageDescription></PageDescription>
                    <CamSetting></CamSetting>
                </div>
                <div className="PreInterviewAppFooter">
                    <Footer/>
                </div>
            </div>
        );
    }
}

const clickMotion = () => window.open('/interview', '_blank');
class CamSetting extends Component { 
    render() {
        return (
            <div className="cam-setting-layout">
                <div className="mini-title">
                    <div className="cam-setting-title">
                        WEBCAM 연결
                    </div>
                    {/* <div className="Connecting">
                        Connecting
                    </div> */}
                    {/* <div className="Connected">
                        Connected
                    </div> */}
                    {/* <div className="Connection-failed">
                        Connection failed
                    </div> */}
                </div>
                <div className="cam-show-layout">
                    <div className="cam-show">
                        {/* <CamRecorder></CamRecorder> */}
                    </div>
                </div>
                <Link to="/interview" className="link-to-interviewpage">
                    {/* <button onClick={clickMotion}>/interview</button> */}
                    <button className="start-button">
                        START
                    </button>
                </Link>
            </div>
        );
    }

}


export default PreInterview;
