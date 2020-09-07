const express = require('express');
const app = express();
const sql = require('mssql');
const config = require('../config/config');


app.get('/login', function(req, res) {

    res.render('login', {
        nombre: 'sAmUeL aLcArAz'
    });
});

app.post('/login', async(req, res) => {

    let body = req.body;

    try {
        let pool = await sql.connect(config.datasource)
        let result1 = await pool.request()
            .input('usu_correo', sql.NVarChar, body.correo)
            .input('usu_clave', sql.NVarChar, body.password)
            .query('select * from dbo.cat_usuario where usu_correo = @usu_correo AND usu_clave = @usu_clave');

        res.json({
            data: result1.recordset,
            registros: result1.rowsAffected
        });
    } catch (err) {
        // ... error checks
        console.log(err);
    }
});


module.exports = app;