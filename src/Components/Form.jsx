import React from "react";

const Form = ({ input1, setInput1, input2, setInput2, handleSubmit, error}) => {

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Examen</label>
      <input
        type="text"
        placeholder="Primer Input"
        value={input1}
        onChange={(evento) => setInput1(evento.target.value)}
      />
      <input
        type="text"
        placeholder="Segundo Input"
        value={input2}
        onChange={(evento) => setInput2(evento.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>)}
    </form>
    </div>
  );
};

export default Form;
