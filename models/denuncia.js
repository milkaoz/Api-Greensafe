var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categoriasValidos = {
    values: ['Incendio', 'Mal olor', 'Basura', "Contaminacion"],
    message: '{VALUE} no es una categoria permitida'
}

var denunciaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'El contraseña es necesario'] },
    img: { type: String, required: false },
    categoria: { type: String, required: true, enum: categoriasValidos }
});

//usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' } );

module.exports = mongoose.model('Usuario', usuarioSchema);