const express = require("express");
const repository = require("./repository");
const locationController = require("./controller/EntityLocation");
const vendorEmpanelmentLocationController = require("./controller/VendorEmpanelmentLocation");

const router = express.Router();

const locationRoutes = express.Router();
locationRoutes.get("/list", locationController.getEntityLocations);
locationRoutes.get("/", locationController.getLocationById);
locationRoutes.post("/add", locationController.createEntityLocation);
locationRoutes.patch("/update", locationController.updateEntityLocation);

router.use("/location", locationRoutes);

const vendorEmpanelmentLocationRoutes = express.Router();
vendorEmpanelmentLocationRoutes.post(
  "/add",
  vendorEmpanelmentLocationController.newVendorEmpanelmentLocation
);
vendorEmpanelmentLocationRoutes.get(
  "/",
  vendorEmpanelmentLocationController.getVendorEmpanelmentLocation
);
vendorEmpanelmentLocationRoutes.patch(
  "/update",
  vendorEmpanelmentLocationController.updateVendorEmpanelmentLocation
);
router.use("/vendorEmpanelmentLocations", vendorEmpanelmentLocationRoutes);

module.exports = {
  router,
  repository,
};
