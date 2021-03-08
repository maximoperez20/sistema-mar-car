import { Modal, Button } from "react-bootstrap";
import { React } from "react";

function About(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleAboutClick}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Acerca de</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="about-content">
            <label id="app-name">Sistema MAR-CAR</label>
            <br />
            <label id="app-version">Version: 1.0</label>
            <br />
            <label id="app-fecha">Fecha de Instalación: 6/3/2021</label>
            <br />
          </div>
          <br />
          <label id="app-developer">
            Desarrollado por: Máximo Perez <br />
            &lt;perezmaximo20@gmail.com&gt;
            <br /> +54 351 803 7592
          </label>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleAboutClick}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default About;
