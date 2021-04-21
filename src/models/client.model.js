module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const Client = sequelize.define(
    "Client",
    {
      clientName: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  console.log(Client === sequelize.models.Client); // true

  return Client;
};
