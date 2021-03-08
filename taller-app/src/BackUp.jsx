import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { downloadBackupFile } from "./services/customerService";

const today = new Date().toLocaleDateString();
function BackUp(props) {
  function handleDownloadButton() {
    downloadBackupFile().then((response) => {
      const fileData = JSON.stringify(response);
      const blob = new Blob([fileData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = today + "BackUp.json";
      link.href = url;
      link.click();
    });
    props.handleBackUpClick();
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleBackUpClick}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Copia de Seguridad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="about-content">
            <label>Realizar una copia de seguridad</label>
            <br />

            <label id="app-fecha">
              Presiona el botón para descargar una copia de seguridad de la base
              de datos
            </label>
            <br />
            <br />
            <label id="app-version">
              <button
                onClick={handleDownloadButton}
                className="btn btn-success"
              >
                <FontAwesomeIcon icon="download" /> Descarga
              </button>
            </label>

            <br />
          </div>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default BackUp;
