import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { addWork, getAllWorksByCustomerId } from "./services/customerService";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";

let today = new Date().toLocaleDateString();

function AddWorksForm(props) {
  const initialFormData = {
    customer_id: props.customer_id,
    work_id: uuid(),
    fecha: today,
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myBody = JSON.stringify(formData);
    console.log(myBody);

    // // ... submit to API or something
    addWork(myBody).then(() => {
      getAllWorksByCustomerId(props.customer_id).then((resp) => {
        // const myResponse = {Fecha, Kilometraje, Trabajo}
        props.setWorks(resp);
        props.onHide();
        // props.setWorks();
      });
    });
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar un trabajo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          method="post"
          id="add-customer"
          name="add-customer"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="formBasicFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              required
              type="text"
              defaultValue={today}
              name="fecha"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicKilometraje">
            <Form.Label>Kilometraje</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Ingrese el Kilometraje"
              name="kilometraje"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTrabajo">
            <Form.Label>Trabajo</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Ingrese el Trabajo"
              name="trabajo"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} className="btn-success" type="submit">
          Agregar tarea
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
export default AddWorksForm;
