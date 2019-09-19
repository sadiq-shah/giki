const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const PageTagsController = require("./../controllers").PageTags;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", PageTagsController.list);
Router.get("/:id", PageTagsController.retrieve);
Router.post("/", auth, PageTagsController.create);
Router.put("/:id", PageTagsController.update);
Router.delete("/:id", PageTagsController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;