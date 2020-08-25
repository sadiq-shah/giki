const Router = require("express").Router();
const FacultyController = require("./../controllers").Faculty;
const FacultyMemberController = require("./../controllers").FacultyMember;
const FacultyImageController = require("./../controllers").FacultyImage;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", FacultyController.list);
Router.get("/:id", FacultyController.retrieve);
Router.post("/", FacultyController.create);
Router.put("/:id", FacultyController.update);
Router.delete("/:id", FacultyController.destroy);


Router.get("/:facultyId/members/", FacultyController.retrieveFacultyMembers);
Router.get("/:facultyId/members/", FacultyMemberController.list);
Router.get("/:facultyId/members/:id", FacultyMemberController.retrieve);
Router.post("/:facultyId/members/", FacultyMemberController.create);
Router.put("/:facultyId/members/:id", FacultyMemberController.update);
Router.delete("/:facultyId/members/:id", FacultyMemberController.destroy);


Router.get("/:id/images/", FacultyController.retrieveFacultyImages);
Router.get("/:facultyId/images/", FacultyImageController.list);
Router.get("/:facultyId/images/:id", FacultyImageController.retrieve);
Router.post("/:facultyId/images/", FacultyImageController.create);
Router.put("/:facultyId/images/:id", FacultyImageController.update);
Router.delete("/:facultyId/images/:id", FacultyImageController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);


module.exports = Router;
