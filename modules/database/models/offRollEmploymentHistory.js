'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OffrollEmploymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OffrollEmploymentHistory.init(
    {
      userId: DataTypes.INTEGER,
      offrollEmployeeId: DataTypes.INTEGER,
      designation: DataTypes.STRING,
      assignedLocationId: DataTypes.INTEGER,
      onrollEntityId: DataTypes.INTEGER,
      offrollEntityId: DataTypes.INTEGER,
      thisRoleStartDate: DataTypes.DATE,
      thisRoleEndDate: DataTypes.DATE,
      offroleJoiningDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'OffrollEmploymentHistory',
      tableName: 'offroll_employment_history',
      underscored: true,
    }
  );
  return OffrollEmploymentHistory;
};
