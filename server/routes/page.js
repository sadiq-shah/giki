const Router = require("express").Router();
const PageController = require("./../controllers").Page;
const PageTagController = require("./../controllers").PageTags;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", PageController.list);
Router.get("/:id", PageController.retrieve);
Router.post("/", PageController.create);
Router.put("/:id", PageController.update);
Router.delete("/:id", PageController.destroy);

Router.get("/:pageId/tags/", PageController.retrievePageTags);
Router.get("/:pageId/tags/", PageTagController.list);
Router.get("/:pageId/tags/:id", PageTagController.retrieve);
Router.post("/:pageId/tags/", PageTagController.create);
Router.put("/:pageId/tags/:id", PageTagController.update);
Router.delete("/:pageId/tags/:id", PageTagController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);


module.exports = Router;