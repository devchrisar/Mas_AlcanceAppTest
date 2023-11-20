import axios from "axios";
import RequestModel from "../models/audit.model.js";

//? Controlador para obtener todas las publicaciones (posts)
async function getPosts(req, res, next) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

//? Controlador para obtener álbumes de un usuario específico
async function getAlbumsByUserId(req, res, next) {
  const userId = req.query.userId;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
    );
    const albums = response.data;
    res.json(albums);
  } catch (error) {
    next(error);
  }
}

//? Controlador para obtener todos los registros de peticiones
async function getAllRequests(req, res, next) {
  try {
    // Verifica si el usuario está autenticado
    if (req.isAuthenticated()) {
      const userId = req.user._id; // Obtén el id del usuario autenticado

      // Filtra las peticiones por el id del usuario autenticado
      const requests = await RequestModel.find({ userId });
      res.json(requests);
    } else {
      // Si no está autenticado, retorna todas las peticiones registradas
      const requests = await RequestModel.find();
      res.json(requests);
    }
  } catch (error) {
    next(error);
  }
}

//? Controlador para crear una nueva petición
async function createRequest(req, res, next) {
  try {
    const newRequest = await RequestModel.create(req.body);
    res.json(newRequest);
  } catch (error) {
    next(error);
  }
}

//? Controlador para editar un registro de petición
async function editRequest(req, res, next) {
  try {
    const updatedRequest = await RequestModel.findByIdAndUpdate(
      req.params.requestId,
      req.body,
      { new: true },
    );
    res.json(updatedRequest);
  } catch (error) {
    next(error);
  }
}

//? Controlador para eliminar un registro de petición
async function deleteRequest(req, res, next) {
  try {
    await RequestModel.findByIdAndDelete(req.params.requestId);
    res.json({ message: "Registro eliminado con éxito." });
  } catch (error) {
    next(error);
  }
}

export {
  getPosts,
  getAlbumsByUserId,
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest,
};
