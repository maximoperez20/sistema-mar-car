import React from "react";
import FindClient from "./FindClient";
import MainScreen from "./MainScreen";

import { AddClient } from "./AddClient";
import { library } from "@fortawesome/fontawesome-svg-core";
import MarCarHeader from "./MarCarHeader";

import {
  faCar,
  faCoffee,
  faEdit,
  faEye,
  faSearch,
  faTimes,
  faTrash,
  faTools,
  faPlusSquare,
  faDownload,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSearch,
  faCoffee,
  faCar,
  faTrash,
  faEdit,
  faEye,
  faTimes,
  faTools,
  faPlusSquare,
  faDownload,
  faWindowClose
);

function App() {
  function changeBackgroundColor(btn1, btn2, btn3) {
    //document.getElementById(btn1).style.backgroundColor = "#ffb854";
    document.getElementById(btn1).style.backgroundColor = "#cdcda8";
    document.getElementById(btn2).style.backgroundColor = "#fff";
    document.getElementById(btn3).style.backgroundColor = "#fff";
  }

  // BOTON DE BUSQUEDA DE CLIENTES
  const [screen, setScreen] = React.useState(
    <MainScreen
      handleClickAddClient={handleClickAddClient}
      handleClickFindClient={handleClickFindClient}
    />
  );

  // Handler para el BOTON DE AGREGAR CLIENTES
  function handleClickAddClient(params) {
    setScreen(<AddClient />);

    changeBackgroundColor(
      "add-customer-nav-btn",
      "find-customer-nav-btn",
      "main-screen-nav-btn"
    );
  }
  // Handler para el BOTON DE BUSCAR CLIENTES
  function handleClickFindClient(params) {
    setScreen(<FindClient />);
    changeBackgroundColor(
      "find-customer-nav-btn",
      "add-customer-nav-btn",
      "main-screen-nav-btn"
    );
  }
  // Handler para el BOTON DE CONSULTAS

  // Handler para el click en el HEADER
  function handleHeaderClick() {
    setScreen(
      <MainScreen
        handleClickAddClient={handleClickAddClient}
        handleClickFindClient={handleClickFindClient}
      />
    );
    changeBackgroundColor(
      "main-screen-nav-btn",
      "add-customer-nav-btn",
      "find-customer-nav-btn"
    );
  }

  //Renderiza Header y la Pantalla Principal con los botones <MarCarHeader />
  return (
    <div>
      <MarCarHeader
        handleHeaderClick={handleHeaderClick}
        handleClickAddClient={handleClickAddClient}
        handleClickFindClient={handleClickFindClient}
        changeBackgroundColor={changeBackgroundColor}
      />

      {screen}
    </div>
  );
}

export default App;
