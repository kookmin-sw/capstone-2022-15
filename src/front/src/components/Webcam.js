import React, { useCallback } from 'react';
import Webcam from 'react-webcam';

const WebcamStreamCapture = ({
    webcamRef,
    capturing,
    recordedChunks,
    startCaptureHandler,
    stopCaptureHandler,
    downloadHandler,
}) => {  
    return (
      <>
        <Webcam audio={true} ref={webcamRef}/>
        {capturing ? (
          stopCaptureHandler && <button onClick={stopCaptureHandler}>Stop Capture</button>
        ) : (
          startCaptureHandler && <button onClick={startCaptureHandler}>Start Capture</button>
        )}
        {recordedChunks.length > 0 
        }
      </>
    );
  };
  
  export default WebcamStreamCapture;