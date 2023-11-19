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
    // todo: crear la autenticación y el registro de usuarios y con esto acceder al id del usuario
    let query = {};
    //? Si el usuario se encuentra autenticado, filtra las peticiones por el id del usuario de lo contrario, 
    //? retorna todas las peticiones registradas
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }

    const requests = await RequestModel.find(query);
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
