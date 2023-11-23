import axios from "axios";
import RequestModel from "../models/audit.model.js";

//? Controlador para obtener todas las publicaciones (posts)
async function getPosts(req, res, next) {
  const userId = req.query.userId;
  try {
    if (req.query.userId) {
      // Filtra las publicaciones por el userId proporcionado
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const posts = response.data;
      return res.json(posts);
    }

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
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
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
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
    let requests;

    // Verifica si hay un id de usuario en la solicitud
    if (req.query.userId) {
      // Filtra las peticiones por el userId proporcionado
      requests = await RequestModel.find({ userId: req.query.userId });
    } else {
      // Si no hay userId en la solicitud, retorna todas las peticiones registradas
      requests = await RequestModel.find();
    }

    res.json(requests);
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
    // Verificar si el usuario está autenticado
    if (!req.isAuthenticated()) {
      return res.status(401).json({
        message:
          "No estás autenticado. Inicia sesión para realizar esta acción.",
      });
    }

    // Verificar si el registro existe antes de intentar editarlo
    const existingRequest = await RequestModel.findById(req.params.requestId);
    if (!existingRequest) {
      return res
        .status(404)
        .json({ message: "El registro no existe o ya fue eliminado." });
    }

    // Actualizar el registro
    const updatedRequest = await RequestModel.findByIdAndUpdate(
      req.params.requestId,
      req.body,
      { new: true }
    );

    res.json(updatedRequest);
  } catch (error) {
    next(error);
  }
}

//? Controlador para eliminar un registro de petición
async function deleteRequest(req, res, next) {
  try {
    // Verificar si el usuario está autenticado
    if (!req.isAuthenticated()) {
      return res.status(401).json({
        message:
          "No estás autenticado. Inicia sesión para realizar esta acción.",
      });
    }

    const deletedRequest = await RequestModel.findByIdAndDelete(
      req.params.requestId
    );

    if (!deletedRequest) {
      // Si no se encuentra el registro a eliminar
      return res
        .status(404)
        .json({ message: "El registro no existe o ya fue eliminado." });
    }
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
