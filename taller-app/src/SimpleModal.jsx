import { Modal, Button } from "react-bootstrap";
import { React } from "react";

function SimpleModal(props) {
  function handleAcceptButton() {
    props.onHide();
    props.showEditCustomerPopUp();
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Exitoso</h4>
        <p>Los cambios realizados en el registro fueron guardados con éxito.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-light btn-outline-secondary"
          onClick={handleAcceptButton}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SimpleModal;
