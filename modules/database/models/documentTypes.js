'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.DocumentTypes.hasMany(models.Documents, {
        as: 'documents',
        foreignKey: 'document_types_id',
      });

      models.DocumentTypes.hasMany(models.CompanyDocuments, {
        as: 'companyDocuments',
        foreignKey: 'document_types_id',
      });
    }
  }
  DocumentTypes.init(
    {
      documentName: DataTypes.STRING,
      documentKey: DataTypes.STRING,
      documentHasExpiry: DataTypes.BOOLEAN,
      documentHasBack: DataTypes.BOOLEAN,
      validCountryId: DataTypes.BOOLEAN,
      isVendor: DataTypes.BOOLEAN,
      isCompany: DataTypes.BOOLEAN,
      isEmployee: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'DocumentTypes',
      tableName: 'document_types',
      underscored: true,
    }
  );
  return DocumentTypes;
};
