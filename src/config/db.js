const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const {
    MYSQL_HOSTNAME,
    MYSQL_PORT,
    MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE,
  } = process.env;

  const connection = await mysql.createConnection({
    host: MYSQL_HOSTNAME,
    port: MYSQL_PORT,
    user: MYSQL_USERNAME,
    password: MYSQL_ROOT_PASSWORD,
    database: MYSQL_DATABASE,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\`;`);

  var sequelize = new Sequelize(
    MYSQL_DATABASE,
    MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD,
    {
      host: MYSQL_HOSTNAME,
      port: MYSQL_PORT,
      logging: console.log,
      maxConcurrentQueries: 100,
      dialect: "mysql",
      // For Amazon RDS Server.
      // dialectOptions: {
      //   ssl: "Amazon RDS",
      // },
      pool: { maxConnections: 5, maxIdleTime: 60 },
    }
  );
  // init models and add them to the exported db object
  db.User = require("../models/user.model")(sequelize);
  db.Role = require("../models/role.model")(sequelize);
  db.Client = require("../models/client.model")(sequelize);
  db.RequirementDetailSection = require("../models/requirementDetilSection.model")(
    sequelize
  );
  db.FeasibilityStudySection = require("../models/feasibilityStudySection.model")(
    sequelize
  );
  db.Reqiurement = require("../models/requirement.model")(sequelize);
  db.uat = require("../models/uat.model")(sequelize);

  //   Foreign Key
  db.Role.hasOne(db.User);
  db.User.hasOne(db.RequirementDetailSection);
  db.User.hasOne(db.FeasibilityStudySection);
  db.User.hasOne(db.Reqiurement);
  db.FeasibilityStudySection.hasOne(db.Reqiurement);
  db.User.hasOne(db.uat);

  db.User.belongsTo(db.Role);
  db.RequirementDetailSection.belongsTo(db.User);
  db.FeasibilityStudySection.belongsTo(db.User);
  db.Reqiurement.belongsTo(db.User);
  db.Reqiurement.belongsTo(db.FeasibilityStudySection);
  db.uat.belongsTo(db.User);

  // sync all models with database

  // await sequelize.sync({ alter: true }).then(() => {

  await sequelize.sync().then(() => {
    console.log("All models were synchronized successfully.");
  });
}
