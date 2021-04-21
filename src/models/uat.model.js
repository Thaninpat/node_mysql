module.exports = (sequelize) => {
    const { DataTypes } = require("sequelize");
    const uat = sequelize.define(
      "uat",
      {
        // Model attributes are defined here
        url: { type: DataTypes.STRING, allowNull: false },
        startDate: { type: DataTypes.DATE, allowNull: false },
        tagetDate: { type: DataTypes.DATE, allowNull: false },
      },
      {}
    );
  
    // `sequelize.define` also returns the model
    console.log(
      uat === sequelize.models.uat
    ); // true
  
    return uat;
  };
  