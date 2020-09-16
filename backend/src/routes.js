//modulos
const express = require('express');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const auth = require('./middlewares/auth');

const routes = express.Router();

routes.post('/users', userController.create);
routes.post('/session', sessionController.create);

//Middleware
routes.use(auth);

routes.get('/users', userController.index);

module.exports = routes;

