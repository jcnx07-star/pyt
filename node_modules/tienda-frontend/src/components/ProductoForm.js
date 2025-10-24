import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, saveProduct, updateProduct } from "../services/productService";
import Swal from "sweetalert2";

function ProductoForm() {
  const { id } = useParams();
  const [producto, setProducto] = useState({ nombre: "", precio: "", stock: "" });

  useEffect(() => {
    if (id && id !== "nuevo") {
      getProductById(id)
        .then((data) => setProducto(data))
        .catch(() => Swal.fire("Error", "No se pudo cargar el producto", "error"));
    }
  }, [id]);

  const manejarCambio = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id && id !== "nuevo") {
        await updateProduct(id, producto);
        Swal.fire("Actualizado", "Producto actualizado correctamente", "success");
      } else {
        await saveProduct(producto);
        Swal.fire("Guardado", "Producto agregado correctamente", "success");
      }
      window.location.href = "/productos";
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el producto", "error");
    }
  };

  return (
    <div className="formulario">
      <h3>{id && id !== "nuevo" ? "Editar Producto" : "Nuevo Producto"}</h3>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={producto.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={producto.precio}
          onChange={manejarCambio}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={producto.stock}
          onChange={manejarCambio}
          required
        />
        <button type="submit" className="btn-guardar">💾 Guardar</button>
      </form>
    </div>
  );
}

export default ProductoForm;
