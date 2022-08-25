'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.EmployeeDetails.belongsTo(models.User, {
        as: 'employee',
        foreignKey: 'users_id',
      });

      models.EmployeeDetails.hasOne(models.OnRollEmployment, {
        as: 'employeeOnrollment',
        foreignKey: 'employee_details_id',
      });
      models.EmployeeDetails.hasOne(models.OffRollEmployment, {
        as: 'employeeOffrollment',
        foreignKey: 'employee_details_id',
      });

      models.EmployeeDetails.hasMany(models.EmployeeAddress, {
        as: 'addresses',
        foreignKey: 'employee_id',
      });

      // models.EmployeeDetails.hasMany(models.Documents, {
      //   as: 'documents',
      //   foreignKey: 'employee_id',
      // });
    }
  }
  EmployeeDetails.init(
    {
      education: DataTypes.STRING,
      gender: DataTypes.STRING,
      employementType: DataTypes.STRING,
      bloodGroup: DataTypes.STRING,
      emergencyContact: DataTypes.STRING,
      onRollEmployeeCode: DataTypes.STRING,
      offRollEmployeeCode: DataTypes.STRING,
      onRollEntityId: {
        type: DataTypes.INTEGER,
        field: 'onroll_entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
        allowNull: true,
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
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'users_id',
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EmployeeDetails',
      tableName: 'employee_details',
      underscored: true,
    }
  );
  return EmployeeDetails;
};
