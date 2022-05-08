import React, { useCallback } from 'react';
import Webcam from 'react-webcam';

const WebcamStreamCapture = ({
    webcamRef,
    capturing,
    recordedChunks,
}) => {  
    return (
      <>
        <Webcam audio={false} ref={webcamRef}/>
        {capturing
        }
        {recordedChunks.length > 0
        }
      </>
    );
  };
  
  export default WebcamStreamCapture;