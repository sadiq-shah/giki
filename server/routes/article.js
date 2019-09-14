const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const ArticleController = require("./../controllers").Article;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", ArticleController.list);
Router.get("/:id", ArticleController.retrieve);
Router.post("/",  ArticleController.create);
Router.put("/:id", ArticleController.update);
Router.delete("/:id", ArticleController.destroy);



// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;