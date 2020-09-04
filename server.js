const express = require('express');
const app = express();

var hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'sAmUeL aLcArAz'
    });
});
app.get('/about', function(req, res) {

    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});