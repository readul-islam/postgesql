'use strict';
const { Model } = require('sequelize');
const {Entity} = require('./entity');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Department.belongsTo(models.Entity, {
        foreignKey : "entity_id",
      });
    }
  }
  Department.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
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
      modelName: 'Department',
      tableName: 'department',
      underscored: true,
    }
  );
  return Department;
};
