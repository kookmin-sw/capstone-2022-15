// 1111 make modal component

import React, { useState, useEffect } from "react"; 
import Modal from 'react-modal';

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
    CloseButtonStyle
}) => {
    return (
        <div className="modal">
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModalHandler}
                style={modalStyle.content ? modalStyle : defaultStyle}
                ariaHideApp={false}
            >
                {Content ? <Content/> : <DefaultContent/>}
                <button onClick={closeModalHandler} style={CloseButtonStyle ? CloseButtonStyle : {color: 'red'}}>close</button>
            </Modal>
        </div>
    );
}


export default ModalComponent;