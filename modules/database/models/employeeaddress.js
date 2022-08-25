'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.EmployeeAddress.belongsTo(models.State, {
        foreignKey: 'state_id',
      });
      models.EmployeeAddress.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
    }
  }
  EmployeeAddress.init(
    {
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
      stateId: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        references: {
          model: {
            tableName: 'state',
          },
          key: 'id',
        },
        allowNull: false,
      },
      cityId: {
        type: DataTypes.INTEGER,
        field: 'city_id',
        references: {
          model: {
            tableName: 'city',
          },
          key: 'id',
        },
        allowNull: false,
      },
      pincode: DataTypes.STRING,
      landmark: DataTypes.STRING,
      addressType: DataTypes.STRING,
      employeeId: {
        type: DataTypes.INTEGER,
        field: 'employee_id',
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
      modelName: 'EmployeeAddress',
      tableName: 'employee_address',
      underscored: true,
    }
  );
  return EmployeeAddress;
};
