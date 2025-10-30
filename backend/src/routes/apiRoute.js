const { Router } = require('express');
const apiController = require('../controllers/apiController');
const {validate} = require('../middleware/validate');
const apiRouter = Router();

apiRouter.post('/items', validate, apiController.findItems);

module.exports = apiRouter;