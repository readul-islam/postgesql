const { EntityLocations } = require('../../database');

exports.createEntityLocation = (requestBody) => {
  return EntityLocations.create({ ...requestBody });
};

exports.getEntityLocation = (requestBody) => {
  return EntityLocations.findAll({
    // include: { all: true, nested: true }
  });
};
exports.getEntityLocationById = (requestBody) => {
  console.log(requestBody);

  return EntityLocations.findOne({
    where: {
      id: requestBody.locationId,
    },
    // include: { all: true, nested: true }
  });
};
