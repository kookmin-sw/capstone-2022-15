// 1111 make modal component

import React, { useState, useEffect } from "react"; 
import Modal from 'react-modal';

const DefaultContent = () => {
    return (
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
            </Modal>
        </div>
    );
}


export default ModalComponent;