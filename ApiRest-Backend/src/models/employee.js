const sql = require("../database.js");

const Employee = function (employee) {
    this.cedula = employee.cedula;
    this.nombres = employee.nombres;
    this.apellidos = employee.apellidos;
    this.salario = employee.salario;
    this.telefono = employee.telefono;
    this.fecha_nacimiento = employee.fecha_nacimiento;
};

Employee.create = (newEmployee, result) => {
    sql.query("INSERT INTO EMPLEADOS SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("created customer: ", { codEmployee: res.insertCod, ...newEmployee });
            result(null, { codEmployee: res.insertCod, ...newEmployee });
        }

    });
};

Employee.findById = (employeeCod, result) => {
    sql.query(`SELECT * FROM EMPLEADOS WHERE COD_EMPLEADO = ${employeeCod}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Empleado encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

Employee.getAll = result => {
    sql.query("SELECT * FROM EMPLEADOS", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("empleados: ", res);
        result(null, res);
    });
};

Employee.updateById = (cod, employee, result) => {
    sql.query(
        "UPDATE EMPLEADOS SET ? WHERE COD_EMPLEADO= ?",
        [employee, cod],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            } else {
                console.log("updated employee: ", { cod: cod, ...employee });
                result(null, { cod: cod, ...employee });
            }

        }
    );
};

Employee.remove = (cod, result) => {
    sql.query("DELETE FROM EMPLEADOS WHERE COD_EMPLEADO = ?", cod, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted employee with cod: ", cod);
        result(null, res);
    });
};

module.exports = Employee;