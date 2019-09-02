const Router = require("express").Router();
const FacultyController = require("./../controllers").Faculty;

Router.get("/", FacultyController.list);
Router.get("/:id", FacultyController.retrieve);
Router.post("/", FacultyController.create);
Router.put("/:id", FacultyController.update);
Router.delete("/:id", FacultyController.destroy);

module.exports = Router;