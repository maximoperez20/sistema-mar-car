import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState, useEffect } from "react";

import ResultInfo from "./ResultInfo";
import {
  getAllCustomers,
  findCustomerByDominio,
  findCustomerByName,
} from "./services/customerService";

//Busqueda de clientes
function FindClient() {
  const [results, setResults] = useState("");
  const [customersCount, setCustomersCount] = useState("");
  const [filterSearch, setFilterSearch] = useState({});
  const [noMatches, setNoMatches] = useState(false);
  //Obtener todos los clientes y colocar la "CANTIDAD DE CLIENTES"
  useEffect(() => {
    getAllCustomers().then((res) => {
      const customersLength = res.length;
      setCustomersCount(customersLength);
    });
  }, []);

  //Manejo del boton search : icono de la lupa POR NOMBRE
  function handleSearchButton(e) {
    e.preventDefault();
    const filterName = document.getElementById("searchByName").value;
    if (filterName) {
      findCustomerByName(filterName).then((resp) => {
        setFilterSearch({ search: filterName, filter: "name" });
        setResults(resp);
      });
    } else {
      getAllCustomers().then((result) => {
        setResults(result);
        console.log(filterSearch);
      });
    }
  }
  //Manejo del boton search : icono de la lupa POR DOMINIO
  function handleSearchDominioButton(e) {
    e.preventDefault();
    document.getElementById("searchByName").value = "";
    const filterDominio = document.getElementById("searchByDominio").value;
    if (filterDominio) {
      findCustomerByDominio(filterDominio).then((resp) => {
        setFilterSearch({ search: filterDominio, filter: "dominio" });
        setResults(resp);
      });
    } else {
      getAllCustomers().then((result) => {
        setResults(result);
      });
    }
  }

  return (
    <div id="main-content">
      <div className="results-table-head busqueda-form">
        <div className="">
          <form id="find-client inline" className="inline">
            <label className="h7 ">Razón Social</label>
            <input id="searchByName" className="inline"></input>
            <button
              title="Buscar"
              onClick={handleSearchButton}
              className="btn inline search-button"
            >
              <FontAwesomeIcon
                icon="search"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </form>
          <form id="find-client" className="inline">
            <label className="h7 inline">Dominio</label>
            <input id="searchByDominio" className="inline"></input>
            <button
              title="Buscar"
              onClick={handleSearchDominioButton}
              className="btn inline search-button"
            >
              <FontAwesomeIcon
                icon="search"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </form>

          <span className="inline" style={{ color: "grey" }}>
            CANTIDAD DE CLIENTES: {customersCount}
          </span>
        </div>
      </div>

      <div className="results-div">
        <table
          id="results-table"
          className="table table-striped table-bordered table-sm"
          cellSpacing="0"
          
        >
          <thead className="results-table-head">
            <tr className="results-table-header-row">
              <th className="th-sm">Razón Social</th>
              <th className="th-sm">Teléfono</th>
              <th className="th-sm">DNI</th>
              <th className="th-sm">Domicilio</th>
              <th className="th-sm">Vehículo</th>
              <th className="th-sm">Dominio</th>
              <th className="th-sm">N° Cédula</th>
              <th className="th-sm">N° Chasis</th>
              <th className="th-sm">N° Motor</th>
              <th className="th-sm">Acciones</th>
            </tr>
          </thead>

          <ResultInfo
            items={results}
            customersCount={customersCount}
            setCustomersCount={setCustomersCount}
            setResults={setResults}
            filterSearch={filterSearch}
          />
        </table>
      </div>
    </div>
  );
}

export default FindClient;
