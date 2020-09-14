
//import modulos
const express = require('express');

class App {

    constructor()
    {
        //instanciar express
        this.server = express();
    }
}

module.exports = new App().server;