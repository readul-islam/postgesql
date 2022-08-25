'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EntityLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.EntityLocations.belongsTo(models.Entity, {
        foreignKey: 'entity_id',
      });

      models.EntityLocations.belongsTo(models.Contacts, {
        foreignKey: 'contacts_id',
        as: 'contacts',
      });
      models.EntityLocations.belongsTo(models.State, {
        foreignKey: 'state_id',
        as: 'state',
      });
      models.EntityLocations.belongsTo(models.City, {
        foreignKey: 'city_id',
        as: 'city',
      });

      models.EntityLocations.hasMany(models.VendorEmpanelmentLocations, {
        foreignKey: 'location_id',
        as: 'empanedledVendor',
      });
    }
  }
  EntityLocations.init(
    {
      name: DataTypes.STRING,
      isHQ: {
        type: DataTypes.BOOLEAN,
        field: 'is_hq',
      },
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
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
      countryId: DataTypes.STRING,

      pincode: DataTypes.STRING,
      telephone: DataTypes.STRING,
      legalStatus: DataTypes.STRING,
      tinNum: DataTypes.STRING,
      gstNum: DataTypes.STRING,
      designationContact: DataTypes.STRING,
      primaryContactId: {
        type: DataTypes.INTEGER,
        field: 'contacts_id',
        references: {
          model: {
            tableName: 'contacts',
          },
          key: 'id',
        },
        allowNull: false,
      },
      entityId: {
        type: DataTypes.INTEGER,
        field: 'entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EntityLocations',
      tableName: 'entity_locations',
      underscored: true,
    }
  );
  return EntityLocations;
};
