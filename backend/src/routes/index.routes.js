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

// ?Rutas para usuarios
router
    .route("/api/users")
      .get(getAllUsers)

// ?Rutas para publicaciones (posts)
/*router
      .route("/posts")
        .get(getPosts)

// ?Rutas para álbumes de un usuario específico
/*router
        .route("/albums/:userId")
          .get(getAlbumsByUserId)

// ?Rutas para registros de peticiones
/*router
        .route("/requests")
          .get(getAllRequests)
          .post(createRequest)

/*router
        .route("/requests/:requestId")
          .patch(editRequest)
          .delete(deleteRequest)
*/
export default router;
