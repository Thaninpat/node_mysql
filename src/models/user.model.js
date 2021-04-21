module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const User = sequelize.define(
    "User",
    {
      // Model attributes are defined here
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      // TODO: Edit time zone (UTC +07:00 ICT	Indochina Time Bangkok) --> createdAt and updatedAt  

      // Other model options go here
      defaultScope: {
        // exclude hash by default
        attributes: { exclude: ["hash"] },
      },
      scopes: {
        // include hash with this scope
        withHash: { attributes: {} },
      },
    }
  );

  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

  return User;
};
