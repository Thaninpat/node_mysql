module.exports = (sequelize) => {
    const { DataTypes } = require("sequelize");
    const Requirement = sequelize.define(
      "Requirement",
      {
        // Model attributes are defined here
        summary: { type: DataTypes.STRING, allowNull: false },
        screenLayoutId: { type: DataTypes.INTEGER, allowNull: true },
        startDate: { type: DataTypes.DATE, allowNull: false },
        tagetDate: { type: DataTypes.DATE, allowNull: false },
      },
      {}
    );
  
    // `sequelize.define` also returns the model
    console.log(
      Requirement === sequelize.models.Requirement
    ); // true
  
    return Requirement;
  };
  