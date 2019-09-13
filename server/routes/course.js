const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const CourseController = require("./../controllers").CourseController;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", CourseController.list);
Router.get("/:id", CourseController.retrieve);
Router.post("/", auth, CourseController.create);
Router.put("/:id", CourseController.update);
Router.delete("/:id", CourseController.destroy);



// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;