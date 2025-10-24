import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">🛒 Tienda Virtual</h2>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
