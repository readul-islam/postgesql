'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Contacts.belongsTo(models.User, {
        foreignKey: 'users_id',
      });
    }
  }
  Contacts.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
      isRegistered: DataTypes.BOOLEAN,
      userId: {
        type: DataTypes.INTEGER,
        field: 'users_id',
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Contacts',
      tableName: 'contacts',
    }
  );
  return Contacts;
};
