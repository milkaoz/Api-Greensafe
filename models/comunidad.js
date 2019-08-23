var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var Schema = mongoose.Schema;


var comunidadSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] }

});

comunidadSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Comunidad', comunidadSchema);