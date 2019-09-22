const Router = require("express").Router();
const RoleController = require("./../controllers").Role;
const { methodNotAllowed } = require("./../functions/requests");


Router.get("/:id",RoleController.retrieve);
Router.post("/", RoleController.create);
Router.put("/:id", RoleController.update);
Router.delete("/:id", RoleController.destroy);

Router.all('/', methodNotAllowed);
Router.all('/:id', methodNotAllowed);

module.exports = Router;