const mysql = require("mysql2");

// connection for the database
const db = mysql.createConnection(
  {
    host: "localhost",
    // username,
    user: "root",
    // password
    password: "rootroot",
    database: "employees",
  },
  console.log(`Connected to the employees database.`)
);

module.exports = db;
