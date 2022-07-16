import React from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Info = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className="info-container">
            <button className="info-button" onClick={() => setIsOpen(true)}>
                <img className="info-image" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                closeTimeoutMS={500}
            >
                <div className="modal-container">
                    <h2>Extra information</h2>
                    <h4>Api used:</h4>
                    <span>trace moe api</span>
                    <h4>Find more info at:</h4>
                    <a className="modal-url" href='https://soruly.github.io/trace.moe-api'>https://soruly.github.io/trace.moe-api</a>
                    <button className='modal-button' onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}