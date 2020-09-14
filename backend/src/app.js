
//import modulos
const express = require('express');
const mongoose = require('mongoose');

class App {

    constructor()
    {
        //instanciar express
        this.server = express();

        //connect banco de daodos
        this.dataBase();
    }

    //construtor para conectar ao banco de dados
    dataBase()
    {
        mongoose.connect("mongodb+srv://pitolo:HqxldE4C6d1dbtb6@cluster0.aiiwo.mongodb.net/piloto?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true}
        );
    }
}

module.exports = new App().server;