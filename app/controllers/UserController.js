const User = require('../models/Usuarios');

function index(req, res) {
    User.find({}).then(users => {
        if (users.length) return res.status(200).send({
            users
        });
        return res.status(204).send({
            message: 'NO CONTENT'
        });
    }).catch(error => res.status(500).send({
        error
    }));
}

function show(req, res) {
    let error = req.body.error;
    if (req.body.error) return res.status(500).send({
        error
    });
    if (!req.body.user) return res.status(404).send({
        message: 'NO FOUND'
    });
    let user = req.body.user;
    return res.status(200).send({
        user
    });
}

function create(req, res) { //creo el usuario 
    let user = new User(req.body);
    user.save().then(user => res.status(201).send({
        user
    })).catch(error => res.status(500).send({
        error
    }));
}

function update(req, res) {
    if (req.body.error) return res.status(500).send({
        error
    });
    if (!req.body.user) return res.status(404).send({
        message: 'NO FOUND'
    });
    let userN = req.body.user[0];
    userN = Object.assign(userN, req.body);
    userN.save().then(user => res.status(200).send({
        message: 'UPDATED',
        user
    })).catch(error => res.status(500).send({
        error
    }));
}

function remove(req, res) {
    if (req.body.error) return res.status(500).send({
        error
    });
    if (!req.body.user) return res.status(404).send({
        message: 'NO FOUND'
    });
    req.body.user[0].remove().then(user => res.status(200).send({
        message: 'REMOVED',
        user
    })).catch(error => res.status(500).send({
        error
    }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    User.find(query).then(users => {
        if (!users.length) return next();
        req.body.user = users;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    });
}
module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}