//modulos
const express = require('express');
const userController = require('./controllers/userController');

const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', userController.create);

module.exports = routes;

