'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Contacts, {
        as: 'contact',
        foreignKey: 'users_id',
      });
      models.User.hasOne(models.EmployeeDetails, {
        as: 'employee',
        foreignKey: 'users_id',
      });
      models.User.hasOne(models.Entity, {
        as: 'company',
        foreignKey: 'primary_user_id',
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: {
        type: DataTypes.STRING,
        nullable: true,
      },
      token: DataTypes.STRING,
      userType: {
        type: DataTypes.ENUM('super_admin', 'user', 'vendor', 'employee'),
      },
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
