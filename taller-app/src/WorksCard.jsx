import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllWorksByCustomerId } from "./services/customerService";
import AddWorksForm from "./AddWorksForm.jsx";

function WorksCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getAllWorksByCustomerId(props.customer_id).then((resp) => {
      if (resp.length > 0) {
        setWorks(resp);
      }
    });
  }, [props.customer_id]);

  function handleAddWork() {
    setModalShow(true);
  }
  return (
    <div id="worksCard">
      <div className="popup">
        <div className="popup_inner">
          <button
            className="closeWindowButton btn btn-danger"
            onClick={props.showWorksCardPopUp}
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
                Tarjeta Del Cliente
              </h2>
              <div className="divTable">
                <div className="divTableBody">
                  <div className="divTableRow">
                    <div className="divTableCell">
                      Razón Social: {props.name}
                    </div>
                    <div className="divTableCell">Vehículo: {props.car}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Teléfono: {props.tel}</div>
                    <div className="divTableCell">Dominio: {props.dominio}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">DNI: {props.dni}</div>
                    <div className="divTableCell">
                      N° Cédula: {props.cedula}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">
                      Domicilio: {props.domicilio}
                    </div>
                    <div className="divTableCell">
                      N° Chasis: {props.chasis}
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell"></div>
                    <div className="divTableCell">N° Motor: {props.motor}</div>
                  </div>
                </div>
              </div>

              <br />
              <h5>
                Trabajos Realizados{" "}
                <button className="btn" onClick={handleAddWork}>
                  <FontAwesomeIcon
                    id="plus-square-personal"
                    icon="plus-square"
                    o
                  />
                </button>
              </h5>
              <AddWorksForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                customer_id={props.customer_id}
                showWorksCardPopUp={props.showWorksCardPopUp}
                setWorks={setWorks}
              />
              <table
                id="works-table"
                className={
                  works.length > 3
                    ? "table table-striped table-bordered table-sm scrollable-works-table"
                    : "table table-striped table-bordered table-sm"
                }
                cellSpacing="0"
                width="100%"
              >
                <thead className="works-table-head">
                  <tr>
                    <th className="columna-fecha">Fecha</th>

                    <th className="columna-km">Kilometraje</th>
                    <th className="columna-work">Trabajo</th>
                  </tr> 
                </thead>
                <tbody className="works-table-body">
                  {works.length > 0 ? (
                    works.map((work) => (
                      <tr>
                        <td className="columna-fecha">{work.fecha}</td>
                        <td className="columna-km">{work.kilometraje}</td>
                        <td className="columna-work">{work.trabajo}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td style={{ textAlign: "center" }} colSpan="4">
                        NO HAY TRABAJOS
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksCard;
