"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttendanceReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.AttendanceReport.belongsTo(models.EmployeeDetails, {
        foreignKey: "employee_details_id",
        as: "employeeDetails",
      });
      // models.AttendanceReport.belongsTo(models.EntityLocations, {
      //   foreignKey: "location_id",
      //   as:"entityLocations"
        
      // });
    }
  }
  AttendanceReport.init(
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
      // locationId: {
      //   type: DataTypes.INTEGER,
      //   field: "location_id",
      //   references: {
      //     model: {
      //       tableName: "entity_locations",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      date: DataTypes.STRING,
      timeIn: DataTypes.STRING,
      timeOut: DataTypes.STRING,
      workDuration: DataTypes.STRING,
      overTime: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AttendanceReport",
      tableName: "attendance_report",
      underscored: true,
    }
  );
  return AttendanceReport;
};
