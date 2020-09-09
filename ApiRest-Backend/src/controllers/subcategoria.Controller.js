const Categoria = require('../models/categoria.model.js');
const Subcategoria = require('../models/subcategoria.model.js');

exports.findAll = (req, res) => {
    Subcategoria.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Employees."
            });
        } else {
            res.status(200).send(data);
        }
    });
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Conteniedo no puede estar vacio!"
        });
    }

    const subcategoria = new Subcategoria({
        cod_sub_categoria: req.body.cod_sub_categoria,
        cod_categoria: req.body.cod_categoria,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion,

    });

    Subcategoria.create(subcategoria, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        } else {
            res.status(201).send(data);
        }
    });
    
};

exports.findOne = (req, res) => {
    Subcategoria.findById(req.params.categCod, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.categCod}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Employee with id " + req.params.categCod
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findOne1 = (req, res) => {
    Subcategoria.findBySub(req.params.subCategCod, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.subCategCod}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Employee with id " + req.params.subCategCod
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    Subcategoria.remove(req.params.subCod, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.subCod}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Employee with id " + req.params.subCod
                });
            }
        } else res.send({ message: `subcategoria was deleted successfully!` });
    });
};
