const Router = require("express").Router();
const { auth } = require("./../middlewares/auth");
const CourseController = require("./../controllers").CourseController;
const CoursePreReq = require("./../controllers").CoursePreReq;
const CourseCoReq = require("./../controllers").CourseCoReq;
const { methodNotAllowed } = require("./../functions/requests");

Router.get("/", CourseController.list);
Router.get("/:id", CourseController.retrieve);
Router.post("/",  CourseController.create);
Router.put("/:id", CourseController.update);
Router.delete("/:id", CourseController.destroy);


Router.get("/:id/prereq",CourseController.retrieveCoursePreReqs);
Router.get("/:courseid/prereq/:id", CoursePreReq.retrieve);
Router.post("/:courseid/prereq/", CoursePreReq.create);
Router.put("/:courseid/prereq/:id", CoursePreReq.update);
Router.delete("/:courseid/prereq/:id", CoursePreReq.destroy);


Router.get("/:id/coreq", CourseController.retrieveCourseCoReqs);
Router.get("/:courseid/coreq/:id", CourseCoReq.retrieve);
Router.post("/:courseid/coreq/", CourseCoReq.create);
Router.put("/:courseid/coreq/:id", CourseCoReq.update);
Router.delete("/:courseid/coreq/:id", CourseCoReq.destroy);



// For any other request method on todo items, we're going to return "Method Not Allowed"
Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;