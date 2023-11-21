import { Router } from "express";
import {
  getAllUsers,
  createUser,
  loginUser,
  getUserById,
} from "../controllers/users.controller.js";
import {
  getPosts,
  getAlbumsByUserId,
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest,
} from "../controllers/request.controller.js";
import requestLogger from "../../middlewares/requestLogger.js";
import { authenticate } from "../../middlewares/auth.js";

const router = Router();

//? middleware para capturar la solicitud
router.use(requestLogger);

// ?Ruta de inicio
router.route("/api/").get((req, res) => {
  res.render("index", { title: "+Alcance API" });
});

// ?Ruta para leer (GET) usuarios
router.route("/api/users").get(getAllUsers);

//? Ruta para registrar e iniciar sesión (POST) usuarios
router.route("/api/register").post(createUser);
router.route("/api/login").post(loginUser);

// ?Ruta para ver el perfil (GET) del usuario
router.route("/api/profile/:userId").get(getUserById);

// ?Ruta para leer (GET)  publicaciones (posts)
router.route("/api/posts").get(getPosts);

// ?Ruta para leer (GET) álbumes de un usuario específico
router.route("/api/albums/").get(getAlbumsByUserId);

// ?Ruta para leer y crear (GET, POST) el registros de la peticion
router.route("/api/requests").get(getAllRequests).post(createRequest);
// ?Ruta para editar y eliminar (PATCH/PUT, DELETE) el registros de la peticion - SOLO (AUTENTICADO)
router
  .route("/api/requests/:requestId")
  .all(authenticate)
  .patch(editRequest)
  .delete(deleteRequest);

export default router;
