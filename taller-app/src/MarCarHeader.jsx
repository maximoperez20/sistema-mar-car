import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LaptopWindowsSharpIcon from "@material-ui/icons/LaptopWindowsSharp";
import PeopleSharpIcon from "@material-ui/icons/PeopleSharp";
import WbIncandescentSharpIcon from "@material-ui/icons/WbIncandescentSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import BackupIcon from "@material-ui/icons/Backup";
import About from "./About";
import BackUp from "./BackUp.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MarCarHeader(props) {
  const [show, setShow] = useState(false);
  const [showBackUp, setShowBackUp] = useState(false);

  const handleAboutClick = () => setShow(!show);
  const handleBackUpClick = () => setShowBackUp(!showBackUp);
  return (
    <header>
      <div id="logo"></div>
      <button
        className="main-close-button btn"
        onClick={(e) => {
          window.close();
        }}
      >
        <FontAwesomeIcon icon="window-close" />
      </button>
      <div id="">
        <div id="nav-bar-header">
          <BottomNavigation showLabels>
            <BottomNavigationAction
              id="main-screen-nav-btn"
              onClick={props.handleHeaderClick}
              label="Principal"
              value="recents"
              icon={<LaptopWindowsSharpIcon />}
            />
            <BottomNavigationAction
              id="find-customer-nav-btn"
              onClick={props.handleClickFindClient}
              label="Buscar Clientes"
              value="favorites"
              icon={<PeopleSharpIcon />}
            />
            <BottomNavigationAction
              id="add-customer-nav-btn"
              onClick={props.handleClickAddClient}
              label="Agregar Cliente"
              value="recents"
              icon={<PersonAddIcon />}
            />
            <BottomNavigationAction
              label="Copia de Seguridad"
              value="nearby"
              icon={<BackupIcon />}
              onClick={handleBackUpClick}
            />
            <BottomNavigationAction
              id="about"
              label="Acerca de"
              value="nearby"
              icon={<WbIncandescentSharpIcon />}
              onClick={handleAboutClick}
            />
          </BottomNavigation>
        </div>
        {show ? (
          <About handleAboutClick={handleAboutClick} show={show} />
        ) : null}
        {showBackUp ? (
          <BackUp handleBackUpClick={handleBackUpClick} show={showBackUp} />
        ) : null}
      </div>
    </header>
  );
}
export default MarCarHeader;
