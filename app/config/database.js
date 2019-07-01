const mongoose = require('mongoose');
const CONFIG = require('./config'); //nos traemos nusetro archivo de configuracion

module.exports = { //exportamos un objeto 
    connection: null, //atributo
    connect: function () { //metodo
        if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection => {
            this.connection = connection;
            console.log("Conexion  a base de datos establecida");
        }).catch(error => console.log(error));
    }
}