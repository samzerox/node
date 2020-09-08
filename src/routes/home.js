const express = require('express');
const app = express();

const { verificaToken } = require('../middlewares/autenticacion');


app.get('/', verificaToken, (req, res) => {

    // return res.json({
    //     id: req.id,
    //     usuario: req.usuario
    // });

    res.render('home', {
        nombre: 'sAmUeL aLcArAz'
    });
});
app.get('/about', function(req, res) {

    res.render('about');
});


module.exports = app;