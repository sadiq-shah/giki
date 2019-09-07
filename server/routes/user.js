const Router = require("express").Router();
const { UserController } = require("./../controllers");
const { methodNotAllowed } = require("./../functions/requests");
const { auth } = require("./../middlewares/auth");

Router.get("/", UserController.list);
Router.get("/:id", UserController.retrieve);
Router.post("/", UserController.create);
Router.put("/:id", UserController.update);
Router.delete("/:id", UserController.destroy);

Router.post("/login", UserController.login);
Router.get("/auth/me", auth, UserController.getUserFromAuth);
// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);


module.exports = Router;