import { CupSoda } from "lucide-react";
import "./App.css";
import Container from "./components/layouts/container";

function App() {
  return (
    <Container>
      <h1 className="text-blue-500 text-center mt-10">SIGEVE POS</h1>
      <p className="text-gray-500 text-center">
        Sistema POS venta y inventario.
      </p>
      <div className="flexx">
        <CupSoda className="text-gray-300 w-50 h-50 mt-5" />
      </div>
    </Container>
  );
}

export default App;
