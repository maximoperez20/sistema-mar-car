import { React, useState } from "react";
import { createCustomer } from "./services/customerService";
// import uuid from "react-uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialFormData = {
  id: Date.now(),
};

function handleCancelButton() {
  window.location.reload();
}

function AddClient() {
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

    // ... submit to API or something
    createCustomer(myBody).then((resp) => {
      window.location.reload();
    });
  };
  return (
    <div id="add-customer-content">
      <Form
        method="post"
        id="add-customer"
        name="add-customer"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Razón Social</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese la Razón Social"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDomicilio">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Domicilio"
            name="domicilio"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Teléfono"
            name="tel"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el DNI"
            name="dni"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicVehiculo">
          <Form.Label>Vehículo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Vehículo"
            name="car"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDominio">
          <Form.Label>Dominio</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Dominio"
            name="dominio"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCedula">
          <Form.Label>N° Cédula</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Nº de Cédula"
            name="cedula"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicChasis">
          <Form.Label>N° Chasis</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Nº de Chasis"
            name="chasis"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicMotor">
          <Form.Label>N° Motor</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese el Nº de Motor"
            name="motor"
            onChange={handleChange}
          />
        </Form.Group>
        <Button style={{marginRight:"10px"}} variant="primary" type="submit">
          Guardar
        </Button>
        <Button
          variant="outline-dark"
          type="cancel"
          onClick={handleCancelButton}
        >
          Cancelar
        </Button>
      </Form>
    </div>
  );
}
export { AddClient };
