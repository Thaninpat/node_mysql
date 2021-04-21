module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const Role = sequelize.define(
    "Role",
    {
      // Model attributes are defined here
      roleName: { type: DataTypes.STRING, allowNull: false },
    },
    {
      // Other model options go here
    }
  );
  console.log(Role === sequelize.models.Role); // true

  return Role;
};
