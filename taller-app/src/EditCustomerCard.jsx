import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { getAllCustomers, uptadeCustomer } from "./services/customerService";
import {
  findCustomerByDominio,
  findCustomerByName,
} from "./services/customerService";

function EditCustomerCard(props) {
  const initialFormData = {
    id: props.customer_id,
    name: props.name,
    tel: props.tel,
    dni: props.dni,
    domicilio: props.domicilio,
    car: props.car,
    dominio: props.dominio,
    cedula: props.cedula,
    chasis: props.chasis,
    motor: props.motor,
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

    // ... submit to API or something
    uptadeCustomer(myBody).then((resp) => {
      //refresh process in main finder
      props.showEditCustomerPopUp();
    });
    if (props.filterSearch.search) {
      if (props.filterSearch.filter === "name") {
        findCustomerByName(props.filterSearch.search).then((result) => {
          props.setResults(result);
        });
      } else {
        findCustomerByDominio(props.filterSearch.search).then((result) => {
          props.setResults(result);
        });
      }
    } else {
      getAllCustomers().then((result) => {
        props.setResults(result);
      });
    }
  };
  return (
    <div className="popup">
      <div className="popup_inner">
        <button
          className="closeWindowButton btn btn-danger"
          onClick={props.showEditCustomerPopUp}
        >
          <FontAwesomeIcon icon="times" />
        </button>

        <div>
          <div className="margen-izq">
            <h2
              style={{
                paddingBottom: "10px",
                letterSpacing: "4px",
                fontSize: "1.5rem",
              }}
            >
              Modificar Datos Del Cliente
            </h2>

            <form>
              <div
                id="edit-customer-card"
                className="container edit-customer-card borderless"
              >
                <div className="row">
                  <div className="col">
                    <label>Razón Social</label>
                    <input
                      name="name"
                      defaultValue={props.name}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col">
                    <label>Vehículo</label>
                    <input
                      name="car"
                      defaultValue={props.car}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Teléfono</label>
                    <input
                      name="tel"
                      defaultValue={props.tel}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col">
                    <label>Dominio</label>
                    <input
                      name="dominio"
                      defaultValue={props.dominio}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>DNI</label>
                    <input
                      name="dni"
                      defaultValue={props.dni}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col">
                    <label>N° Cédula</label>
                    <input
                      name="cedula"
                      defaultValue={props.cedula}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Domicilio</label>
                    <input
                      name="domicilio"
                      defaultValue={props.domicilio}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col">
                    <label>N° Chasis</label>
                    <input
                      name="chasis"
                      defaultValue={props.chasis}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col"></div>
                  <div className="col">
                    <label>N° Motor</label>
                    <input
                      name="motor"
                      defaultValue={props.motor}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="edit-customer-buttons">
                <button onClick={handleSubmit} className="btn btn-success">
                  Guardar Cambios
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    props.showEditCustomerPopUp();
                  }}
                  className="btn btn-outline-secondary"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditCustomerCard;
