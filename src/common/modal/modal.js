import React from "react";
import { Modal, Button } from 'react-bootstrap'
import { ModalContent } from "./modal-content";

export function Popup({ modalName, show, handleClose, modalTitle, data }) {
    return (
        <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalContent
                    modalName={modalName}
                    data={data}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}