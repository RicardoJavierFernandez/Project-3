const router = require("express").Router();
const booksController = require("../../controllers/usersController");

// Matches with "/api/users
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  router.route("/login")
  (usersController.login);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
