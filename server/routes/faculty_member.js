const Router = require("express").Router();
const FacultyMemberController = require("./../controllers").FacultyMember;

Router.get("/", FacultyMemberController.list);
Router.get("/:id", FacultyMemberController.retrieve);
Router.post("/", FacultyMemberController.create);
Router.put("/:id", FacultyMemberController.update);
Router.delete("/:id", FacultyMemberController.destroy);

module.exports = Router;