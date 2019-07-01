const express = require("express");
const bodyparser = require("body-parser");
const User = require('./routes/usuario');

const App = express();


App.use(bodyparser.json());
App.use(bodyparser.urlencoded({
    extended: false
})); //con esto le aclaramos que no recibiremos informacion directamente 
//envia de un formulario si que sera procesado y envia en JSON

App.use('/user', User);

module.exports = App;