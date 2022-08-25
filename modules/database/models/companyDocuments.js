'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CompanyDocuments.belongsTo(models.DocumentTypes, {
        foreignKey: 'document_types_id',
      });
    }
  }
  CompanyDocuments.init(
    {
      weightSequenceVendor: DataTypes.STRING,
      weightSequenceEmployee: DataTypes.STRING,
      isVendor: DataTypes.BOOLEAN,
      isCompany: DataTypes.BOOLEAN,
      isEmployee: DataTypes.BOOLEAN,
      isMandatory: DataTypes.BOOLEAN,
      countryId: {
        type: DataTypes.INTEGER,
        field: 'countries_id',
        references: {
          model: {
            tableName: 'countries',
          },
          key: 'id',
        },
        allowNull: false,
      },
      documentTypeId: {
        type: DataTypes.INTEGER,
        field: 'document_types_id',
        references: {
          model: {
            tableName: 'document_types',
          },
          key: 'id',
        },
      },
      companyId: {
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
      modelName: 'CompanyDocuments',
      tableName: 'company_documents',
      underscored: true,
    }
  );
  return CompanyDocuments;
};
