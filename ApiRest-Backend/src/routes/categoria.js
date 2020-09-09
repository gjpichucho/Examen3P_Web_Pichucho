module.exports = app => {
    const categoria = require("../controllers/categoria.Controller.js");


    


    app.get("/categoria", categoria.findAll);
    // app.post("/empleados", employeers.create);

    // app.get("/empleados/:employeeId", employeers.findOne);

    // app.put("/empleados/:employeeId", employeers.update);


    // app.delete("/empleados/:EmployeeId", employeers.delete);

    
};
