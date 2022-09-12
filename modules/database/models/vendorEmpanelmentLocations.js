"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VendorEmpanelmentLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.VendorEmpanelmentLocations.belongsTo(models.VendorEmpanelment, {
        foreignKey: "vendor_empanelment_id",
        as: "vendorEmpanelment",
      });
      models.VendorEmpanelmentLocations.belongsTo(models.Contacts, {
        foreignKey: "contacts_id",
        as: "contacts",
      });
    }
  }
  VendorEmpanelmentLocations.init(
    {
      billToAddressId: DataTypes.STRING,
      locationClientManagerId: DataTypes.INTEGER,
      locationVendorManagerId: {
        type: DataTypes.INTEGER,
        field: "contacts_id",
        references: {
          model: {
            tableName: "contacts",
          },
          key: "id",
        },
        allowNull: true,
      },
      locationId: {
        type: DataTypes.INTEGER,
        field: "location_id",
        references: {
          model: {
            tableName: "entity_locations",
          },
          key: "id",
        },
        allowNull: false,
      },
      VendorEmpanelmentId: {
        type: DataTypes.INTEGER,
        field: "vendor_empanelment_id",
        references: {
          model: {
            tableName: "vendor_empanelment",
          },
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "VendorEmpanelmentLocations",
      tableName: "vendor_empanelment_locations",
      underscored: true,
    }
  );
  return VendorEmpanelmentLocations;
};
