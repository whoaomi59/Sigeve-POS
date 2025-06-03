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
        <img
          src="/img/Baner/Baner 1.png"
          alt="Baners"
          className="w-150 h-130"
        />
      </div>
    </Container>
  );
}

export default App;
