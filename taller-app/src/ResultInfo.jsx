import { React } from "react";
import Customers from "./Customers";

function ResultInfo(props) {
  if (props.items) {
    return (
      <tbody >
        {props.items.map((item) => (
          <Customers
            key={item.id}
            id={item.id}
            name={item.name}
            tel={item.tel}
            dni={item.dni}
            domicilio={item.domicilio}
            car={item.car}
            dominio={item.dominio}
            cedula={item.cedula}
            chasis={item.chasis}
            motor={item.motor}
            works={item.works}
            customersCount={props.customersCount}
            setCustomersCount={props.setCustomersCount}
            setResults={props.setResults}
            filterSearch={props.filterSearch}
          />
        ))}
      </tbody>
    );
  } else { 
    return null;
  }
}
export default ResultInfo;
