const jwt = require("express-jwt");
const db = require("../config/db");

module.exports = authorize;
function authorize() {
  try {
    return [
      // authenticate JWT token and attach decoded token to request as req.user
      jwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),

      // attach full user record to request object
      async (req, res, next) => {
        // get user with id from token 'sub' (subject) property
        const user = await db.User.findByPk(req.user.sub);

        // check user still exists
        if (!user) return res.status(401).json({ message: "Unauthorized" });

        // authorization successful
        req.user = user.get();
        next();
      },
    ];
  } catch (error) {
    throw error;
  }
}
