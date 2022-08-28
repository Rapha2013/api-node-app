const { Router } = require('express');
const FuncionariosController = require('./app/Controllers/FuncionariosController');


const routes = new Router();

routes.get("/funcionarios", FuncionariosController.index)
routes.post("/funcionarios/create", FuncionariosController.create)
routes.delete("/funcionarios/delete/:id", FuncionariosController.deletar)

module.exports = routes