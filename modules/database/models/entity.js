'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Entity.hasMany(models.VendorEmpanelment, {
        as: 'empanelment',
        foreignKey: 'entity_id',
      });

      models.Entity.hasMany(models.EntityLocations, {
        as: 'addresses',
        foreignKey: 'entity_id',
      });
      models.Entity.hasMany(models.BankAccount, {
        as: 'finances',
        foreignKey: 'entity_id',
      });

      models.Entity.hasMany(models.Documents, {
        as: 'documents',
        foreignKey: 'entity_id',
      });
    }
  }
  Entity.init(
    {
      name: DataTypes.STRING,
      cinNum: DataTypes.STRING,
      legalStatus: DataTypes.STRING,
      natureOfBusiness: DataTypes.STRING,
      email: DataTypes.STRING,
      primaryUserId: {
        type: DataTypes.INTEGER,
        field: 'primary_user_id',
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: true,
      },
      isVendor: DataTypes.BOOLEAN,
      isClient: DataTypes.BOOLEAN,
      isGroupEntity: DataTypes.BOOLEAN,
      parentEntityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Entity',
      tableName: 'entity',
    }
  );
  return Entity;
};
