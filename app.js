// Requires
const config = require('./config/server');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Iniciar variables
var app = express();
var stringDB = 'mongodb://' + config.database.mongoUser + ':' + config.database.mongoPass + '@' + config.database.mongoHost + ':' + config.database.mongoPort + '/' + config.database.mongoDB;
console.log('stringDB: ' + stringDB);
//conexion a la base de datos
mongoose.connect(stringDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos en puerto: ' + config.database.mongoPort + ' \x1b[32m%s\x1b[0m', 'On line');
});

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// Escuchar peticiones
app.listen(3003, () => {
    var fecha = new Date();
    console.log('Express server puerto 3003 \x1b[32m%s\x1b[0m', 'On line');
});