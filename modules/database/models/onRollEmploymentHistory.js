'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnrollEmploymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OnrollEmploymentHistory.init(
    {
      userId: DataTypes.INTEGER,
      onrollEmployeeId: DataTypes.INTEGER,
      onrollEntityId: DataTypes.INTEGER,
      designation: DataTypes.STRING,
      assignedLocationId: DataTypes.INTEGER,
      thisRoleStartDate: DataTypes.DATE,
      thisRoleEndDate: DataTypes.DATE,
      companyJoiningDate: DataTypes.DATE,
      assignedOffroll: DataTypes.STRING,
      hasResigned: DataTypes.BOOLEAN,
      resignationDate: DataTypes.DATE,
      lastWorkingDay: DataTypes.STRING,
      addedOn: DataTypes.STRING,
      employeeSalaryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OnrollEmploymentHistory',
      tableName: 'onroll_employment_history',
      underscored: true,
    }
  );
  return OnrollEmploymentHistory;
};
