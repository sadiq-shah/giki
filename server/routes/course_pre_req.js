const Router = require("express").Router();
const coursePreReqController = require("../controllers").CoursePreReq;
const { methodNotAllowed } = require("../functions/requests");

Router.get("/", coursePreReqController.list);
Router.get("/:id", coursePreReqController.retrieve);
Router.post("/", coursePreReqController.create);
Router.put("/:id", coursePreReqController.update);
Router.delete("/:id", coursePreReqController.destroy);

// Router.get("/:id/members/", FacultyController.retrieveFacultyMembers);
// Router.get("/:id/images/", FacultyController.retrieveFacultyImages);


// // For any other request method on todo items, we're going to return "Method Not Allowed"
// Router.all('/', methodNotAllowed);
// Router.all('/:id', methodNotAllowed);


module.exports = Router;