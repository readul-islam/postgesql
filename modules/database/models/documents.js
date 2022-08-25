'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Documents.belongsTo(models.DocumentTypes, {
        foreignKey: 'document_types_id',
      });
    }
  }
  Documents.init(
    {
      documentName: DataTypes.STRING,
      documentValue: DataTypes.STRING,
      documentExpiry: DataTypes.STRING,
      documentFrontPath: DataTypes.STRING,
      documentBackPath: DataTypes.STRING,
      isMandatory: DataTypes.BOOLEAN,
      isVerified: DataTypes.BOOLEAN,
      vendorEntityId: {
        type: DataTypes.INTEGER,
        field: 'entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
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
      employeeId: {
        type: DataTypes.INTEGER,
        field: 'employee_id',
        references: {
          model: {
            tableName: 'employee_details',
          },
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Documents',
      tableName: 'documents',
      underscored: true,
    }
  );
  return Documents;
};
