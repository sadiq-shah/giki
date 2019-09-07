const Router = require("express").Router();
const FacultyMemberController = require("./../controllers").FacultyMember;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", FacultyMemberController.list);
Router.get("/:id", FacultyMemberController.retrieve);
Router.post("/", FacultyMemberController.create);
Router.put("/:id", FacultyMemberController.update);
Router.delete("/:id", FacultyMemberController.destroy);


// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;