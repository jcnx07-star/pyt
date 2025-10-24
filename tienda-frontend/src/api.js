const API_URL = "http://localhost:8081/api";

export const getProductos = async () => {
  const response = await fetch(`${API_URL}/productos`);
  return response.json();
};

export const addProducto = async (producto) => {
  const response = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return response.json();
};

export const getUsuarios = async () => {
  const response = await fetch(`${API_URL}/usuarios`);
  return response.json();
};

export const addUsuario = async (usuario) => {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return response.json();
};
