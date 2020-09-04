const express = require('express');
const app = express();

const routes = require('./src/routes/index');
const colors = require('colors/safe');
const config = require('./src/config/config');
const puerto = config.port || 3000;

const bodyParser = require('body-parser');


var hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// configuración global de rutas
app.use(routes);


app.listen(puerto, () => {
    console.log(colors.green('====================================='));
    console.log('Corriendo en el puerto: ', colors.green(puerto));
    console.log(colors.green('====================================='));
});