const { commonRepository } = require('../repository');

const { getCityListByStateID, getStateListByCountryId } = commonRepository;

class Common {
  async listStates(req, res) {
    try {
      const states = await getStateListByCountryId(req.query);
      return res.send(states);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async listCities(req, res) {
    try {
      const cities = await getCityListByStateID(req.query);
      return res.send(cities);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new Common();
