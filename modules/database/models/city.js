'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'city',
      underscored: true,
    }
  );
  return City;
};
