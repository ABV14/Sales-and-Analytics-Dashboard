import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ReviewModal({ customer, review }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <span id="seeMore" className="see-more" onClick={handleShow}>See More</span>

        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{customer}'s Review</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-dialog-scrollable'>
            {review}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};
