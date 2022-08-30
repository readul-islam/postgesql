const { VendorEmpanelmentLocations } = require("../../database");

exports.createVendorEmpanelmentLocations = (requestBody) => {
  return VendorEmpanelmentLocations.create({ ...requestBody });
};
exports.updateVendorEmpanelmentLocations = ({ locationId, ...updateInfo }) => {
  console.log(locationId);
  console.log(updateInfo);
  return VendorEmpanelmentLocations.update(updateInfo, {
    where: {
      locationId: locationId,
    },
  });
};
