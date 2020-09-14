
//import modulos
const express = require('express');

//instanciar express
const app = express();

//iniciar servidor
app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080...");
});