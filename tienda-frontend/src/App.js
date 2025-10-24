import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Usuarios from "./pages/Usuarios";
import ProductoForm from "./components/ProductoForm";
import UsuarioForm from "./components/UsuarioForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Productos */}
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/editar/:id" element={<ProductoForm />} />

            {/* Usuarios */}
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuarios/editar/:id" element={<UsuarioForm />} />

            {/* Ruta por defecto */}
            <Route path="*" element={<h2>Página no encontrada 🧐</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
