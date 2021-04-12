"user strict";
const db = require("../config/db");

//Employee object create
const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.age = user.age;
  this.password = user.password;

};

User.create = function (newUser, result) {
  db.query("INSERT INTO users SET ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function (id, result) {
  db.query("SELECT * FROM users WHERE id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = function (result) {
  db.query("SELECT * FROM users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("user : ", res);
      result(null, res);
    }
  });
};
User.update = function (id, user, result) {
  db.query(
    "UPDATE users SET username=?,email=?,age=? WHERE id = ?",
    [
      user.username,
      user.email,
      user.age,
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
User.delete = function (id, result) {
  db.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
