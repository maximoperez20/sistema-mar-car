import React, { useState } from "react";

// import Customer from "./Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmDeletePopUp from "./ConfirmDeletePopUp";
import WorksCard from "./WorksCard";
import EditCustomerCard from "./EditCustomerCard";

const Customers = (props) => {
  //SHOW POP UP FUNCTION
  const [WorksCardPopUp, setWorksCardPopUp] = useState(false);
  const [EditCustomerPopUp, setEditCustomerPopUp] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  function handleDeleteButton() {
    setModalShow(true);
  }
  function showWorksCardPopUp() {
    setWorksCardPopUp(!WorksCardPopUp);
  }
  function showEditCustomerPopUp() {
    setEditCustomerPopUp(!EditCustomerPopUp);
  }

  return (
    <>
      <tr onDoubleClick={showWorksCardPopUp} id={props.id}>
        <td style={{ width: "120px" }}>{props.name}</td>
        <td>{props.tel}</td>
        <td>{props.dni}</td>
        <td>{props.domicilio}</td>
        <td>{props.car}</td>
        <td>{props.dominio}</td>
        <td>{props.cedula}</td>
        <td>{props.chasis}</td>
        <td>{props.motor}</td>
        <td style={{ width: "145px" }}>
          <button
            title="Modificar datos del cliente"
            onClick={showEditCustomerPopUp}
            type="button"
            className="btn btn-outline-success resultsButton"
          >
            <FontAwesomeIcon icon="edit" size="xs" />
          </button>
          <button
            title="Detalles del Cliente"
            onClick={showWorksCardPopUp}
            type="button"
            className="btn btn-outline-primary resultsButton"
          >
            <FontAwesomeIcon icon="tools" size="xs" />
          </button>

          <button
            title="Eliminar Cliente"
            fila-a-borrar={props.id}
            onClick={() => handleDeleteButton(props.id)}
            type="button"
            className="btn btn-outline-danger resultsButton"
          >
            <FontAwesomeIcon icon="trash" size="xs" />
          </button>
          <ConfirmDeletePopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
            customer_id={props.id}
            customers_count={props.customersCount}
            setCustomersCount={props.setCustomersCount}
          />
        </td>
      </tr>
      {EditCustomerPopUp ? (
        <EditCustomerCard
          customer_id={props.id}
          showEditCustomerPopUp={showEditCustomerPopUp}
          name={props.name}
          tel={props.tel}
          dni={props.dni}
          domicilio={props.domicilio}
          car={props.car}
          dominio={props.dominio}
          cedula={props.cedula}
          chasis={props.chasis}
          motor={props.motor}
          setResults={props.setResults}
          filterSearch={props.filterSearch}
        />
      ) : null}
      {WorksCardPopUp ? (
        <WorksCard
          key={props.id}
          customer_id={props.id}
          showWorksCardPopUp={showWorksCardPopUp}
          name={props.name}
          tel={props.tel}
          dni={props.dni}
          domicilio={props.domicilio}
          car={props.car}
          dominio={props.dominio}
          cedula={props.cedula}
          chasis={props.chasis}
          motor={props.motor}
          works={props.works}
        />
      ) : null}
    </>
  );
};

export default Customers;
