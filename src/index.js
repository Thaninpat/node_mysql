const express = require("express");
const { config } = require("dotenv");
config();
const PORT = process.env.PORT || 8080;
// Router
const userRoutes = require('./routes/user.routes')
const employeeRoutes = require('./routes/employee.routes')

var app = express();
// Config Middleware
app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "ejs"); // configure template engine
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// เรียกใช้งาน indexRouter
app.get('/', (req, res) => {
    res.send("Hello World");
  });
// app.use("/user", userRouter);
// app.use("/api", [userApi]);

// using as middleware
app.use('/api/v1/', [userRoutes,employeeRoutes])

// ส่วนจัดการ error
app.get("*", function (req, res, next) {
  res.status(404);
  res.render("404.ejs", {
    title: "Page Not Found",
  });
});

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
