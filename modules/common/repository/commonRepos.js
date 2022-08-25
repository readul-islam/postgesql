const { State, City } = require('../../database');

const getStateListByCountryId = (requestBody) => {
  return State.findAll({
    where: {
      countryId: requestBody.countryId,
    },
  });
};

const getCityListByStateID = (requestBody) => {
  return City.findAll({
    where: {
      stateId: requestBody.stateId,
    },
  });
};

module.exports = {
  getCityListByStateID,
  getStateListByCountryId,
};
