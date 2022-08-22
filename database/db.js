// const mysql = require("mysql")
const { Sequelize } = require('sequelize');


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'healthackthon'
})



connection.connect(function(err)  {
  if (err) console.log("error in ",err.message)
})


module.exports = connection