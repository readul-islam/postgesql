const {
  EntityLocations,
  Entity,
  City,
  State,
  VendorEmpanelment,
  VendorEmpanelmentLocations,
} = require("../../database");

exports.createEntityLocation = (requestBody) => {
  return EntityLocations.create({ ...requestBody });
};

exports.getEntityLocation = (requestBody) => {
  return EntityLocations.findAll({
    include: [
      { model: City, as: "city" },
      { model: State, as: "state" },
      {
        model: VendorEmpanelmentLocations,
        as: "empanedledVendor",

        include: [
          {
            model: VendorEmpanelment,
            as: "vendorEmpanelment",
            include: [{ model: Entity, as: "vendor" }],
          },
        ],
      },
    ],
  });
};
exports.getEntityLocationById = (requestBody) => {
  return EntityLocations.findOne({
    where: {
      id: requestBody.locationId,
    },
    include: [
      { model: City, as: "city" },
      { model: State, as: "state" },
    ],
  });
};

exports.updateEntityLocation = ({ id, ...updateInfo }) => {
  return EntityLocations.update(updateInfo, {
    where: {
      id: id,
    },
  });
};
