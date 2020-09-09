const Categoria = require('../models/categoria.model.js');

exports.findAll = (req, res) => {
    Categoria.getAll((err, data) => {
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