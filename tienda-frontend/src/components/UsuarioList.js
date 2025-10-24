import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import Swal from "sweetalert2";

function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const data = await getUsers();
    setUsuarios(data);
  };

  const eliminarUsuario = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      await deleteUser(id);
      Swal.fire("Eliminado", "Usuario eliminado correctamente", "success");
      cargarUsuarios();
    }
  };

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <button
        onClick={() => (window.location.href = "/usuarios/editar/nuevo")}
        className="btn-agregar"
      >
        ➕ Nuevo Usuario
      </button>
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>
                <button
                  onClick={() => window.location.href = `/usuarios/editar/${u.id}`}
                  className="btn-editar"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => eliminarUsuario(u.id)}
                  className="btn-eliminar"
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsuarioList;
