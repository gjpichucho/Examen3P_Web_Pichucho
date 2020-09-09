const express = require ('express');
const app= express();
var cors = require('cors');

app.use(cors());

// settings
app.set('port',process.env.PORT || 4000)

// Middlewares
app.use(express.json());


// // Add headers
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin','X-Requested-With,content-type,Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

//routes
app.get('/', (req, res) => {
    res.send('Bienvenido');
});


//app.use('/empleados',require('./routes/employees'));
require("./routes/employees.js")(app);
require("./routes/categoria.js")(app);
require("./routes/subcategoria.js")(app);

// staring the server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));  
})

