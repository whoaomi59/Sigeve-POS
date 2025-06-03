import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-500 text-center mt-10">SIGEVE POS</h1>
      <p className="text-gray-500 text-center">
        Sistema POS venta y inventario.
      </p>
    </>
  );
}

export default App;
