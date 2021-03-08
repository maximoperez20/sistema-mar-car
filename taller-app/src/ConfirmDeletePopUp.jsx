import { Modal, Button } from "react-bootstrap";
import { React } from "react";
import { deleteACustomer } from "./services/customerService";

function ConfirmDeletePopUp(props) {
  function confirmDelete() {
    props.onHide();
    deleteACustomer(props.customer_id).then(
      () => {
        document.getElementById(props.customer_id).style.display = "none";
        console.log();
        props.setCustomersCount(props.customers_count - 1);
      },
      () => {
        alert(
          "Se ha producido un error al intentar borrar el registro. Si el error persiste contacte al administrador."
        );
      }
    );
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Confirmar la emilinación del registro</h4>
        <p>
          ¿Está usted seguro de que desea eliminar el registro del cliente de la
          base de datos?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={confirmDelete}>
          Si, estoy seguro
        </Button>
        <Button
          className="btn-light btn-outline-secondary"
          onClick={props.onHide}
        >
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeletePopUp;
