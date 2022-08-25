'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BankAccount.belongsTo(models.Entity, {
        foreignKey: 'entity_id',
      });
    }
  }
  BankAccount.init(
    {
      accountHolderName: DataTypes.STRING,
      accountNumber: DataTypes.STRING,
      ifscCode: DataTypes.STRING,
      bankName: DataTypes.STRING,
      accountType: DataTypes.STRING,
      branchName: DataTypes.STRING,
      cancelledChequePath: DataTypes.STRING,
      swiftCode: DataTypes.STRING,
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
      modelName: 'BankAccount',
      tableName: 'bank_account',
      underscored: true,
    }
  );
  return BankAccount;
};
