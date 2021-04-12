"user strict";
const db = require("../config/db");

//Employee object create
const Employee = function (employee) {
  this.username = employee.username;
  this.email = employee.email;
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Employee.create = function (newEmployee, result) {
  db.query("INSERT INTO employees SET ?", newEmployee, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Employee.findById = function (id, result) {
  db.query("SELECT * FROM employees WHERE id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Employee.findAll = function (result) {
  db.query("SELECT * FROM employees", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employee : ", res);
      result(null, res);
    }
  });
};

Employee.update = function (id, employee, result) {
  db.query(
    "UPDATE employees SET username=?,email=?,first_name=?,last_name=?,updated_at=? WHERE id = ?",
    [
      employee.username,
      employee.email,
      employee.first_name,
      employee.last_name,
      new Date(),
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// User.delete = function (id, result) {
//   db.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {
//       result(null, res);
//     }
//   });
// };

module.exports = Employee;
