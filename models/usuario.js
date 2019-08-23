var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['COMMUNITY', 'AUDITOR'],
    message: '{VALUE} no es un role permitido'
};

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, index: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'El contraseña es necesario'] },
    img: { type: String, required: false },
    role: { type: String, required: true, index: true, default: 'USER_ROLE', enum: rolesValidos }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);