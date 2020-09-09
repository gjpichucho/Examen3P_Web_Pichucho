module.exports = app => {
    const subcategoria = require("../controllers/subcategoria.Controller.js");


     app.post("/subcategoria", subcategoria.create);


    app.get("/subcategoria", subcategoria.findAll);


     app.get("/subcategoria/:categCod", subcategoria.findOne);
     app.get("/subcategoria/sub/:subCategCod", subcategoria.findOne1);

    // app.put("/empleados/:employeeId", employeers.update);


     app.delete("/subcategoria/:subCod", subcategoria.delete);

};