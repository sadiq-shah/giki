const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const EventController = require("./../controllers").EventController;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", EventController.list);
Router.get("/:id", EventController.retrieve);
Router.post("/", EventController.create);
Router.put("/:id", EventController.update);
Router.delete("/:id", EventController.destroy);


// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;