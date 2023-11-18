import { Router } from "express";
import getAllUsers from "../controllers/users.controller.js";
/*import {
  getPosts,
  getAlbumsByUserId,
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest,
} from "../controllers/request.controller";
*/
const router = Router();

// ?Ruta de inicio
router
    .route("/api/")
      .get((req, res) => {
        res.render("index", { title: "+Alcance API" });
      });

// ?Rutas para usuarios
router
    .route("/api/users")
      .get(getAllUsers)

// ?Rutas para publicaciones (posts)
/*router
      .route("/api/posts")
        .get(getPosts)

// ?Rutas para álbumes de un usuario específico
/*router
        .route("/api/albums/:userId")
          .get(getAlbumsByUserId)

// ?Rutas para registros de peticiones
/*router
        .route("/api/requests")
          .get(getAllRequests)
          .post(createRequest)

/*router
        .route("/api/requests/:requestId")
          .patch(editRequest)
          .delete(deleteRequest)
*/
export default router;
