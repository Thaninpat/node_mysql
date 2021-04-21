module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const FeasibilityStudySection = sequelize.define(
    "FeasibilityStudySection",
    {
      // Model attributes are defined here
      developmentTypeId: { type: DataTypes.INTEGER, allowNull: false },
      assessment1: { type: DataTypes.STRING, allowNull: false },
      assessment2: { type: DataTypes.STRING, allowNull: false },
      estimatedEffort: { type: DataTypes.STRING, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      tagetDate: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );

  // `sequelize.define` also returns the model
  console.log(
    FeasibilityStudySection === sequelize.models.FeasibilityStudySection
  ); // true

  return FeasibilityStudySection;
};
