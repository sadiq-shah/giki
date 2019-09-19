const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const NewsController = require("./../controllers").NewsController;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", NewsController.list);
Router.get("/:id", NewsController.retrieve);
Router.post("/", NewsController.create);
Router.put("/:id", NewsController.update);
Router.delete("/:id", NewsController.destroy);


// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;