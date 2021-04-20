// const config = require("../config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// const { PORT } = process.env;

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  // const { host, port, user, password, database } = config.database;
  const {
    RDS_HOSTNAME,
    RDS_PORT,
    RDS_USERNAME,
    RDS_ROOT_PASSWORD,
    RDS_DATABASE,
  } = process.env;

  const connection = await mysql.createConnection({
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    user: RDS_USERNAME,
    password: RDS_ROOT_PASSWORD,
    database: RDS_DATABASE,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${RDS_DATABASE}\`;`);
  
  var sequelize = new Sequelize(RDS_DATABASE, RDS_USERNAME, RDS_ROOT_PASSWORD, {
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "mysql",
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 60 },
  });
  // init models and add them to the exported db object
  db.User = require("../models/user.model")(sequelize);
  db.Role = require("../models/role.mode")(sequelize);
  //   Foreign Key
  db.Role.hasOne(db.User);
  db.User.belongsTo(db.Role);

  // sync all models with database

  // await sequelize.sync({ alter: true }).then(() => {

  await sequelize.sync().then(() => {
    console.log("All models were synchronized successfully.");
  });
}
