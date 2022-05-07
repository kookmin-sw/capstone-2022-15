// import Button from ''
import './PreInterview.css';
import { PageDescription } from '../../components/PageDescription';
// import { CamRecorder } from '../../components/CamRecorder';
import React, { useEffect, useState } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ModalComponent from '../../components/Modal';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
// import Footer from '../components/Footer';


const clickMotion = () => window.open('/interview', '_blank');




const CamSetting = () => { 
       
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






const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);
  
    return (
      <>
        <Webcam audio={true} ref={webcamRef} />
        {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )}
      </>
    );
  };
  
  ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
  














const SelectInterviewType = () => {
    const modalStyle = {
        content:{
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '400px',
            height: '400px',
            transform: 'translate(-50%, -50%)',
            background: 'white'
        }
    }
    const closeButtonStyle = {
        color: "blue"
    }
    const ModalContents = () => {
        return(
                <div> fill what you want in PreInterview </div>
            )
    }
    const [openModal, isOpenModal] = useState(false)
    const openModalHandler = () => {
        isOpenModal(true)
    }
    const closeModalHandler = () => {
        isOpenModal(false)
    }

    return(
        <div>
            <button className="temp" onClick={() => isOpenModal(true)}>
                open modal
            </button>
            {isOpenModal && <ModalComponent
                isOpen={openModal}
                closeModalHandler={closeModalHandler}
                modalStyle={modalStyle}
                Content={ModalContents}
                CloseButtonStyle={closeButtonStyle}
                />
            }
        </div>
    )
}


const PreInterview = () => {
    return (
        <div className="PreInterviewApp">
            <Navbar/>
            <PageDescription></PageDescription>
            <CamSetting></CamSetting>
            <SelectInterviewType/> {/* add SelectInterviewType component */}
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;
