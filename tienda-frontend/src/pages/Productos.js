import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({ id: "", nombre: "", precio: "", stock: "" });

  // Cargar productos
  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  // Manejar cambios en formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Guardar o actualizar producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await axios.put(`http://localhost:8085/api/productos/${formData.id}`, formData);
      } else {
        await axios.post("http://localhost:8085/api/productos", formData);
      }
      setFormData({ id: "", nombre: "", precio: "", stock: "" });
      fetchProductos();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  const handleEdit = (producto) => {
    setFormData(producto);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      try {
        await axios.delete(`http://localhost:8085/api/productos/${id}`);
        fetchProductos();
      } catch (error) {
        console.error("Error al eliminar producto:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Productos</h2>
      <table className="table">
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
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>Q{producto.precio.toFixed(2)}</td>
              <td>{producto.stock}</td>
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(producto)}>Editar</button>
                <button className="btn btn-delete" onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Agregar o Editar Producto</h3>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
        <button type="submit" className="btn btn-save">Guardar</button>
      </form>
    </div>
  );
};

export default Productos;
