'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Designations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Designations.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      standardSalaryId: DataTypes.INTEGER,
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
      modelName: 'Designations',
      tableName: 'designations',
      underscored: true,
    }
  );
  return Designations;
};
