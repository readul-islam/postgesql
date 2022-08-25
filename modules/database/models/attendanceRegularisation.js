"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttendanceRegularisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.AttendanceRegularisation.belongsTo(models.EmployeeDetails, {
        foreignKey: "employee_details_id",
        as: "employeeDetails",
      });
      // models.AttendanceRegularisation.belongsTo(models.EntityLocations, {
      //   foreignKey: "location_id",
      //   as:"entityLocations"
        
      // });
    }
  }
  AttendanceRegularisation.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        field: "employee_details_id",
        references: {
          model: {
            tableName: "employee_details",
          },
          key: "id",
        },
        allowNull: false,
      },
      name:DataTypes.STRING,
      desiganation:DataTypes.STRING,
      date: DataTypes.STRING,
      timeIn: DataTypes.STRING,
      timeOut: DataTypes.STRING,
      workDuration: DataTypes.STRING,
      overTime: DataTypes.STRING,
      reson: DataTypes.STRING,
      action: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AttendanceRegularisation",
      tableName: "attendance_regularisation",
      underscored: true,
    }
  );
  return AttendanceRegularisation;
};
