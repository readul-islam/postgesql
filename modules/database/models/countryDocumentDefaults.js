'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryDocumentDefaults extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CountryDocumentDefaults.init(
    {
      weightSequenceVendor: DataTypes.STRING,
      weightSequenceEmployee: DataTypes.STRING,
      countryId: DataTypes.BOOLEAN,
      isVendor: DataTypes.BOOLEAN,
      isCompany: DataTypes.BOOLEAN,
      isEmployee: DataTypes.BOOLEAN,
      isMandatory: DataTypes.BOOLEAN,
      documentTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CountryDocumentDefaults',
      tableName: 'country_document_defaults',
      underscored: true,
    }
  );
  return CountryDocumentDefaults;
};
