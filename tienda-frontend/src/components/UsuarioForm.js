import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, saveUser, updateUser } from "../services/userService";
import Swal from "sweetalert2";

function UsuarioForm() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({ nombre: "", correo: "" });

  useEffect(() => {
    if (id && id !== "nuevo") {
      getUserById(id)
        .then((data) => setUsuario(data))
        .catch(() => Swal.fire("Error", "No se pudo cargar el usuario", "error"));
    }
  }, [id]);

  const manejarCambio = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id && id !== "nuevo") {
        await updateUser(id, usuario);
        Swal.fire("Actualizado", "Usuario actualizado correctamente", "success");
      } else {
        await saveUser(usuario);
        Swal.fire("Guardado", "Usuario agregado correctamente", "success");
      }
      window.location.href = "/usuarios";
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el usuario", "error");
    }
  };

  return (
    <div className="formulario">
      <h3>{id && id !== "nuevo" ? "Editar Usuario" : "Nuevo Usuario"}</h3>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={usuario.correo}
          onChange={manejarCambio}
          required
        />
        <button type="submit" className="btn-guardar">💾 Guardar</button>
      </form>
    </div>
  );
}

export default UsuarioForm;
