var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var categoriasValidos = {
    values: ['Incendio', 'Mal olor', 'Basura', 'Contaminacion'],
    message: '{VALUE} no es una categoria permitida'
};

var nivelGravedadValidos = {
    values: ['Alto', 'Medio', 'Bajo'],
    message: '{VALUE} no es un nivel de gravedad permitido'
};

var estadosValidos = {
    values: ['Creado', 'Revisado', 'Atendido', 'Cerrado'],
    message: '{VALUE} no es un estado permitido'
};

var denunciaSchema = new Schema({

    descripcion: { type: String, required: [true, 'La descripcion es necesario'] },
    categoria: { type: String, required: true, enum: categoriasValidos },
    nivelGravedad: { type: String, required: true, enum: nivelGravedadValidos },
    estado: { type: String, required: true, enum: estadosValidos, default: 'Creado' },
    fechaCreacion: { type: Date, required: true, default: Date.now },
    fechaAtencion: { type: Date, required: false },
    fechaRevision: { type: Date, required: false },
    fechaCierre: { type: Date, required: false },
    latitud: { type: Number, required: [true, 'La latitud es obligatorias'] },
    longuitud: { type: Number, required: [true, 'La longuitud es obligatorias'] },
    denunciaPrivada: { type: Boolean, required: true },
    observacionCierre: { type: String, required: false }
});

denunciaSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Denuncia', denunciaSchema);