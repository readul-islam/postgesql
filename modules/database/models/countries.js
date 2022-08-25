'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Countries.init(
    {
      name: DataTypes.STRING,
      isoAlpha2: DataTypes.STRING,
      isoAlpha3: DataTypes.STRING,
      dialingCode: DataTypes.STRING,
      capitalCity: DataTypes.STRING,
      type: DataTypes.STRING,
      flag: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Countries',
      tableName: 'countries',
      underscored: true,
    }
  );
  return Countries;
};
