const express = require('express');
const app = express();
const sql = require('mssql');
const config = require('../config/config');

var jwt = require('jsonwebtoken');


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

        if (result1.rowsAffected[0] == 0) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o Contraseña incorrectos'
                }
            });
        }

        let token = jwt.sign({
            id: result1.recordset[0].usu_id,
            usuario: result1.recordset[0].usu_correo
        }, config.SEED, { expiresIn: config.CADUCIDAD_TOKEN });


        res.cookie("token", token);
        console.log(token);
        res.redirect('/');

        // res.json({
        //     id: result1.recordset[0].usu_id,
        //     usuario: result1.recordset[0].usu_correo,
        //     registros: result1.rowsAffected[0],
        //     token
        // });
    } catch (err) {
        // ... error checks
        console.log(err);
    }
});


module.exports = app;