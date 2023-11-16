const { Router } = require("express");
const router = Router();
const userController = require("../controllers/users.controller");
const resourceController = require("../controllers/request.controller");

// ?Rutas para usuarios
router.route("/users").get(userController.getAllUsers);

// ?Rutas para publicaciones (posts)
router.route("/posts").get(resourceController.getPosts);

// ?Rutas para álbumes de un usuario específico
router.route("/albums/:userId").get(resourceController.getAlbumsByUserId);

// ?Rutas para registros de peticiones
router
  .route("/requests")
  .get(resourceController.getAllRequests)
  .post(resourceController.createRequest);

router
  .route("/requests/:requestId")
  .patch(resourceController.editRequest)
  .delete(resourceController.deleteRequest);

module.exports = router;
