const { Router } = require('express');
const FuncionariosController = require('./app/Controllers/FuncionariosController');


const routes = new Router();

routes.get("/funcionarios", FuncionariosController.index)
routes.post("/funcionarios/create", FuncionariosController.create)

module.exports = routes