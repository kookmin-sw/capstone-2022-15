import React, { useState, useEffect } from "react"; 
import Modal from 'react-modal';
import Interview from '../pages/InterviewPage/Interview'

const defaultStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '400px',
      height: '400px',
      transform: 'translate(-50%, -50%)',
      background: 'white'
    },
  };

const DefaultContent = () => {
    return(
        <div>hello :)</div>
    )
}

const ModalComponent = ({
    isOpen,
    closeModalHandler,
    modalStyle,
    Content,
    CloseButtonStyle,
    selectedInterviewType,
    startCaptureHandler,
    stopCaptureHandler,
    downloadHandler,
}) => {
    return (
        <div className="modal">
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModalHandler}
                style={modalStyle.content ? modalStyle : defaultStyle}
                ariaHideApp={false}
            >
                <Interview 
                    selectedInterviewType={selectedInterviewType}
                    startCaptureHandler={startCaptureHandler}
                    stopInterviewHandler={stopCaptureHandler}
                    downloadHandler={downloadHandler}
                />
                <button onClick={closeModalHandler} style={CloseButtonStyle ? CloseButtonStyle : {color: 'red'}}>close</button>
            </Modal>
        </div>
    );
}


export default ModalComponent;