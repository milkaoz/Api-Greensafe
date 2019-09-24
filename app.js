// Requires
const config = require('./config/server');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Iniciar variables
var app = express();

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Coneccion mongodb
var stringDB = 'mongodb://' + config.database.mongoUser + ':' + config.database.mongoPass + '@' + config.database.mongoHost + ':' + config.database.mongoPort + '/' + config.database.mongoDB;
console.log('stringDB: ' + stringDB);

// importar rutas
var denunciaRoutes = require('./routes/denuncia');
var usuarioRoutes = require('./routes/usuario');
var appRoutes = require('./routes/app');


//conexion a la base de datos
mongoose.connect(stringDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos en puerto: ' + config.database.mongoPort + ' \x1b[32m%s\x1b[0m', 'On line');
});


//Rutas
app.use('/denuncia', denunciaRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    var fecha = new Date();
    console.log('Express server puerto 3000 \x1b[32m%s\x1b[0m', 'On line');
});