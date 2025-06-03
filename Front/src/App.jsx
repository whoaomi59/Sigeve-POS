import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "./components/layouts/container";
import Dashboard from "./view/dashboard";
import Ventas from "./view/ventas";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Container
              Roles={"admin"}
              usuarios={"admin"}
              nombre={"Admin Sigeve POS"}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ventas" element={<Ventas />} />
              </Routes>
            </Container>
          }
        />
        <Route path="/*" element={"Not Font"} />
      </Routes>
    </Router>
  );
}

export default App;
