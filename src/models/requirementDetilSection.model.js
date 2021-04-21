module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const RequirementDetailSection = sequelize.define(
    "RequirementDetailSection",
    {
      detail: { type: DataTypes.STRING, allowNull: false },
      fileId: { type: DataTypes.INTEGER, allowNull: true },
      startDate: { type: DataTypes.DATE, allowNull: false },
      tagetDate: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  console.log(
    RequirementDetailSection === sequelize.models.RequirementDetailSection
  ); // true

  return RequirementDetailSection;
};
