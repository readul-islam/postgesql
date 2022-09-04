const { VendorEmpanelmentLocations } = require("../../database");

exports.createVendorEmpanelmentLocations = (requestBody) => {
  console.log(requestBody)
  return VendorEmpanelmentLocations.create({...requestBody});
};
exports.updateVendorEmpanelmentLocations = ({ locationId, ...updateInfo }) => {
  
  return VendorEmpanelmentLocations.update(updateInfo, {
    where: {
      locationId: locationId,
    },
  });
};
