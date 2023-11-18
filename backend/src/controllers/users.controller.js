import axios from "axios";

// ?Controlador para obtener todos los usuarios
async function getAllUsers(req, res, next) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    if (error.response) {
      // La solicitud fue hecha, pero el servidor respondió con un código de estado que no está en el rango 2xx
      console.error("Server error:", error.response.status);
      console.error("Server error message:", error.response.data);
    } else if (error.request) {
      // La solicitud fue hecha, pero no se recibió ninguna respuesta
      console.error("No response from server:", error.request);
    } else {
      // Algo sucedió en la configuración que desencadenó un error
      console.error("Error:", error.message);
    }
    // Pasa el error al siguiente middleware
    next(error);
  }
}

export default getAllUsers;
