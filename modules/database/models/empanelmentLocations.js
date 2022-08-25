'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmpanelmentLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmpanelmentLocations.init(
    {
      empanelementId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'EmpanelmentLocations',
      tableName: 'empanelment_locations',
    }
  );
  return EmpanelmentLocations;
};
