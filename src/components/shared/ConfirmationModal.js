import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

function ConfirmationModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header">
                <h2>{props.title}</h2>
                <button onClick={props.onClose} className="close-modal">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="modal-body">
                <p className="confirmation-text">{props.bodyText}</p>
            </div>
            <div className="modal-footer">
                <button className="btn outline" onClick={props.onClose}>
                    Cancel
                </button>
                <button className="btn primary" onClick={props.onConfirm}>
                    Yes
                </button>
            </div>
        </Modal>
    );
}

export default ConfirmationModal;
