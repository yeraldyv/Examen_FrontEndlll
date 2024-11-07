import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import "./App.css";

function App() {
  // Agregar estados y handlers para los inputs
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1.trim().length < 3 || input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setError("");
    setSubmittedData({ input1, input2 });
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Form
        input1={input1}
        setInput1={setInput1}
        input2={input2}
        setInput2={setInput2}
        handleSubmit={handleSubmit}
        error={error}
      />
      {submittedData && <Card element={submittedData} />}
    </div>
  );
}

export default App;
