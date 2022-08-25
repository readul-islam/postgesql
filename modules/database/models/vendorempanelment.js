'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorEmpanelment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.VendorEmpanelment.hasOne(models.VendorEmpanelmentLocations, {
        as: 'empanelmentLocation',
        foreignKey: 'vendor_empanelment_id',
      });
      models.VendorEmpanelment.belongsTo(models.Entity, {
        as: 'vendor',
        foreignKey: 'entity_id',
      });
    }
  }
  VendorEmpanelment.init(
    {
      agreementType: DataTypes.STRING,
      vendorCode: DataTypes.STRING,
      paymentTerms: DataTypes.STRING,
      empanelmentStatus: DataTypes.STRING,
      billToAddressId: DataTypes.INTEGER,
      vendorBankId: DataTypes.INTEGER,
      vendorContactUserId: DataTypes.INTEGER,
      clientEntityId: DataTypes.INTEGER,
      vendorEntityId: {
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
      modelName: 'VendorEmpanelment',
      tableName: 'vendor_empanelment',
      underscored: true,
    }
  );
  return VendorEmpanelment;
};
