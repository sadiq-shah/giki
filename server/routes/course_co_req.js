const Router = require("express").Router();
const courseCoReqController = require("../controllers").CourseCoReq;
const { methodNotAllowed } = require("../functions/requests");

Router.get("/", courseCoReqController.list);
Router.get("/:id", courseCoReqController.retrieve);
Router.post("/", courseCoReqController.create);
Router.put("/:id", courseCoReqController.update);
Router.delete("/:id", courseCoReqController.destroy);


// // For any other request method on todo items, we're going to return "Method Not Allowed"
// Router.all('/', methodNotAllowed);
// Router.all('/:id', methodNotAllowed);


module.exports = Router;