import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router basename="/portafolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
