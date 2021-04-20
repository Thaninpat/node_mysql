require('rootpath')();
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/user.routes')

const { PORT } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync({ alter: true }).then(() => {
//   console.log("All models were synchronized successfully.");
// });

app.use('/api/', [userRoutes])

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
