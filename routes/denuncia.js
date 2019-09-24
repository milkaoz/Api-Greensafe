var express = require('express');


var app = express();

var Denuncia = require('../models/denuncia');
var Usuario = require('../models/usuario');
// ==========================
// Obtener todos las denuncias
// ==========================
app.get('/', (req, res, next) => {

    Denuncia.find({}, 'nombre categoria nivelGravedad estado denunciaPrivada fechaCreacion')
        .exec(
            (err, denuncias) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: "Error cargando denuncia",
                        errors: err
                    });
                }
                res.status(200).json({
                    ok: true,
                    denuncias: denuncias
                });
            });
});

// ==========================
// Crear un nuevo usuario
// ==========================
app.post('/', (req, res) => {
    var body = req.body;

    var denuncia = new Denuncia({
        descripcion: body.descripcion,
        categoria: body.categoria,
        nivelGravedad: body.nivelGravedad,
        estado: body.estado,
        latitud: body.latitud,
        longuitud: body.longuitud,
        denunciaPrivada: body.denunciaPrivada
    });

    denuncia.save((err, denunciaGuardada) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: "Error al crear denuncia",
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            denuncia: denunciaGuardada
        });
    });

});

module.exports = app;