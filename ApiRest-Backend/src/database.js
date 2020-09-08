const mysql= require('mysql');

const mysqlConection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'galito.97',
    database: 'crudphp'
})

mysqlConection.connect(function (err){
    if(err){
        console.log(err);
        return
    }else{
        console.log('Db is connected')
    }
});

module.exports=mysqlConection