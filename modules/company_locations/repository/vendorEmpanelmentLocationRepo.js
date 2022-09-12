const { VendorEmpanelmentLocations,Contacts,VendorEmpanelment,Entity } = require("../../database");

exports.createVendorEmpanelmentLocations = (requestBody) => {
  console.log(requestBody)
  return VendorEmpanelmentLocations.create({...requestBody});
};




exports.getVendorEmpanelmentLocations = (requestQuery) => {
    console.log(requestQuery);
  const { offset, limit } = requestQuery;
  console.log(limit,offset);
 
  return VendorEmpanelmentLocations.findAndCountAll({
    include: [
      { model: Contacts, as: "contacts" },
      { model: VendorEmpanelment, as: "vendorEmpanelment",include: [{ model: Entity, as: "vendor" }] },
    ],
    limit: limit,
    offset: (offset - 1) * limit,
    order: ['id'],
  });
};



exports.updateVendorEmpanelmentLocations = ({ locationId, ...updateInfo }) => {
  
  return VendorEmpanelmentLocations.update(updateInfo, {
    where: {
      locationId: locationId,
    },
  });
};
