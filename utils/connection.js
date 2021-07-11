
const mysqlconfig = require('../config/config');

const mysql = require('mysql2');

const connection = mysql.createConnection(mysqlconfig);
  connection.connect((error) =>{
    if(error){
      console.error(error);
      process.exit()
    }else{
      console.log('base de datos conectada correctamente');
    }
  });

  module.exports = connection;
  