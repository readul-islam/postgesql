const express = require('express');
const repository = require('./repository');
const locationController = require('./controller/EntityLocation');
const vendorEmpanelmentLocationController = require('./controller/VendorEmpanelmentLocation');

const router = express.Router();

const locationRoutes = express.Router();
locationRoutes.get('/', locationController.getEntityLocations);
locationRoutes.get('/locationById', locationController.getLocationById);
locationRoutes.post('/add', locationController.createEntityLocation);

router.use('/location', locationRoutes);

const vendorEmpanelmentLocationRoutes = express.Router();
vendorEmpanelmentLocationRoutes.post(
  '/add',
  vendorEmpanelmentLocationController.newVendorEmpanelmentLocation
);
router.use('/vendorEmpanelmentLocations', vendorEmpanelmentLocationRoutes);

module.exports = {
  router,
  repository,
};
