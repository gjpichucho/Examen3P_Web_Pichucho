const Employee = require('../models/employee.js');


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Conteniedo no puede estar vacio!"
        });
    }

    const employee = new Employee({
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        salario: req.body.salario,
        telefono: req.body.telefono,
        fecha_nacimiento: req.body.fecha_nacimiento,
    });

    Employee.create(employee, (err, data) => {
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

exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
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


exports.findOne = (req, res) => {
    Employee.findById(req.params.employeeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.employeeId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Employee with id " + req.params.employeeId
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Update a Employee identified by the EmployeeId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Employee.updateById(
        req.params.employeeId,
        new Employee(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Employee with id ${req.params.employeeId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Employee with id " + req.params.employeeId
                    });
                }
            } else res.send(data);
        }
    );
};


exports.delete = (req, res) => {
    Employee.remove(req.params.EmployeeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.EmployeeId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Employee with id " + req.params.EmployeeId
                });
            }
        } else res.send({ message: `Employee was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Employee.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Employees."
            });
        else res.send({ message: `All Employees were deleted successfully!` });
    });
};
