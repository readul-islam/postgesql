const express = require('express');
const commonModule = require('./common');
const companyLocationModule = require('./company_locations');

const apiRoutes = express.Router();

// common modules for backend :- start
apiRoutes.use('/common', commonModule.router);
// end
apiRoutes.use('/company-location', companyLocationModule.router);

module.exports = apiRoutes;
