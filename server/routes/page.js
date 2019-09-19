const Router = require("express").Router();
const PageController = require("./../controllers").Page;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", PageController.list);
Router.get("/:id", PageController.retrieve);
Router.post("/", PageController.create);
Router.put("/:id", PageController.update);
Router.delete("/:id", PageController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);


module.exports = Router;