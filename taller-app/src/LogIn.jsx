import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function userController() {
  const userInserted = document.forms["login-form"]["inputUser"].value;
  const passwordInserted = document.forms["login-form"]["inputPassword"].value;
  
  ReactDOM.render(<App />, document.getElementById("root"));
}
function LogIn() {
  return (
    
      <div className="centro login-main-div">
        <h1 className="heading">MAR-CAR</h1>
        <form id="login-form" action="" onSubmit={userController}>
          <h1 className="h4 mb-3 fw-normal text-muted">Ingresa tus datos</h1>
          <label name="user" className="h4 visually-hidden">
            Usuario
          </label>
          <input
            type="user"
            id="inputUser"
            className="form-control"
            placeholder="Usuario"
          ></input>
          <label name="password" className="h4 visually-hidden">
            Contraseña
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
          ></input>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Ingresar
          </button>
        </form>
      </div>
  );
}

export default LogIn;
