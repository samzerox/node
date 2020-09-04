const express = require('express');
const app = express();


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'sAmUeL aLcArAz'
    });
});
app.get('/about', function(req, res) {

    res.render('about');
});


module.exports = app;