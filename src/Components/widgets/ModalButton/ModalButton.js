import React from "react";
import { Modal, Button,Image } from "react-bootstrap";


const ModalButton = (props) => {
  return (
    <div>
      return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Image src={props.image} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
    </div>
  );
};
export default ModalButton;
