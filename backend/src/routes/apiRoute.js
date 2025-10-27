const { Router } = require('express');
const apiController = require('../controllers/apiController');
const apiRouter = Router();

apiRouter.post('/items', apiController.findItems);

module.exports = apiRouter;