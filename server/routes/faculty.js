const Router = require("express").Router();
const FacultyController = require("./../controllers").Faculty;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", FacultyController.list);
Router.get("/:id", FacultyController.retrieve);
Router.post("/", FacultyController.create);
Router.put("/:id", FacultyController.update);
Router.delete("/:id", FacultyController.destroy);

Router.get("/:id/members/", FacultyController.retrieveFacultyMembers);
Router.get("/:id/images/", FacultyController.retrieveFacultyImages);


// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);


module.exports = Router;