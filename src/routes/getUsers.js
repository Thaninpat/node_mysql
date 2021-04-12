const conpooln = require("../config/db");

const getUsers = () =>
  new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users", (err, results) => {
      if (err) console.error(err);
      console.log("User Query Results: ", results);
      resolve({
        status: 200,
        results,
      });
      pool.end((err) => {
        if (err) console.error(err);
      });
    });
  });

module.exports = getUsers;
