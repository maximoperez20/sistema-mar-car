import React from "react";


function MainScreen(props) {
  return (
    <div>
      
      <div className="main-div">
        <button 
          onClick={props.handleClickAddClient}
          className="btn btn-primary main-button"
        >
          <div className="h3">AGREGAR CLIENTE</div>
        </button>
        <button
          onClick={props.handleClickFindClient}
          className="btn btn-danger main-button"
        >
          <div className="h3">BUSCAR CLIENTE</div>
        </button>
      </div>
    
    </div>
  );
}
export default MainScreen;
