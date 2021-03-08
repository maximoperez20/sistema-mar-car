import { React, useState } from "react";
import { createCustomer } from "./services/customerService";
import uuid from "react-uuid";
const initialFormData = {
  id: uuid(),
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
    createCustomer(myBody)
      .then((resp) => {
        console.log("customerService devuelve:", resp);
      })
      .then(window.location.reload());
  };
  return (
    <div id="add-customer-content">
      <form
        method="post"
        id="add-customer"
        name="add-customer"
        onSubmit={handleSubmit}
      >
        <div class="rTable">
        <div class="rTableRow">
            <div class="rTableCell"></div>
            <div class="rTableCell">
            </div>
          </div>

          <div class="rTableRow">
            <div class="rTableHead">
              <strong>Razón Social</strong>
            </div>
            <div class="rTableHead">
              <span>
                {" "}
                <input
                  id="name"
                  className="inline"
                  name="name"
                  onChange={handleChange}
                ></input>
              </span>
            </div>
          </div>

          <div class="rTableRow">
            <div class="rTableCell">Domicilio</div>
            <div class="rTableCell">
              <input
                id="address"
                className="inline"
                name="domicilio"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="rTableRow">
            <div class="rTableCell">Teléfono</div>
            <div class="rTableCell">
              <input
                id="tel"
                className="inline"
                name="tel"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <label className="h5 block">DNI</label>
        <input
          id="dni"
          className="inline"
          name="dni"
          onChange={handleChange}
        ></input>

        <label className="h5 block">Vehículo</label>
        <input
          id="car"
          name="car"
          className="inline"
          onChange={handleChange}
        ></input>

        <label className="h5 block">Dominio</label>
        <input
          id="dominio"
          name="dominio"
          className="inline"
          onChange={handleChange}
        ></input>

        <label className="h5 block">N° Cédula</label>
        <input
          id="cedula"
          name="cedula"
          className="inline"
          onChange={handleChange}
        ></input>

        <label className="h5 block">N° Chasis</label>
        <input
          id="chasis"
          name="chasis"
          className="inline"
          onChange={handleChange}
        ></input>

        <label className="h5 block">N° Motor</label>
        <input
          id="motor"
          name="motor"
          className="inline"
          onChange={handleChange}
        ></input>

        <div className="addClientButton">
          <button
            type="submit"
            className="btn btn-outline-success btn-lg"
            style={{ marginRight: "10px" }}
          >
            GUARDAR
          </button>
          <button
            onClick={handleCancelButton}
            type="button"
            className="btn btn-outline-danger btn-lg"
          >
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
}
export { AddClient };
