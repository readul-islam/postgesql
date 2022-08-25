'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentVerification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DocumentVerification.init(
    {
      documentId: DataTypes.INTEGER,
      verificationStatus: DataTypes.STRING,
      verificationCertificatePath: DataTypes.STRING,
      verifiedBy: DataTypes.STRING,
      verifiedOn: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'DocumentVerification',
      tableName: 'document_verification',
      underscored: true,
    }
  );
  return DocumentVerification;
};
