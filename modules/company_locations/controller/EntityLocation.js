// const { entityLocatonRepository } = require('../repository');
const { getEntityLocation, createEntityLocation, getEntityLocationById } = require('../repository/entityLocationRepos');


class Location {
  async getEntityLocations(req, res) {
    try {
      const locations = await getEntityLocation(req.query);
      return res.send(locations);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async createEntityLocation(req, res) {
    try {
      const newLocation = await createEntityLocation(req.body);
      return res.send(newLocation);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async getLocationById(req, res) {
    try {
     
      const location = await getEntityLocationById(req.query);
      return res.send(location);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
} 

module.exports = new Location();
