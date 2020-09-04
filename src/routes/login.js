const express = require('express');
const app = express();


app.get('/login', function(req, res) {

    res.render('login', {
        nombre: 'sAmUeL aLcArAz'
    });
});


module.exports = app;