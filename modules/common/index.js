const express = require('express');
const repository = require('./repository');
const CommonController = require('./controller/Common');

const router = express.Router();

const commonRoutes = express.Router();
commonRoutes.get('/state', CommonController.listStates);
commonRoutes.get('/city', CommonController.listCities);

router.use('/common-routes', commonRoutes);

module.exports = {
  router,
  repository,
};
