import { Router } from "express";
import getAllUsers from "../controllers/users.controller.js";
import {
  getPosts,
  getAlbumsByUserId,
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest,
} from "../controllers/request.controller.js";

const router = Router();

// ?Ruta de inicio
router.route("/api/").get((req, res) => {
  res.render("index", { title: "+Alcance API" });
});

// ?Ruta para leer (GET) usuarios
router.route("/api/users").get(getAllUsers);

// ?Ruta para leer (GET)  publicaciones (posts)
router.route("/api/posts").get(getPosts);

// ?Ruta para leer (GET) álbumes de un usuario específico
router.route("/api/albums/").get(getAlbumsByUserId);

// ?Ruta para crear (GET, POST) el registros de la peticion
router.route("/api/requests").get(getAllRequests).post(createRequest);
// ?Ruta para editar y eliminar (PATCH/PUT, DELETE) el registros de la peticion
router
  .route("/api/requests/:requestId")
  .patch(editRequest)
  .delete(deleteRequest);

export default router;
