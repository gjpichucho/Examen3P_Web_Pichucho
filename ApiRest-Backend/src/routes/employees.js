
module.exports = app => {
    const employeers = require("../controllers/employeesController.js");


    app.post("/empleados", employeers.create);


    app.get("/empleados", employeers.findAll);


    app.get("/empleados/:employeeId", employeers.findOne);

    app.put("/empleados/:employeeId", employeers.update);


    app.delete("/empleados/:EmployeeId", employeers.delete);

    app.delete("/empleados", employeers.deleteAll);
};
