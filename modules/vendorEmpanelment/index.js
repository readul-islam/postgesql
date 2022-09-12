const express = require("express");
const repository = require("./repository");
const vendorController = require("./controller/VendorEmpanelment");

const router = express.Router();

const VendorEmpanelmentRoutes = express.Router();
VendorEmpanelmentRoutes.get("/", vendorController.getAllVendors);

router.use("/vendor", VendorEmpanelmentRoutes);

module.exports = {
  router,
  repository,
};