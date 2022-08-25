'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OffRollEmployment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OffRollEmployment.init(
    {
      userRoles: DataTypes.STRING,
      designation: DataTypes.STRING,
      joiningDate: DataTypes.DATE,
      thisRoleStartDate: DataTypes.DATE,
      lastWorkingDate: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
      assignedLocationId: DataTypes.INTEGER,
      employeeCode: DataTypes.STRING,
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
      offRollEntityId: {
        type: DataTypes.INTEGER,
        field: 'offroll_entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
        allowNull: false,
      },
      employeeSalaryId: DataTypes.INTEGER,
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
      modelName: 'OffRollEmployment',
      tableName: 'offroll_employment',
      underscored: true,
    }
  );
  return OffRollEmployment;
};
