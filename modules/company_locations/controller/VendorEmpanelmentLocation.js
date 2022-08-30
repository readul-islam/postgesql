const {
  getVendorEmpanelmentLocations,
  createVendorEmpanelmentLocations,
  updateVendorEmpanelmentLocations,
} = require('../repository/vendorEmpanelmentLocationRepo');

class VendorEmpanelmentLocation {
  async getVendorEmpanelmentLocation(req, res) {
    try {
      const getvendorEmpanement_location = await getVendorEmpanelmentLocations(
        req.query
      );
      return res.send(getvendorEmpanement_location);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async newVendorEmpanelmentLocation(req, res) {
    try {
      const vendorEmplement_location = await createVendorEmpanelmentLocations(
        req.body
      );
      return res.send(vendorEmplement_location);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async updateVendorEmpanelmentLocation(req, res) {
    try {
      const vendorEmplement_location = await updateVendorEmpanelmentLocations(
        req.body
      );
      return res.send(vendorEmplement_location);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new VendorEmpanelmentLocation();
