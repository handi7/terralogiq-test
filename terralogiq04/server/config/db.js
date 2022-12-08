const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "dummy_db",
  port: 3306,
  multipleStatements: true,
});

db.connect((error) => {
  if (error) return console.error(`error: ${error.message}`);
  console.log("Connected to Mysql database.");
});

module.exports = db.promise();
