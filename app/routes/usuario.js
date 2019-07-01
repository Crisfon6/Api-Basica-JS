const express = require('express');
const UserCtrl = require('../controllers/UserController');

const Router = express.Router();

Router.get('/', UserCtrl.index) //api.com/user/ INDEX : lista todos los productos
    .post('/', UserCtrl.create) // api.com/user/  CREATE : crea un nuevo usuario
    .get('/:key/:value', UserCtrl.find, UserCtrl.show) //api.com/user/name/cristhian SHOW : muestra un usuario
    .put('/:key/:value', UserCtrl.find, UserCtrl.update) //api.com/user/name/cristhian UPDATE : ACTUALIZAR UN USUARIO EN ESPECIFICO
    .delete('/:key/:value', UserCtrl.find, UserCtrl.remove); //api.com/user/name/cristhian
//find es un midleware se pone primero par que se ejecute antes

module.exports = Router;