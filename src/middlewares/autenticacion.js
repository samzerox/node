const jwt = require('jsonwebtoken');
const config = require('../config/config');

let verificaToken = (req, res, next) => {
    // let token = req.get('token');
    let token = req.headers['cookie'];


    console.log('token', token);

    jwt.verify(token, config.SEED, (err, decoded) => {
        if (err) {
            return res.redirect('/login');

        }

        req.id = decoded.id;
        req.usuario = decoded.usuario;
        next();

    });

};



module.exports = {
    verificaToken
};