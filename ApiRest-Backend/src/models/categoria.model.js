const sql = require("../database.js");

const Categoria = function (categoria) {
    this.cod_categoria = categoria.cod_categoria;
    this.descripcion = categoria.descripcion;
};

Categoria.getAll = result => {
    sql.query("SELECT * FROM CATEGORIA", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categoria: ", res);
        result(null, res);
    });
};

module.exports = Categoria;