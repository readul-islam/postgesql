const {
  allVendorEmpanelment,
} = require("../repository/vendorEmpanelmentRepos");

class VendorEmpanelment {
  async getAllVendors(req, res) {
    try {
      const vendors = await allVendorEmpanelment(req.body);
      res.send(vendors);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new VendorEmpanelment();