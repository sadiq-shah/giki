const Router = require("express").Router();
const FacultyImageController = require("./../controllers").FacultyImage;

Router.get("/", FacultyImageController.list);
Router.get("/:id", FacultyImageController.retrieve);
Router.post("/", FacultyImageController.create);
Router.put("/:id", FacultyImageController.update);
Router.delete("/:id", FacultyImageController.destroy);

module.exports = Router;