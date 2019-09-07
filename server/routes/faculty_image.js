const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const FacultyImageController = require("./../controllers").FacultyImage;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", FacultyImageController.list);
Router.get("/:id", FacultyImageController.retrieve);
Router.post("/", auth, FacultyImageController.create);
Router.put("/:id", FacultyImageController.update);
Router.delete("/:id", FacultyImageController.destroy);



// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;