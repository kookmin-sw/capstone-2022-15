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
        {capturing
        }
        {recordedChunks.length > 0
        }
      </>
    );
  };
  
  export default WebcamStreamCapture;