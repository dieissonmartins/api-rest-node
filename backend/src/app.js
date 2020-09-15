
//import modulos
const express   = require('express');
const mongoose  = require('mongoose');
const routes    = require('./routes');
const bodyParser = require('body-parser');

class App {

    constructor()
    {
        //instanciar express
        this.server = express();

        //connect banco de daodos
        this.dataBase();

        //bodyParser http
        this.bodyParser();

        //middlewares
        this.middleware();

        //rotas 
        this.routes();
    }

    middleware()
    {
        this.server.use(express.json());
    }

    //construtor para conectar ao banco de dados
    dataBase()
    {
        mongoose.connect("mongodb+srv://dieisson:dieisson123@cluster0.aiiwo.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true}
        );
    }

    //construtor para rotas
    routes()
    {
        this.server.use(routes);
    }

    bodyParser()
    {
        //Body parser
        this.server.use(bodyParser.urlencoded({extends: false})); // aceitar dados de formularios 
        this.server.use(bodyParser.json()); // aceitar dados no formato JSON
    }
}

module.exports = new App().server;