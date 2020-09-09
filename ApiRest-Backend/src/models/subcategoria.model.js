const sql = require("../database.js");

const Subcategoria = function (subcategoria) {
    this.cod_sub_categoria = subcategoria.cod_sub_categoria;
    this.cod_categoria = subcategoria.cod_categoria;
    this.nombre= subcategoria.nombre;
    this.descripcion = subcategoria.descripcion;
    this.fecha_creacion= subcategoria.fecha_creacion;
};

Subcategoria.getAll = result => {
    sql.query("SELECT * FROM SUBCATEGORIA", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("subcategoria: ", res);
        result(null, res);
    });
};

Subcategoria.create = (newEmployee, result) => {
    sql.query("INSERT INTO SUBCATEGORIA SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("created categoria: ", { codEmployee: res.insertCod, ...newEmployee });
            result(null, { codEmployee: res.insertCod, ...newEmployee });
        }

    });
};

Subcategoria.findById = (CategoriaCod, result) => {
    sql.query(`SELECT * FROM SUBCATEGORIA WHERE COD_CATEGORIA = '${CategoriaCod}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("subcategoria encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

Subcategoria.findBySub = (subCategoriaCod, result) => {
    sql.query(`SELECT * FROM SUBCATEGORIA WHERE COD_SUB_CATEGORIA = '${subCategoriaCod}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("subcategoria encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};


module.exports = Subcategoria;