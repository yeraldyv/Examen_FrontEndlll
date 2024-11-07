import React from "react";
//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({element}) => {
  //console.log(props);
  return (<div>
    <h3>Informacion Enviada</h3>
    <p>Input 1: {element.input1}</p>
    <p>Input 2: {element.input2}</p>
    </div>);
};


export default Card;