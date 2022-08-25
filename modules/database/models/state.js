'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  State.init(
    {
      name: DataTypes.STRING,
      countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        references: {
          model: {
            tableName: 'countries',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'State',
      tableName: 'state',
      underscored: true,
    }
  );
  return State;
};
