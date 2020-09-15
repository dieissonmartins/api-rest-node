//modulos
const express = require('express');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.post('/session', sessionController.create);

module.exports = routes;

