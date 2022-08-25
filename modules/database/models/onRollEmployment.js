'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnRollEmployment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OnRollEmployment.init(
    {
      userRoles: DataTypes.STRING,
      designation: DataTypes.STRING,
      joiningDate: DataTypes.DATE,
      thisRoleStartDate: DataTypes.DATE,
      companyJoiningDate: DataTypes.DATE,
      lastWorkingDate: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
      assignedOffroll: DataTypes.STRING,
      hasResigned: DataTypes.BOOLEAN,
      resignationDate: DataTypes.DATE,
      employeeCode: DataTypes.STRING,
      assignedLocationId: DataTypes.INTEGER,
      employeeSalaryId: DataTypes.INTEGER,
      onRollEntityId: {
        type: DataTypes.INTEGER,
        field: 'onroll_entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
        allowNull: false,
      },
      employeeDetailId: {
        type: DataTypes.INTEGER,
        field: 'employee_details_id',
        references: {
          model: {
            tableName: 'employee_details',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OnRollEmployment',
      tableName: 'onroll_employment',
      underscored: true,
    }
  );
  return OnRollEmployment;
};
