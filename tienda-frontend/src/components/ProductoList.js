import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import Swal from "sweetalert2";

function ProductoList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await getProducts();
    setProductos(data);
  };

  const eliminarProducto = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      await deleteProduct(id);
      Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
      cargarProductos();
    }
  };

  return (
    <div>
      <h2>Listado de Productos</h2>
      <button
        onClick={() => (window.location.href = "/productos/editar/nuevo")}
        className="btn-agregar"
      >
        ➕ Nuevo Producto
      </button>
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              <td>{p.stock}</td>
              <td>
                <button
                  onClick={() => window.location.href = `/productos/editar/${p.id}`}
                  className="btn-editar"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => eliminarProducto(p.id)}
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

export default ProductoList;
