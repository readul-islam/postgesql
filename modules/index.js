const express = require('express');
const commonModule = require('./common');
const contactsModule = require('./contacts');
const companyLocationModule = require('./company_locations');


const apiRoutes = express.Router();

// common modules for backend :- start
apiRoutes.use('/common', commonModule.router);
apiRoutes.use('/vendor', contactsModule.router);
// end
apiRoutes.use('/company-location', companyLocationModule.router);


module.exports = apiRoutes;
