const { VendorEmpanelmentLocations } = require('../../database');

exports.createVendorEmpanelmentLocations = (requestBody) => {
  return VendorEmpanelmentLocations.create({ ...requestBody });
};
