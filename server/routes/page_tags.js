const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const PageTagsController = require("./../controllers").PageTags;
const ArticleController = require("./../controllers").Article;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", PageTagsController.list);
Router.get("/:id", PageTagsController.retrieve);
Router.post("/", PageTagsController.create);
Router.put("/:id", PageTagsController.update);
Router.delete("/:id", PageTagsController.destroy);

Router.get("/:pageTagId/articles/", PageTagsController.retrieveArticles);
Router.get("/:pageTagId/articles/", ArticleController.list);
Router.get("/:pageTagId/articles/:id", ArticleController.retrieve);
Router.post("/:pageTagId/articles/", ArticleController.create);
Router.put("/:pageTagId/articles/:id", ArticleController.update);
Router.delete("/:pageTagId/articles/:id", ArticleController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;