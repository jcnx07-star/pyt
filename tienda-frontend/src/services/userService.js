import axios from "axios";

const API_URL = "/api/usuarios"; // Proxy en package.json apunta a localhost:8085

// Obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

// Obtener usuario por ID
export const getUsuarioById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

// Crear nuevo usuario
export const createUsuario = async (usuario) => {
  try {
    const response = await axios.post(API_URL, usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// Actualizar usuario
export const updateUsuario = async (id, usuario) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

// Eliminar usuario
export const deleteUsuario = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};
