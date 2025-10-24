import React from "react";
import UsuarioForm from "../components/UsuarioForm";
import UsuarioList from "../components/UsuarioList";

function Usuarios() {
  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <UsuarioForm />
      <UsuarioList />
    </div>
  );
}

export default Usuarios;
