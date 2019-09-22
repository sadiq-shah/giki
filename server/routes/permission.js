const Router = require("express").Router();
const PermissionController = require("./../controllers").Permission;
const { methodNotAllowed } = require("./../functions/requests");


Router.get("/:id",PermissionController.retrieve);
Router.post("/", PermissionController.create);
Router.put("/:id", PermissionController.update);
Router.delete("/:id", PermissionController.destroy);

Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;