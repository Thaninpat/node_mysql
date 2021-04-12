const mysql = require("mysql");
const { config } = require("dotenv");
config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  connectionLimit: 1000,
  // connectTimeout: 30 * 1000, // 1 Min
  // acquireTimeout: 30 * 1000, // 1 Min
  // timeout: 30 * 1000, // 1 Min
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // Use the connection
  console.log(`MySQL Connected : ${connection.threadId}`);
  // When done with the connection, release it.
  // connection.query("CREATE DATABASE IF NOT EXISTS main");
  // connection.query("USE main;");
  // connection.query(
  //   "CREATE TABLE IF NOT EXISTS employee(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), first_name varchar(45), last_name varchar(45), created_at date, updated_at date, PRIMARY KEY(id));",
  //   function (error, result, fields) {
  //     console.log(result);
  //   }
  // );
  connection.release();
  // Handle error after the release.
  if (err) throw error;
});
module.exports = pool;
