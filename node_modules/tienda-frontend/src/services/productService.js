import axios from "axios";

const API_URL = "/api/productos"; // Proxy en package.json apunta a localhost:8085

// Obtener todos los productos
export const getProductos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

// Obtener un producto por ID
export const getProductoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  }
};

// Crear nuevo producto
export const createProducto = async (producto) => {
  try {
    const response = await axios.post(API_URL, producto);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

// Actualizar producto existente
export const updateProducto = async (id, producto) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, producto);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

// Eliminar producto
export const deleteProducto = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};
